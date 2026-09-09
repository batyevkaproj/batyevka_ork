"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import landing from '../../public/img/img_useful_information04.svg'; 

// --- Імпортуємо хуки та константи ---
import { ONT_model } from "@/constants/internet_speeds";
import { useModal } from "@/hooks/use-modal-store";
import { useToast } from "@/hooks/use-toast";

// --- Дані для MEGOGO ---
const megogoPlansData = [
    { id: 'free', name: 'Безкоштовне ТБ', desc: '200+ національних та ефірних каналів.', basePrice: 0 },
    { id: 'national', name: 'Національне ТБ', desc: '255+ каналів, колекція фільмів та мультфільмів.', basePrice: 50 },
    { id: 'light', name: 'Легка', desc: '375+ каналів, колекція фільмів та мультфільмів.', basePrice: 85 },
    { id: 'optimal', name: 'Оптимальна', desc: '445+ каналів, преміум-кіно та спорт (Setanta).', basePrice: 200 },
    { id: 'maximal', name: 'Максимальна', desc: '480+ каналів, HBO, Ліга Чемпіонів та максимум кіно.', basePrice: 350 },
];

const XgsPonPage: React.FC = () => {

    const { onOpen } = useModal();
    const { toast } = useToast();
    
    // 5-й тариф виділений за замовчуванням (центральний)
    const [selectedTariff, setSelectedTariff] = useState<number | null>(5); 
    const [selectedMegogo, setSelectedMegogo] = useState<string | null>('light');

    // Визначаємо рівень (індекс) пакету, який вже включений в обраний тариф
    const getIncludedMegogoLevel = (tariffId: number | null) => {
        if (tariffId === 3) return 1;  // 3 Гбіт/с -> 'national' (індекс 1)
        if (tariffId === 5) return 2;  // 5 Гбіт/с -> 'light' (індекс 2)
        if (tariffId === 10) return 3; // 10 Гбіт/с -> 'optimal' (індекс 3)
        return 0; // Якщо тариф не обрано або інший тариф, включено тільки безкоштовне
    };

    const scrollToCTA = () => {
        const element = document.getElementById('cta');
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: y - 100, behavior: 'smooth' });
        }
    };

    // =================================================================
    // === ОБРОБНИКИ ДЛЯ ВІДКРИТТЯ МОДАЛЬНОГО ВІКНА ====================
    // =================================================================

    const handleOpenModalForTariff = (speed: number, measure: string, price: number, connectionPrice: number, type: string) => {
        try {
            const orderData = {
                internetType: type,
                internetSpeed: speed,
                internetMeasure: measure,
                internetPrice: price,
                regularPrice: price,
                totalMonthlyPrice: price,
                hasTV: true,
                hasStaticIP: false,
                prepaidMonths: 0,
                setupPrice: connectionPrice,
                routerPrice: 0,
            };
            onOpen("phone-input", { orderData });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Помилка",
                description: "Помилка формування заявки"
            });
        }
    };

    // Обробник кліку на всю картку тарифу
    const handleTariffClick = (tariffId: number, megogoId: string) => {
        setSelectedTariff(tariffId);
        setSelectedMegogo(megogoId);
    };

    // Обробник кліку на текст "+ MEGOGO" всередині тарифу
    const handleMegogoLinkClick = (e: React.MouseEvent, megogoId: string, tariffId: number) => {
        e.stopPropagation(); // Запобігаємо кліку на саму картку
        setSelectedMegogo(megogoId);
        setSelectedTariff(tariffId);
        const element = document.getElementById('megogo-section');
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: y - 100, behavior: 'smooth' });
        }
    };

    // Обробник кліку на картку передплати MEGOGO
    const handleMegogoPlanClick = (megogoId: string) => {
        setSelectedMegogo(megogoId);
        
        // Зв'язуємо клік на MEGOGO з відповідним тарифом
        if (megogoId === 'national') setSelectedTariff(3);
        else if (megogoId === 'light') setSelectedTariff(5);
        else if (megogoId === 'optimal') setSelectedTariff(10);
    };

    return (
        <div className='mt-4 scroll-smooth'>
            <Head>
                <title>Технологія 10G-PON — Batyevka.NET</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                <main className="container mx-auto px-4">

                    {/* ----- HERO SECTION ----- */}
                    <section className="text-center py-20 md:py-32">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-[#5F6061]">
                            Ера <span className="text-[#DC662D]">XGS-PON</span> Інтернету
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Відкрийте для себе новий стандарт швидкості з технологією XGS-PON. Симетричний канал до 10 Гбіт/с, мінімальні затримки та безмежні можливості для найвимогливіших користувачів.
                        </p>
                        <button onClick={scrollToCTA} className="bg-[#DC662D] hover:bg-opacity-90 text-white font-bold text-lg py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
                            Обрати тариф
                        </button>
                    </section>

                    {/* ----- WHAT IS XG-PON SECTION ----- */}
                    <section className="py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="md:pr-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#5F6061]">Технологія XGS-PON</h2>
                                <div className="space-y-4 text-gray-700">
                                    <p><strong>XGS-PON (10-Gigabit Passive Optical Network)</strong> — це сучасний стандарт оптоволоконних мереж, що забезпечує швидкість до 10 Гбіт/с. Це означає, що швидкість завантаження та віддачі даних однакова, що критично важливо для професійних завдань.</p>
                                    <p>Ми впроваджуємо саме цю технологію, з перспективою легкого оновлення до <strong>XGS-PON</strong> у майбутньому. Це ваша інвестиція в інтернет, який буде актуальним роками.</p>
                                </div>
                            </div>
                            <div>
                                <Image src={landing} alt="Схема технології XGS-PON" className="rounded-lg shadow-xl" width={600} height={400} />
                            </div>
                        </div>
                    </section>

                    {/* ----- ADVANTAGES SECTION ----- */}
                    <section className="py-16 bg-gray-50 rounded-lg shadow-inner">
                         <div className="container mx-auto px-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#5F6061]">Для кого створений 10G-PON?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <article className="p-8 text-center">
                                    <h3 className="text-xl font-bold mb-2 text-[#5F6061]">Професійні геймери та стрімери</h3>
                                    <p className="text-gray-600">Мінімальний пінг для перемог та стабільний потік для трансляцій у 4K/8K без жодних компромісів.</p>
                                </article>
                                <article className="p-8 text-center">
                                    <h3 className="text-xl font-bold mb-2 text-[#5F6061]">IT-спеціалісти та розробники</h3>
                                    <p className="text-gray-600">Миттєва робота з хмарними сервісами, віддаленими серверами та великими масивами даних.</p>
                                </article>
                                <article className="p-8 text-center">
                                    <h3 className="text-xl font-bold mb-2 text-[#5F6061]">Вимогливі домогосподарства</h3>
                                    <p className="text-gray-600">Забезпечте одночасну роботу десятків пристроїв: від 8K-телевізорів до систем &quot;розумного&quot; дому.</p>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* ----- TARIFFS XGS-PON SECTION ----- */}
                    <section id="tariffs" className="py-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#5F6061]">Тарифи XGS-PON</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                            
                            {/* --- ТАРИФ 3 Гбіт/с --- */}
                            <article 
                                onClick={() => handleTariffClick(3, 'national')}
                                className={`p-6 rounded-lg flex flex-col transition-all duration-300 cursor-pointer relative ${
                                    selectedTariff === 3 
                                    ? 'ring-2 ring-[#DC662D] shadow-2xl transform md:scale-105 z-10 bg-white border-transparent' 
                                    : 'border border-gray-200/80 shadow-lg hover:-translate-y-1 bg-white'
                                }`}
                            >
                                <div className="flex-grow">
                                    <span className="inline-block bg-[#5984B2]/20 text-[#5984B2] text-xs font-bold px-2 py-1 rounded-full mb-2">XGS-PON</span>
                                    <h3 className="text-2xl font-bold mb-2 text-[#5F6061]">3 Гбіт/с</h3>
                                    <p className="text-4xl font-extrabold text-[#DC662D]">379<span className="text-xl font-bold"> грн/міс</span></p>
                                    <p className="text-sm font-bold text-[#51B18B]">Підключення — 1499 грн</p>
                                    <p className="text-xs text-gray-500 mb-2">При передплаті: 6 міс — 999 грн · рік — 499 грн</p>
                                    <p 
                                        className="text-sm font-bold text-[#5984B2] hover:text-[#DC662D] transition-colors underline decoration-dashed underline-offset-4 relative z-20 inline-block"
                                        onClick={(e) => handleMegogoLinkClick(e, 'national', 3)}
                                    >
                                        + MEGOGO Нац ТБ
                                    </p>
                                </div>
                                <div className="mt-auto space-y-2 pt-4 relative z-20">
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); handleOpenModalForTariff(3, 'Гбіт', 379, 1499, 'XGS-PON'); }}
                                        className="w-full block text-center bg-[#DC662D] hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Залишити заявку
                                    </button>
                                </div>
                            </article>

                            {/* --- ТАРИФ 5 Гбіт/с --- */}
                            <article 
                                onClick={() => handleTariffClick(5, 'light')}
                                className={`p-6 rounded-lg flex flex-col transition-all duration-300 cursor-pointer relative ${
                                    selectedTariff === 5 
                                    ? 'ring-2 ring-[#DC662D] shadow-2xl transform md:scale-105 z-10 bg-[#5F6061] text-white border-transparent' 
                                    : 'border border-gray-500 shadow-lg hover:-translate-y-1 bg-[#5F6061] text-white'
                                }`}
                            >
                                <div className="flex-grow">
                                    <span className="inline-block bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full mb-2">XGS-PON</span>
                                    <h3 className="text-2xl font-bold mb-2">5 Гбіт/с</h3>
                                    <p className="text-4xl font-extrabold text-[#DC662D]">800<span className="text-xl font-bold"> грн/міс</span></p>
                                    <p className="text-sm font-bold">Підключення — 1999 грн</p>
                                    <p className="text-xs text-white/70 mb-2">При передплаті: 6 міс — 999 грн · рік — 499 грн</p>
                                    <p 
                                        className="text-sm font-bold text-white/90 hover:text-white transition-colors underline decoration-dashed underline-offset-4 relative z-20 inline-block"
                                        onClick={(e) => handleMegogoLinkClick(e, 'light', 5)}
                                    >
                                        + MEGOGO Легка
                                    </p>
                                </div>
                                <div className="mt-auto space-y-2 pt-4 relative z-20">
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); handleOpenModalForTariff(5, 'Гбіт', 800, 1999, 'XGS-PON'); }}
                                        className="w-full block text-center bg-[#DC662D] hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Залишити заявку
                                    </button>
                                </div>
                            </article>

                            {/* --- ТАРИФ 10 Гбіт/с --- */}
                            <article 
                                onClick={() => handleTariffClick(10, 'optimal')}
                                className={`p-6 rounded-lg flex flex-col transition-all duration-300 cursor-pointer relative ${
                                    selectedTariff === 10 
                                    ? 'ring-2 ring-[#DC662D] shadow-2xl transform md:scale-105 z-10 bg-white border-transparent' 
                                    : 'border border-gray-200/80 shadow-lg hover:-translate-y-1 bg-white'
                                }`}
                            >
                                <div className="flex-grow">
                                    <span className="inline-block bg-[#5984B2]/20 text-[#5984B2] text-xs font-bold px-2 py-1 rounded-full mb-2">XGS-PON</span>
                                    <h3 className="text-2xl font-bold mb-2 text-[#5F6061]">10 Гбіт/с</h3>
                                    <p className="text-4xl font-extrabold text-[#DC662D]">2000<span className="text-xl font-bold"> грн/міс</span></p>
                                    <p className="text-sm font-bold text-[#51B18B]">Підключення — 2499 грн</p>
                                    <p className="text-xs text-gray-500 mb-2">При передплаті: 6 міс — 1499 грн · рік — 499 грн</p>
                                    <p 
                                        className="text-sm font-bold text-[#5984B2] hover:text-[#DC662D] transition-colors underline decoration-dashed underline-offset-4 relative z-20 inline-block"
                                        onClick={(e) => handleMegogoLinkClick(e, 'optimal', 10)}
                                    >
                                        + MEGOGO Оптимальна
                                    </p>
                                </div>
                                <div className="mt-auto space-y-2 pt-4 relative z-20">
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); handleOpenModalForTariff(10, 'Гбіт', 2000, 2499, 'XGS-PON'); }}
                                        className="w-full block text-center bg-[#DC662D] hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Залишити заявку
                                    </button>
                                </div>
                            </article>

                        </div>
                    </section>
                    
                    {/* ----- MEGOGO SECTION ----- */}
                    <section id="megogo-section" className="py-16">
                         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#5F6061]">Передплати MEGOGO</h2>
                         
                         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                            {megogoPlansData.map((plan, index) => {
                                const includedLevel = getIncludedMegogoLevel(selectedTariff);
                                const isIncluded = index <= includedLevel;
                                const displayPrice = isIncluded ? 'Вже у тарифі' : `+ ${plan.basePrice} грн/міс`;
                                const priceColor = isIncluded ? 'text-[#51B18B]' : 'text-[#5984B2]';

                                return (
                                    <div 
                                        key={plan.id}
                                        className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                                            selectedMegogo === plan.id 
                                                ? 'border-[#DC662D] ring-2 ring-[#DC662D] shadow-lg transform scale-105 bg-white' 
                                                : 'border-gray-200 bg-gray-50 hover:border-[#DC662D]/50 hover:bg-white'
                                        }`}
                                        onClick={() => handleMegogoPlanClick(plan.id)}
                                    >
                                        <p className="font-bold text-lg text-[#5F6061]">{plan.name}</p>
                                        <p className="text-sm mt-1">{plan.desc}</p>
                                        <p className={`font-bold ${priceColor} mt-2`}>{displayPrice}</p>
                                    </div>
                                );
                            })}
                         </div>
                    </section>
                    
                    {/* ----- CALL TO ACTION SECTION ----- */}
                    <section id="cta" className="py-16 my-8 bg-white rounded-lg text-center shadow-xl border">
                        <h2 className="text-3xl font-extrabold mb-2 text-[#5F6061]">Готові до швидкості 10 Гбіт/с?</h2>
                        <p className="mb-6 max-w-xl mx-auto text-gray-600">Залиште заявку, і наш менеджер зв&apos;яжеться з вами протягом 15 хвилин, щоб обговорити деталі підключення за технологією XGS-PON.</p>
                        
                        <button 
                            onClick={() => handleOpenModalForTariff(10, "Гбіт", 2000, 2499, "XGS-PON")}
                            className="bg-[#DC662D] text-white font-bold text-lg py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#DC662D]/30"
                        >
                            Підключитись до 10G
                        </button>
                    </section>

                    {/* ----- SEO TEXT ----- */}
                    <section className="py-12">
                        <div className="max-w-4xl mx-auto text-left">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#5F6061]">XGS-PON інтернет у Києві від Batyevka.NET</h2>
                            <div className="leading-relaxed space-y-4 text-gray-600">
                                <p>Batyevka.NET з гордістю представляє технологію XGS-PON у Солом&apos;янському районі Києва. Це революційний крок у розвитку домашнього та бізнес-інтернету, що дозволяє досягати швидкості до 10 Гбіт/с. Завдяки симетричному каналу, швидкість завантаження та віддачі даних є однаково високою, що є критично важливим для сучасних онлайн-задач: від професійного геймінгу та стрімінгу у 8K до роботи з великими хмарними сховищами та віддаленими серверами.</p>
                                <p>Підключення за технологією XGS-PON від Batyevka.NET — це інвестиція у ваше цифрове майбутнє. Наша оптоволоконна мережа забезпечує не лише неймовірну швидкість, але й виняткову стабільність та енергонезалежність. При підключенні ми безкоштовно надаємо сучасний оптичний термінал ({ONT_model}) на весь час користування послугою. Обирайте інтернет, який не має компромісів.</p>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
};

export default XgsPonPage;