const Redis = require('ioredis');

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
});

async function test() {
  const key = 'test_redis';
  await redis.set(key, 'ok', 'EX', 60);
  const val = await redis.get(key);
  console.log('Redis test value:', val); // должно вывести "ok"
  const ttl = await redis.ttl(key);
  console.log('TTL:', ttl);
  process.exit();
}

test();
