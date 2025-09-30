// services/verification.ts
import { Redis } from 'ioredis';

const redis = new Redis({
  // Конфигурация подключения к Redis
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
});

export class VerificationService {
  private static readonly CODE_TTL = 300; // 5 минут
  private static readonly MAX_ATTEMPTS = 3;
  private static readonly PREFIX = 'phone_verify:';


  static async generateCode(phone: string): Promise<string> {
    // Генерируем 6-значный код
    const code = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join('');
    const key = this.PREFIX + phone;

    // Сохраняем код и метаданные в Redis
    await redis.multi()
      .hset(key, {
        code,
        attempts: 0,
        timestamp: Date.now()
      })
      .expire(key, this.CODE_TTL)
      .exec();

    return code;
  }

  static async verifyCode(phone: string, code: string): Promise<{
    isValid: boolean;
    error?: string;
  }> {
    const key = this.PREFIX + phone;
    const verification = await redis.hgetall(key);
    console.log(verification);
    // Проверяем существование кода
    if (!verification.code) {
      return {
        isValid: false,
        error: 'CODE_EXPIRED'
      };
    }

    // Проверяем количество попыток
    const attempts = parseInt(verification.attempts);
    if (attempts >= this.MAX_ATTEMPTS) {
      await redis.del(key);
      return {
        isValid: false,
        error: 'MAX_ATTEMPTS_EXCEEDED'
      };
    }

    // Увеличиваем счетчик попыток
    await redis.hincrby(key, 'attempts', 1);

    // Проверяем код
    if (verification.code === code) {
      await redis.del(key);
      return { isValid: true };
    }

    return {
      isValid: false,
      error: 'INVALID_CODE'
    };
  }

  static async getAttemptsLeft(phone: string): Promise<number> {
    const key = this.PREFIX + phone;
    const attempts = await redis.hget(key, 'attempts');
    return attempts ? this.MAX_ATTEMPTS - parseInt(attempts) : 0;
  }

  static async getTimeToExpiry(phone: string): Promise<number> {
    const key = this.PREFIX + phone;
    return await redis.ttl(key);
  }

  // Очистка кода (например, при отмене операции)
  static async clearCode(phone: string): Promise<void> {
    await redis.del(this.PREFIX + phone);
  }
}
