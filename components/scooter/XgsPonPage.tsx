"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import landing from '../../public/img/img_useful_information04.svg'; 

// --- Імпортуємо хуки та константи ---
import {
    GPON_SPEEDS,
    ONT_model
} from "@/constants/internet_speeds";
import { useModal } from "@/hooks/use-modal-store";
import { useToast } from "@/hooks/use-toast";

// --- Компоненти іконок (без змін) ---
const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
    </svg>
);

// --- Дані для MEGOGO (без змін) ---
const megogoPlans = [
    { name: 'Безкоштовне ТБ', price: 0, description: '170+ каналів', label: 'Вже у тарифі', tariffName: 'MEGOGO Безкоштовне ТБ' },
    { name: 'Національне ТБ', price: 0, description: '255+ каналів', label: 'Вже у тарифі', tariffName: 'MEGOGO Національне ТБ' },
    { name: 'Легка', price: 85, description: '375+ каналів', label: '+ 85 грн/міс', tariffName: 'MEGOGO Легка' },
    { name: 'Оптимальна', price: 200, description: '445+ каналів', label: '+ 200 грн/міс', tariffName: 'MEGOGO Оптимальна' },
    { name: 'Максимальна', price: 350, description: '480+ каналів', label: '+ 350 грн/міс', tariffName: 'MEGOGO Максимальна' },
];

const XgsPonPage: React.FC = () => {

    const { onOpen } = useModal();
    const { toast } = useToast();
    const [selectedMegogoPlan, setSelectedMegogoPlan] = useState(megogoPlans[1]);
    
    const xgsTariffs = [...GPON_SPEEDS].sort((a, b) => a.speed - b.speed);

    // =================================================================
    // === НОВИЙ ОБРОБНИК ДЛЯ ВІДКРИТТЯ МОДАЛЬНОГО ВІКНА ==============
    // =================================================================
    const handleOpenModal = (tariff: any, finalPromoPrice: number, finalFullPrice: number) => {
        try {
            if (!tariff) throw new Error("Дані тарифу не знайдено");

            const orderData = {
                internetType: "XGS-PON",
                internetSpeed: tariff.speed,
                internetMeasure: tariff.measure,
                internetPrice: finalPromoPrice,
                regularPrice: finalFullPrice,
                totalMonthlyPrice: finalPromoPrice,
                hasTV: true,
                tvPackage: {
                    id: megogoPlans.findIndex(p => p.name === selectedMegogoPlan.name),
                    name: selectedMegogoPlan.name,
                    price: selectedMegogoPlan.price,
                },
                hasStaticIP: false,
                prepaidMonths: 0,
                setupPrice: 2999, // Вартість підключення для XGS-PON, як вказано на сторінці
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
        <div className='mt-4'>
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
                        <Link href="#tariffs" className="bg-[#DC662D] hover:bg-opacity-90 text-white font-bold text-lg py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                            Обрати тариф
                        </Link>
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

                    {/* ----- XG-PON TARIFFS SECTION (DYNAMIC) ----- */}
                    <section id="tariffs" className="py-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#5F6061]">Тарифи XGS-PON</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
                            {xgsTariffs.map((tariff) => {
                                let discountValue = 0;
                                switch(tariff.value) {
                                    case 1: discountValue = 600; break;
                                    case 2: discountValue = 400; break;
                                    case 3: discountValue = 250; break;
                                    default: discountValue = 0;
                                }

                                const basePromoPrice = tariff.price - discountValue;
                                const finalPromoPrice = basePromoPrice + selectedMegogoPlan.price;
                                const finalFullPrice = tariff.price + selectedMegogoPlan.price;
                                const isFeatured = tariff.speed === 5;

                                return (
                                    <div
                                        key={tariff.value}
                                        className={`
                                            flex flex-col p-8 rounded-lg
                                            ${isFeatured 
                                                ? 'bg-[#5F6061] text-white border-2 border-[#DC662D] transform md:scale-105 shadow-2xl' 
                                                : 'bg-white border border-gray-200 shadow-lg'
                                            }
                                        `}
                                    >
                                        <h3 className={`text-2xl font-bold ${isFeatured ? 'text-white' : 'text-[#5F6061]'}`}>{tariff.speed} {tariff.measure}/с</h3>
                                        <p className="text-4xl font-extrabold text-[#DC662D] my-2">
                                            {finalPromoPrice}
                                            <span className={`text-lg font-medium ml-1 ${isFeatured ? 'text-gray-300' : 'text-gray-500'}`}>грн/міс</span>
                                        </p>
                                        <p className={`text-sm mb-6 ${isFeatured ? 'text-gray-400' : 'text-gray-500'}`}>
                                            перші 4 місяці, далі — {finalFullPrice} грн/міс
                                        </p>
                                        <ul className={`space-y-3 text-left mb-8 flex-grow ${isFeatured ? 'text-gray-300' : 'text-gray-700'}`}>
                                            <li className="flex items-center">
                                                <CheckIcon />
                                                <span>{selectedMegogoPlan.tariffName}</span>
                                            </li>
                                            <li className="flex items-center">
                                                <CheckIcon />
                                                <span>Виклик майстра — 0 грн</span>
                                            </li>
                                        </ul>
                                        
                                        {/* === ВИПРАВЛЕНО: Замінено Link на button з новим обробником === */}
                                        <button 
                                            onClick={() => handleOpenModal(tariff, finalPromoPrice, finalFullPrice)} 
                                            className="w-full mt-auto block text-center bg-[#DC662D] hover:bg-opacity-90 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                                        >
                                            Залишити заявку
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="text-center text-gray-500 mt-8">Вартість підключення: 2999 грн.</p>
                    </section>

                    {/* ----- MEGOGO SELECTION SECTION ----- */}
                    <section className="py-16">
                         <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#5F6061]">Оберіть ваш MEGOGO</h2>
                         <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">Безкоштовне телебачення вже включено у ваш тариф. Розширте можливості, обравши одну з преміальних передплат.</p>
                         <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
                            {megogoPlans.map((plan) => (
                                <div
                                    key={plan.name}
                                    onClick={() => setSelectedMegogoPlan(plan)}
                                    className={`
                                        bg-white p-4 rounded-lg border-2 cursor-pointer transition-all
                                        ${selectedMegogoPlan.name === plan.name 
                                            ? 'border-[#DC662D]' 
                                            : 'border-gray-200'
                                        }
                                    `}
                                >
                                    <p className="font-bold text-lg text-[#5F6061]">{plan.name}</p>
                                    <p className="text-sm text-gray-500 h-10 flex items-center justify-center">{plan.description}</p>
                                    <p className={`font-bold mt-2 ${plan.price === 0 ? 'text-green-600' : 'text-blue-600'}`}>{plan.label}</p>
                                </div>
                            ))}
                         </div>
                    </section>
                    
                    {/* ----- CALL TO ACTION SECTION ----- */}
                    <section id="cta" className="py-16 my-8 bg-white rounded-lg text-center shadow-xl border">
                        <h2 className="text-3xl font-extrabold mb-2 text-[#5F6061]">Готові до швидкості 10 Гбіт/с?</h2>
                        <p className="mb-6 max-w-xl mx-auto text-gray-600">Залиште заявку, і наш менеджер зв&apos;яжеться з вами протягом 15 хвилин, щоб обговорити деталі підключення за технологією XGS-PON.</p>
                        
                        {/* === ВИПРАВЛЕНО: onClick викликає обробник з даними "featured" тарифу === */}
                        <button 
                            onClick={() => {
                                const featuredTariff = xgsTariffs.find(t => t.speed === 5);
                                if (featuredTariff) {
                                    const discount = 400; // Знижка для 5 Гбіт/с
                                    const promoPrice = (featuredTariff.price - discount) + selectedMegogoPlan.price;
                                    const fullPrice = featuredTariff.price + selectedMegogoPlan.price;
                                    handleOpenModal(featuredTariff, promoPrice, fullPrice);
                                }
                            }}
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