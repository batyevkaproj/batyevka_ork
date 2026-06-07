"use client";

import Image from 'next/image';
import { useModal } from '@/hooks/use-modal-store';
import { useToast } from '@/hooks/use-toast';

const GigabitPromo = () => {
  const { onOpen } = useModal();
  const { toast } = useToast();

  const handleOpenModalGeneral = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const orderData = {
        internetType: `Заявка з акції «Гігабіт на рік» (GPON)`,
        internetSpeed: 1000,
        internetMeasure: 'Мбіт/с',
        internetPrice: 150,
        totalMonthlyPrice: 150,
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
        "name": "Акція «Гігабіт на рік» - Інтернет 1 Гбіт/с + MEGOGO",
        "description": "Підключення нових абонентів до GPON (оптика в квартиру), швидкість 1000 Мбіт/с та пакет MEGOGO (202 канали, 6000 фільмів).",
        "brand": {
          "@type": "Brand",
          "name": "Batyevka.NET"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "UAH",
          "price": "150.00",
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
              "price": "150.00",
              "name": "Акційна ціна (перші 365 днів)"
            },
            {
              "@type": "UnitPriceSpecification",
              "priceType": "https://schema.org/ListPrice",
              "priceCurrency": "UAH",
              "price": "250.00",
              "name": "Регулярна ціна (з 366-го дня)"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Скільки триває акція на Гігабіт?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Акційна ціна 150 грн/міс діє цілий рік (365 днів) з моменту підключення."
            }
          },
          {
            "@type": "Question",
            "name": "Хто може підключитися за акцією?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Акція діє для нових підключень (перевіряється адреса квартири). Також можуть підключитися колишні абоненти, якщо з моменту останнього користування минуло 36 місяців."
            }
          },
          {
            "@type": "Question",
            "name": "Які канали входять у підписку MEGOGO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "У тариф входить безкоштовний пакет MEGOGO: 202 телеканали, понад 6000 фільмів, а також функції перемотки та ТВ-архіву."
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
        
        {/* --- ГОЛОВНИЙ ЕКРАН (HERO - Концепт 3: Background Cover) --- */}
        <section 
          className="relative rounded-[32px] mb-16 overflow-hidden flex items-center min-h-[450px] shadow-sm border border-[#EAEAEA]"
          style={{
            /* ВАЖЛИВО ДЛЯ ВЕБМАЙСТРА: Вкажіть правильний шлях до вашої картинки-банера */
            backgroundImage: "url('/img/rocket-promo.jpg')", 
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Ефект матового скла, щоб текст добре читався поверх банера */}
          <div className="absolute inset-0 bg-white/70 md:bg-white/60 backdrop-blur-[6px] md:w-3/5 z-0"></div>
          
          <div className="relative z-10 p-8 md:p-14 w-full md:w-[65%] text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              <span className="bg-white text-[#56AABF] text-xs font-bold py-1.5 px-3 rounded uppercase shadow-sm">GPON</span>
              <span className="bg-white text-[#8B6CB0] text-xs font-bold py-1.5 px-3 rounded uppercase shadow-sm">1000 Мбіт/с</span>
              <span className="bg-[#DC662D] text-white text-xs font-bold py-1.5 px-3 rounded uppercase shadow-sm">Акція</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 uppercase text-[#0E2D43] leading-tight">
              Гігабітний <br className="hidden md:block" /><span className="text-[#8B6CB0]">PON Інтернет</span>
            </h1>
            
            <p className="text-lg font-medium text-[#0E2D43] mb-8 max-w-[450px] mx-auto md:mx-0 drop-shadow-sm">
              Космічна швидкість <strong>1000 Мбіт/с</strong> та безкоштовне телебачення MEGOGO. Лише 150 грн/міс на цілий рік!
            </p>
            
            <button
              onClick={handleOpenModalGeneral}
              className="inline-block bg-[#DC662D] text-white text-lg font-semibold py-4 px-10 rounded-full shadow-[0_4px_20px_rgba(220,102,45,0.4)] transition-all duration-300 hover:bg-[#c95b27] hover:-translate-y-1"
            >
              Підключитись
            </button>
          </div>
        </section>

        {/* --- AI SUMMARY (TL;DR) --- */}
        <article className="bg-[#f7f9fa] border-l-4 border-[#8B6CB0] py-5 px-6 rounded-r-lg mx-auto mb-16 max-w-[900px] text-[1.05rem] font-medium text-[#0E2D43]">
          <strong className="text-[#8B6CB0]">Короткий зміст акції:</strong> Підключення до енергонезалежної оптичної мережі GPON. Надається швидкість <strong className="text-[#DC662D]">1000 Мбіт/с</strong> та безкоштовний пакет MEGOGO (202 канали, 6000 фільмів). Акційна абонплата становить <strong className="text-[#DC662D]">150 грн/місяць</strong> та фіксується на <strong className="text-[#0E2D43]">365 днів (1 рік)</strong>. Діє виключно для нових підключень або адрес, де послуги не надавалися більше 36 місяців.
        </article>

        {/* --- КАРТКА ТАРИФУ --- */}
        <div className="flex justify-center mb-16">
          <section className="bg-white border border-[#EAEAEA] rounded-[16px] p-8 md:p-12 w-full max-w-[500px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] text-left relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(14,45,67,0.08)]">
            <div className="absolute top-0 left-0 right-0 h-[6px] bg-[#8B6CB0] rounded-t-[16px]"></div>
            
            <span className="inline-block bg-[#f0eaff] text-[#8B6CB0] text-sm font-bold py-1.5 px-3 rounded mb-5 uppercase">
              XGS-PON / G-PON
            </span>
            <div className="text-3xl font-extrabold text-[#0E2D43] mb-3">
              1000 Мбіт/с
            </div>

            <div className="text-[3.5rem] font-extrabold text-[#DC662D] leading-none mb-2">
              150 <small className="text-xl">грн/міс</small>
            </div>
            <div className="text-sm text-[#888888] mb-6 line-through decoration-[#DC662D] opacity-70">
              Регулярна ціна: 250 грн/міс
            </div>

            <div className="text-base font-bold text-[#51818B] mb-8 flex items-center gap-2">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              + MEGOGO (202 канали)
            </div>

            <button
              onClick={handleOpenModalGeneral}
              className="block w-full text-center bg-[#DC662D] text-white text-lg font-semibold py-4 px-5 rounded-full shadow-[0_4px_15px_rgba(220,102,45,0.4)] transition-all duration-200 hover:bg-[#c95b27] hover:-translate-y-1"
            >
              Залишити заявку
            </button>
            <p className="text-xs text-[#888888] mt-4 text-center">
              Акційна ціна зафіксована на 365 днів (1 рік)
            </p>
          </section>
        </div>

        {/* --- СЕКЦІЯ MEGOGO --- */}
        <section className="mb-20 max-w-[900px] mx-auto bg-[#F4F2F2] rounded-[24px] p-8 border border-[#EAEAEA]">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6 text-[#0E2D43]">У тариф вже включено MEGOGO</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
             <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-3xl font-black text-[#56AABF] mb-1">202</div>
                <div className="text-sm font-semibold text-[#0E2D43]">Телеканали з новинами й шоу</div>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-3xl font-black text-[#8B6CB0] mb-1">6000+</div>
                <div className="text-sm font-semibold text-[#0E2D43]">Безкоштовних фільмів та мультиків</div>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-3xl font-black text-[#DC662D] mb-1">Архів</div>
                <div className="text-sm font-semibold text-[#0E2D43]">Перемотка та ТБ-архів на каналах</div>
             </div>
          </div>

          <details className="group bg-white rounded-xl border border-[#EAEAEA] shadow-sm [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-[#0E2D43]">
              <span>Переглянути повний список каналів (202 канали)</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="p-4 border-t border-[#EAEAEA] text-xs text-[#5F6061] leading-relaxed max-h-[300px] overflow-y-auto">
              24 канал, 5 канал HD, Еспресо TV HD, Телеканал Рада, Перший, FREEДОМ, Надія, ICTV HD, M1 HD, M2 HD, Інтер HD, 1+1 Марафон HD, УНІАН Серіал, Eco TV, Extreme Sports, Classical Harmony, #НАШЕ ретро, Milady TELEVISION, Euronews ENG, ЕТНО КАНАЛ, Дніпро ТV HD, Суспільне Культура, MEGOGO MUSIC, Київ, France 24 Français, France 24 English, France 24 Arabic, BTQ, Караван TV, Наталі, Radio NV, Kiss FM, Мелодія FM, Наше Радіо, Radio ROKS, Radio Relax, Хіт FM, Radio Jazz, Радіо МАКСИМУМ, Радіо Nostalgie, Люкс ФМ, Радіо П'ятниця, Lounge Fm, Авторадіо Україна, NRJ радіо, Апостроф TV, Львівська Хвиля, Magic Radio, DJFM, Power FM, Шлягер FM, Кухня, Подорожі, Розваги, DIY, Телесеріал, Спорт огляд, Риболовля, Чоловіче хобі, Б'юті-блог, Будівництво та ремонт, Орел і Решка, Тварини, Музичний, World of Tanks, Minecraft, ДІМ HD, Лайфстайл, Пізнавальний, Авто/Мото, Радіо Закарпаття - FM, Українське радіо, Радіо Промінь, Радіо Культура, Рукоділля, Сад і город, FM Галичина, ПЕРЕЦЬ FM, Радіо Байрактар, Українське, Сім'я Каті та Макса, [M] Подкасти, Історія без міфів, TVP World, Кулінарія, Дитячий 2, [M] Little kittens, Мандри, Пригоди, Кухня UA, Пізнавальний Kids, Документальний, [M] Трейлери, Сімейний, Авто/Мото UA, Залипальне, КИЇВ - FM, Serginio Fishing, [M] Подкасти The Ukrainians, ТЮСО, Classic Radio, Спортивний, Життя у лісі, NHK World, [M] Розмови про кіно, АРМІЯ ТБ, Рецепти Алли Ковальчук, Гід техніки, [M] Standup, Футбольний, Суспільне Спорт, Мультиленд, Креативна практика, Товари з AliExpress, [M] Goods from AliExpress, France 24 Español, Армія FM, Розслідування Мердока, Детективні хроніки, Smart Kids, Ньюспалм, Трофей Premium, Forbes, Блог Економічний, МИ - УКРАЇНА HD, МИ - УКРАЇНА + HD, [M] Колекція Радіо Культура, Євген Клопотенко, [M] Поезія, [M] Віра, Світ навиворіт+, Загублений світ+, Опер за викликом+, Сімейні мелодрами+, ЖВЛ+, [M] Доктор Комаровський, [М] Укрліт, [M] Дитячий садок, [M] Стосується кожного, [M] Речдок, [М] Кінопортал, [M] Солодкі фантазії, H1, Твій ТВ, Gagsnetwork, Капучино TV, Ми – Україна Радіо, [M] Книгарня, [M] Active TV, One Planet, [M] eXplore, КОНКУРЕНТ. УКРАЇНА, ДІМ+, Панянка-селянка+, Хіти Мегого Родина, Хіти Мегого Драма, Хіти Мегого Адреналін, Вікторина, Про Київ, Знаєм 24, [M] Zoosvit, [M] Кінокласика, Накипіло, Тернопільська Хвиля, [M] KIDDISVIT, PROVENCE, [M] Цивільна підготовка, [M] БарДак, [M] Говорить вся країна, [M] Гумористичний, [M] Драматичний, [M] Містика, [M] Реальні історії, [M] Light cinema 1, [M] Light cinema 2, [M] Танька і Володька, [M] Одного разу під Полтавою, [М] Movie Library, [M] Теленовели 2, [M] Мovie mode 1, [M] Мovie mode 2, [M] Kids town, Радіоточка, Champion Radio, [M] Doramas 1, [M] Doramas 2, [M] Детективне кіно, [M] Кримінальне кіно, [M] Мелодрами, РАІ, fashion, Radio Прищепкін TOP40 UA, SUN FM, Сонце+, РАДІОПІХОТА, [M] LOLka, BIKINI, Люкс ФМ Українські Хіти, Люкс ФМ Chill and Relax, Люкс ФМ Золоті Хіти, Люкс ФМ Сучасні Хіти, K-Pop.
            </div>
          </details>
        </section>

        {/* --- СЕКЦІЯ 1: ДЛЯ КОГО ДІЄ --- */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0E2D43]">Умови підключення</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-[900px] mx-auto">
            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center transition-transform hover:-translate-y-1">
              <svg className="w-12 h-12 mx-auto mb-5 text-[#8B6CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Перевірка за квартирою</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Акція діє для нових абонентів. Приймаючи заявку, ми перевіряємо технічну історію <strong>саме квартири (адреси)</strong>, а не прізвище.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center transition-transform hover:-translate-y-1">
              <svg className="w-12 h-12 mx-auto mb-5 text-[#8B6CB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Повернення до нас</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Якщо за вашою адресою вже було наше підключення, ви можете взяти участь в акції, якщо з моменту останнього користування пройшло <strong>не менше 36 місяців</strong>.</p>
            </div>
          </div>
        </section>

        {/* --- СЕКЦІЯ 2: ПЕРЕВАГИ МЕРЕЖІ --- */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0E2D43]">Технології Batyevka.NET</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center transition-transform hover:-translate-y-1">
              <svg className="w-12 h-12 mx-auto mb-5 text-[#56AABF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Надійна оптика</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Технологія GPON. Жодних старих кабелів — підключення по витій парі (UTP) з коридору більше не виконується.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center transition-transform hover:-translate-y-1">
              <svg className="w-12 h-12 mx-auto mb-5 text-[#56AABF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Зручне налаштування</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Авторизація по протоколу DHCP без прив'язки до MAC-адреси. Змінюйте свій роутер без дзвінків до підтримки.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.03)] text-center transition-transform hover:-translate-y-1">
              <svg className="w-12 h-12 mx-auto mb-5 text-[#56AABF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Якісне обладнання</h3>
              <p className="text-[0.95rem] text-[#5F6061]">Персональний оптичний кабель та термінал (ONU) надаються абоненту у користування на весь час послуг.</p>
            </div>
          </div>
        </section>

        {/* --- SEO СТАТТЯ --- */}
        <article className="mt-20 pt-12 border-t border-[#EAEAEA]">
          <h2 className="text-2xl font-bold mb-6 text-[#0E2D43]">Акція «Гігабіт на рік» від Batyevka.NET: 1000 Мбіт/с за 150 грн</h2>
          <p className="mb-4">Шукаєте надійний гігабітний інтернет у Солом'янському районі Києва, який не зникає під час відключень електроенергії? Batyevka.NET пропонує унікальну можливість підключити преміальну оптичну мережу. Ви отримаєте інтернет на швидкості 1000 Мбіт/с та доступ до платформи MEGOGO (пакет на 202 телеканали та 6000 фільмів) всього за 150 грн/місяць протягом цілого року (365 днів).</p>

          <p className="mb-4 font-bold text-[#333]">Переваги оптичного підключення GPON:</p>
          <ul className="pl-6 list-disc space-y-3 mb-8">
            <li><strong>Енергонезалежність:</strong> З 2017 року абоненти нашої GPON-мережі не відчувають перебоїв з інтернетом через відключення світла на нашому боці. Вам достатньо лише заживити свій роутер від звичайного павербанка (оптичний термінал ONU не обов'язково вимикати для економії заряду, достатньо вимикати тільки роутер).</li>
            <li><strong>Тільки оптика:</strong> Ми не використовуємо застарілу мідну виту пару (UTP) з під'їзду. Тільки персональний оптичний кабель безпосередньо у квартиру.</li>
            <li><strong>Прозорі тарифи:</strong> Цілих 365 днів вартість зафіксована на рівні 150 грн/міс. Після завершення акції вартість становитиме 250 грн/міс за чесний гігабіт.</li>
          </ul>
        </article>

        {/* --- ЮРИДИЧНІ УМОВИ --- */}
        <footer className="mt-10 p-6 bg-[#F4F2F2] rounded-xl text-[0.85rem] text-[#5F6061] border-l-4 border-[#BDBDBD] leading-relaxed">
          <strong className="text-[#333]">Офіційні правила акції:</strong> Пропозиція діє за наявності технічної можливості підключення до мережі GPON. Акція доступна для нових абонентів (перевірка здійснюється за адресою підключення/квартирою, а не за прізвищем), а також для колишніх абонентів, якщо з моменту останнього користування послугами за цією адресою минуло не менше 36 місяців. У тариф включено доступ до Інтернету (до 1000 Мбіт/с) та сервіс MEGOGO (202 канали, ТВ-архів, фільми). Акційна вартість 150 грн/міс діє 365 календарних днів з моменту активації. Починаючи з 366-го дня абонент автоматично переводиться на регулярний тариф вартістю 250 грн/міс. Надане обладнання (термінал ONU) є власністю провайдера і підлягає поверненню у разі розірвання договору.
        </footer>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
    </>
  );
};

export default GigabitPromo;
