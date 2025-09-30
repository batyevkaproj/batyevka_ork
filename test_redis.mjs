import { VerificationService } from './services/verification.js'; // <- если используешь TS, лучше ./services/verification.ts через ts-node

async function test() {
  const phone = '380991112233';

  const code = await VerificationService.generateCode(phone);
  console.log('Generated code:', code);

  const ttl = await VerificationService.getTimeToExpiry(phone);
  console.log('TTL:', ttl);

  const attempts = await VerificationService.getAttemptsLeft(phone);
  console.log('Attempts left:', attempts);
}

test();
