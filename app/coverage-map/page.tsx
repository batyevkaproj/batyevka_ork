// app/coverage-map/page.tsx

"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Search } from 'lucide-react';
import type { LatLngExpression } from 'leaflet'; // <--- КРОК 1: ІМПОРТУЄМО ТИП
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Повний список адрес покриття ---
const coverageAddresses = [
    {
        "street": "Азовська",
        "buildings": []
    },
    {
        "street": "Амосова Миколи",
        "buildings": [
            "2",
            "4"
        ]
    },
    {
        "street": "Артема",
        "buildings": [
            "11"
        ]
    },
    {
        "street": "Барки Василя",
        "buildings": [
            "5"
        ]
    },
    {
        "street": "Білгородська",
        "buildings": [
            "14"
        ]
    },
    {
        "street": "Вузівська",
        "buildings": [
            "3",
            "4",
            "4а",
            "5"
        ]
    },
    {
        "street": "Гаріна Бориса",
        "buildings": [
            "51",
            "53",
            "68а"
        ]
    },
    {
        "street": "Головка Андрія",
        "buildings": [
            "1",
            "4",
            "6",
            "12",
            "14",
            "25",
            "27",
            "29",
            "31"
        ]
    },
    {
        "street": "Городня",
        "buildings": [
            "3",
            "7",
            "13",
            "32",
            "38",
            "40"
        ]
    },
    {
        "street": "Громової Уляни",
        "buildings": []
    },
    {
        "street": "Докучаєвська",
        "buildings": [
            "11",
            "16",
            "18а"
        ]
    },
    {
        "street": "Донска",
        "buildings": []
    },
    {
        "street": "Донской переулок",
        "buildings": []
    },
    {
        "street": "Енергетиків",
        "buildings": []
    },
    {
        "street": "Енергетиків провулок",
        "buildings": [
            "1"
        ]
    },
    {
        "street": "Ернста Федора",
        "buildings": [
            "2",
            "6",
            "8",
            "12"
        ]
    },
    {
        "street": "Жмеринська",
        "buildings": []
    },
    {
        "street": "Здолбунівська",
        "buildings": []
    },
    {
        "street": "Зерових Братів",
        "buildings": [
            "14/1",
            "14/18",
            "14/3",
            "14б",
            "16",
            "19",
            "21",
            "23",
            "25"
        ]
    },
    {
        "street": "Златопільська",
        "buildings": [
            "3",
            "4к"
        ]
    },
    {
        "street": "Кавказька",
        "buildings": [
            "7",
            "9",
            "11",
            "12",
            "13"
        ]
    },
    {
        "street": "Кадетський Гай",
        "buildings": [
            "3",
            "6а",
            "7",
            "9",
            "11"
        ]
    },
    {
        "street": "Кишинівська",
        "buildings": []
    },
    {
        "street": "Кільцева дорога",
        "buildings": []
    },
    {
        "street": "Клінічна",
        "buildings": [
            "17",
            "17/1",
            "21/19",
            "23/25",
            "25"
        ]
    },
    {
        "street": "Кобылянской Ольги",
        "buildings": []
    },
    {
        "street": "Космодем'янської Зої",
        "buildings": [
            "18",
            "22"
        ]
    },
    {
        "street": "Кривоноса Максима",
        "buildings": [
            "15",
            "17",
            "19",
            "29"
        ]
    },
    {
        "street": "Кудряшова",
        "buildings": [
            "2",
            "3",
            "5",
            "5а",
            "6",
            "7",
            "7б",
            "16",
            "18",
            "20",
            "20б",
            "20г",
            "75"
        ]
    },
    {
        "street": "Кучмин Яр",
        "buildings": []
    },
    {
        "street": "Липківського Василя",
        "buildings": [
            "3",
            "5",
            "7",
            "9",
            "11",
            "13",
            "15",
            "17",
            "19",
            "21",
            "22",
            "23",
            "24",
            "25",
            "27/5",
            "37",
            "37а",
            "40",
            "43",
            "45"
        ]
    },
    {
        "street": "Лінійна",
        "buildings": [
            "17"
        ]
    },
    {
        "street": "Лобановського Валерія проспект",
        "buildings": [
            "4",
            "4/1",
            "4б",
            "4в",
            "4г",
            "4ж",
            "5а",
            "6а",
            "6в",
            "6г",
            "6д",
            "9/1",
            "10",
            "12",
            "14",
            "17",
            "18",
            "23",
            "25",
            "27",
            "29",
            "31",
            "33",
            "35",
            "37",
            "39/1",
            "39/2",
            "41",
            "51",
            "53",
            "55",
            "57",
            "61"
        ]
    },
    {
        "street": "Мацієвича Левка",
        "buildings": []
    },
    {
        "street": "Монтажників",
        "buildings": []
    },
    {
        "street": "Народна",
        "buildings": []
    },
    {
        "street": "Народный переулок",
        "buildings": []
    },
    {
        "street": "Неходи Івана",
        "buildings": [
            "3",
            "5",
            "7",
            "8",
            "10"
        ]
    },
    {
        "street": "Нечуй-Левицкого",
        "buildings": []
    },
    {
        "street": "Нововокзальна",
        "buildings": [
            "8",
            "19",
            "21",
            "53"
        ]
    },
    {
        "street": "Озерна",
        "buildings": [
            "7",
            "9",
            "12а"
        ]
    },
    {
        "street": "Олексіївська",
        "buildings": [
            "3",
            "3а",
            "5",
            "11"
        ]
    },
    {
        "street": "Освіти",
        "buildings": [
            "3а",
            "14а"
        ]
    },
    {
        "street": "Палладіна Академіка проспект",
        "buildings": []
    },
    {
        "street": "Пироговського Олександра",
        "buildings": [
            "3",
            "4",
            "6",
            "8",
            "18",
            "19",
            "19/2",
            "19/3",
            "19/4",
            "19/6",
            "16а",
            "19к.8"
        ]
    },
    {
        "street": "Повітрофлотський проспект",
        "buildings": [
            "58"
        ]
    },
    {
        "street": "Преображенська",
        "buildings": [
            "8",
            "8б",
            "10/17",
            "12a",
            "14",
            "16",
            "19/2",
            "21",
            "22/9",
            "23",
            "23а",
            "24",
            "25",
            "26",
            "27",
            "28",
            "37",
            "39/8",
            "40"
        ]
    },
    {
        "street": "Привітна",
        "buildings": []
    },
    {
        "street": "Прирічна",
        "buildings": []
    },
    {
        "street": "Проценко Людмили",
        "buildings": [
            "2",
            "4",
            "6",
            "8"
        ]
    },
    {
        "street": "Пулюя Івана",
        "buildings": [
            "1",
            "1а",
            "1б",
            "2",
            "3",
            "5",
            "5а",
            "5б"
        ]
    },
    {
        "street": "Радченка Петра",
        "buildings": [
            "4",
            "6",
            "8",
            "12",
            "14"
        ]
    },
    {
        "street": "Ратушного Романа",
        "buildings": [
            "2",
            "2/4",
            "3",
            "4",
            "5",
            "6",
            "9",
            "9а",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "21",
            "21а",
            "23",
            "25а",
            "27",
            "29",
            "29а",
            "31",
            "33",
            "35а",
            "37",
            "39",
            "41",
            "41а"
        ]
    },
    {
        "street": "Роздільна",
        "buildings": [
            "1",
            "3",
            "5"
        ]
    },
    {
        "street": "Семенівська",
        "buildings": [
            "9",
            "11",
            "13"
        ]
    },
    {
        "street": "Сім'ї Житецьких",
        "buildings": []
    },
    {
        "street": "Скрипника Мстислава Патріарха",
        "buildings": [
            "7",
            "9",
            "11",
            "13",
            "15",
            "40"
        ]
    },
    {
        "street": "Солом'янська",
        "buildings": [
            "14",
            "16",
            "16б",
            "20а",
            "21",
            "22",
            "23",
            "24",
            "27",
            "28",
            "29",
            "30",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "37",
            "38",
            "39",
            "41",
            "41/2",
            "41к2"
        ]
    },
    {
        "street": "Стадіонна",
        "buildings": [
            "6",
            "14",
            "16/6"
        ]
    },
    {
        "street": "Тополева",
        "buildings": [
            "4/8"
        ]
    },
    {
        "street": "Ушинського",
        "buildings": [
            "1"
        ]
    },
    {
        "street": "Шаповала Генерала",
        "buildings": [
            "2",
            "2а"
        ]
    },
    {
        "street": "Яновського Феофіла",
        "buildings": [
            "1",
            "1а",
            "2"
        ]
    },
    {
        "street": "Яслинська",
        "buildings": []
    }
];

// --- Координати полігонів, що визначають зони покриття ---
// <--- КРОК 2: ПРИЗНАЧАЄМО ІМПОРТОВАНИЙ ТИП ---
const coverageAreas: LatLngExpression[][] = [
  // --- Полігон №1: Основна зона (Солом'янка, вул. Липківського, Протасів Яр) ---
  [
    // Починаємо біля Солом'янської площі
    [50.4360, 30.4795],
    // Йдемо на схід, щоб охопити Протасів Яр та вул. Амосова
    [50.4345, 30.4900], 
    [50.4310, 30.4985], // Глибоко в Протасовому Яру
    [50.4275, 30.4960], // Південна частина зони вул. Амосова
    // Рухаємось на південь вздовж вул. Солом'янської
    [50.4240, 30.4720],
    // Західна межа біля Севастопольської площі (не заходячи на Чоколівку)
    [50.4235, 30.4650], 
    // Повертаємось на північ вздовж Повітрофлотського проспекту та вул. Преображенської
    [50.4325, 30.4680],
    [50.4355, 30.4740],
    // Замикаємо полігон
    [50.4360, 30.4795]
  ],

  // --- Полігон №2: Залізничний масив (вул. Шаповала, Кудряшова, Нововокзальна) ---
  [
    [50.4400, 30.4710], // вул. Шаповала
    [50.4425, 30.4800], // Перетин з вул. Липківського
    [50.4380, 30.4830], // Південна частина біля залізниці
    [50.4355, 30.4735], // вул. Нововокзальна
    [50.4400, 30.4710]
  ],

  // --- Полігон №3: Район "Кадетський Гай" (залишається без змін) ---
  [
    // Охоплюємо вулиці Пулюя, Ернста, Кадетський Гай
    [50.4150, 30.4550],
    [50.4180, 30.4600],
    [50.4140, 30.4680],
    [50.4110, 30.4620],
    [50.4150, 30.4550]
  ]
];
// --- Динамічний імпорт карти ---
const DynamicMap = dynamic(() => import('@/components/CoverageMap'), {
  ssr: false
});

const CoverageMapPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredAddresses = searchTerm.length < 2
        ? coverageAddresses
        : coverageAddresses.map(group => {
            const matchingBuildings = group.buildings.filter(building =>
                `${group.street.toLowerCase()} ${building}`.includes(searchTerm.toLowerCase())
            );
            if (group.street.toLowerCase().includes(searchTerm.toLowerCase()) || matchingBuildings.length > 0) {
                return { ...group, buildings: matchingBuildings.length > 0 ? matchingBuildings : group.buildings };
            }
            return null;
        }).filter(Boolean);

    return (
        <>
        <Header theme={'white'} business={false}/>
            <Head>
                <title>Карта покриття — Batyevka.NET</title>
                <meta name="description" content="Перевірте, чи доступний наш інтернет за вашою адресою. Інтерактивна карта покриття мережі Batyevka.NET." />
            </Head>
            <main className="container mx-auto px-4 py-8 md:py-12">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E293B]">
                        Карта покриття
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Перевірте, чи підключений ваш будинок до нашої мережі. Введіть назву вулиці та номер будинку, щоб знайти свою адресу.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto mb-8 relative">
                    <input
                        type="text"
                        placeholder="Введіть вулицю та номер будинку (напр., Антонова 5)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-5 py-4 pr-12 text-lg bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#DC662D] transition-shadow"
                    />
                    <Search className="absolute top-1/2 right-5 -translate-y-1/2 w-6 h-6 text-gray-400" />
                </div>

                <div className="h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 mb-12">
                   {/* Тепер тут не буде помилки, оскільки типи збігаються */}
                   <DynamicMap coverageAreas={coverageAreas} />
                </div>
                
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                        {searchTerm ? 'Результати пошуку' : 'Список підключених будинків'}
                    </h2>
                    {filteredAddresses.length > 0 ? (
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                            {filteredAddresses.map((group, index) => group && (
                                <div key={index}>
                                    <h3 className="text-lg font-semibold text-[#DC662D] mb-2">{group.street}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {group.buildings.join(', ')}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 py-8">
                            На жаль, за вашим запитом нічого не знайдено.
                        </p>
                    )}
                </div>
            </main>

            <Footer theme={'white'}/>
        </>
    );
};

export default CoverageMapPage;