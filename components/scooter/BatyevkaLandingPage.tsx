"use client";

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// --- Імпортуємо хуки та константи ---
import {
    GPON_SPEEDS,
    UTP_SPEEDS,
    REAL_IP_PRICE_physic as REAL_IP_PRICE,
} from "@/constants/internet_speeds";
import { useModal } from "@/hooks/use-modal-store";
import { useToast } from "@/hooks/use-toast";


import news1 from "../../public/img/img_useful_information04.svg"
import news2 from "../../public/img/img_useful_information03.svg"
import news3 from "../../public/img/img_useful_information02.svg"
import news4 from "../../public/img/action01.svg"


// --- Компоненти іконок (без змін) ---
const LightningIcon: React.FC = () => (
    <svg className="h-10 w-10 text-[#DC662D] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);
const ShieldCheckIcon: React.FC = () => (
    <svg className="h-10 w-10 text-[#DC662D] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917L12 22l9-1.083A12.02 12.02 0 0021 7.984a11.955 11.955 0 01-4.382-3.001z" />
    </svg>
);
const VideoCameraIcon: React.FC = () => (
    <svg className="h-10 w-10 text-[#DC662D] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);
const SupportIcon: React.FC = () => (
    <svg className="h-10 w-10 text-[#DC662D] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);
const ChevronDownIcon: React.FC = () => (
     <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);


const BatyevkaLandingPage: React.FC = () => {

    const { onOpen } = useModal();
    const { toast } = useToast();
    
    // Сортування тарифів
    const utpTariffs = [...UTP_SPEEDS].sort((a, b) => a.speed - b.speed);
    const xgsTariffs = [...GPON_SPEEDS].sort((a, b) => a.speed - b.speed);
    
    // =================================================================
    // === НОВІ ОБРОБНИКИ ДЛЯ ВІДКРИТТЯ МОДАЛЬНОГО ВІКНА ==============
    // =================================================================

    // Обробник для загальних кнопок (без прив'язки до тарифу)
    const handleOpenModalGeneral = () => {
        try {
            const orderData = {
                internetType: `Заявка з головної сторінки`,
                internetSpeed: 0,
                internetMeasure: '',
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

    // Обробник для кнопок на картках тарифів
    const handleOpenModalForTariff = (tariff: any, promoPrice: number, type: string) => {
        try {
            if (!tariff) throw new Error("Дані тарифу не знайдено");

            const orderData = {
                internetType: type,
                internetSpeed: tariff.speed,
                internetMeasure: tariff.measure,
                internetPrice: promoPrice,
                regularPrice: tariff.price,
                totalMonthlyPrice: promoPrice,
                hasTV: true, // Всі тарифи G-PON включають MEGOGO
                hasStaticIP: false,
                prepaidMonths: 0,
                setupPrice: 0, // Підключення безкоштовне для G-PON
                routerPrice: 0,
            };
            onOpen("phone-input", { orderData });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Помилка",
                description: error instanceof Error ? error.message : "Помилка формування заявки"
            });
        }
    };

    return (
        <div className='mt-5 scroll-smooth'>
            <Head>
                <title>Batyevka.NET — Гігабітний інтернет у Солом’янському районі</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                {/* Google Fonts та стилі залишаються тут, але краще їх винести у _app.tsx */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
                <style>
                    {`
                        html { scroll-behavior: smooth; }
                        details > summary { list-style: none; }
                        details > summary::-webkit-details-marker { display: none; }
                    `}
                </style>
            </Head>

            <div className="bg-white text-[#5F6061] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
                <main className="container mx-auto px-4 py-8 md:py-16">

                    {/* ----- HERO SECTION ----- */}
                    <section className="text-center py-16 md:py-24">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-[#5F6061]">
                            Інтернет до <span className="text-[#DC662D]">10 Гбіт/с</span> у Солом’янському районі
                        </h1>
                        <p className="text-lg md:text-xl text-[#5F6061] max-w-3xl mx-auto mb-8">
                            Batyevka.NET забезпечує стабільний та безперебійний інтернет і сучасне цифрове телебачення у Солом’янському районі Києва. Технології G-PON та XGS-PON тримають вас онлайн навіть під час енергетичних викликів.
                        </p>
                        <a href="#cta" className="bg-[#DC662D] hover:bg-opacity-90 text-white font-bold text-lg py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                            Підключитись
                        </a>
                    </section>

                    {/* ----- ADVANTAGES SECTION ----- */}
                    <section className="py-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#5F6061]">Чому Batyevka.NET?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <article className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200/80 flex flex-col items-center text-center">
                                <LightningIcon />
                                <h3 className="text-xl font-bold mb-2 text-[#5F6061]">Супершвидкість</h3>
                                <p>Оптоволоконні лінії G-PON та XGS-PON.</p>
                            </article>
                            <article className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200/80 flex flex-col items-center text-center">
                                <ShieldCheckIcon />
                                <h3 className="text-xl font-bold mb-2 text-[#5F6061]">Стабільність</h3>
                                <p>Працюємо навіть під час енергетичних викликів.</p>
                            </article>
                            <article className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200/80 flex flex-col items-center text-center">
                                <VideoCameraIcon />
                                <h3 className="text-xl font-bold mb-2 text-[#5F6061]">MEGOGO «Максимальна»</h3>
                                <p>Топовий спорт, серіали від HBO та 400+ каналів.</p>
                            </article>
                            <article className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200/80 flex flex-col items-center text-center">
                                <SupportIcon />
                                <h3 className="text-xl font-bold mb-2 text-[#5F6061]">Підтримка</h3>
                                <p>Усі виклики майстра входять у вартість тарифу.</p>
                            </article>
                        </div>
                    </section>
                    
                    {/* ----- TARIFFS UTP SECTION (DYNAMIC) ----- */}
                    <section className="py-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#5F6061]">Популярні тарифи G-PON</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                             {utpTariffs.map(tariff => {
                                let discountValue = 0;
                                if (tariff.value === 1 || tariff.value === 2 || tariff.value === 3) {
                                    discountValue = 100;
                                }
                                const promoPrice = tariff.price - discountValue;
                                const isFeatured = tariff.value === 2;

                                return (
                                <article key={tariff.value} className={isFeatured ? "bg-[#5F6061] text-white p-6 rounded-lg shadow-2xl flex flex-col ring-2 ring-[#DC662D] transform md:scale-105" : "bg-white p-6 rounded-lg shadow-lg flex flex-col border border-gray-200/80"}>
                                    <div className="flex-grow">
                                        <span className={isFeatured ? "inline-block bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full mb-2" : "inline-block bg-[#5984B2]/20 text-[#5984B2] text-xs font-bold px-2 py-1 rounded-full mb-2"}>G-PON</span>
                                        <h3 className={`text-2xl font-bold mb-2 ${isFeatured ? '' : 'text-[#5F6061]'}`}>{tariff.speed} {tariff.measure}/с</h3>
                                        <p className="text-4xl font-extrabold text-[#DC662D]">{promoPrice}<span className="text-xl font-bold"> грн/міс</span></p>
                                        <p className={`text-sm ${isFeatured ? 'text-white/90' : 'text-[#5F6061]'} mb-4`}>перші 4 місяці, далі — {tariff.price} грн/міс</p>
                                        <p className={`text-sm font-bold mb-2 ${isFeatured ? '' : 'text-[#51B18B]'}`}>Підключення — безкоштовне</p>
                                        <p className={`text-sm font-bold ${isFeatured ? 'text-white/90' : 'text-[#5984B2]'}`}>+ MEGOGO ТБ (170+ каналів)</p>
                                    </div>
                                    <div className="mt-auto space-y-2 pt-4">
                                        
                                        {/* === ВИПРАВЛЕНО: Замінено Link на button з новим обробником === */}
                                        <a 
                                            href='#cta'
                                            className="w-full block text-center bg-[#DC662D] hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                                        >
                                            Залишити заявку
                                        </a>

                                        <Link href="/prices" className={isFeatured ? "w-full block text-center bg-transparent hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg transition-colors border border-white/50" : "w-full block text-center bg-transparent hover:bg-gray-100 text-[#5F6061] font-bold py-2 px-4 rounded-lg transition-colors border border-gray-300"}>Детальніше</Link>
                                    </div>
                                </article>
                             )})}
                        </div>
                    </section>
                    
                    {/* ----- TARIFFS GPON SECTION ----- */}
                    <section className="py-12">
                        <div className="bg-gray-100 rounded-lg p-8 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#5F6061]">Надшвидкісні тарифи XGS-PON</h2>
                            <p className="max-w-2xl mx-auto mb-8 text-[#5F6061]">Для найвимогливіших завдань: професійного геймінгу, стрімінгу у 8K та роботи з великими обсягами даних.</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                                {xgsTariffs.map(tariff => {
                                    let discountValue = 0;
                                    switch(tariff.value) {
                                        case 1: discountValue = 800; break;
                                        case 2: discountValue = 400; break;
                                        case 3: discountValue = 250; break;
                                    }
                                    const promoPrice = tariff.price - discountValue;
                                    
                                    return (
                                        <div key={tariff.value} className="bg-white p-6 rounded-lg shadow-md border flex flex-col">
                                            <h3 className="text-2xl font-bold text-[#5F6061]">{tariff.speed} {tariff.measure}/с</h3>
                                            <p className="text-2xl font-bold text-[#DC662D] mt-2">{promoPrice}<span className="text-lg font-normal"> грн/міс</span></p>
                                            <p className="text-xs text-[#5F6061]">перші 4 місяці, далі — {tariff.price} грн/міс</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="text-sm mb-6"><span className="font-bold">Вартість підключення до тарифів XGS-PON:</span> 2999 грн.</p>
                            <Link href="/xgspon" className="bg-[#5F6061] hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg transition-colors">Дізнатись більше</Link>
                        </div>
                    </section>

                    {/* ----- MEGOGO SECTION ----- */}
                    <section className="py-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#5F6061]">Розширте можливості з передплатами MEGOGO</h2>
                         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            <div className="bg-gray-50 p-4 rounded-lg border">
                                <p className="font-bold text-lg text-[#5F6061]">Безкоштовне ТБ</p>
                                <p className="text-sm">170+ національних та ефірних каналів.</p>
                                <p className="font-bold text-[#51B18B] mt-2">Вже у тарифі</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border">
                                <p className="font-bold text-lg text-[#5F6061]">Легка</p>
                                <p className="text-sm">375+ каналів, колекція фільмів та мультфільмів.</p>
                                <p className="font-bold text-[#5984B2] mt-2">+ 85 грн/міс</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border">
                                <p className="font-bold text-lg text-[#5F6061]">Оптимальна</p>
                                <p className="text-sm">445+ каналів, преміум-кіно та спорт (Setanta).</p>
                                <p className="font-bold text-[#5984B2] mt-2">+ 200 грн/міс</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg border">
                                <p className="font-bold text-lg text-[#5F6061]">Максимальна</p>
                                <p className="text-sm">480+ каналів, HBO, Ліга Чемпіонів та максимум кіно.</p>
                                <p className="font-bold text-[#5984B2] mt-2">+ 350 грн/міс</p>
                            </div>
                         </div>
                         <div className="text-center mt-8">
                            <Link href="/prices" className="text-[#DC662D] font-bold hover:underline">Дізнатись більше про передплати →</Link>
                         </div>
                    </section>

                    {/* ----- LATEST NEWS SECTION ----- */}
        <section className="py-12 bg-gray-50 rounded-lg">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#5F6061]">
                    Останні новини
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* --- Article 1 --- */}
                    <article className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200/80">
                        <Image
                            src={news1}
                            alt="Планові технічні роботи"
                            width={600}
                            height={400}
                            className="w-full h-auto" // Corrected: Image will scale proportionally
                        />
                        <div className="p-6">
                            <p className="text-sm text-gray-500 mb-2">14 серпня 2025</p>
                            <h3 className="text-xl font-bold mb-3 text-[#5F6061]">
                                Планові технічні роботи у ніч на 15 серпня
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Ми постійно працюємо над покращенням якості наших послуг. У ніч з 14 на 15 серпня можливі короткочасні перерви у доступі до мережі.
                            </p>
                            {/* <Link href="/news/technical-works" className="font-bold text-[#DC662D] hover:underline">
                                Читати далі →
                            </Link> */}
                        </div>
                    </article>

                    {/* --- Article 2 --- */}
                    <article className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200/80">
                        <Image
                            src={news4}
                            alt="Акція Приведи друга"
                            width={600}
                            height={400}
                            className="w-full h-auto" // Corrected: Image will scale proportionally
                        />
                        <div className="p-6">
                            <p className="text-sm text-gray-500 mb-2">10 серпня 2025</p>
                            <h3 className="text-xl font-bold mb-3 text-[#5F6061]">
                                Акція &quot;Приведи друга&quot; та отримай місяць інтернету
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Рекомендуйте нас друзям та сусідам і отримуйте місяць безкоштовного користування послугами за кожне нове підключення.
                            </p>
                            <Link href="/promotions/tvthree" className="font-bold text-[#DC662D] hover:underline">
                                Читати далі →
                            </Link>
                        </div>
                    </article>

                    {/* --- Article 3 --- */}
                    <article className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200/80">
                        <Image
                            src={news3}
                            alt="Розширення покриття мережі"
                            width={600}
                            height={400}
                            className="w-full h-auto" // Corrected: Image will scale proportionally
                        />
                        <div className="p-6">
                            <p className="text-sm text-gray-500 mb-2">05 серпня 2025</p>
                            <h3 className="text-xl font-bold mb-3 text-[#5F6061]">
                                Розширення покриття: ми підключили нові будинки
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Раді повідомити, що наша мережа тепер доступна за новими адресами у вашому районі. Перевірте можливість підключення!
                            </p>
                            {/* <Link href="/news/coverage-expansion" className="font-bold text-[#DC662D] hover:underline">
                                Читати далі →
                            </Link> */}
                        </div>
                    </article>
                </div>
            </div>
        </section>

                    {/* ----- FAQ SECTION ----- */}
                    <section className="py-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#5F6061]">Часті запитання</h2>
                        <div className="max-w-3xl mx-auto space-y-4">
                            <details className="bg-gray-50 border border-gray-200/80 rounded-lg p-4 cursor-pointer group">
                                <summary className="font-bold text-lg text-[#5F6061] flex justify-between items-center">
                                    Як швидко відбувається підключення?
                                    <ChevronDownIcon />
                                </summary>
                                <p className="mt-2 pt-2 border-t border-gray-200">Зазвичай, підключення займає 1-3 робочі дні з моменту подачі заявки. Наш майстер узгодить з вами зручний час.</p>
                            </details>
                            <details className="bg-gray-50 border border-gray-200/80 rounded-lg p-4 cursor-pointer group">
                                <summary className="font-bold text-lg text-[#5F6061] flex justify-between items-center">
                                    Чи можна замовити статичну IP-адресу?
                                    <ChevronDownIcon />
                                </summary>
                                <p className="mt-2 pt-2 border-t border-gray-200">Так, ви можете замовити послугу постійної зовнішньої IP-адреси. Вартість підключення — 200 грн (разово), щомісячна плата — {REAL_IP_PRICE} грн.</p>
                            </details>
                            <details className="bg-gray-50 border border-gray-200/80 rounded-lg p-4 cursor-pointer group">
                                <summary className="font-bold text-lg text-[#5F6061] flex justify-between items-center">
                                    Що робити, якщо зник інтернет?
                                    <ChevronDownIcon />
                                </summary>
                                <p className="mt-2 pt-2 border-t border-gray-200">Спочатку перезавантажте ваш роутер. Якщо це не допомогло, зверніться до нашої технічної підтримки за телефоном або у месенджерах. Ми на зв&apos;язку 24/7.</p>
                            </details>
                        </div>
                    </section>

                    {/* ----- CALL TO ACTION SECTION ----- */}
                    <section id="cta" className="py-12 my-8 bg-[#5F6061] rounded-lg text-center">
                        <h2 className="text-3xl font-extrabold mb-2 text-white">Готові до стабільного інтернету?</h2>
                        <p className="mb-6 max-w-xl mx-auto text-white/90">Залиште заявку, і наш менеджер зв&apos;яжеться з вами протягом 15 хвилин для уточнення деталей.</p>
                        
                        {/* === ВИПРАВЛЕНО: onClick тепер викликає загальний обробник === */}
                        <button 
                            onClick={handleOpenModalGeneral} 
                            className="bg-[#DC662D] text-white font-bold text-lg py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                        >
                            Залишити заявку
                        </button>
                    </section>

                    {/* ----- EXPANDED SEO TEXT ----- */}
                    <section className="py-12">
                        <div className="max-w-4xl mx-auto text-left">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#5F6061]">Batyevka.NET — ваш надійний інтернет-провайдер у Києві</h2>
                            <div className="leading-relaxed space-y-4 text-gray-700">
                                <p>Шукаєте стабільний та швидкий інтернет у Солом&apos;янському районі? Batyevka.NET пропонує підключення за сучасною технологією оптоволоконного інтернету (G-PON), що гарантує гігабітні швидкості та безперебійну роботу навіть за умов відключення світла. Ми — локальний провайдер, тому знаємо потреби наших клієнтів і завжди поруч, щоб надати якісну технічну підтримку.</p>
                                <p>Наші тарифи розроблені як для домашнього використання — перегляду фільмів у 4K, онлайн-ігор без затримок, так і для бізнес-задач, що вимагають симетричного каналу та високої швидкості передачі даних. Підключити гігабітний інтернет у Києві ще ніколи не було так просто. Обирайте Batyevka.NET та відчуйте справжню свободу у всесвітній мережі!</p>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
};

export default BatyevkaLandingPage;