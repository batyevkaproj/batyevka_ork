import { NextResponse } from 'next/server';
import axios from 'axios'; // Import axios
// add refferer page argument 1.

// Define your PHP_SCRIPT_URL, perhaps from an environment variable
const PHP_SCRIPT_URL = process.env.PHP_CONTACT_FORM_ENDPOINT || 'https://servdesk.batyevka.net/sblog/autumn/contact_endpoint.php';
const FETCH_TIMEOUT = 10000; // 10 seconds timeout, adjust as needed

// Telegram Bot Credentials from environment variables
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: Request) {
  let clientData;
  try {
    clientData = await request.json();
    const { name, phone } = clientData;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Ім\'я та телефон обов\'язкові для заповнення.' }, { status: 400 });
    }

    console.log('Next.js: Отримано від клієнта:', { name, phone });

    // --- Send to Telegram ---
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const telegramText = `<b>Нова заявка!</b>\n\n<b>Ім'я:</b> ${name}\n<b>Телефон:</b> ${phone}`;
      try {
        console.log('Next.js: Спроба відправки повідомлення в Telegram...');
        await axios.post(
          `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramText,
            parse_mode: 'HTML'
          }
        );
        console.log('Next.js: Повідомлення успішно відправлено в Telegram.');
      } catch (telegramError: any) {
        console.error('Next.js: Помилка відправки повідомлення в Telegram:');
        if (telegramError.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Telegram API Error Data:', telegramError.response.data);
          console.error('Telegram API Error Status:', telegramError.response.status);
          console.error('Telegram API Error Headers:', telegramError.response.headers);
        } else if (telegramError.request) {
          // The request was made but no response was received
          console.error('Telegram API No Response:', telegramError.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Telegram API Error Message:', telegramError.message);
        }
        // We log the error but continue to the PHP script
      }
    } else {
      console.warn('Next.js: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID не налаштовано. Повідомлення в Telegram не відправлено.');
    }

    let phpResponse;
    let responseText = '';

    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
      console.warn(`Next.js: Запит до ${PHP_SCRIPT_URL} перевищив час очікування (${FETCH_TIMEOUT}ms) і був перерваний.`);
      controller.abort();
    }, FETCH_TIMEOUT);

    try {
      console.log(`Next.js: Надсилання даних на PHP скрипт за адресою ${PHP_SCRIPT_URL}`);
      phpResponse = await fetch(PHP_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, phone: phone }),
        signal: signal, // Pass the abort signal to fetch
      });

      // Clear the timeout if the fetch completes (successfully or with an error response)
      clearTimeout(timeoutId);

      responseText = await phpResponse.text(); // Get text first for better debugging if JSON parsing fails
      console.log('Next.js: Відповідь від PHP (raw):', responseText);

      if (!phpResponse.ok) {
        // Try to parse error from PHP if it's JSON, otherwise use the raw text
        let phpError = responseText;
        try {
          const parsedError = JSON.parse(responseText);
          phpError = parsedError.error || parsedError.message || responseText;
        } catch (e) {
          // Not JSON, use raw text
        }
        console.error(`Next.js: Помилка від PHP скрипта (status ${phpResponse.status}):`, phpError);
        return NextResponse.json({ error: `Помилка сервера обробки: ${phpError}` }, { status: phpResponse.status });
      }

      // Assuming PHP sends back JSON on success
      const phpResult = JSON.parse(responseText);
      console.log('Next.js: Успішна відповідь від PHP:', phpResult);
      return NextResponse.json({ message: phpResult.message || 'Дані успішно відправлено.' }, { status: 200 });

    } catch (fetchError: any) {
      clearTimeout(timeoutId); // Ensure timeout is cleared on any fetch error

      if (fetchError.name === 'AbortError') {
        console.error('Next.js: Помилка запиту до PHP - час очікування вийшов.');
        return NextResponse.json({ error: 'Сервер обробки не відповів вчасно. Спробуйте пізніше.' }, { status: 504 }); // Gateway Timeout
      }
      // Handle other network errors (e.g., PHP server down, DNS issue)
      console.error('Next.js: Помилка мережі під час запиту до PHP:', fetchError.message);
      return NextResponse.json({ error: 'Помилка зв\'язку з сервером обробки. Спробуйте пізніше.' }, { status: 502 }); // Bad Gateway or could be 500
    }

  } catch (error: any) {
    console.error('Next.js: Помилка обробки запиту:', error.message);
    if (error instanceof SyntaxError) { // From request.json() if body is not valid JSON
        return NextResponse.json({ error: 'Невірний формат запиту.' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Внутрішня помилка сервера.' }, { status: 500 });
  }
}