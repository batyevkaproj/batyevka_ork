"use client";

import Image from 'next/image';
import { useModal } from '@/hooks/use-modal-store';
import { useToast } from '@/hooks/use-toast';

const BanditPromoNew = () => {
  const { onOpen } = useModal();
  const { toast } = useToast();

  const handleOpenModalGeneral = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const orderData = {
        internetType: `Заявка з акції «БАНДИТ» (GPON)`,
        internetSpeed: 300,
        internetMeasure: 'Мбіт/с',
        internetPrice: 100,
        totalMonthlyPrice: 100,
        hasTV: true,
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
        "name": "Акція «Бандит» - Інтернет 300 Мбіт/с + MEGOGO",
        "description": "Підключення нових абонентів до GPON (оптика в квартиру), 300 Мбіт/с та пакет MEGOGO (200+ каналів).",
        "brand": {
          "@type": "Brand",
          "name": "Batyevka.NET"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "UAH",
          "price": "100.00",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Batyevka.NET"
          },
          "priceSpecification": [
            {
              "@type": "UnitPriceSpecification",
              "priceType": "https://schema.org/SalePrice",
              "priceCurrency": "UAH",
              "price": "100.00",
              "name": "Акційна ціна (перші 120 днів)"
            },
            {
              "@type": "UnitPriceSpecification",
              "priceType": "https://schema.org/ListPrice",
              "priceCurrency": "UAH",
              "price": "325.00",
              "name": "Регулярна ціна (з 121-го дня)"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Хто може підключитися за акцією Бандит?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Акція діє для нових підключень (перевіряється адреса квартири). Також можуть підключитися колишні абоненти, якщо з моменту останнього користування минуло 36 місяців."
            }
          },
          {
            "@type": "Question",
            "name": "Що входить у тариф?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "У тариф входить Інтернет на швидкості до 300 Мбіт/с та підписка на телебачення MEGOGO (понад 200 каналів)."
            }
          },
          {
            "@type": "Question",
            "name": "Скільки коштує тариф після акції?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Акційна ціна 100 грн/міс діє 120 днів, після чого регулярна абонплата становить 325 грн/міс."
            }
          }
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
        
        {/* --- ГОЛОВНИЙ ЕКРАН (HERO - Концепт 2: Split Screen) --- */}
        <section className="relative bg-[#F4F2F2] rounded-[32px] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between mb-16 overflow-hidden">
          {/* Декоративний елемент фону */}
          <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-white opacity-60 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Ліва частина: Текст та CTA */}
          <div className="md:w-1/2 z-10 text-center md:text-left mb-10 md:mb-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              <span className="bg-white text-[#56AABF] text-xs font-bold py-1.5 px-3 rounded uppercase shadow-sm">GPON</span>
              <span className="bg-white text-[#51818B] text-xs font-bold py-1.5 px-3 rounded uppercase shadow-sm">100% Оптика</span>
              <span className="bg-[#DC662D] text-white text-xs font-bold py-1.5 px-3 rounded uppercase shadow-sm">Акція</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 uppercase text-[#0E2D43] leading-tight">
              Акція <br className="hidden md:block" /><span className="text-[#DC662D]">«Бандит»</span>
            </h1>
            
            <p className="text-lg font-medium text-[#5F6061] mb-8 max-w-[450px] mx-auto md:mx-0">
              Швидкість 300 Мбіт/с та телебачення MEGOGO на спеціальних умовах. Переходь на преміальну оптичну мережу Batyevka.NET!
            </p>
            
            <button
              onClick={handleOpenModalGeneral}
              className="inline-block bg-[#DC662D] text-white text-lg font-semibold py-4 px-10 rounded-full shadow-[0_4px_20px_rgba(220,102,45,0.4)] transition-all duration-300 hover:bg-[#c95b27] hover:-translate-y-1"
            >
              Підключитись
            </button>
          </div>

          {/* Права частина: Ілюстрація (Герой без фону) */}
          <div className="md:w-1/2 z-10 relative flex justify-center md:justify-end">
            <img
              src="/img/bandit.svg"
              alt="Акція Бандит від Batyevka.NET"
              loading="lazy"
              className="w-full max-w-[350px] lg:max-w-[480px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* --- AI SUMMARY (TL;DR) --- */}
        <article className="bg-[#f7f9fa] border-l-4 border-[#56AABF] py-5 px-6 rounded-r-lg mx-auto mb-16 max-w-[900px] text-[1.05rem] font-medium text-[#0E2D43]">
          <strong className="text-[#DC662D]">Короткий зміст акції:</strong> Підключення до оптичної мережі GPON (без UTP) на швидкості 300 Мбіт/с разом із пакетом MEGOGO (200+ каналів). Абонплата становить <strong className="text-[#DC662D]">100 грн/місяць</strong> на перші 120 днів, після чого переходить на регулярний тариф <strong className="text-[#DC662D]">325 грн/місяць</strong>. Діє для нових абонентів (перевірка адреси квартири, а не прізвища).
        </article>

        {/* --- КАРТКА ТАРИФУ --- */}
        <div className="flex justify-center mb-20">
          <section className="bg-white border border-[#EAEAEA] rounded-[16px] p-8 md:p-12 w-full max-w-[500px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] text-left relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(14,45,67,0.08)]">
            <div className="absolute top-0 left-0 right-0 h-[6px] bg-[#DC662D] rounded-t-[16px]"></div>
            
            <span className="inline-block bg-[#e8f2f5] text-[#56AABF] text-sm font-bold py-1.5 px-3 rounded mb-5 uppercase">
              G-PON
            </span>
            <div className="text-3xl font-extrabold text-[#0E2D43] mb-3">
              300 Мбіт/с
            </div>

            <div className="text-[3.5rem] font-extrabold text-[#DC662D] leading-none mb-2">
              100 <small className="text-xl">грн/міс</small>
            </div>
            <div className="text-sm text-[#888888] mb-6 line-through decoration-[#DC662D] opacity-70">
              Регулярна ціна: 325 грн/міс
            </div>

            <div className="text-base font-bold text-[#51818B] mb-8 flex items-center gap-2">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              + MEGOGO ТБ (200+ каналів)
            </div>

            <button
              onClick={handleOpenModalGeneral}
              className="block w-full text-center bg-[#DC662D] text-white text-lg font-semibold py-4 px-5 rounded-full shadow-[0_4px_15px_rgba(220,102,45,0.4)] transition-all duration-200 hover:bg-[#c95b27] hover:-translate-y-1"
            >
              Залишити заявку
            </button>
            <p className="text-xs text-[#888888] mt-4 text-center">
              Діє перші 120 днів з моменту підключення
            </p>
          </section>
        </div>

        {/* --- СЕКЦІЯ 1: ДЛЯ КОГО ДІЄ --- */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0E2D43]">Для кого діє акція?</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-[900px] mx-auto">
            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center transition-transform hover:-translate-y-1">
              <svg className="w-12 h-12 mx-auto mb-5 text-[#DC662D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Нові абоненти</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Акція діє виключно для нових підключень. Ми перевіряємо технічну історію <strong>саме квартири (адреси)</strong>, а не прізвище абонента.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center transition-transform hover:-translate-y-1">
              <svg className="w-12 h-12 mx-auto mb-5 text-[#DC662D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Повернення до нас</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Якщо за вашою адресою вже було наше підключення, ви можете взяти участь в акції, якщо з моменту останнього користування пройшло <strong>не менше 36 місяців</strong>.</p>
            </div>
          </div>
        </section>

        {/* --- СЕКЦІЯ 2: ПЕРЕВАГИ МЕРЕЖІ --- */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0E2D43]">Переваги мережі Batyevka.NET</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center transition-transform hover:-translate-y-1">
              <svg className="w-12 h-12 mx-auto mb-5 text-[#DC662D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Сучасна оптика</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Технологія GPON. Жодних старих кабелів — підключення по витій парі (UTP) з коридору не виконується.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center transition-transform hover:-translate-y-1">
              <svg className="w-12 h-12 mx-auto mb-5 text-[#DC662D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Зручне налаштування</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Авторизація по DHCP без прив'язки до MAC-адреси. Змінюйте свій роутер самостійно без дзвінків до підтримки.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center transition-transform hover:-translate-y-1">
              <svg className="w-12 h-12 mx-auto mb-5 text-[#DC662D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Надійне обладнання</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Оптичний кабель та термінал (ONU) надаються абоненту у користування на весь час послуг (власність компанії).</p>
            </div>
          </div>
        </section>

        {/* --- SEO СТАТТЯ --- */}
        <article className="mt-20 pt-12 border-t border-[#EAEAEA]">
          <h2 className="text-2xl font-bold mb-6 text-[#0E2D43]">Акція «Бандит» від Batyevka.NET: 300 Мбіт/с та MEGOGO</h2>
          <p className="mb-4">Шукаєте надійний швидкісний інтернет у Солом'янському районі Києва, який не зникає під час відключень електроенергії? Batyevka.NET пропонує унікальну можливість підключити преміальну оптичну мережу за акцією «Бандит». Ви отримаєте інтернет на швидкості 300 Мбіт/с та доступ до платформи MEGOGO (пакет на 200+ телеканалів).</p>

          <p className="mb-4 font-bold text-[#333]">Чому варто обрати підключення від Batyevka.NET:</p>
          <ul className="pl-6 list-disc space-y-3 mb-8">
            <li><strong>Енергонезалежність:</strong> З 2017 року наші абоненти не відчувають перебоїв з інтернетом через відключення світла на нашому боці. Вам достатньо заживити свій роутер від павербанка. До речі, сам оптичний термінал не обов'язково вимикати для економії заряду, достатньо вимикати тільки роутер.</li>
            <li><strong>Тільки оптика:</strong> Ми не використовуємо мідну виту пару (UTP) з під'їзду. Тільки персональний оптичний кабель у квартиру.</li>
            <li><strong>Прозорі тарифи:</strong> Перші 120 днів вартість становить 100 грн/міс. Після завершення акції — 325 грн/міс.</li>
          </ul>
        </article>

        {/* --- ЮРИДИЧНІ УМОВИ (ОФЕРТА) --- */}
        <footer className="mt-10 p-6 bg-[#F4F2F2] rounded-xl text-[0.85rem] text-[#5F6061] border-l-4 border-[#BDBDBD] leading-relaxed">
          <strong className="text-[#333]">Офіційні правила акції «Бандит»:</strong> Пропозиція діє за наявності технічної можливості підключення до мережі GPON. Акція доступна для нових абонентів (перевірка здійснюється за адресою підключення/квартирою, а не за прізвищем), а також для колишніх абонентів, якщо з моменту останнього користування послугами за цією адресою минуло не менше 36 місяців. У тариф включено доступ до Інтернету (до 300 Мбіт/с) та сервіс MEGOGO (200+ каналів). Акційна вартість 100 грн/міс діє 120 календарних днів з моменту активації. З 121-го дня абонент переводиться на регулярний тариф вартістю 325 грн/міс. Надане обладнання (термінал ONU) є власністю провайдера.
        </footer>
      </div>

      {/* SCHEMA.ORG JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
    </>
  );
};

export default BanditPromoNew;
