"use client";

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import SpeedometerGauge from './SpeedometerGauge';

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

// ============================================================
// SpeedGaugeSection — Картка тарифу "3 Гік" з вбудованим спідометром
// ============================================================
interface SpeedGaugeSectionProps {
    onOpen: () => void;
    freeChannelsGroups: { category: string; channels: string[] }[];
}

const SpeedGaugeSection: React.FC<SpeedGaugeSectionProps> = ({ onOpen, freeChannelsGroups }) => {
    return (
        <section className="py-12">
            <div className="flex justify-center px-2 md:px-0">
                <article className="rounded-[32px] overflow-hidden flex flex-col md:flex-row w-full max-w-[980px] bg-white border border-[#DC662D] shadow-2xl ring-1 ring-[#DC662D]">

                    {/* Ліва частина: заголовок + ціна → спідометр → кнопка */}
                    <div className="w-full md:w-[45%] bg-gray-50/50 p-6 md:p-8 flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-100">

                        {/* ── БЛОК 1: Бейджі + технологія + ЦІНА (єдина воронка вгорі) ── */}
                        <div className="w-full mb-3">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                <span className="bg-[#DC662D] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm flex-shrink-0">Хіт продажу</span>
                                <span className="bg-[#DC662D]/10 text-[#DC662D] text-[12px] font-extrabold px-3 py-1.5 rounded-full border border-[#DC662D]/25 flex-shrink-0">«3 Гік»</span>
                            </div>
                            <span className="text-gray-400 font-medium text-xs ml-0.5">XGS-PON технологія</span>
                            {/* Ціна — одразу під технологією */}
                            <p className="text-5xl md:text-6xl font-black text-[#DC662D] mt-2 leading-none">
                                379<span className="text-xl font-bold text-[#5F6061]"> грн/міс</span>
                            </p>
                        </div>

                        {/* ── БЛОК 2: Спідометр ── */}
                        <div className="w-full">
                            <SpeedometerGauge />
                        </div>

                        {/* ── БЛОК 3: Кнопка ── */}
                        <button
                            onClick={onOpen}
                            className="w-full text-center bg-[#DC662D] hover:bg-[#c45a27] text-white font-bold text-lg py-4 px-4 rounded-xl transition-colors shadow-sm"
                        >
                            Замовити (залишилось 20)
                        </button>
                    </div>

                    {/* Права частина: буліти + TV + випадайки */}
                    <div className="w-full md:w-[55%] p-8 md:p-10 flex flex-col">
                        <ul className="space-y-2.5 text-[#5F6061] font-medium text-base mb-6">
                            <li className="flex items-center gap-3"><CheckIcon /> 100% оптика XGS-PON у квартиру</li>
                            <li className="flex items-center gap-3"><CheckIcon /> Безлімітний трафік</li>
                            <li className="flex items-center gap-3"><CheckIcon /> Симетричний канал</li>
                            <li className="flex items-center gap-3"><CheckIcon /> Пінг менше 2 мс</li>
                            <li className="flex items-center gap-3"><CheckIcon /> Працює без світла понад 100 годин</li>
                        </ul>

                        {/* Одна TV-випадайка (UX-фікс: прибране дублювання) */}
                        <details className="w-full group bg-white border border-[#5984B2]/30 rounded-xl overflow-hidden mb-4">
                            <summary className="font-bold p-4 bg-[#f0f5fa] hover:bg-[#e1edf7] cursor-pointer flex justify-between items-center text-[#5984B2] select-none transition-colors">
                                <div className="flex items-center gap-3">
                                    <TvIconBlue />
                                    <span className="text-sm">Безкоштовне ТБ (200+ каналів) вже у тарифі</span>
                                </div>
                                <ChevronDownIcon />
                            </summary>
                            <div className="p-6 max-h-[320px] overflow-y-auto border-t border-[#5984B2]/20 bg-white channel-scroll">
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

                        {/* Вартість підключення (перенесена з лівої колонки) */}
                        <div className="bg-orange-50 rounded-xl p-5 mb-3 flex flex-col items-center justify-center text-center border border-orange-100">
                            <span className="text-[#5F6061] font-bold mb-1">Вартість підключення:</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-gray-400 line-through font-medium">1499 грн</span>
                                <span className="text-3xl font-black text-[#DC662D]">499 грн*</span>
                            </div>
                        </div>

                        {/* Виноска підключення */}
                        <p className="text-xs text-gray-400 mb-5 leading-relaxed text-center px-4">
                            *Вартість підключення 499 грн діє за умови оплати авансу за 12 місяців. При оплаті за 6 місяців — 999 грн.
                        </p>

                        {/* Деталі тарифу */}
                        <details className="w-full group bg-white border border-gray-200 rounded-xl overflow-hidden mt-auto">
                            <summary className="font-bold p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer flex justify-between items-center text-[#5F6061] select-none transition-colors">
                                <span className="text-sm">Детальніше про тариф «3 Гік»</span>
                                <ChevronDownIcon />
                            </summary>
                            <div className="p-5 border-t border-gray-200 bg-white">
                                <p className="text-gray-700 mb-4 text-sm leading-relaxed">Тариф «3 Гік» — це наш безкомпромісний флагман на базі технології 10G-PON. Відчуйте справжню свободу: симетричний канал (швидкість віддачі дорівнює завантаженню), пінг менше 2 мс для ідеального геймінгу, миттєве завантаження важкого контенту та стабільна робота всіх смарт-пристроїв у будинку одночасно. Жодних урізань швидкості чи прихованих лімітів у години пік. А завдяки резервуванню магістралей, ваш інтернет працюватиме понад 100 годин навіть під час найтриваліших блекаутів.</p>
                                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-[11px] leading-tight text-gray-500 mt-2">
                                    Публічна оферта: Оптичний термінал (ONU), фірмова оптична розетка, патч-корд та заведений у квартиру оптоволоконний кабель є неподільною власністю Провайдера Batyevka.NET. Абонент сплачує виключно за монтажні роботи з підключення. Використання нашої кабельної інфраструктури для підключення до інших провайдерів категорично заборонено! У разі припинення користування послугами, обладнання підлягає обов'язковому поверненню Провайдеру протягом 15 днів. Тариф призначений виключно для домашнього використання (без комерції). Оплата послуг означає вашу безумовну згоду з цими умовами.
                                </div>
                            </div>
                        </details>
                    </div>
                </article>
            </div>
        </section>
    );
};

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
                    { "@type": "Question", "name": "Чи можна замовити статичну IP-адресу?", "acceptedAnswer": { "@type": "Answer", "text": "Так, ви можете замовити послугу постійної зовнішньої IP-адреси. Вартість підключення — 100 грн разово, щомісячна плата — 50 грн." } },
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
                            <p className="text-lg md:text-xl text-[#5F6061] mb-6 leading-relaxed">
                                <span className="text-[#DC662D] font-extrabold">Batyevka</span><span className="text-[#333333] font-extrabold">.NET</span> — технологічний лідер та ваш надійний інтернет-провайдер у Солом'янському районі Києва. Ми заводимо 100% оптику безпосередньо у квартиру за передовими технологіями GPON та XGS-PON. Наші абоненти користуються інтернетом без жодних прихованих лімітів на обсяг трафіку чи урізання швидкості. Відчуйте безкомпромісну стабільність, симетричний канал та нульовий пінг для будь-яких завдань.
                            </p>

                            {/* Підзаголовок — акцент на енергонезалежність */}
                            <div className="flex items-center justify-center gap-3 mb-8 px-4 py-3 bg-[#eaf5ef] border border-[#51B18B]/30 rounded-2xl max-w-2xl mx-auto">
                                <svg className="w-5 h-5 text-[#51B18B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917L12 22l9-1.083A12.02 12.02 0 0021 7.984a11.955 11.955 0 01-4.382-3.001z" /></svg>
                                <p className="text-sm md:text-base text-[#51B18B] font-semibold leading-snug">
                                    Гарантована робота інтернету до 100 годин без світла завдяки резервуванню магістральних вузлів.
                                </p>
                            </div>
                            
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

                    {/* ----- БЛОК 2. ФЛАГМАНСЬКИЙ ТАРИФ — 3 ГІК (XGS-PON) ----- */}
                    <SpeedGaugeSection onOpen={handleOpenModalGeneral} freeChannelsGroups={freeChannelsGroups} />

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

                    {/* ----- БЛОК 4. XGS-PON ТАРИФИ (Decoy Effect: 1 Гбіт — базовий мінімум) ----- */}
                    <section className="py-20 bg-[#fcfbfe] rounded-[3rem] border border-gray-100 px-4">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-[#5F6061] mb-6">Надшвидкісні тарифи XGS-PON</h2>
                            <p className="text-[#5F6061] text-lg leading-relaxed">Для найвимогливіших завдань: професійного геймінгу, стрімінгу у 8K та роботи з великими обсягами даних. Симетричний канал (швидкість завантаження дорівнює швидкості віддачі).</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto text-left">

                            {/* ---- КАРТКА 1: 1 Гбіт/с Акційний (мас-маркет) ---- */}
                            <article onClick={() => setSelectedTariff(1)} className="bg-white rounded-[32px] border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col overflow-hidden cursor-pointer">
                                <div className="p-8 border-b border-gray-100 bg-white">
                                    <span className="inline-block bg-[#51B18B]/10 text-[#51B18B] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg mb-2">Акційний</span>
                                    <h3 className="text-5xl font-extrabold mb-4 text-[#5F6061] leading-none">1<span className="text-2xl font-bold text-[#5F6061] ml-1">Гбіт/с</span></h3>
                                    <div className="flex items-baseline gap-2 flex-wrap">
                                        <p className="text-4xl font-extrabold text-[#DC662D]">150<span className="text-lg font-bold text-[#5F6061]"> грн/міс</span></p>
                                        <span className="text-base text-gray-400 line-through">350 грн/міс</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1">Акційна ціна діє перші 12 місяців</p>
                                </div>
                                <div className="p-8 flex-grow">
                                    <ul className="space-y-4 text-[#5F6061] font-medium text-sm mb-8">
                                        <li className="flex items-center gap-3"><CheckIcon /> 100% Оптика у квартиру</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Симетричний канал</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Відсутність лімітів</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Пінг для геймінгу &lt;2мс</li>
                                    </ul>
                                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500 text-sm font-medium">Підключення:</span>
                                            <span className="font-bold text-[#5F6061]">350 грн</span>
                                        </div>
                                        <p className="text-xs text-gray-400 text-right mt-1">При передплаті від 6 міс — безкоштовно</p>
                                    </div>
                                    <button
                                        onClick={handleOpenModalGeneral}
                                        className="w-full bg-[#DC662D] hover:bg-[#c45a27] text-white font-bold text-base py-3 px-4 rounded-xl transition-colors shadow-sm"
                                    >
                                        Підключити
                                    </button>
                                </div>
                                <div className="p-6 mt-auto border-t bg-gray-50 border-gray-100">
                                    <p className="text-sm font-bold flex items-center justify-center gap-2 text-[#5F6061]">
                                        <TvIconBlue />
                                        Безкоштовне ТБ вже у тарифі
                                    </p>
                                </div>
                            </article>

                            {/* ---- КАРТКА 2: 5 Гбіт/с ---- */}
                            <article onClick={() => setSelectedTariff(5)} className="bg-white rounded-[32px] border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col overflow-hidden cursor-pointer">
                                <div className="p-8 border-b border-gray-100 bg-white">
                                    <h3 className="text-5xl font-extrabold mb-4 text-[#5F6061] mt-[30px] leading-none">5<span className="text-2xl font-bold text-[#5F6061] ml-1">Гбіт/с</span></h3>
                                    <p className="text-4xl font-extrabold text-[#DC662D]">800<span className="text-lg font-bold text-[#5F6061]"> грн/міс</span></p>
                                    <p className="text-xs text-transparent mt-1 select-none pointer-events-none">Placeholder</p>
                                </div>
                                <div className="p-8 flex-grow">
                                    <ul className="space-y-4 text-[#5F6061] font-medium text-sm mb-8">
                                        <li className="flex items-center gap-3"><CheckIcon /> 100% Оптика у квартиру</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Симетричний канал</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Відсутність лімітів</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Пінг для геймінгу &lt;2мс</li>
                                    </ul>
                                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500 text-sm font-medium">Підключення:</span>
                                            <span className="font-bold text-[#5F6061]">1999 грн</span>
                                        </div>
                                        <p className="text-xs text-gray-400 text-right mt-1">6 міс — 999 грн · рік — 499 грн</p>
                                    </div>
                                    <button
                                        onClick={handleOpenModalGeneral}
                                        className="w-full bg-[#DC662D] hover:bg-[#c45a27] text-white font-bold text-base py-3 px-4 rounded-xl transition-colors shadow-sm mt-4"
                                    >
                                        Підключити
                                    </button>
                                </div>
                                <div className="p-6 mt-auto border-t bg-gray-50 border-gray-100">
                                    <p className="text-sm font-bold flex items-center justify-center gap-2 text-[#5F6061]">
                                        <TvIconBlue />
                                        ТБ Легка вже у тарифі
                                    </p>
                                </div>
                            </article>

                            {/* ---- КАРТКА 3: 10 VIP-Гік (якір) ---- */}
                            <article onClick={() => setSelectedTariff(10)} className="bg-white rounded-[32px] border border-[#DC662D]/40 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col overflow-hidden cursor-pointer">
                                <div className="p-8 border-b border-gray-100 bg-white relative">
                                    <span className="inline-block bg-[#DC662D]/10 text-[#DC662D] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg mb-2">VIP-Гік</span>
                                    <h3 className="text-5xl font-extrabold mb-4 text-[#5F6061] leading-none">10<span className="text-2xl font-bold text-[#5F6061] ml-1">Гбіт/с</span></h3>
                                    <p className="text-4xl font-extrabold text-[#DC662D]">2000<span className="text-lg font-bold text-[#5F6061]"> грн/міс</span></p>
                                    <p className="text-xs text-gray-400 mt-1">Перші 3 міс — акційна ціна 1399 грн/міс</p>
                                </div>
                                <div className="p-8 flex-grow">
                                    <ul className="space-y-4 text-[#5F6061] font-medium text-sm mb-8">
                                        <li className="flex items-center gap-3"><CheckIcon /> 100% Оптика у квартиру</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Симетричний канал</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Відсутність лімітів</li>
                                        <li className="flex items-center gap-3"><CheckIcon /> Пінг для геймінгу &lt;2мс</li>
                                    </ul>
                                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500 text-sm font-medium">Підключення:</span>
                                            <span className="font-bold text-[#5F6061]">2499 грн</span>
                                        </div>
                                        <p className="text-xs text-gray-400 text-right mt-1">6 міс — 1499 грн · рік — 499 грн</p>
                                    </div>
                                    <button
                                        onClick={handleOpenModalGeneral}
                                        className="w-full bg-[#DC662D] hover:bg-[#c45a27] text-white font-bold text-base py-3 px-4 rounded-xl transition-colors shadow-sm mt-4"
                                    >
                                        Підключити
                                    </button>
                                </div>
                                <div className="p-6 mt-auto border-t bg-[#eef4ff] border-[#5984B2]/20">
                                    <p className="text-sm font-bold flex items-center justify-center gap-2 text-[#5984B2]">
                                        <TvIconBlue />
                                        ТБ Оптимальна вже у тарифі
                                    </p>
                                </div>
                            </article>
                        </div>

                        {/* Юридичний текст про ONU — БЛОК 4 ТЗ */}
                        <p className="text-center text-xs text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed">
                            *Оптичні термінали (ONU) надаються у безкоштовне користування. Вони залишаються власністю Провайдера та підлягають поверненню.
                        </p>

                        <div className="text-center mt-6">
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
                            <details className="bg-white border border-gray-200/80 rounded-2xl p-6 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                                <summary className="font-bold text-lg text-[#5F6061] flex justify-between items-center outline-none select-none">
                                    Як заживити інтернет під час відключень світла (блекауту)?
                                    <ChevronDownIcon />
                                </summary>
                                <p className="mt-4 pt-4 border-t border-gray-100 text-[#5F6061] text-sm leading-relaxed">Наша мережа повністю зарезервована і працює без світла понад 100 годин. У квартирі вам достатньо заживити лише два пристрої: ваш Wi-Fi роутер та наш оптичний термінал (ONU). Найпростіший спосіб — використати звичайний павербанк та спеціальні кабелі-перетворювачі з USB на DC (на 9V або 12V, залежно від вашого обладнання). Також чудово підійдуть зарядні станції або міні-ДБЖ (UPS) для роутерів.</p>
                            </details>
                            <details className="bg-white border border-gray-200/80 rounded-2xl p-6 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                                <summary className="font-bold text-lg text-[#5F6061] flex justify-between items-center outline-none select-none">
                                    Як відбувається процес підключення та монтажу у квартирі?
                                    <ChevronDownIcon />
                                </summary>
                                <p className="mt-4 pt-4 border-t border-gray-100 text-[#5F6061] text-sm leading-relaxed">Ми виконуємо преміальний естетичний монтаж. Оптичний кабель заводиться у квартиру максимально акуратно, а отвір обов'язково закривається нашою фірмовою оптичною розеткою. Жодних висячих дротів чи мотків кабелю під ногами. Оптичний термінал (ONU) монтується на стіну «розетка в розетку» поруч із вашим домашнім обладнанням.</p>
                            </details>
                            <details className="bg-white border border-gray-200/80 rounded-2xl p-6 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                                <summary className="font-bold text-lg text-[#5F6061] flex justify-between items-center outline-none select-none">
                                    Чи можна використовувати домашні тарифи для бізнесу?
                                    <ChevronDownIcon />
                                </summary>
                                <p className="mt-4 pt-4 border-t border-gray-100 text-[#5F6061] text-sm leading-relaxed">Ні, тарифи лінійки XGS-PON та GPON призначені виключно для домашнього використання. Для потреб бізнесу, офісів, магазинів та HoReCa у нас діють спеціалізовані B2B-рішення з виділеною пріоритетною підтримкою, гарантованою смугою пропускання та статичними IP-адресами.</p>
                            </details>
                            <details className="bg-white border border-gray-200/80 rounded-2xl p-6 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                                <summary className="font-bold text-lg text-[#5F6061] flex justify-between items-center outline-none select-none">
                                    Чи можуть діючі абоненти перейти на тарифи 10G-PON?
                                    <ChevronDownIcon />
                                </summary>
                                <p className="mt-4 pt-4 border-t border-gray-100 text-[#5F6061] text-sm leading-relaxed">Так, ми радо допоможемо вам перейти на нові преміальні тарифи. Для цього необхідно замовити послугу перепідключення: наш майстер замінить ваше застаріле обладнання на новий 10G-PON термінал, який надається у користування на весь період дії договору. Зверніть увагу: все обладнання (ONU), кабель та оптична розетка є виключною власністю Batyevka.NET і надаються абоненту лише на час користування послугами.</p>
                            </details>
                            <details className="bg-white border border-gray-200/80 rounded-2xl p-6 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                                <summary className="font-bold text-lg text-[#5F6061] flex justify-between items-center outline-none select-none">
                                    Чи можу я використовувати кабель Batyevka.NET для підключення іншого провайдера?
                                    <ChevronDownIcon />
                                </summary>
                                <p className="mt-4 pt-4 border-t border-gray-100 text-[#5F6061] text-sm leading-relaxed">Ні, це категорично заборонено. Весь оптичний кабель, заведений у квартиру, є нашою власністю та частиною технічної інфраструктури компанії. Його використання для послуг інших операторів є несанкціонованим втручанням. У разі спроби перепідключення на іншого провайдера або виявлення нецільового використання нашої лінії, ми залишаємо за собою право демонтувати нашу лінію та вилучити належне нам обладнання.</p>
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
                                <p className="mb-3">Batyevka.NET — ваш надійний інтернет-провайдер у Солом'янському районі Києва (Батиєва гора та прилеглі масиви). Ми пропонуємо преміальне підключення за передовими оптичними технологіями 10G-PON (XGS-PON) та GPON. Ми — технологічний лідер, який виконує ювелірний монтаж: оптоволокно заводиться у квартиру максимально акуратно, встановлюється фірмова оптична розетка — жодного павутиння кабелів у під'їздах чи висячих дротів під ногами.</p>
                                <p>Наша головна перевага — справжня енергонезалежність. Завдяки промисловому резервуванню магістральних вузлів, наші абоненти залишаються онлайн до 100 годин під час найважчих блекаутів — достатньо лише заживити від павербанка ваш домашній роутер та наш термінал. Підключайтеся вже сьогодні та відчуйте безкомпромісну симетричну швидкість до 10 Гбіт/с, нульовий пінг та якісне інтерактивне телебачення MEGOGO!</p>
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
