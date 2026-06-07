"use client";

import Image from 'next/image';
import { useModal } from '@/hooks/use-modal-store';
import { useToast } from '@/hooks/use-toast';

const FriendPromo = () => {
  const { onOpen } = useModal();
  const { toast } = useToast();

  const handleOpenModalGeneral = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const orderData = {
        internetType: `Заявка: Акція «Рекомендуй другу»`,
        internetSpeed: 1000,
        internetMeasure: 'Мбіт/с',
        internetPrice: 0,
        totalMonthlyPrice: 0,
        hasTV: false,
        hasStaticIP: false,
        prepaidMonths: 0,
        setupPrice: 0,
        routerPrice: 0,
      };
      onOpen("phone-input", { orderData });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Помилка",
        description: "Не вдалося відкрити форму заявки."
      });
    }
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "Акція «Рекомендуй другу» - 777 грн бонусів",
        "description": "Приведи друга до мережі Batyevka.NET та отримай 777 грн на бонусний рахунок для оплати інтернету.",
        "brand": { "@type": "Brand", "name": "Batyevka.NET" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "UAH",
          "price": "0.00",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "seller": { "@type": "Organization", "name": "Batyevka.NET" }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Скільки бонусів я отримаю за друга?", "acceptedAnswer": { "@type": "Answer", "text": "За кожного успішно підключеного друга ви отримуєте 777 бонусних гривень на свій особовий рахунок." } },
          { "@type": "Question", "name": "На що можна витратити бонуси?", "acceptedAnswer": { "@type": "Answer", "text": "Бонуси можна використовувати для повної або часткової оплати вашої щомісячної абонентської плати за інтернет." } },
          { "@type": "Question", "name": "Коли нараховуються гроші?", "acceptedAnswer": { "@type": "Answer", "text": "Бонуси нараховуються одразу після того, як ваш друг підключиться до нашої мережі (GPON) та внесе перший платіж." } }
        ]
      }
    ]
  };

  return (
    <>
      <div
        className="bg-white text-[#5F6061] overflow-x-hidden mt-8 sm:mt-12 lg:mt-16 leading-relaxed max-w-[1200px] mx-auto py-10 px-5"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >

        {/* --- ГОЛОВНИЙ ЕКРАН (HERO - Концепт 2 З ПОМАРАНЧЕВОЮ СМУЖКОЮ) --- */}
        <section className="relative bg-[#F4F2F2] rounded-[32px] border-t-[6px] border-[#DC662D] shadow-sm p-8 md:p-14 flex flex-col md:flex-row items-center justify-between mb-16 overflow-hidden">
          <div className="md:w-1/2 z-10 text-center md:text-left mb-10 md:mb-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              <span className="bg-white text-[#56AABF] text-[10px] sm:text-xs font-bold py-1.5 px-3 rounded uppercase shadow-sm">Для існуючих абонентів</span>
              <span className="bg-white text-[#8B6CB0] text-[10px] sm:text-xs font-bold py-1.5 px-3 rounded uppercase shadow-sm">777 Бонусів</span>
              <span className="bg-[#DC662D] text-white text-[10px] sm:text-xs font-bold py-1.5 px-3 rounded uppercase shadow-sm">Акція</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 uppercase text-[#0E2D43] leading-tight">
              Рекомендуй <br className="hidden md:block" /><span className="text-[#DC662D]">Другу</span>
            </h1>

            <p className="text-base sm:text-lg font-medium text-[#5F6061] mb-8 max-w-[450px] mx-auto md:mx-0">
              Отримай <strong className="text-[#0E2D43]">777 грн</strong> на бонусний рахунок за кожного підключеного друга. Витрачай бонуси на оплату інтернету!
            </p>

            <button
              onClick={handleOpenModalGeneral}
              className="inline-block bg-[#DC662D] text-white text-lg font-semibold py-4 px-10 rounded-full shadow-[0_4px_20px_rgba(220,102,45,0.4)] transition-all duration-300 hover:bg-[#c95b27] hover:-translate-y-1"
            >
              Взяти участь
            </button>
          </div>

          <div className="md:w-1/2 z-10 relative flex justify-center md:justify-end">
            {/* ВАЖЛИВО ДЛЯ ІГОРЯ: Завантажити картинку без білого фону і назвати friend.svg (або .png) */}
            <img
              src="/img/promotions/action01.svg"
              alt="Акція Рекомендуй другу від Batyevka.NET"
              loading="lazy"
              className="w-full max-w-[350px] lg:max-w-[480px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* --- AI SUMMARY (TL;DR) --- */}
        <article className="bg-[#f7f9fa] border-l-4 border-[#DC662D] py-5 px-6 rounded-r-lg mx-auto mb-16 max-w-[900px] text-[1.05rem] font-medium text-[#0E2D43]">
          <strong className="text-[#DC662D]">Короткий зміст акції:</strong> Акція «Рекомендуй другу» від Batyevka.NET діє для існуючих абонентів. Приведіть нового клієнта та отримайте <strong className="text-[#DC662D]">777 бонусних гривень</strong> на свій рахунок після його успішного підключення. Бонуси можна використовувати виключно для оплати щомісячної абонплати за інтернет.
        </article>

        {/* --- КРОКИ: ЯК ЦЕ ПРАЦЮЄ --- */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0E2D43]">Як отримати 777 грн?</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-[1000px] mx-auto">
            
            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center relative transition-transform hover:-translate-y-1">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#56AABF] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">1</div>
              <svg className="w-12 h-12 mx-auto mt-2 mb-5 text-[#56AABF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Розкажи другу</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Порадьте наш преміальний GPON-інтернет сусіду чи другу. Нехай при заявці він вкаже вашу адресу підключення.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center relative transition-transform hover:-translate-y-1">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#8B6CB0] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">2</div>
              <svg className="w-12 h-12 mx-auto mt-2 mb-5 text-[#8B6CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Друг підключається</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Наші майстри заводять персональний оптичний кабель у квартиру вашого друга та налаштовують обладнання.</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center relative transition-transform hover:-translate-y-1">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#DC662D] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">3</div>
              <svg className="w-12 h-12 mx-auto mt-2 mb-5 text-[#DC662D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Отримуй бонуси</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Одразу після першого платежу друга, на ваш рахунок автоматично зарахується 777 грн для оплати інтернету.</p>
            </div>

          </div>
        </section>

        {/* --- СЕКЦІЯ: ДОДАТКОВІ ПЕРЕВАГИ --- */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0E2D43]">Важливі деталі</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-[900px] mx-auto">
            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center transition-transform hover:-translate-y-1">
              <svg className="w-12 h-12 mx-auto mb-5 text-[#51818B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Кількість не обмежена</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Більше друзів — більше місяців безкоштовного інтернету. Ви можете підключити 2, 5 або 10 друзів і за кожного отримати по 777 гривень.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center transition-transform hover:-translate-y-1">
              <svg className="w-12 h-12 mx-auto mb-5 text-[#51818B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Оплата послуг</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Бонусні кошти не мають готівкового еквівалента, але вони повністю покривають вашу абонентську плату за інтернет у системі Batyevka.NET.</p>
            </div>
          </div>
        </section>

        {/* --- SEO СТАТТЯ --- */}
        <article className="mt-20 pt-12 border-t border-[#EAEAEA]">
          <h2 className="text-2xl font-bold mb-6 text-[#0E2D43]">Програма лояльності «Рекомендуй другу» від Batyevka.NET</h2>
          <p className="mb-4">Користуєтесь надійним гігабітним інтернетом у Солом'янському районі Києва, який не зникає під час відключень електроенергії? Поділіться цим досвідом зі своїми друзями та сусідами! Batyevka.NET запускає оновлену програму лояльності «Рекомендуй другу».</p>

          <p className="mb-4 font-bold text-[#333]">Чому вашим друзям сподобається наша мережа GPON:</p>
          <ul className="pl-6 list-disc space-y-3 mb-8">
            <li><strong>Енергонезалежність:</strong> З 2017 року абоненти нашої GPON-мережі не відчувають перебоїв з інтернетом через відключення світла на нашому боці. Достатньо лише заживити роутер від павербанка.</li>
            <li><strong>Сучасні технології:</strong> Ми не використовуємо застарілу мідну виту пару (UTP) з під'їзду. Ми проводимо персональний оптичний кабель безпосередньо у квартиру.</li>
            <li><strong>Вигода для обох:</strong> Ваш друг отримує преміальний сервіс, а ви — 777 гривень на свій бонусний рахунок для оплати абонплати.</li>
          </ul>
        </article>

        {/* --- ЮРИДИЧНІ УМОВИ (ОФЕРТА) --- */}
        <footer className="mt-10 p-6 bg-[#F4F2F2] rounded-xl text-[0.85rem] text-[#5F6061] border-l-4 border-[#BDBDBD] leading-relaxed">
          <strong className="text-[#333]">Офіційні правила акції:</strong> В Акції можуть брати участь діючі абоненти мережі Batyevka.NET без заборгованості. За кожне успішне підключення нового абонента (який вказав адресу діючого клієнта при подачі заявки), діючий абонент отримує винагороду у розмірі 777,00 бонусних гривень. Нарахування бонусів здійснюється після фактичного підключення та внесення першого платежу новим абонентом. Бонусні кошти є віртуальними, не підлягають виплаті у готівковій формі та можуть бути використані виключно для оплати телекомунікаційних послуг провайдера Batyevka.NET.
        </footer>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
    </>
  );
};

export default FriendPromo;
