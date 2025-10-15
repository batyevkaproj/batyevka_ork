// app/private-sector/page.tsx

"use client";

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useModal } from '@/hooks/use-modal-store';
import { useToast } from '@/hooks/use-toast';
import { Wifi, Tv, Zap, ShieldCheck, HardDrive, HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/business-page/ContactForm';
import WaterText from '@/components/business-page/WaterText';

// --- Дані тарифів (можна винести в окремий файл) ---
const tariffs = [
    {
        name: 'G-PON 300',
        speed: '300',
        price: 399,
        promoPrice: 399,
        promoDuration: 4,
        isPopular: true,
        features: [
            'Безлімітний інтернет',
            'Технологія G-PON',
            'ТБ-пакет «Соціальний»',
            'Підключення: 1 грн'
        ]
    },
    {
        name: 'G-PON 1000',
        speed: '1000',
        price: 499,
        promoPrice: 499,
        promoDuration: 4,
        isPopular: false,
        features: [
            'Безлімітний інтернет',
            'Технологія G-PON',
            'ТБ-пакет «Соціальний»',
            'Підключення: 1 грн'
        ]
    }
];

// Типізація для тарифу
type Tariff = typeof tariffs[0];


const PrivateSectorPage: React.FC = () => {
    const { onOpen } = useModal();
    const { toast } = useToast();

    const handleOrderClick = (tariff: Tariff) => {
        try {
            const orderData = {
                internetType: `Заявка (приватний сектор): ${tariff.name}`,
                internetSpeed: parseInt(tariff.speed),
                internetMeasure: 'Мбіт/с',
                internetPrice: tariff.promoPrice,
                regularPrice: tariff.price,
                totalMonthlyPrice: tariff.promoPrice,
                hasTV: true,
                hasStaticIP: false,
                prepaidMonths: 0,
                setupPrice: 1, // Вартість підключення
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

    return (
        <>
        <Header theme={'white'} business={false}/>
            <Head>
                <title>Інтернет та ТБ для приватного сектору — Batyevka.NET</title>
                <meta name="description" content="Підключення швидкісного гігабітного інтернету та телебачення за технологією G-PON у приватному секторі Києва." />
            </Head>

            <main className="bg-white">
                {/* --- Hero Section --- */}
                <section className="bg-gray-50/50 py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] leading-tight">
                            Інтернет та Телебачення у приватному секторі
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Підключайте швидкісний інтернет за технологією G-PON, що гарантує стабільний сигнал та роботу навіть за відсутності електроенергії.
                        </p>
                    </div>
                </section>

                {/* --- Tariffs Section --- */}
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1E293B]">
                            Тарифні плани
                        </h2>
                        <div className="flex flex-wrap justify-center gap-8 items-stretch">
                            {tariffs.map((tariff) => (
                                <div key={tariff.name} className={`w-full max-w-sm rounded-2xl border ${tariff.isPopular ? 'border-[#DC662D] shadow-2xl' : 'border-gray-200 shadow-lg'} flex flex-col relative`}>
                                    {tariff.isPopular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#DC662D] text-white text-sm font-bold px-4 py-1 rounded-full">
                                            Популярний
                                        </div>
                                    )}
                                    <div className="p-8 flex-grow flex flex-col">
                                        <h3 className="text-2xl font-bold text-gray-800">{tariff.name}</h3>
                                        <p className="text-gray-500 mt-1">Швидкість до <span className="font-bold text-gray-700">{tariff.speed} Мбіт/с</span></p>

                                        <div className="my-6">
                                            <span className="text-5xl font-extrabold text-[#DC662D]">{tariff.promoPrice}</span>
                                            <span className="text-xl font-bold text-gray-700"> грн/міс</span>
                                            {/* <p className="text-gray-500 text-sm mt-1">перші {tariff.promoDuration} місяці, далі — {tariff.price} грн/міс</p> */}
                                        </div>

                                        <ul className="space-y-3 text-gray-600 mb-8">
                                            {tariff.features.map((feature, index) => (
                                                <li key={index} className="flex items-center">
                                                    <ShieldCheck className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-auto">
                                            <button 
                                                onClick={() => handleOrderClick(tariff)}
                                                className="w-full bg-[#DC662D] hover:bg-opacity-90 text-white font-bold text-lg py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                                                Залишити заявку
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Included Services Section --- */}
                <section className="py-12 md:py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1E293B]">
                            Що входить у кожен тариф
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white p-6 rounded-lg text-center border">
                                <Zap className="w-10 h-10 text-[#DC662D] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800">Технологія G-PON</h3>
                                <p className="text-gray-600 mt-2">Оптоволокно прямо у ваш дім для максимальної швидкості та надійності.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg text-center border">
                                <ShieldCheck className="w-10 h-10 text-[#DC662D] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800">Енергонезалежність</h3>
                                <p className="text-gray-600 mt-2">Інтернет працює навіть при відключеннях світла, за умови живлення вашого роутера.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg text-center border">
                                <Tv className="w-10 h-10 text-[#DC662D] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800">Телебачення</h3>
                                <p className="text-gray-600 mt-2">Базовий пакет українських телеканалів вже включено у вартість.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Additional Services Section --- */}
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1E293B]">
                            Додаткові послуги
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="bg-gray-50/60 p-6 rounded-lg border flex items-start">
                                <HardDrive className="w-8 h-8 text-[#DC662D] mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Статична IP-адреса</h3>
                                    <p className="text-gray-600 mt-2">Ваша постійна адреса в Інтернеті для доступу до камер, серверів та інших пристроїв.</p>
                                    <p className="mt-3 font-bold text-gray-700">150 грн/міс</p>
                                </div>
                            </div>
                             <div className="bg-gray-50/60 p-6 rounded-lg border flex items-start">
                                <HelpCircle className="w-8 h-8 text-[#DC662D] mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Виклик майстра</h3>
                                    <p className="text-gray-600 mt-2">Діагностика та налаштування обладнання, усунення несправностей.</p>
                                    <p className="mt-3 font-bold text-green-600">Безкоштовно</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <WaterText theme={'white'}/>
            <ContactForm theme = {'white'}/>
            <Footer theme={'white'}/>
        </>
    );
};

export default PrivateSectorPage;