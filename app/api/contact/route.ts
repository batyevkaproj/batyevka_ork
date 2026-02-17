import { NextResponse } from 'next/server';
import axios from 'axios';

// Binotel Credentials
const BINOTEL_CONFIG = {
  key: "a6c58b-2931f98",
  secret: "6dc649-cb1b68-088098-8a5e9e-5ae15ad5",
  widgetHash: "b6mp5v4e5i6yxaozc0fs",
  url: "https://api.binotel.com/api/4.0/getcall/request-call.json"
};

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const PHP_SCRIPT_URL = "https://servdesk.batyevka.net/sblog/contact_br.php";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone } = body;

    // --- STRICT PHONE FILTER ---
    // Matches: +380XXXXXXXXX or 0XXXXXXXXX (total 10 digits starting with 0)
    const phoneRegex = /^(\+380|0)\d{9}$/;
    
    // Remove spaces/dashes for validation check
    const cleanPhoneForValidation = phone ? phone.replace(/[\s-]/g, '') : '';

    if (!phoneRegex.test(cleanPhoneForValidation)) {
      console.warn('Next.js: Invalid phone or Spam detected. Blocked:', phone);
      // Return 200 so the spammer/frontend thinks it worked, but stop here.
      return NextResponse.json({ message: 'Success' }, { status: 200 });
    }
    // ----------------------------

    console.log('Next.js: Processing valid request for:', { name, phone });

    // 1. TRIGGER BINOTEL GETCALL
    // Strip everything except numbers for Binotel API
    const binotelPhone = cleanPhoneForValidation.replace(/\D/g, ''); 
    
    try {
      console.log('Next.js: Triggering Binotel call...');
      await axios.post(BINOTEL_CONFIG.url, {
        key: BINOTEL_CONFIG.key,
        secret: BINOTEL_CONFIG.secret,
        widgetHash: BINOTEL_CONFIG.widgetHash,
        externalNumber: binotelPhone,
        utmSource: "website_contact_form",
        utmMedium: "nextjs_api"
      });
      console.log('Next.js: Binotel request successful.');
    } catch (binotelError: any) {
      console.error('Next.js: Binotel API Error:', binotelError.response?.data || binotelError.message);
    }

    // 2. SEND TELEGRAM NOTIFICATION
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const msg = `<b>🔥 Binotel Call Triggered!</b>\n\n<b>Name:</b> ${name}\n<b>Phone:</b> ${phone}`;
      axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text: msg,
        parse_mode: 'HTML'
      }).catch(e => console.error("Telegram Error", e.message));
    }

    // 3. SEND TO PHP SCRIPT
    fetch(PHP_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone }),
    }).catch(e => console.error("PHP Script Error", e.message));

    return NextResponse.json({ message: 'Заявка прийнята. Очікуйте дзвінка.' }, { status: 200 });

  } catch (error: any) {
    console.error('Next.js: General Error:', error.message);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
