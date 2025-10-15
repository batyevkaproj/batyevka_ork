// app/network-hardware/page.tsx

"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '@/hooks/use-modal-store';
import { useToast } from '@/hooks/use-toast';
import { ShoppingCart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Дані про товари ---
// ВАЖЛИВО: Замініть шляхи до зображень на ваші власні.
const productsData = [
  {
    id: 1,
    name: 'Роутер TP-Link Archer C24',
    description: 'AC750 дводіапазонний Wi-Fi роутер.',
    price: 1100,
    category: 'Роутери',
    image: '/img/magazin/archer-c24.jpg', // Замініть на реальний шлях
  },
  {
    id: 2,
    name: 'Роутер TP-Link Archer C64',
    description: 'AC1200 MU-MIMO Wi-Fi роутер.',
    price: 1550,
    category: 'Роутери',
    image: '/img/magazin/archer-c64.webp', // Замініть на реальний шлях
  },
  {
    id: 3,
    name: 'Роутер TP-Link Archer AX10',
    description: 'Дводіапазонний Wi-Fi 6 роутер AX1500.',
    price: 2200,
    category: 'Роутери',
    image: '/img/magazin/archer_ax10.jpg ', // Замініть на реальний шлях
  },
  {
    id: 4,
    name: 'Роутер TP-Link Archer AX23',
    description: 'Дводіапазонний Wi-Fi 6 роутер AX1800.',
    price: 2500,
    category: 'Роутери',
    image: '/img/magazin/archer-ax23.webp', // Замініть на реальний шлях
  },
  {
    id: 5,
    name: 'TP-Link Deco E4 (2-pack)',
    description: 'Домашня Mesh Wi-Fi система AC1200.',
    price: 2800,
    category: 'Роутери',
    image: '/img/magazin/Deco_E4.jpg', // Замініть на реальний шлях
  },
  {
    id: 6,
    name: 'Роутер Mercusys MR50G',
    description: 'AC1900 гігабітний Wi-Fi роутер.',
    price: 1400,
    category: 'Роутери',
    image: '/img/magazin/mr50g.webp', // Замініть на реальний шлях
  },
  {
    id: 8,
    name: 'Комутатор TP-Link LS1005G',
    description: '5-портовий гігабітний комутатор.',
    price: 600,
    category: 'Комутатори',
    image: '/img/magazin/ls1005g.webp', // Замініть на реальний шлях
  },
  {
    id: 9,
    name: 'Патч-корд UTP 5e (3м)',
    description: 'Кабель для підключення пристроїв до мережі.',
    price: 100,
    category: 'Кабель',
    image: '/img/magazin/cat.5e-utp-cord-0.5m-gry.webp', // Замініть на реальний шлях
  },
  {
    id: 10,
    name: 'Патч-корд UTP 5e (5м)',
    description: 'Кабель для підключення пристроїв до мережі.',
    price: 120,
    category: 'Кабель',
    image: '/img/magazin/cat.5e-utp-cord-0.5m-gry.webp', // Замініть на реальний шлях
  },
   {
    id: 11,
    name: 'Патч-корд UTP 5e (10м)',
    description: 'Кабель для підключення пристроїв до мережі.',
    price: 200,
    category: 'Кабель',
    image: '/img/magazin/cat.5e-utp-cord-0.5m-gry.webp', // Замініть на реальний шлях
  },
];

const categories = ["Роутери", "Медіаконвертери", "Комутатори", "Кабель"];

// --- Типізація для товару ---
type Product = typeof productsData[0];

const NetworkHardwarePage: React.FC = () => {
    const [currentCategory, setCurrentCategory] = useState<string | null>(null);
    const { onOpen } = useModal();
    const { toast } = useToast();

    const filteredProducts = currentCategory
        ? productsData.filter(p => p.category === currentCategory)
        : productsData;

    const handleOrderClick = (product: Product) => {
        try {
            const orderData = {
                internetType: `Замовлення обладнання: ${product.name}`,
                internetSpeed: 0,
                internetMeasure: '',
                internetPrice: 0,
                totalMonthlyPrice: product.price,
                hasTV: false,
                hasStaticIP: false,
                prepaidMonths: 0,
                setupPrice: 0,
                routerPrice: product.price,
            };
            onOpen("phone-input", { orderData });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Помилка",
                description: "Не вдалося відкрити форму замовлення."
            });
        }
    };

    return (
        <>
        <Header theme={'white'} business={false}/>
            <Head>
                <title>Мережеве обладнання — Batyevka.NET</title>
                <meta name="description" content="Роутери, медіаконвертери, комутатори та інше мережеве обладнання від провайдера Batyevka.NET." />
            </Head>
            <main className="container mx-auto px-4 py-8 md:py-12">
                {/* --- Хлібні крихти та заголовок --- */}
                <div className="mb-8">
                    {/* <nav className="text-sm mb-2">
                        <Link href="/" className="text-gray-500 hover:text-[#DC662D]">Головна</Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-gray-800 font-semibold">Мережеве обладнання</span>
                    </nav> */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E293B]">
                        Мережеве обладнання
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                    {/* --- Бічна панель з категоріями (Сайдбар) --- */}
                    <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
                        <div className="sticky top-8 bg-white p-6 rounded-xl shadow-md border border-gray-200/80">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Категорії</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button
                                        onClick={() => setCurrentCategory(null)}
                                        className={`w-full text-left block px-4 py-2 rounded-lg text-lg transition-colors ${
                                            !currentCategory
                                            ? 'bg-[#DC662D]/10 text-[#DC662D] font-semibold'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        Всі категорії
                                    </button>
                                </li>
                                {categories.map((cat) => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => setCurrentCategory(cat)}
                                            className={`w-full text-left block px-4 py-2 rounded-lg text-lg transition-colors ${
                                                currentCategory === cat
                                                ? 'bg-[#DC662D]/10 text-[#DC662D] font-semibold'
                                                : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* --- Сітка з товарами --- */}
                    <div className="flex-1">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="bg-white rounded-lg shadow-lg border border-gray-200/80 overflow-hidden flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
                                        <div className="bg-gray-100 h-48 flex items-center justify-center p-4">
                                             <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={200}
                                                height={200}
                                                className="max-h-full w-auto object-contain"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                                            <p className="text-gray-500 mt-1 mb-4 flex-grow">{product.description}</p>
                                            <div className="flex justify-between items-center mt-auto">
                                                <p className="text-2xl font-extrabold text-[#1E293B]">
                                                    {product.price} <span className="text-lg font-bold text-gray-600">грн</span>
                                                </p>
                                                <button
                                                    onClick={() => handleOrderClick(product)}
                                                    className="bg-[#DC662D] hover:bg-opacity-90 text-white font-bold p-3 rounded-full transition-colors"
                                                    title="Замовити"
                                                >
                                                    <ShoppingCart className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 bg-gray-50 rounded-lg">
                                <p className="text-xl text-gray-500">Товари в цій категорії не знайдено.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer theme={'white'}/>
        </>
    );
};

export default NetworkHardwarePage;