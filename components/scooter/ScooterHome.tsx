"use client";

import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import {
    REAL_IP_PRICE_physic as REAL_IP_PRICE,
} from "@/constants/internet_speeds";
import { useModal } from "@/hooks/use-modal-store";
import { useToast } from "@/hooks/use-toast";

import news1 from "../../public/img/img_useful_information04.svg"
import news2 from "../../public/img/img_useful_information03.svg"
import news3 from "../../public/img/img_useful_information02.svg"
import news4 from "../../public/img/action01.svg"

// --- Іконки ---
const LightningIcon: React.FC = () => (
    <svg className="h-10 w-10 text-[#DC662D] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);
const ShieldCheckIcon: React.FC = () => (
    <svg className="h-10 w-10 text-[#DC662D] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917L12 22l9-1.083A12.02 12.02 0 0021 7.984a11.955 11.955 0 01-4.382-3.001z" />
    </svg>
);
const VideoCameraIcon: React.FC = () => (
    <svg className="h-10 w-10 text-[#DC662D] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);
const SupportIcon: React.FC = () => (
    <svg className="h-10 w-10 text-[#DC662D] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);
const ChevronDownIcon: React.FC = () => (
     <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-[#5F6061]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);
const CheckCircleIcon: React.FC = () => (
    <svg className="w-6 h-6 text-[#51B18B] shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);
const TvIconBlue: React.FC = () => (
    <svg className="w-6 h-6 text-[#5984B2] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-[#51B18B] shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);
const BatteryIcon: React.FC = () => (
    <svg className="w-8 h-8 text-[#51B18B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16M10 12h4m-8 8h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" opacity="0.3" />
    </svg>
);

// Базові дані пакетів MEGOGO
const megogoPlansData = [
    { id: 'free', name: 'Безкоштовне ТБ', desc: '202 національні та ефірні канали.', priceText: '0 грн/міс' },
    { id: 'national', name: 'Національне ТБ', desc: '289 каналів. Вигідний відпочинок: фільмові канали Star Family HD, [М] Комедія, FILMUADRAMA та 7000+ фільмів.', priceText: '+ 50 грн/міс' },
    { id: 'light', name: 'Легка', desc: '379 каналів. Для всієї родини: 11 500+ фільмів, пізнавальні History HD, спортивні Setanta Sports.', priceText: '+ 85 грн/міс' },
    { id: 'kino', name: 'Кіно+', desc: 'Колекція преміальних фільмових каналів для справжніх кіноманів.', priceText: '+ 129 грн/міс' },
    { id: 'optimal', name: 'Оптимальна', desc: '442 канали. Ідеальний баланс: 12 500+ фільмів, кіно від Disney та Paramount+, преміальні дитячі канали.', priceText: '+ 199 грн/міс' },
    { id: 'maximal', name: 'Максимальна', desc: '501 канал. Топова передплата: серіали HBO Max, Ліга Чемпіонів та 19 500+ фільмів у Full HD і 4К.', priceText: '+ 350 грн/міс' },
    { id: 'sport', name: 'Спорт', desc: '246 каналів. Епічний спорт: Ліга Чемпіонів, єдиноборства, MEGOGO Футбол HD та Єврокубки.', priceText: '+ 349 грн/міс' },
    { id: 'optimal_year', name: 'Оптимальна (1 рік)', desc: 'ТБ і Кіно: Оптимальна передплата одразу на 12 місяців.', priceText: '+ 1793 грн/рік', isAnnual: true },
    { id: 'maximal_year', name: 'Максимальна (1 рік)', desc: 'ТБ і Кіно: Топова передплата одразу на 12 місяців.', priceText: '+ 3232 грн/рік', isAnnual: true }
];

// Згруповані канали для випадайки
const freeChannelsGroups = [
    { category: "Новини", channels: ["24 канал", "5 канал HD", "Еспресо TV HD", "Телеканал Рада", "Перший", "FREEДОМ", "Euronews ENG", "France 24 Français", "France 24 English", "France 24 Arabic", "Київ", "Апостроф TV", "TVP World", "NHK World", "France 24 Español", "МИ - УКРАЇНА HD"] },
    { category: "Фільми та Серіали", channels: ["Телесеріал", "Розслідування Мердока", "Детективні хроніки", "Опер за викликом+", "Сімейні мелодрами+", "[M] Речдок", "[М] Кінопортал", "Хіти Мегого Родина", "Хіти Мегого Драма", "Хіти Мегого Адреналін", "[M] Кінокласика", "[M] БарДак", "[M] Драматичний", "[M] Light cinema 1", "[M] Light cinema 2", "[M] Танька і Володька", "[M] Одного разу під Полтавою", "[М] Movie Library", "[M] Теленовели 2", "[M] Мovie mode 1", "[M] Мovie mode 2", "[M] Doramas 1", "[M] Doramas 2", "[M] Детективне кіно", "[M] Кримінальне кіно", "[M] Мелодрами", "[M] Віра", "[M] Трейлери", "УНІАН Серіал"] },
    { category: "Пізнавальні", channels: ["Eco TV", "Classical Harmony", "DIY", "Мандри", "Пригоди", "Документальний", "Світ навиворіт+", "Загублений світ+", "[M] Доктор Комаровський", "[M] Active TV", "One Planet", "[M] eXplore", "Про Київ", "Знаєм 24", "[M] Zoosvit", "[M] Реальні історії"] },
    { category: "Розважальні", channels: ["Суспільне Культура", "Орел і Решка", "ДІМ HD", "Сімейний", "МИ - УКРАЇНА + HD", "ЖВЛ+", "[M] Стосується кожного", "Gagsnetwork", "Панянка-селянка+", "Вікторина", "[M] Говорить вся країна", "[M] Гумористичний", "[M] Містика", "Сонце+", "[M] Солодкі фантазії"] },
    { category: "Спорт", channels: ["Extreme Sports", "Спорт огляд", "Суспільне Спорт", "Трофей Premium"] },
    { category: "Дитячі", channels: ["Пізнавальний Kids", "Мультиленд", "Smart Kids", "[M] Дитячий садок", "[M] KIDDISVIT", "[M] Kids town", "[M] LOLka", "Дитячий 2", "[M] Little kittens"] },
    { category: "Музика", channels: ["M1 HD", "M2 HD", "#НАШЕ ретро", "ЕТНО КАНАЛ", "MEGOGO MUSIC"] },
    { category: "Радіо", channels: ["Radio NV", "Kiss FM", "Мелодія FM", "Наше Радіо", "Radio ROKS", "Radio Relax", "Хіт FM", "Radio Jazz", "Радіо МАКСИМУМ", "Радіо Nostalgie", "Люкс ФМ", "Радіо П'ятниця", "Lounge Fm", "Авторадіо Україна", "NRJ радіо", "Львівська Хвиля", "Magic Radio", "DJFM", "Power FM", "Шлягер FM", "Радіо Закарпаття - FM", "Українське радіо", "Радіо Промінь", "Радіо Культура", "FM Галичина", "ПЕРЕЦЬ FM", "Радіо Байрактар", "КИЇВ - FM", "Classic Radio", "Армія FM", "Ми – Україна Радіо", "Накипіло", "Тернопільська Хвиля", "Радіоточка", "Champion Radio", "РАІ", "Radio Прищепкін TOP40 UA", "SUN FM", "РАДІОПІХОТА", "Люкс ФМ Українські Хіти", "Люкс ФМ Chill and Relax", "Люкс ФМ Золоті Хіти", "Люкс ФМ Сучасні Хіти", "K-Pop 24"] },
    { category: "Блогери", channels: ["Кухня", "Подорожі", "Розваги", "Риболовля", "Чоловіче хобі", "Б'юті-блог", "Будівництво та ремонт", "Тварини", "Музичний", "World of Tanks", "Minecraft", "Лайфстайл", "Пізнавальний", "Авто/Мото", "Рукоділля", "Сад і город", "Українське", "Сім'я Каті та Макса", "Кулінарія", "Кухня UA", "Авто/Мото UA", "Залипальне", "Serginio Fishing", "Спортивний", "Життя у лісі", "Рецепти Алли Ковальчук", "Гід техніки", "[M] Standup", "Футбольний", "[M] Goods from AliExpress", "Ньюспалм", "Євген Клопотенко", "[M] Книгарня"] },
    { category: "Освіта, Подкасти та Інше", channels: ["Історія без міфів", "Креативна практика", "Forbes", "Блог Економічний", "[M] Цивільна підготовка", "[M] Подкасти", "[M] Подкасти The Ukrainians", "[M] Розмови про кіно", "[M] Колекція Радіо Культура", "[M] Поезія", "[М] Укрліт", "Надія", "ICTV HD", "Інтер HD", "1+1 Марафон HD", "Milady TELEVISION", "Дніпро ТV HD", "BTQ", "Караван TV", "Наталі", "ТЮСО", "АРМІЯ ТБ", "Товари з AliExpress", "Твій ТВ", "Капучино TV", "КОНКУРЕНТ. УКРАЇНА", "ДІМ+", "PROVENCE", "fashion", "BIKINI18"] }
];

const BatyevkaLandingPage: React.FC = () => {
    const { onOpen } = useModal();
    const { toast } = useToast();

    // За замовчуванням виділений тариф 1 Гбіт/с
    const [selectedTariff, setSelectedTariff] = useState<number | null>(1); 

    // --- ЛОГІКА ДЛЯ СВАЙПА МИШКОЮ (Drag to Scroll) ---
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        if (sliderRef.current) {
            setStartX(e.pageX - sliderRef.current.offsetLeft);
            setScrollLeft(sliderRef.current.scrollLeft);
        }
    };
    const onMouseLeave = () => setIsDragging(false);
    const onMouseUp = () => setIsDragging(false);
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !sliderRef.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; 
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };
    // --------------------------------------------------

    const isMegogoIncluded = (megogoId: string, tariffSpeedId: number | null) => {
        if (!tariffSpeedId) return false;
        if (tariffSpeedId === 1 && megogoId === 'free') return true;
        if (tariffSpeedId === 3 && (megogoId === 'free' || megogoId === 'national')) return true;
        if (tariffSpeedId === 5 && (megogoId === 'free' || megogoId === 'national' || megogoId === 'light')) return true;
        if (tariffSpeedId === 10 && (megogoId === 'free' || megogoId === 'national' || megogoId === 'light' || megogoId === 'optimal')) return true;
        return false;
    };

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

    const scrollToCTA = () => {
        const element = document.getElementById('cta');
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: y - 100, behavior: 'smooth' });
        }
    };

    // Обробник кліку на тариф (БЕЗ скролу екрана вниз)
    const handleTariffClick = (tariffId: number) => {
        setSelectedTariff(tariffId);
    };

    const jsonLdData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Batyevka.NET", "item": "https://www.batyevka.net/" }
                ]
            },
            {
                "@type": "Organization",
                "name": "Batyevka.NET",
                "url": "https://www.batyevka.net",
                "description": "Технологічний лідер та надійний інтернет-провайдер у Солом'янському районі Києва. 100% оптика безпосередньо у квартиру за передовими технологіями GPON та XGS-PON до 10 Гбіт/с. Гарантовані 100 годин інтернету без світла.",
                "logo": "https://www.batyevka.net/logo.png",
                "contactPoint": {
                    "@type": "ContactPoint", "telephone": "+380-800-30-32-30", "contactType": "customer service", "areaServed": "UA", "availableLanguage": "Ukrainian"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Як швидко відбувається підключення?", "acceptedAnswer": { "@type": "Answer", "text": "Зазвичай, підключення займає 1-3 робочі дні з моменту подачі заявки. Наш майстер узгодить з вами зручний час." } },
                    { "@type": "Question", "name": "Чи можна замовити статичну IP-адресу?", "acceptedAnswer": { "@type": "Answer", "text": "Так, ви можете замовити послугу постійної зовнішньої IP-адреси. Вартість підключення — 200 грн разово, щомісячна плата — 60 грн." } },
                    { "@type": "Question", "name": "Що робити, якщо зник інтернет?", "acceptedAnswer": { "@type": "Answer", "text": "Спочатку перезавантажте ваш роутер. Термінал вимикати необов'язково." } }
                ]
            }
        ]
    };

    return (
        <div className='mt-5 scroll-smooth'>
            <Head>
                <title>Batyevka.NET — Гігабітний інтернет у Солом’янському районі</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Шукаєте стабільний, справді безлімітний та швидкий інтернет у Солом'янському районі? Batyevka.NET пропонує підключення за передовими технологіями GPON та XGS-PON." />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>

            <style dangerouslySetInnerHTML={{__html: `
                html { scroll-behavior: smooth; }
                details > summary { list-style: none; outline: none; }
                details > summary::-webkit-details-marker { display: none; }
                
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .swipe-container {
                    display: flex;
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;
                    gap: 1.5rem;
                    padding-bottom: 1.5rem;
                    scroll-behavior: smooth;
                    -webkit-overflow-scrolling: touch;
                }
                .swipe-item {
                    min-width: 250px;
                    max-width: 270px;
                    scroll-snap-align: start;
                    flex-shrink: 0;
                }
                
                /* Кастомний скролбар для випадайки каналів */
                .channel-scroll::-webkit-scrollbar { width: 5px; }
                .channel-scroll::-webkit-scrollbar-track { background: #f8f9fa; border-radius: 10px; }
                .channel-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
                .channel-scroll::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
            `}} />

            <div className="bg-white text-[#5F6061] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
                <main className="container mx-auto px-4 py-8 md:py-16">

                    {/* ----- БЛОК 1. HERO SECTION ----- */}
                    <section className="text-center py-10 md:py-16 mb-8 max-w-5xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 text-[#5F6061]">
                            Інтернет <span className="text-[#DC662D]">10 Гбіт/с</span> <br className="hidden md:block" /> за технологією XGS-PON
                        </h1>
                        
                        <div className="max-w-4xl mx-auto mb-12">
                            <p className="text-lg md:text-xl text-[#5F6061] mb-10 leading-relaxed">
                                <span className="text-[#DC662D] font-extrabold">Batyevka</span><span className="text-[#333333] font-extrabold">.NET</span> — технологічний лідер та ваш надійний інтернет-провайдер у Солом'янському районі Києва. Ми заводимо 100% оптику безпосередньо у квартиру за передовими технологіями GPON та XGS-PON. Наші абоненти користуються інтернетом без жодних прихованих лімітів на обсяг трафіку чи урізання швидкості. Відчуйте безкомпромісну стабільність, симетричний канал та нульовий пінг для будь-яких завдань.
                            </p>
                            
                            {/* Преміальна плашка "Енергонезалежність" */}
                            <div className="bg-[#fcfbfe] border border-gray-200/80 rounded-[28px] p-6 md:p-8 shadow-sm relative overflow-hidden text-left flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#51B18B]"></div>
                                <div className="bg-white border border-[#51B18B]/20 p-4 rounded-2xl shadow-sm flex-shrink-0">
                                    <BatteryIcon />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#5F6061] mb-3 flex items-center gap-3">
                                        Інтернет 100 годин без світла
                                    </h2>
                                    <p className="text-[#5F6061] text-base leading-relaxed">
                                        Наш район обслуговують усього три магістральні вузли, які ми надійно зарезервували на 100-120 годин автономної роботи. Завдяки технології GPON у самих будинках немає жодного активного обладнання — лише пасивні "скляні" оптичні кабелі. Сигнал приходить у вашу квартиру завжди, незалежно від наявності світла у вашому будинку чи в районі загалом. Під час блекаутів інтернет нікуди не зникає — вам залишається лише заживити свій домашній роутер або підключити ноутбук кабелем безпосередньо до нашого оптичного термінала.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button onClick={scrollToCTA} className="bg-[#DC662D] hover:bg-[#c45a27] text-white font-bold text-xl py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md">
                            Підключитись
                        </button>
                    </section>

                    {/* ----- БЛОК 2. ФЛАГМАНСЬКИЙ ТАРИФ (Широка горизонтальна картка) ----- */}
                    <section className="py-12">
                        <div className="flex justify-center px-2 md:px-0">
                            <article
                                onClick={() => handleTariffClick(1)}
                                className={`rounded-[32px] overflow-hidden flex flex-col md:flex-row w-full max-w-[950px] transition-all duration-300 cursor-pointer bg-white border ${
                                    selectedTariff === 1
                                    ? 'border-[#DC662D] shadow-2xl ring-1 ring-[#DC662D]'
                                    : 'border-gray-200 shadow-md hover:shadow-xl'
                                }`}
                            >
                                {/* Ліва частина: Ціна і Кнопка */}
                                <div className="w-full md:w-[40%] bg-gray-50/50 p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 relative">
                                    <span className="absolute top-6 left-8 bg-[#DC662D] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">Хіт продажу</span>
                                    
                                    <div className="mt-8">
                                        <h3 className="text-3xl md:text-4xl font-extrabold mb-1 text-[#5F6061]">1 Гбіт/с</h3>
                                        <span className="text-gray-400 font-medium text-sm block mb-6">GPON технологія</span>
                                        <p className="text-6xl md:text-7xl font-black text-[#DC662D] mb-8">250<span className="text-xl font-bold text-[#5F6061]"> грн/міс</span></p>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleOpenModalGeneral(); }}
                                            className="w-full text-center bg-[#DC662D] hover:bg-[#c45a27] text-white font-bold text-lg py-4 px-4 rounded-xl transition-colors shadow-sm"
                                        >
                                            Залишити заявку
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Права частина: Переваги і Випадайка з каналами */}
                                <div className="w-full md:w-[60%] p-8 md:p-10 flex flex-col">
                                    <ul className="space-y-4 text-[#5F6061] font-medium text-base mb-8">
                                        <li className="flex items-center gap-3">
                                            <CheckIcon /> 100% оптика безпосередньо у квартиру
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <CheckIcon /> Безлімітний трафік без урізань
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <CheckIcon /> Гарантована робота без світла
                                        </li>
                                    </ul>

                                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                        <div className="flex-1 bg-[#eaf5ef] p-4 rounded-2xl border border-[#51B18B]/20 flex items-start gap-3">
                                            <div className="mt-0.5"><CheckIcon /></div>
                                            <p className="font-bold text-[#51B18B] text-sm leading-snug">Постійна регулярна ціна назавжди</p>
                                        </div>
                                        <div className="flex-1 bg-[#f0f5fa] p-4 rounded-2xl border border-[#5984B2]/20 flex items-start gap-3">
                                            <div className="mt-0.5"><TvIconBlue /></div>
                                            <p className="font-bold text-[#5984B2] text-sm leading-snug">Безкоштовне ТБ (202 кан.) вже у тарифі</p>
                                        </div>
                                    </div>
                                    
                                    {/* Випадайка Деталі */}
                                    <details className="w-full group bg-white border border-gray-200 rounded-xl overflow-hidden mb-4" onClick={(e) => e.stopPropagation()}>
                                        <summary className="font-bold p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer flex justify-between items-center text-[#5F6061] select-none transition-colors">
                                            <span className="text-sm">Детальніше про тариф</span>
                                            <ChevronDownIcon />
                                        </summary>
                                        <div className="p-5 text-sm text-[#5F6061] border-t border-gray-200 leading-relaxed bg-white">
                                            Це акційний тариф для нових абонентів. Пропозиція діє за умови подачі заявки до 30 вересня. Спеціальна ціна 250 грн/міс фіксується як ваша постійна регулярна абонплата на весь час користування послугами. Вартість підключення — 299 грн.
                                        </div>
                                    </details>

                                    {/* Випадайка Канали */}
                                    <details className="w-full group bg-white border border-[#5984B2]/30 rounded-xl overflow-hidden mt-auto" onClick={(e) => e.stopPropagation()}>
                                        <summary className="font-bold p-4 bg-[#f0f5fa] hover:bg-[#e1edf7] cursor-pointer flex justify-between items-center text-[#5984B2] select-none transition-colors">
                                            <div className="flex items-center gap-3">
                                                <TvIconBlue />
                                                <span className="text-sm">Список каналів Безкоштовного ТБ (202)</span>
                                            </div>
                                            <ChevronDownIcon />
                                        </summary>
                                        <div className="p-6 max-h-[350px] overflow-y-auto border-t border-[#5984B2]/20 bg-white channel-scroll">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                {freeChannelsGroups.map((cat, idx) => (
                                                    <div key={idx}>
                                                        <h5 className="font-bold text-[#DC662D] text-[11px] mb-3 uppercase tracking-widest border-b border-gray-100 pb-1">{cat.category}</h5>
                                                        <ul className="text-xs text-gray-500 space-y-2">
                                                            {cat.channels.map((ch, i) => (
                                                                <li key={i} className="leading-snug flex items-start gap-2">
                                                                    <span className="text-gray-300 font-bold">•</span> 
                                                                    <span>{ch}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </details>
                                </div>
                            </article>
                        </div>
                    </section>

                    {/* ----- БЛОК 3. ПЕРЕВАГИ ----- */}
                    <section className="py-16">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <article className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <LightningIcon />
                                <h3 className="text-xl font-bold mb-3 text-[#5F6061]">Супершвидкість</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Оптоволоконні лінії G-PON та XGS-PON.</p>
                            </article>
                            <article className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <ShieldCheckIcon />
                                <h3 className="text-xl font-bold mb-3 text-[#5F6061]">Стабільність</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Працюємо навіть під час енергетичних викликів.</p>
                            </article>
                            <article className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <VideoCameraIcon />
                                <h3 className="text-xl font-bold mb-3 text-[#5F6061]">MEGOGO ТБ</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Топовий спорт, серіали від HBO та 500+ каналів.</p>
                            </article>
                            <article className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                <SupportIcon />
                                <h3 className="text-xl font-bold mb-3 text-[#5F6061]">Підтримка</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Усі виклики майстра входять у вартість тарифу.</p>
                            </article>
                        </div>
                    </section>

                    {/* ----- БЛОК 4. XGS-PON ТАРИФИ ----- */}
                    <section className="py-20 bg-[#fcfbfe] rounded-[3rem] border border-gray-100 px-4">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-[#5F6061] mb-6">Надшвидкісні тарифи XGS-PON</h2>
                            <p className="text-[#5F6061] text-lg leading-relaxed">Для найвимогливіших завдань: професійного геймінгу, стрімінгу у 8K та роботи з великими обсягами даних. Симетричний канал (швидкість завантаження дорівнює швидкості віддачі).</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto text-left">
                            {/* 3 ГБІТ */}
                            <article onClick={() => handleTariffClick(3)} className={`bg-white rounded-[32px] cursor-pointer transition-all border flex flex-col overflow-hidden ${selectedTariff === 3 ? 'border-[#5F6061] shadow-2xl transform md:-translate-y-2 ring-1 ring-[#5F6061]' : 'border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1'}`}>
                                <div className={`p-8 border-b border-gray-100 ${selectedTariff === 3 ? 'bg-gray-50/50' : 'bg-white'}`}>
                                    <h3 className="text-2xl font-bold mb-3 text-[#5F6061]">3 Гбіт/с</h3>
                                    <p className="text-4xl font-extrabold text-[#DC662D]">500<span className="text-lg font-bold text-[#5F6061]"> грн/міс</span></p>
                                </div>
                                <div className="p-8 flex-grow">
                                    <ul className="space-y-4 text-[#5F6061] font-medium text-sm mb-8">
                                        <li className="flex items-center gap-3"><CheckIcon /> 100% Оптика у квартиру</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Симетричний канал</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Відсутність лімітів</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Пінг для геймінгу &lt;2мс</li>
                                    </ul>
                                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex justify-between items-center">
                                        <span className="text-gray-500 text-sm font-medium">Підключення:</span>
                                        <span className="font-bold text-[#5F6061]">1999 грн</span>
                                    </div>
                                </div>
                                <div className={`p-6 mt-auto border-t transition-colors ${selectedTariff === 3 ? 'bg-[#eef4ff] border-[#5984B2]/20' : 'bg-gray-50 border-gray-100'}`}>
                                    <p className={`text-sm font-bold flex items-center justify-center gap-2 ${selectedTariff === 3 ? 'text-[#5984B2]' : 'text-[#5F6061]'}`}>
                                        <TvIconBlue />
                                        Національне ТБ вже у тарифі
                                    </p>
                                </div>
                            </article>
                            
                            {/* 5 ГБІТ */}
                            <article onClick={() => handleTariffClick(5)} className={`bg-white rounded-[32px] cursor-pointer transition-all border flex flex-col overflow-hidden ${selectedTariff === 5 ? 'border-[#5F6061] shadow-2xl transform md:-translate-y-2 ring-1 ring-[#5F6061]' : 'border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1'}`}>
                                <div className={`p-8 border-b border-gray-100 ${selectedTariff === 5 ? 'bg-gray-50/50' : 'bg-white'}`}>
                                    <h3 className="text-2xl font-bold mb-3 text-[#5F6061]">5 Гбіт/с</h3>
                                    <p className="text-4xl font-extrabold text-[#DC662D]">800<span className="text-lg font-bold text-[#5F6061]"> грн/міс</span></p>
                                </div>
                                <div className="p-8 flex-grow">
                                    <ul className="space-y-4 text-[#5F6061] font-medium text-sm mb-8">
                                        <li className="flex items-center gap-3"><CheckIcon /> 100% Оптика у квартиру</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Симетричний канал</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Відсутність лімітів</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Пінг для геймінгу &lt;2мс</li>
                                    </ul>
                                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex justify-between items-center">
                                        <span className="text-gray-500 text-sm font-medium">Підключення:</span>
                                        <span className="font-bold text-[#5F6061]">4999 грн</span>
                                    </div>
                                </div>
                                <div className={`p-6 mt-auto border-t transition-colors ${selectedTariff === 5 ? 'bg-[#eef4ff] border-[#5984B2]/20' : 'bg-gray-50 border-gray-100'}`}>
                                    <p className={`text-sm font-bold flex items-center justify-center gap-2 ${selectedTariff === 5 ? 'text-[#5984B2]' : 'text-[#5F6061]'}`}>
                                        <TvIconBlue />
                                        ТБ Легка вже у тарифі
                                    </p>
                                </div>
                            </article>

                            {/* 10 ГБІТ */}
                            <article onClick={() => handleTariffClick(10)} className={`bg-white rounded-[32px] cursor-pointer transition-all border flex flex-col overflow-hidden ${selectedTariff === 10 ? 'border-[#5F6061] shadow-2xl transform md:-translate-y-2 ring-1 ring-[#5F6061]' : 'border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1'}`}>
                                <div className={`p-8 border-b border-gray-100 ${selectedTariff === 10 ? 'bg-gray-50/50' : 'bg-white'}`}>
                                    <h3 className="text-2xl font-bold mb-3 text-[#5F6061]">10 Гбіт/с</h3>
                                    <p className="text-4xl font-extrabold text-[#DC662D]">2000<span className="text-lg font-bold text-[#5F6061]"> грн/міс</span></p>
                                </div>
                                <div className="p-8 flex-grow">
                                    <ul className="space-y-4 text-[#5F6061] font-medium text-sm mb-8">
                                        <li className="flex items-center gap-3"><CheckIcon /> 100% Оптика у квартиру</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Симетричний канал</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Відсутність лімітів</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Пінг для геймінгу &lt;2мс</li>
                                    </ul>
                                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex justify-between items-center">
                                        <span className="text-gray-500 text-sm font-medium">Підключення:</span>
                                        <span className="font-bold text-[#5F6061]">6999 грн</span>
                                    </div>
                                </div>
                                <div className={`p-6 mt-auto border-t transition-colors ${selectedTariff === 10 ? 'bg-[#eef4ff] border-[#5984B2]/20' : 'bg-gray-50 border-gray-100'}`}>
                                    <p className={`text-sm font-bold flex items-center justify-center gap-2 ${selectedTariff === 10 ? 'text-[#5984B2]' : 'text-[#5F6061]'}`}>
                                        <TvIconBlue />
                                        ТБ Оптимальна вже у тарифі
                                    </p>
                                </div>
                            </article>
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link href="/xgspon" className="inline-block text-[#5F6061] font-bold text-base hover:text-[#DC662D] hover:underline underline-offset-4 transition-all">
                                Дізнатись більше про технологію →
                            </Link>
                        </div>
                    </section>

                    {/* ----- БЛОК 5. MEGOGO SECTION ----- */}
                    <section id="megogo-section" className="py-20 overflow-hidden">
                        <div className="text-center mb-12 max-w-3xl mx-auto px-4">
                            {/* Стилізований векторний логотип MEGOGO */}
                            <div className="flex justify-center mb-6">
                                <svg viewBox="0 0 160 30" className="h-8">
                                    <text x="0" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="28" letterSpacing="-1.5">
                                        <tspan fill="#1A1A1A">ME</tspan>
                                        <tspan fill="#51B18B">GO</tspan>
                                        <tspan fill="#DC662D">GO</tspan>
                                    </text>
                                </svg>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5F6061] mb-5">Розширте можливості з передплатами</h2>
                            <p className="text-[#5F6061] text-lg leading-relaxed">Інтерактив телебачення нового покоління. Пауза і перемотка ефіру — це зручно, коли шукаєш що подивитися. Ставте на паузу або дивіться улюблені шоу в записі до 14 днів! <br className="hidden md:block"/> Гортайте картки вбік.</p>
                        </div>
                        
                        <div 
                            ref={sliderRef}
                            onMouseDown={onMouseDown}
                            onMouseLeave={onMouseLeave}
                            onMouseUp={onMouseUp}
                            onMouseMove={onMouseMove}
                            className={`swipe-container px-4 md:px-6 max-w-[1400px] mx-auto select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                        >
                            {megogoPlansData.map((plan) => {
                                const included = isMegogoIncluded(plan.id, selectedTariff);

                                return (
                                    <div key={plan.id} className={`swipe-item bg-white rounded-3xl border ${included ? 'border-[#51B18B] shadow-md ring-1 ring-[#51B18B]' : 'border-gray-200 shadow-sm'} p-6 flex flex-col justify-between hover:shadow-lg transition-all`}>
                                        <div className="mb-6 pointer-events-none">
                                            {plan.isAnnual && <span className="inline-block bg-[#DC662D]/10 text-[#DC662D] text-[10px] font-extrabold px-3 py-1.5 rounded-lg mb-4 uppercase tracking-widest">Річна економія</span>}
                                            <h4 className="font-bold text-xl text-[#5F6061] mb-3">{plan.name}</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed min-h-[70px]">{plan.desc}</p>
                                        </div>
                                        
                                        <div className="mt-auto border-t border-gray-100 pt-5 pointer-events-none">
                                            {included ? (
                                                <div className="bg-[#eaf5ef] text-[#51B18B] text-sm font-bold px-4 py-3 rounded-xl text-center flex items-center justify-center gap-2">
                                                    <CheckIcon />
                                                    Вже у тарифі
                                                </div>
                                            ) : (
                                                <div className="bg-[#f8f9fa] text-[#5984B2] text-sm font-bold px-4 py-3 rounded-xl text-center">
                                                    {plan.priceText}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        
                        <div className="text-center mt-8">
                            <Link href="/tv" className="inline-block text-[#DC662D] font-bold text-lg hover:text-[#c45a27] hover:underline underline-offset-4 transition-all">
                                Усі деталі та списки каналів у розділі Телебачення →
                            </Link>
                        </div>
                    </section>

                    {/* ----- БЛОК 6. НОВИНИ (Класичні картки з картинками) ----- */}
                    <section className="py-16 bg-[#fcfbfe] rounded-3xl border border-gray-100 mt-8">
                        <div className="container mx-auto px-4 md:px-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#5F6061]">Останні новини</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {/* Новина 1 */}
                                <article className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                                    <Image src={news1} alt="Планові технічні роботи" width={600} height={400} className="w-full h-auto" draggable="false" />
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <p className="text-sm font-extrabold text-[#51B18B] mb-3 uppercase tracking-widest">14 травня 2026</p>
                                        <h3 className="text-xl font-bold mb-3 text-[#5F6061] leading-snug">Планові роботи з модернізації мережі</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed flex-grow">Для забезпечення найвищої якості зв'язку, ми проведемо короткі технічні роботи магістрального обладнання. Цього четверга з 05:00 до 06:00 ранку.</p>
                                    </div>
                                </article>

                                {/* Новина 2 */}
                                <article className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                                    <Image src={news4} alt="Акція Приведи друга" width={600} height={400} className="w-full h-auto" draggable="false" />
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <p className="text-sm font-extrabold text-[#51B18B] mb-3 uppercase tracking-widest">10 серпня 2025</p>
                                        <h3 className="text-xl font-bold mb-3 text-[#5F6061] leading-snug">Акція "Приведи друга" та отримай місяць інтернету</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed flex-grow">Рекомендуйте нас друзям та сусідам і отримуйте місяць безкоштовного користування послугами за кожне нове підключення.</p>
                                    </div>
                                </article>

                                {/* Новина 3 */}
                                <article className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full">
                                    <Image src={news3} alt="Розширення покриття" width={600} height={400} className="w-full h-auto" draggable="false" />
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <p className="text-sm font-extrabold text-[#51B18B] mb-3 uppercase tracking-widest">05 серпня 2025</p>
                                        <h3 className="text-xl font-bold mb-3 text-[#5F6061] leading-snug">Розширення покриття: ми підключили нові будинки</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed flex-grow">Раді повідомити, що наша мережа тепер доступна за новими адресами у вашому районі. Перевірте можливість підключення!</p>
                                    </div>
                                </article>
                            </div>
                            
                            {/* Блок Телеграм - Лаконічний та адаптивний */}
                            <div className="text-center mt-4">
                                <p className="text-base text-[#5F6061] mb-2 font-medium">Всі деталі новин ми постимо в групі телеграм за посиланням:</p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                                    <a href="https://t.me/batyevka_chat" target="_blank" rel="noopener noreferrer" className="font-bold text-[#51B18B] hover:underline text-lg">https://t.me/batyevka_chat</a> 
                                    <span className="font-medium text-[#5F6061] text-sm">нік: @batyevka_chat</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ----- БЛОК 7. FAQ SECTION ----- */}
                    <section className="py-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#5F6061]">Часті запитання</h2>
                        <div className="max-w-3xl mx-auto space-y-4 px-4">
                            <details className="bg-white border border-gray-200/80 rounded-2xl p-6 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                                <summary className="font-bold text-lg text-[#5F6061] flex justify-between items-center outline-none select-none">
                                    Як швидко відбувається підключення?
                                    <ChevronDownIcon />
                                </summary>
                                <p className="mt-4 pt-4 border-t border-gray-100 text-[#5F6061] text-sm leading-relaxed">Зазвичай, підключення займає 1-3 робочі дні з моменту подачі заявки. Наш майстер узгодить з вами зручний час.</p>
                            </details>
                            <details className="bg-white border border-gray-200/80 rounded-2xl p-6 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                                <summary className="font-bold text-lg text-[#5F6061] flex justify-between items-center outline-none select-none">
                                    Чи можна замовити статичну IP-адресу?
                                    <ChevronDownIcon />
                                </summary>
                                <p className="mt-4 pt-4 border-t border-gray-100 text-[#5F6061] text-sm leading-relaxed">Так, ви можете замовити послугу постійної зовнішньої IP-адреси. Вартість підключення — 200 грн разово, щомісячна плата — 60 грн.</p>
                            </details>
                            <details className="bg-white border border-gray-200/80 rounded-2xl p-6 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                                <summary className="font-bold text-lg text-[#5F6061] flex justify-between items-center outline-none select-none">
                                    Що робити, якщо зник інтернет?
                                    <ChevronDownIcon />
                                </summary>
                                <p className="mt-4 pt-4 border-t border-gray-100 text-[#5F6061] text-sm leading-relaxed">Спочатку перезавантажте ваш роутер. Термінал вимикати необов'язково. Якщо це не допомогло, зверніться до нашої технічної підтримки.</p>
                            </details>
                        </div>
                    </section>

                    {/* ----- БЛОК 8. CALL TO ACTION SECTION ----- */}
                    <section id="cta" className="py-16 my-8 bg-[#5F6061] rounded-[32px] text-center shadow-lg mx-4 md:mx-0">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">Готові до стабільного інтернету?</h2>
                        <p className="mb-10 max-w-xl mx-auto text-white/90 text-lg">Залиште заявку, і наш менеджер зв'яжеться з вами протягом 15 хвилин для уточнення деталей.</p>

                        <button
                            onClick={handleOpenModalGeneral}
                            className="bg-[#DC662D] hover:bg-[#c45a27] text-white font-bold text-xl py-4 px-14 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                        >
                            Залишити заявку
                        </button>
                    </section>

                    {/* ----- БЛОК 9. ВИДИМИЙ SEO ТЕКСТ ----- */}
                    <section className="py-16 mt-8 px-4">
                        <div className="max-w-5xl mx-auto text-left bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#5F6061]">Batyevka.NET — ваш надійний інтернет-провайдер у Києві</h2>
                            <div className="leading-loose space-y-6 text-gray-600 text-base">
                                <p>Шукаєте стабільний, справді безлімітний та швидкий інтернет у Солом'янському районі? Batyevka.NET пропонує підключення за передовими оптичними технологіями GPON та XGS-PON. Ми заводимо персональний оптоволоконний кабель безпосередньо у вашу квартиру, що гарантує безкомпромісну швидкість до 10 Гбіт/с та симетричний канал без урізань і прихованих лімітів.</p>
                                <p>Наша головна перевага — надійна енергонезалежність. Завдяки промисловому резервуванню магістральних вузлів, наші абоненти залишаються онлайн до 120 годин під час найважчих блекаутів. Вам достатньо лише мати павербанк для вашого роутера. Підключайтеся вже сьогодні, беріть участь в акціях для нових абонентів та насолоджуйтесь інтерактивним телебаченням MEGOGO і преміальним сервісом від лідера району!</p>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
            {/* JSON-LD Data для Google та AI-Агентів */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
        </div>
    );
};

export default BatyevkaLandingPage;
