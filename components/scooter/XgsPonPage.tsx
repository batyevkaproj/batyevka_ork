// src/components/XgsPonPage.tsx
"use client"; // This is a Client Component because it uses hooks (useState).

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// --- Icon Component for Readability ---
const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
    </svg>
);

// --- Data for Tariffs and MEGOGO Plans (UPDATED to match the image) ---
const xgsTariffs = [
    { name: '2.5 Гбіт/с', featured: false },
    { name: '5 Гбіт/с', featured: true },
    { name: '10 Гбіт/с', featured: false },
];

const megogoPlans = [
    { name: 'Базове ТБ', price: 0, description: '170+ каналів', label: 'Вже у тарифі', tariffName: 'MEGOGO Базове ТБ' },
    { name: 'Національне ТБ', price: 49, description: '255+ каналів', label: '+ 49 грн/міс', tariffName: 'MEGOGO Національне ТБ' },
    { name: 'Легка', price: 85, description: '375+ каналів', label: '+ 85 грн/міс', tariffName: 'MEGOGO Легка' },
    { name: 'Оптимальна', price: 200, description: '445+ каналів', label: '+ 200 грн/міс', tariffName: 'MEGOGO Оптимальна' },
    { name: 'Максимальна', price: 300, description: '480+ каналів', label: '+ 300 грн/міс', tariffName: 'MEGOGO Максимальна' },
];

const XgsPonPage: React.FC = () => {
    // State to manage the selected MEGOGO plan. Default to "Національне ТБ" as in the screenshot.
    const [selectedMegogoPlan, setSelectedMegogoPlan] = useState(megogoPlans[1]);

    // Base prices from the screenshot for display consistency.
    // The prices shown in the screenshot are already calculated with the "Національне ТБ" plan (+49 грн).
    // We store the base internet-only prices to calculate correctly when other plans are selected.
    const basePrices = {
        '2.5 Гбіт/с': { promo: 250, full: 500 }, // 299 - 49 = 250
        '5 Гбіт/с': { promo: 400, full: 800 }, // 449 - 49 = 400
        '10 Гбіт/с': { promo: 600, full: 1200 }, // 649 - 49 = 600
    };

    return (
        <div className='mt-4'>
            <Head>
                <title>Технологія 10G-PON — Batyevka.NET</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
                
                <style>
                    {`
                        html { scroll-behavior: smooth; }
                    `}
                </style>
            </Head>

            <div className="bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                <main className="container mx-auto px-4">

                    {/* ----- HERO SECTION ----- */}
                    <section className="text-center py-20 md:py-32">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-[#0E2D43]">
                            Ера <span className="text-[#DC662D]">XGS-PON</span> Інтернету
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Відкрийте для себе новий стандарт швидкості з технологією XGS-PON. Симетричний канал до 10 Гбіт/с, мінімальні затримки та безмежні можливості для найвимогливіших користувачів.
                        </p>
                        <Link href="#tariffs" className="bg-[#DC662D] hover:bg-opacity-90 text-white font-bold text-lg py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                            Обрати тариф
                        </Link>
                    </section>

                    {/* ----- WHAT IS XG-PON SECTION ----- */}
                    <section className="py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="md:pr-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0E2D43]">Технологія XG-PON</h2>
                                <div className="space-y-4 text-gray-700">
                                    <p><strong>XG-PON (10-Gigabit Passive Optical Network)</strong> — це сучасний стандарт оптоволоконних мереж, що забезпечує швидкість до 10 Гбіт/с. Це означає, що швидкість завантаження та віддачі даних однакова, що критично важливо для професійних завдань.</p>
                                    <p>Ми впроваджуємо саме цю технологію, з перспективою легкого оновлення до <strong>XGS-PON</strong> у майбутньому. Це ваша інвестиція в інтернет, який буде актуальним роками.</p>
                                </div>
                            </div>
                            <div>
                                <Image src="https://placehold.co/600x400/e2e8f0/0E2D43?text=Швидкість+та+Надійність" alt="Схема технології XG-PON" className="rounded-lg shadow-xl" width={600} height={400} />
                            </div>
                        </div>
                    </section>

                    {/* ----- ADVANTAGES SECTION ----- */}
                    <section className="py-16 bg-gray-50 rounded-lg shadow-inner">
                         <div className="container mx-auto px-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0E2D43]">Для кого створений 10G-PON?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <article className="p-8 text-center">
                                    <h3 className="text-xl font-bold mb-2 text-[#0E2D43]">Професійні геймери та стрімери</h3>
                                    <p className="text-gray-600">Мінімальний пінг для перемог та стабільний потік для трансляцій у 4K/8K без жодних компромісів.</p>
                                </article>
                                <article className="p-8 text-center">
                                    <h3 className="text-xl font-bold mb-2 text-[#0E2D43]">IT-спеціалісти та розробники</h3>
                                    <p className="text-gray-600">Миттєва робота з хмарними сервісами, віддаленими серверами та великими масивами даних.</p>
                                </article>
                                <article className="p-8 text-center">
                                    <h3 className="text-xl font-bold mb-2 text-[#0E2D43]">Вимогливі домогосподарства</h3>
                                    <p className="text-gray-600">Забезпечте одночасну роботу десятків пристроїв: від 8K-телевізорів до систем &quot;розумного&quot; дому.</p>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* ----- XG-PON TARIFFS SECTION (MATCHES IMAGE) ----- */}
                    <section id="tariffs" className="py-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0E2D43]">Тарифи XG-PON</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
                            {xgsTariffs.map((tariff) => {
                                const finalPromoPrice = basePrices[tariff.name].promo + selectedMegogoPlan.price;
                                const finalFullPrice = basePrices[tariff.name].full + selectedMegogoPlan.price;

                                return (
                                    <div
                                        key={tariff.name}
                                        className={`
                                            flex flex-col p-8 rounded-lg
                                            ${tariff.featured 
                                                ? 'bg-[#0E2D43] text-white border-2 border-[#DC662D] transform md:scale-105 shadow-2xl' 
                                                : 'bg-white border border-gray-200 shadow-lg'
                                            }
                                        `}
                                    >
                                        <h3 className={`text-2xl font-bold ${tariff.featured ? 'text-white' : 'text-[#0E2D43]'}`}>{tariff.name}</h3>
                                        <p className="text-4xl font-extrabold text-[#DC662D] my-2">
                                            {finalPromoPrice}
                                            <span className={`text-lg font-medium ml-1 ${tariff.featured ? 'text-gray-300' : 'text-gray-500'}`}>грн/міс</span>
                                        </p>
                                        <p className={`text-sm mb-6 ${tariff.featured ? 'text-gray-400' : 'text-gray-500'}`}>
                                            перші 4 місяці, далі — {finalFullPrice} грн/міс
                                        </p>
                                        <ul className={`space-y-3 text-left mb-8 flex-grow ${tariff.featured ? 'text-gray-300' : 'text-gray-700'}`}>
                                            <li className="flex items-center">
                                                <CheckIcon />
                                                <span>{selectedMegogoPlan.tariffName}</span>
                                            </li>
                                            <li className="flex items-center">
                                                <CheckIcon />
                                                <span>Виклик майстра — 0 грн</span>
                                            </li>
                                        </ul>
                                        <Link href="#cta" className="w-full mt-auto block text-center bg-[#DC662D] hover:bg-opacity-90 text-white font-bold py-3 px-4 rounded-lg transition-colors">Залишити заявку</Link>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="text-center text-gray-500 mt-8">Вартість підключення: 1999 грн.</p>
                    </section>

                    {/* ----- MEGOGO SELECTION SECTION (MATCHES IMAGE) ----- */}
                    <section className="py-16">
                         <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0E2D43]">Оберіть ваш MEGOGO</h2>
                         <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">Базове телебачення вже включено у ваш тариф. Розширте можливості, обравши одну з преміальних передплат.</p>
                         <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
                            {megogoPlans.map((plan) => (
                                <div
                                    key={plan.name}
                                    onClick={() => setSelectedMegogoPlan(plan)}
                                    className={`
                                        bg-white p-4 rounded-lg border-2 cursor-pointer transition-all
                                        ${selectedMegogoPlan.name === plan.name 
                                            ? 'border-[#DC662D]' // Active state
                                            : 'border-gray-200'  // Inactive state
                                        }
                                    `}
                                >
                                    <p className="font-bold text-lg text-[#0E2D43]">{plan.name}</p>
                                    <p className="text-sm text-gray-500 h-10 flex items-center justify-center">{plan.description}</p>
                                    <p className={`font-bold mt-2 ${plan.price === 0 ? 'text-green-600' : 'text-blue-600'}`}>{plan.label}</p>
                                </div>
                            ))}
                         </div>
                    </section>
                    
                    {/* ----- CALL TO ACTION SECTION ----- */}
                    <section id="cta" className="py-16 my-8 bg-white rounded-lg text-center shadow-xl border">
                        <h2 className="text-3xl font-extrabold mb-2 text-[#0E2D43]">Готові до швидкості 10 Гбіт/с?</h2>
                        <p className="mb-6 max-w-xl mx-auto text-gray-600">Залиште заявку, і наш менеджер зв&apos;яжеться з вами протягом 15 хвилин, щоб обговорити деталі підключення за технологією XG-PON.</p>
                        <button className="bg-[#DC662D] text-white font-bold text-lg py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#DC662D]/30">
                            Підключитись до 10G
                        </button>
                    </section>

                    {/* ----- SEO TEXT ----- */}
                    <section className="py-12">
                        <div className="max-w-4xl mx-auto text-left">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0E2D43]">XG-PON інтернет у Києві від Batyevka.NET</h2>
                            <div className="leading-relaxed space-y-4 text-gray-600">
                                <p>Batyevka.NET з гордістю представляє технологію XG-PON у Солом&apos;янському районі Києва. Це революційний крок у розвитку домашнього та бізнес-інтернету, що дозволяє досягати швидкості до 10 Гбіт/с. Завдяки симетричному каналу, швидкість завантаження та віддачі даних є однаково високою, що є критично важливим для сучасних онлайн-задач: від професійного геймінгу та стрімінгу у 8K до роботи з великими хмарними сховищами та віддаленими серверами.</p>
                                <p>Підключення за технологією XG-PON від Batyevka.NET — це інвестиція у ваше цифрове майбутнє. Наша оптоволоконна мережа забезпечує не лише неймовірну швидкість, але й виняткову стабільність та енергонезалежність. При підключенні ми безкоштовно надаємо сучасний оптичний термінал на весь час користування послугою. Обирайте інтернет, який не має компромісів.</p>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
};

export default XgsPonPage;