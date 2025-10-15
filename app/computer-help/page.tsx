"use client";

import React from 'react';
import Head from 'next/head';
import { useModal } from '@/hooks/use-modal-store';
import { useToast } from '@/hooks/use-toast';
import { 
    Wrench, Settings, ShieldAlert, Database, Wifi, Cpu, 
    UserCheck, Clock, Tag, BadgeCheck, FileCheck 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Дані про послуги ---
const services = [
    {
        category: 'Діагностика',
        name: 'Діагностика комп\'ютера',
        description: 'Повний аналіз стану ПК для виявлення апаратних та програмних несправностей.',
        price: '300 грн',
        note: 'Безкоштовно (при замовленні послуг від 500 грн)',
        icon: Wrench,
    },
    {
        category: 'Встановлення ПЗ',
        name: 'Встановлення Windows/MacOS',
        description: 'Встановлення або перевстановлення операційної системи з базовими драйверами.',
        price: '600 грн',
        icon: Settings,
    },
    {
        category: 'Встановлення ПЗ',
        name: 'Встановлення пакету програм',
        description: 'Встановлення офісних програм, браузерів, антивірусу та інших необхідних утиліт.',
        price: '400 грн',
        icon: Settings,
    },
    {
        category: 'Лікування вірусів',
        name: 'Видалення вірусів та шкідливого ПЗ',
        description: 'Повне сканування системи, видалення вірусів, рекламних банерів та шпигунських програм.',
        price: 'від 500 грн',
        icon: ShieldAlert,
    },
    {
        category: 'Робота з даними',
        name: 'Відновлення даних',
        description: 'Спроба відновлення видалених файлів з жорсткого диска або флеш-накопичувача.',
        price: 'від 800 грн',
        icon: Database,
    },
    {
        category: 'Налаштування мережі',
        name: 'Налаштування Wi-Fi роутера',
        description: 'Налаштування підключення до інтернету, створення безпечної Wi-Fi мережі.',
        price: '350 грн',
        icon: Wifi,
    },
    {
        category: 'Налаштування мережі',
        name: 'Обтиск кабелю (конектор RJ-45)',
        description: 'Заміна або встановлення конектора на інтернет-кабель.',
        price: '150 грн',
        icon: Wifi,
    },
    {
        category: 'Модернізація ПК',
        name: 'Чистка від пилу та заміна термопасти',
        description: 'Профілактична чистка системи охолодження ноутбука або ПК для запобігання перегріву.',
        price: '700 грн',
        icon: Cpu,
    },
    {
        category: 'Модернізація ПК',
        name: 'Збірка або модернізація ПК',
        description: 'Підбір комплектуючих та професійна збірка комп\'ютера під ваші потреби.',
        price: 'від 1000 грн',
        icon: Cpu,
    },
];

const ComputerHelpPage: React.FC = () => {
    const { onOpen } = useModal();
    const { toast } = useToast();

    const handleOpenModal = () => {
        try {
            // --- ВИПРАВЛЕНО: Створюємо повний об'єкт OrderData з полями за замовчуванням ---
            const orderData = {
                internetType: `Заявка на комп'ютерну допомогу`,
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

    return (
        <>
        <Header theme={'white'} business={false}/>
        
            <Head>
                <title>Комп'ютерна допомога — Batyevka.NET</title>
                <meta name="description" content="Професійні послуги з ремонту та налаштування комп'ютерів, ноутбуків, лікування вірусів та налаштування мереж." />
            </Head>

            <main className="bg-white">
                {/* --- Hero Section --- */}
                <section className="bg-gray-50/50 py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] leading-tight">
                            Комп'ютерна допомога
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Вирішення будь-яких проблем з вашим комп'ютером, ноутбуком та мережевим обладнанням.
                        </p>
                    </div>
                </section>

                {/* --- Intro Section --- */}
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center">
                             <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1E293B]">
                                Ваш комп'ютер працює не так, як раніше?
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Якщо ви помітили будь-яку з цих проблем, наші фахівці готові допомогти:
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                            <div className="flex items-center"><FileCheck className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />Повільна робота та "зависання"</div>
                            <div className="flex items-center"><FileCheck className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />Проблеми з підключенням до Wi-Fi</div>
                            <div className="flex items-center"><FileCheck className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />На екрані з'являються віруси та реклама</div>
                            <div className="flex items-center"><FileCheck className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />Пристрій не вмикається або вимикається</div>
                            <div className="flex items-center"><FileCheck className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />Сильний шум або перегрів</div>
                             <div className="flex items-center"><FileCheck className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />Потрібно встановити нові програми</div>
                        </div>
                    </div>
                </section>


                {/* --- Services Section --- */}
                <section className="py-12 md:py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1E293B]">
                            Наші послуги
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200/80 flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex items-center mb-4">
                                        <service.icon className="w-8 h-8 text-[#DC662D] mr-4" />
                                        <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                                    </div>
                                    <p className="text-gray-600 flex-grow mb-4">{service.description}</p>
                                    <div className="mt-auto pt-4 border-t border-gray-200/80">
                                        <p className="text-2xl font-extrabold text-[#1E293B]">{service.price}</p>
                                        {service.note && <p className="text-sm text-green-600">{service.note}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                 {/* --- Why Us Section --- */}
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1E293B]">
                            Чому обирають нас?
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <div className="text-center p-6">
                                <UserCheck className="w-12 h-12 text-[#DC662D] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800">Досвідчені фахівці</h3>
                                <p className="text-gray-600 mt-2">Наша команда складається з кваліфікованих майстрів з багаторічним досвідом.</p>
                            </div>
                             <div className="text-center p-6">
                                <Clock className="w-12 h-12 text-[#DC662D] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800">Швидкий виїзд</h3>
                                <p className="text-gray-600 mt-2">Ми розуміємо важливість часу, тому оперативно реагуємо на кожен виклик.</p>
                            </div>
                             <div className="text-center p-6">
                                <Tag className="w-12 h-12 text-[#DC662D] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800">Прозорі ціни</h3>
                                <p className="text-gray-600 mt-2">Ви завжди знаєте вартість послуг заздалегідь, без прихованих платежів.</p>
                            </div>
                            <div className="text-center p-6">
                                <BadgeCheck className="w-12 h-12 text-[#DC662D] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-800">Гарантія на роботи</h3>
                                <p className="text-gray-600 mt-2">Ми впевнені у якості наших послуг і надаємо гарантію на всі виконані роботи.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Call to Action Section --- */}
                <section className="py-16 bg-[#1E293B]">
                    <div className="container mx-auto px-4 text-center">
                         <h2 className="text-3xl font-extrabold mb-4 text-white">Потрібна допомога?</h2>
                        <p className="mb-8 max-w-xl mx-auto text-gray-300">Не відкладайте проблему на потім. Залиште заявку, і наш майстер зв'яжеться з вами для консультації.</p>
                        <button 
                            onClick={handleOpenModal}
                            className="bg-[#DC662D] hover:bg-opacity-90 text-white font-bold text-lg py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                            Викликати майстра
                        </button>
                    </div>
                </section>
            </main>
            <Footer theme={'white'}/>
        </>
    );
};

export default ComputerHelpPage;