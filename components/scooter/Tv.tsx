"use client";

import React, { useState } from 'react';
import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { useModal } from "@/hooks/use-modal-store";
import { useToast } from "@/hooks/use-toast";

// --- Іконки ---
const PlayIcon: React.FC = () => (
    <svg className="w-10 h-10 text-[#DC662D] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const DevicesIcon: React.FC = () => (
    <svg className="w-10 h-10 text-[#5984B2] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const NoAdsIcon: React.FC = () => (
    <svg className="w-10 h-10 text-[#51B18B] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
    </svg>
);
const BillIcon: React.FC = () => (
    <svg className="w-10 h-10 text-[#8B6CB0] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);
const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-[#51B18B] shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);
const ChevronDownIcon: React.FC = () => (
     <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-[#5984B2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);
const TvIconBlue: React.FC = () => (
    <svg className="w-6 h-6 text-[#5984B2] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);
const InfoIcon: React.FC = () => (
    <svg className="w-6 h-6 text-[#DC662D] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// --- ДАНІ КАНАЛІВ ---
const channelsData = {
    free: [
        { cat: "Новини та ТБ", list: "24 канал, 5 канал HD, Еспресо TV HD, Телеканал Рада, Перший, FREEДОМ, Надія, ICTV HD, Інтер HD, 1+1 Марафон HD, Euronews ENG, Дніпро ТV HD, Київ, France 24 Français, France 24 English, France 24 Arabic, Апостроф TV, TVP World, NHK World, France 24 Español, МИ - УКРАЇНА HD" },
        { cat: "Фільми та Серіали", list: "УНІАН Серіал, Телесеріал, [M] Трейлери, Розслідування Мердока, Детективні хроніки, [M] Віра, Опер за викликом+, Сімейні мелодрами+, [M] Речдок, [М] Кінопортал, [M] БарДак, [M] Драматичний, [M] Light cinema 1, [M] Light cinema 2, [M] Танька і Володька, [M] Одного разу під Полтавою, [М] Movie Library, [M] Теленовели 2, [M] Мovie mode 1, [M] Мovie mode 2, [M] Doramas 1, [M] Doramas 2, [M] Детективне кіно, [M] Кримінальне кіно, [M] Мелодрами, [M] Кінокласика" },
        { cat: "Розважальні та Пізнавальні", list: "Eco TV, Classical Harmony, Суспільне Культура, DIY, Орел і Решка, ДІМ HD, Мандри, Пригоди, Документальний, Сімейний, МИ - УКРАЇНА + HD, Світ навиворіт+, Загублений світ+, ЖВЛ+, [M] Доктор Комаровський, [M] Стосується кожного, Gagsnetwork, Панянка-селянка+, Вікторина, [M] Говорить вся країна, [M] Гумористичний, [M] Містика, [M] Реальні історії, Сонце+" },
        { cat: "Спорт і Дитячі", list: "Extreme Sports, Спорт огляд, Суспільне Спорт, Трофей Premium, Пізнавальний Kids, Мультиленд, Smart Kids, [M] Дитячий садок, [M] KIDDISVIT, [M] Kids town, [M] LOLka" },
        { cat: "Музичні телеканали", list: "M1 HD, M2 HD, #НАШЕ ретро, ЕТНО КАНАЛ, MEGOGO MUSIC" },
        { cat: "Радіостанції", list: "Radio NV, Kiss FM, Мелодія FM, Наше Радіо, Radio ROKS, Radio Relax, Хіт FM, Radio Jazz, Радіо МАКСИМУМ, Радіо Nostalgie, Люкс ФМ, Радіо П'ятниця, Lounge Fm, Авторадіо Україна, NRJ радіо, Львівська Хвиля, Magic Radio, DJFM, Power FM, Шлягер FM, Радіо Закарпаття - FM, Українське радіо, Радіо Промінь, Радіо Культура, FM Галичина, ПЕРЕЦЬ FM, Радіо Байрактар, КИЇВ - FM, Classic Radio, Армія FM, Ми – Україна Радіо, Накипіло, Тернопільська Хвиля, Радіоточка, Champion Radio, РАІ, Radio Прищепкін TOP40 UA, SUN FM, РАДІОПІХОТА, Люкс ФМ Українські Хіти, Люкс ФМ Chill and Relax, Люкс ФМ Золоті Хіти, Люкс ФМ Сучасні Хіти, K-Pop 24" }
    ],
    national: [
        { cat: "Новини та ТБ", list: "24 канал, 5 канал HD, Еспресо TV HD, Телеканал Рада, Перший, СТБ HD, FREEДОМ, LALE HD, ATR, Суспільне Київ, Суспільне Ужгород, Прямий HD, Надія, Перший Західний, Новий канал HD, ICTV HD, ОЦЕ HD, НТН HD, К1 HD, К2 HD, Інтер HD, ТЕТ HD, 1+1 Марафон HD, 2+2 HD, Бігуді, МЕГА HD, Eco TV, Суспільне Крим, Теперішній час HD, Kvartal TV, Суспільне Житомир, 33 канал, Euronews ENG, OBOZREVATEL TV HD, Дніпро ТV HD, Суспільне Культура, TV-4, Тернопіль1, 36.6 HD, Київ, France 24, Суспільне (всі регіони), D1 HD, Правда ТУТ Львів HD" },
        { cat: "Фільми та Серіали", list: "Enter-фільм HD, УНІАН Серіал, Романтика, [M] Комедія, Драма, Жахи, Історії, Kinohit, Бойовик, [M] Що подивитися, Star Cinema HD, FILMUADRAMA, Телесеріал, [M] Трейлери, NOW series, Розслідування Мердока, Детективні хроніки, [M] Віра, Опер за викликом+, Сімейні мелодрами+, [M] Речдок, [М] Кінопортал, Хіти Мегого (Родина, Драма, Адреналін), [M] Кінокласика, [M] БарДак, [M] Драматичний, [M] Light cinema, [M] Танька і Володька, [M] Одного разу під Полтавою, [М] Movie Library, [M] Теленовели 2, [M] Мovie mode, [M] Doramas, [M] Детективне кіно, [M] Кримінальне кіно, [M] Мелодрами" },
        { cat: "Спорт і Дитячі", list: "Extreme Sports, Піксель HD, ПЛЮСПЛЮС HD, Мультпрем'єра, Дитячий 2, Пізнавальний Kids, Спортивний, Суспільне Спорт, Мультиленд, Smart Kids, Трофей Premium, [M] Дитячий садок, [M] KIDDISVIT, [M] Kids town, [M] LOLka" },
        { cat: "Пізнавальні та Розважальні", list: "Classical Harmony, DIY, Орел і Решка, ДІМ HD, Мандри, Пригоди, Документальний, Сімейний, МИ - УКРАЇНА + HD, Світ навиворіт+, Загублений світ+, ЖВЛ+, [M] Доктор Комаровський, [M] Стосується кожного, Gagsnetwork, Панянка-селянка+, Вікторина, [M] Говорить вся країна, [M] Гумористичний, [M] Містика, [M] Реальні історії, Сонце+, Кухня, Подорожі, Розваги" },
        { cat: "Музичні телеканали", list: "M1 HD, M2 HD, #НАШЕ music, #НАШЕ ретро, ЕТНО КАНАЛ, MEGOGO MUSIC, Fashion TV HD" },
        { cat: "Радіостанції", list: "Radio NV, Kiss FM, Мелодія FM, Наше Радіо, Radio ROKS, Radio Relax, Хіт FM, Radio Jazz, Радіо МАКСИМУМ, Люкс ФМ, Радіо П'ятниця, Lounge Fm, Авторадіо Україна, NRJ радіо, Львівська Хвиля, Magic Radio, DJFM, Power FM, Шлягер FM, Радіо Закарпаття - FM, Українське радіо, Радіо Промінь, Радіо Культура, FM Галичина, ПЕРЕЦЬ FM, Радіо Байрактар, КИЇВ - FM, Classic Radio, Армія FM, Ми – Україна Радіо, Накипіло, Тернопільська Хвиля, Радіоточка, Champion Radio, РАІ, Radio Прищепкін TOP40 UA, SUN FM, РАДІОПІХОТА, Люкс ФМ Українські Хіти, Люкс ФМ Chill and Relax, Люкс ФМ Золоті Хіти, Люкс ФМ Сучасні Хіти, K-Pop 24" }
    ],
    light: [
        { cat: "Новини та ТБ", list: "Всі канали Національного ТБ + Прямий HD, 8 канал HD, DW English HD, Fashion TV HD, Телеканал MTM, Тернопіль1, Фауна, СВІТЛО HD, Наука, Терра, Дача HD, Ісландія, Белсат TV, ВІТА ТБ, НТА, Місто +, ІНТБ, TV 7+, DW Espanol HD, Bloomberg, CNN, Сіль ТБ HD" },
        { cat: "Фільми та Серіали", list: "FilmBox Arthouse HD, FilmBox, Enter-фільм HD, Романтика, [M] Комедія, Драма, Жахи, Історії, Kinohit, Бойовик, Prime, Епоха, Трилер, Megahit, Любов, Дивись як чутно, Star Cinema HD, Кіно звучить, [M] Фантастика, FILMUADRAMA, [M] Фільми 4K, Тoп, Телесеріал, [M] Документальне кіно, Timeless Dizi Channel, [M] Фільми 8K, KINO 1 HD, [M] Трейлери, NOW series, [M] Пес, DORAMA, KINOWOOD, PROKINO, Розслідування Мердока, Детективні хроніки, Теленовели, [M] Віра, Опер за викликом+, Сімейні мелодрами+, KINO 2 HD, [M] Дільничий з ДВРЗ, [M] Розтин покаже, [M] Речдок, [М] Кінопортал, Хіти Мегого" },
        { cat: "Спорт", list: "FightBox HD, Перший автомобільний, Трофей HD, Extreme Sports, Fast’nFunBox HD, Gametoon HD, Setanta Sports HD, Setanta Sports+ HD, Спорт огляд, Equalympic, Eurosport 4K, Рибалка, UPL.TV, Суспільне Спорт, DIVISPORT, Трофей Premium" },
        { cat: "Пізнавальні", list: "DocuBox HD, МЕГА HD, Eco TV, Classical Harmony, History 2 HD, History HD, 36.6 HD, Фауна, Наука, Терра, Дача HD, КУС-КУС, Travel&food, DIY, 6 Соток, ЧЕМОДАН ТВ HD, UTRAVEL, МАСОН ТБ, ФРОНТ, ЗАКОН ТБ, МЕДИЧНИЙ, Світ навиворіт+, Загублений світ+, [M] Доктор Комаровський, RAZ 1, RAZ 2" },
        { cat: "Дитячі", list: "LALE HD, Піксель HD, ПЛЮСПЛЮС HD, Мультпрем'єра, Дитячий: UMa & UMi, NIKI Junior HD, NIKI Kids HD, Kids, LEGO, Baby TV, [M] Казки на ніч AUDIO, [M] Cocomelon, Smart Kids, Мультиленд, [M] Дитячий садок, [M] Черепашки-ніндзя, [M] Блиск і монстрмашини, [M] Гучний дім, Cartoon Network" },
        { cat: "Музичні телеканали", list: "M1 HD, M2 HD, 360 TuneBox HD, #НАШЕ music, #НАШЕ ретро, ЕТНО КАНАЛ, MEGOGO MUSIC, 4ever music HD, EU MUSIC HD, InRating, UA Music, Black, Viva Latino, Music Box" },
        { cat: "Радіостанції", list: "Radio NV, Kiss FM, Мелодія FM, Наше Радіо, Radio ROKS, Radio Relax, Хіт FM, Radio Jazz, Радіо МАКСИМУМ, Радіо Nostalgie, Люкс ФМ, Радіо П'ятниця, Lounge Fm, Авторадіо Україна, NRJ радіо, Львівська Хвиля, Magic Radio, DJFM, Power FM, Шлягер FM, Радіо Закарпаття - FM, Українське радіо, Радіо Промінь, Радіо Культура, FM Галичина, ПЕРЕЦЬ FM, Радіо Байрактар, КИЇВ - FM, Classic Radio, Армія FM, Ми – Україна Радіо, Накипіло, Тернопільська Хвиля, Радіоточка, Champion Radio, РАІ, Radio Прищепкін TOP40 UA, SUN FM, РАДІОПІХОТА, Люкс ФМ Українські Хіти, Люкс ФМ Chill and Relax, Люкс ФМ Золоті Хіти, Люкс ФМ Сучасні Хіти, K-Pop 24" }
    ],
    optimal: [
        { cat: "Фільми та Серіали", list: "FilmBox Arthouse HD, FilmBox, Viasat Kino Action HD, Viasat Kino World, Viasat Kino Comedy HD, Viasat Kino HD, Романтика, [M] Комедія, Драма, Жахи, Історії, Kinohit, Бойовик, Prime, Епоха, Трилер, Megahit, Любов, FX HD, BOLT HD, Star Cinema HD, [M] Фантастика, [M] Преміум кіно, Viasat Epic Drama, FILMUADRAMA, [M] Фільми 4K, Тoп, Українське кіно, Timeless Dizi Channel, [M] Фільми 8K, KINO 1 HD, [M] Трейлери, NOW series, [M] Пес, DORAMA, KINOWOOD, Cine+, Cine+ Kids, Cine+ legend, PROKINO, AMC, Розслідування Мердока, Детективні хроніки, Теленовели, [M] Віра, Опер за викликом+, Сімейні мелодрами+, KINO 2 HD, [M] Дільничий з ДВРЗ, [M] Розтин покаже, [M] Речдок, [М] Кінопортал, [M] CSI: Місце злочину, Твоє кіно Relax, Твоє Кіно Action, Твоє кіно ХІТ, Хіти Мегого Родина, Хіти Мегого Драма, Хіти Мегого Адреналін, [M] Кінокласика, [M] Декстер, [M] Комісар Рекс" },
        { cat: "Спорт", list: "FightBox HD, Перший автомобільний, Трофей HD, Extreme Sports, Fast’nFunBox HD, Eurosport 1 HD, Eurosport 2 HD, Gametoon HD, Setanta Sports HD, Setanta Sports+ HD, Спорт огляд, Equalympic, Eurosport 4K, Рибалка, UPL.TV, Суспільне Спорт, DIVISPORT, Трофей Premium" },
        { cat: "Пізнавальні", list: "Viasat Explore, Viasat History, Viasat Nature, МЕГА HD, Travel Channel, National Geographic HD, National Geographic Wild HD, Eco TV, English club TV HD, Discovery channel, ID: Investigation Discovery HD, Animal Planet HD, History 2 HD, History HD, 36.6 HD, Фауна, Наука, Терра, Дача HD, Viasat True Crime, Food Network HD, [M] Discovery+ 1, [M] D+ Голі й налякані, [M] D+ Золота лихоманка, ЧЕМОДАН ТВ HD, Сіль ТБ HD, МАСОН ТБ, ФРОНТ, ЗАКОН ТБ, МЕДИЧНИЙ, Світ навиворіт+, Загублений світ+, [M] Доктор Комаровський" },
        { cat: "Дитячі", list: "LALE HD, Піксель HD, ПЛЮСПЛЮС HD, Мультпрем'єра, Мультсеріал, Дитячий: UMa & UMi, NIKI Junior HD, NIKI Kids HD, Kids, LEGO, Baby TV, [M] Казки на ніч AUDIO, [M] Cocomelon, [M] Paramоunt+ Kids, [M] Губка Боб, [M] Щенячий патруль, Пізнавальний Kids, [M] LEGO Ninjago, Мультиленд, [M] Легенда про Корру, [M] Аватар: Останній захисник, Smart Kids, [M] Леді Баг і Супер-Кіт, [M] Черепашки-ніндзя, [M] Блиск і монстрмашини, [M] Гучний дім, [M] Дитячий садок, Cartoon Network" },
        { cat: "Новини, Розваги та Інше", list: "24 канал, 5 канал HD, Еспресо TV HD, Перший, СТБ HD, FREEДОМ, Новий канал HD, ICTV HD, ОЦЕ HD, НТН HD, К1 HD, К2 HD, Інтер HD, ТЕТ HD, 1+1 Марафон HD, 2+2 HD, Бігуді, TLC, Kvartal TV, DW English HD, Euronews ENG, OBOZREVATEL TV HD, Суспільне Культура, Київ, France 24, HGTV, [M] Гумор, Белсат TV, Орел і Решка, ДІМ HD, DW Espanol HD, Bloomberg, CNN, ЖВЛ+, [M] Стосується кожного, Gagsnetwork" },
        { cat: "Музичні телеканали", list: "M1 HD, M2 HD, 360 TuneBox HD, #НАШЕ music, #НАШЕ ретро, ЕТНО КАНАЛ, MEGOGO MUSIC, 4ever music HD, EU MUSIC HD, InRating, UA Music, Black, Viva Latino, Music Box, MusicBox Classic, МУЗВАР" },
        { cat: "Радіостанції", list: "Radio NV, Kiss FM, Мелодія FM, Наше Радіо, Radio ROKS, Radio Relax, Хіт FM, Radio Jazz, Радіо МАКСИМУМ, Радіо Nostalgie, Люкс ФМ, Радіо П'ятниця, Lounge Fm, Авторадіо Україна, NRJ радіо, Львівська Хвиля, Magic Radio, DJFM, Power FM, Шлягер FM, Радіо Закарпаття - FM, Українське радіо, Радіо Промінь, Радіо Культура, FM Галичина, ПЕРЕЦЬ FM, Радіо Байрактар, КИЇВ - FM, Classic Radio, Армія FM, Ми – Україна Радіо, Накипіло, Тернопільська Хвиля, Радіоточка, Champion Radio, РАІ, Radio Прищепкін TOP40 UA, SUN FM, РАДІОПІХОТА, Люкс ФМ Українські Хіти, Люкс ФМ Chill and Relax, Люкс ФМ Золоті Хіти, Люкс ФМ Сучасні Хіти, K-Pop 24, Радіо БУГ" }
    ],
    maximal: [
        { cat: "HBO Max та Топ-Серіали", list: "[M] Друзі, [M] Антураж, [M] Теорія великого вибуху, [M] Надприродне, [М] Менталіст, [M] Два з половиною чоловіки, [M] Секс і місто, [M] Вгамуй свій ентузіазм, [M] Сопрано, [M] Гра престолів, [M] Велике кохання, [M] Підозрюваний, [M] Топ серіали (1-6), [M] Декстер, [M] Комісар Рекс" },
        { cat: "Преміум Кіно", list: "Viasat Kino Action HD, Viasat Kino World, Viasat Kino Comedy HD, Viasat Kino HD, Viasat Epic Drama, FilmBox Arthouse HD, FilmBox, Cine+, Cine+ hit, Cine+ legend, AMC, [M] Фільми 4K, [M] Фільми 8K, [M] Преміум кіно, [M] Paramount+ (3,4,6,7,8), PROKINO, KINOWOOD, DORAMA, Star Cinema HD, Твоє кіно (Relax, Action, ХІТ), Хіти Мегого (Родина, Драма, Адреналін)" },
        { cat: "Спорт (MEGOGO Спорт)", list: "MEGOGO Футбол (Перший, Другий, Третій, 4-20), MEGOGO ГОНГ, MEGOGO Спорт, Setanta Sports HD, Setanta Sports+ HD, Eurosport 1 HD, Eurosport 2 HD, Eurosport 4K, UPL.TV, FightBox HD, Перший автомобільний, Трофей HD, Extreme Sports, Fast’nFunBox HD, Gametoon HD, Sport 1, Sport 2, Sport 3, Sport 4, Sport 5, Dynamo TV HD, Суспільне Спорт, DIVISPORT, Трофей Premium" },
        { cat: "Пізнавальні", list: "Discovery channel, Viasat Explore, Viasat History, Viasat Nature, Viasat True Crime, National Geographic HD, National Geographic Wild HD, History 2 HD, History HD, Animal Planet HD, ID: Investigation Discovery HD, [M] Discovery+ 1, [M] D+ Віза нареченої, [M] D+ Голі й налякані, [M] D+ Золота лихоманка, [M] D+ Махінатори, [M] D+ Смертельний улов, [M] D+ Я важу 300 кг, [M] Documentary Max, МЕГА HD, Travel Channel" },
        { cat: "Дитячі", list: "Cartoon Network, Cine+ Kids, [M] Paramоunt+ Kids, [M] Paramоunt+ Kids 2, [M] Paramоunt+ Kids 3, LALE HD, Піксель HD, ПЛЮСПЛЮС HD, NIKI Junior HD, NIKI Kids HD, Kids, LEGO, Baby TV, [M] Аdventure time, [M] Губка Боб, [M] Щенячий патруль, [M] LEGO Ninjago, [M] Легенда про Корру, [M] Аватар: Останній захисник, [M] Леді Баг і Супер-Кіт, [M] Черепашки-ніндзя, [M] Блиск і монстрмашини, [M] Гучний дім" },
        { cat: "Музичні телеканали", list: "M1 HD, M2 HD, 360 TuneBox HD, #НАШЕ music, #НАШЕ ретро, ЕТНО КАНАЛ, MEGOGO MUSIC, 4ever music HD, EU MUSIC HD, InRating, UA Music, Black, Viva Latino, Music Box, MusicBox Classic, МУЗВАР" },
        { cat: "Радіостанції", list: "Radio NV, Kiss FM, Мелодія FM, Наше Радіо, Radio ROKS, Radio Relax, Хіт FM, Radio Jazz, Радіо МАКСИМУМ, Радіо Nostalgie, Люкс ФМ, Радіо П'ятниця, Lounge Fm, Авторадіо Україна, NRJ радіо, Львівська Хвиля, Magic Radio, DJFM, Power FM, Шлягер FM, Радіо Закарпаття - FM, Українське радіо, Радіо Промінь, Радіо Культура, FM Галичина, ПЕРЕЦЬ FM, Радіо Байрактар, КИЇВ - FM, Classic Radio, Армія FM, Ми – Україна Радіо, Накипіло, Тернопільська Хвиля, Радіоточка, Champion Radio, РАІ, Radio Прищепкін TOP40 UA, SUN FM, РАДІОПІХОТА, Люкс ФМ Українські Хіти, Люкс ФМ Chill and Relax, Люкс ФМ Золоті Хіти, Люкс ФМ Сучасні Хіти, K-Pop 24, Радіо БУГ" }
    ],
    kino: [
        { cat: "Фільми та Серіали", list: "Романтика, [M] Комедія, Драма, Жахи, Історії, Kinohit, Бойовик, [M] Що подивитися, Prime, Епоха, Трилер, Megahit, Любов, Кіно звучить, [M] Фантастика, [M] Преміум кіно, [M] Фільми 4K, Тoп, Телесеріал, [M] Трейлери, Розслідування Мердока, Детективні хроніки, [M] Віра, Опер за викликом+, Сімейні мелодрами+, [M] Речдок, [М] Кінопортал, [M] CSI: Місце злочину, Хіти Мегого Родина, Хіти Мегого Драма, Хіти Мегого Адреналін, [M] Кінокласика, [M] БарДак, [M] Драматичний, [M] Light cinema 1, [M] Light cinema 2, [M] Танька і Володька, [M] Одного разу під Полтавою, [М] Movie Library, [M] Теленовели 2, [M] Мovie mode 1, [M] Мovie mode 2, [M] Doramas 1, [M] Doramas 2, [M] Детективне кіно, [M] Кримінальне кіно, [M] Мелодрами" },
        { cat: "Новини та ТБ", list: "24 канал, 5 канал HD, Еспресо TV HD, Телеканал Рада, Перший, FREEДОМ, ICTV HD, Інтер HD, 1+1 Марафон HD, Euronews ENG, Дніпро ТV HD, Київ, France 24 Français, France 24 English, France 24 Arabic, Апостроф TV, TVP World, NHK World, France 24 Español, МИ - УКРАЇНА HD" },
        { cat: "Пізнавальні", list: "Eco TV, Classical Harmony, [M] Discovery+ 1, DIY, Мандри, Пригоди, Документальний, Світ навиворіт+, Загублений світ+, [M] Доктор Комаровський, [M] Active TV, One Planet, [M] eXplore, Про Київ, Знаєм 24, [M] Zoosvit, [M] Реальні історії" },
        { cat: "Розважальні та Дитячі", list: "УНІАН Серіал, [M] Гумор, Орел і Решка, ДІМ HD, Сімейний, МИ - УКРАЇНА + HD, ЖВЛ+, [M] Стосується кожного, Gagsnetwork, Панянка-селянка+, Вікторина, [M] Говорить вся країна, [M] Містика, Сонце+, Мультпрем'єра, Мультсеріал, Kids, LEGO, Пізнавальний Kids, Smart Kids, Мультиленд, [M] Дитячий садок, [M] KIDDISVIT, [M] Kids town, [M] LOLka" },
        { cat: "Музичні телеканали", list: "M1 HD, M2 HD, #НАШЕ ретро, ЕТНО КАНАЛ, MEGOGO MUSIC" },
        { cat: "Радіостанції", list: "Radio NV, Kiss FM, Мелодія FM, Наше Радіо, Radio ROKS, Radio Relax, Хіт FM, Radio Jazz, Радіо МАКСИМУМ, Радіо Nostalgie, Люкс ФМ, Радіо П'ятниця, Lounge Fm, Авторадіо Україна, NRJ радіо, Львівська Хвиля, Magic Radio, DJFM, Power FM, Шлягер FM, Радіо Закарпаття - FM, Українське радіо, Радіо Промінь, Радіо Культура, FM Галичина, ПЕРЕЦЬ FM, Радіо Байрактар, КИЇВ - FM, Classic Radio, Армія FM, Ми – Україна Радіо, Накипіло, Тернопільська Хвиля, Радіоточка, Champion Radio, РАІ, Radio Прищепкін TOP40 UA, SUN FM, РАДІОПІХОТА, Люкс ФМ Українські Хіти, Люкс ФМ Chill and Relax, Люкс ФМ Золоті Хіти, Люкс ФМ Сучасні Хіти, K-Pop 24" }
    ],
    sport: [
        { cat: "Преміум Спорт", list: "MEGOGO Футбол Перший, MEGOGO Футбол Другий, MEGOGO Футбол Третій, MEGOGO Футбол 4-20, MEGOGO ГОНГ, MEGOGO Спорт, Setanta Sports HD, Setanta Sports+ HD, Eurosport 1 HD, Eurosport 2 HD, Eurosport 4K, UPL.TV" },
        { cat: "Спорт і Екстрим", list: "FightBox HD, Перший автомобільний, Трофей HD, Sport 1, Sport 2, Sport 3, Sport 4, Sport 5, Extreme Sports, Fast’nFunBox HD, Dynamo TV HD, Спорт огляд, Рибалка, Суспільне Спорт, DIVISPORT, Трофей Premium, Спортивний (Блогери)" },
        { cat: "Новини та ТБ", list: "24 канал, 5 канал HD, Еспресо TV HD, Телеканал Рада, Перший, FREEДОМ, ICTV HD, Інтер HD, 1+1 Марафон HD, Euronews ENG, Дніпро ТV HD, Київ, France 24 Français, France 24 English, France 24 Arabic, Апостроф TV, TVP World, NHK World, France 24 Español, МИ - УКРАЇНА HD" },
        { cat: "Фільми та Серіали", list: "УНІАН Серіал, Телесеріал, [M] Трейлери, Розслідування Мердока, Детективні хроніки, [M] Віра, Опер за викликом+, Сімейні мелодрами+, [M] Речдок, [М] Кінопортал, Хіти Мегого Родина, Хіти Мегого Драма, Хіти Мегого Адреналін, [M] Кінокласика, [M] БарДак, [M] Драматичний, [M] Light cinema 1, [M] Light cinema 2, [M] Танька і Володька, [M] Одного разу під Полтавою, [М] Movie Library, [M] Теленовели 2, [M] Мovie mode 1, [M] Мovie mode 2, [M] Doramas 1, [M] Doramas 2, [M] Детективне кіно, [M] Кримінальне кіно, [M] Мелодрами" },
        { cat: "Дитячі", list: "Мультпрем'єра, Мультсеріал, Kids, LEGO, Пізнавальний Kids, Smart Kids, Мультиленд, [M] Дитячий садок, [M] KIDDISVIT, [M] Kids town, [M] LOLka" },
        { cat: "Музичні телеканали", list: "M1 HD, M2 HD, #НАШЕ ретро, ЕТНО КАНАЛ, MEGOGO MUSIC" },
        { cat: "Радіостанції", list: "Radio NV, Kiss FM, Мелодія FM, Наше Радіо, Radio ROKS, Radio Relax, Хіт FM, Radio Jazz, Радіо МАКСИМУМ, Радіо Nostalgie, Люкс ФМ, Радіо П'ятниця, Lounge Fm, Авторадіо Україна, NRJ радіо, Львівська Хвиля, Magic Radio, DJFM, Power FM, Шлягер FM, Радіо Закарпаття - FM, Українське радіо, Радіо Промінь, Радіо Культура, FM Галичина, ПЕРЕЦЬ FM, Радіо Байрактар, КИЇВ - FM, Classic Radio, Армія FM, Ми – Україна Радіо, Накипіло, Тернопільська Хвиля, Радіоточка, Champion Radio, РАІ, Radio Прищепкін TOP40 UA, SUN FM, РАДІОПІХОТА, Люкс ФМ Українські Хіти, Люкс ФМ Chill and Relax, Люкс ФМ Золоті Хіти, Люкс ФМ Сучасні Хіти, K-Pop 24" }
    ]
};

// --- ТАРИФИ ТБ ---
const tvPlans = [
    {
        id: 'free',
        name: 'Безкоштовне ТБ',
        priceText: '0',
        desc: 'Базовий ефір. Ідеально для старту.',
        highlights: ['202 канали', 'Національні новини та ефірне ТБ', 'Регіональні канали', 'Популярні радіостанції та блогери'],
        channels: channelsData.free,
        badge: null
    },
    {
        id: 'national',
        name: 'Національне ТБ',
        priceText: '50',
        desc: 'Вигідний відпочинок. Українські та закордонні канали, тисячі фільмів.',
        highlights: ['289 каналів в етері та записі до 14 днів', '7000+ фільмів, серіалів і мультиків', '1400 аудіокниг та подкастів', 'Фільмові канали Star Family HD, [М] Комедія'],
        channels: channelsData.national,
        badge: 'Хіт продажу'
    },
    {
        id: 'light',
        name: 'Легка',
        priceText: '85',
        desc: 'Достатньо, щоб уся родина відпочила добре. Вільний час для кіно та хобі.',
        highlights: ['379 каналів', '11 500+ фільмів і серіалів у Full HD/4К', 'Пізнавальні History HD, DocuBox HD', 'Setanta Sports для фанатів'],
        channels: channelsData.light,
        badge: null
    },
    {
        id: 'optimal',
        name: 'Оптимальна',
        priceText: '199',
        desc: 'Ідеальний баланс контенту. Голлівуд, мультики для малечі та спорт.',
        highlights: ['442 канали в етері та записі', '12 500+ фільмів (Disney, Paramount+)', 'Преміальні Viasat, Cine+, FOX, Eurosport', 'Setanta Sports та дитячий Cartoon Network'],
        channels: channelsData.optimal,
        badge: 'Хіт продажу'
    },
    {
        id: 'maximal',
        name: 'Максимальна',
        priceText: '350',
        desc: 'Усе й одразу. Топова передплата з ексклюзивами HBO Max та спортом.',
        highlights: ['501 канал (абсолютний максимум)', '19 500+ фільмів у Full HD і 4К', 'Серіали НВО Max (Гра престолів, Сопрано)', 'Усі спортивні ліги, єврокубки та Viasat'],
        channels: channelsData.maximal,
        badge: null
    },
    {
        id: 'kino',
        name: 'Кіно+',
        priceText: '129',
        desc: 'Особлива передплата для справжніх поціновувачів якісного кіно.',
        highlights: ['227 каналів (з акцентом на кіно)', '12 000+ фільмів і мультиків у Full HD/4К', 'Унікальні [M]-плейлісти (комедія, детективи)', 'Кіношні преміум телеканали'],
        channels: channelsData.kino,
        badge: null
    },
    {
        id: 'sport',
        name: 'Спорт',
        priceText: '349',
        desc: 'Опиніться на стадіоні. Ліги, нац.чемпіонати, єдиноборства та Єврокубки.',
        highlights: ['246 каналів (увесь топовий спорт)', 'Усі матчі збірної України та ЧС-2026', 'MEGOGO Футбол HD (1-20), MEGOGO ГОНГ', 'Контент 18+ у якості Full HD і 4К'],
        channels: channelsData.sport,
        badge: null
    }
];

const annualPlans = [
    { name: 'Оптимальна (1 рік)', price: '1793 грн', desc: 'Платіть одразу за 12 місяців і отримуйте суттєву знижку.' },
    { name: 'Максимальна (1 рік)', price: '3232 грн', desc: 'Увесь топовий контент MEGOGO за найкращою ціною на рік.' }
];

const TelevisionPage: React.FC = () => {
    const { onOpen } = useModal();
    const { toast } = useToast();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // ІГОР: Викликаємо твою класичну форму без жодних змін API.
    // Я використав точно той самий orderData, що ти просив, 
    // але додав туди `isTvOrder: true`. Це маячок для твоєї форми (див. інструкцію нижче).
    const handleConnectClick = (planName: string) => {
        try {
            const orderData = {
                internetType: `Підключення ТБ: ${planName}`,
                hasTV: true,
                internetSpeed: 0,
                totalMonthlyPrice: 0,
                internetMeasure: '',
                internetPrice: 0,
                hasStaticIP: false,
                prepaidMonths: 0,
                setupPrice: 0,
                routerPrice: 0,
                isTvOrder: true, 
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

    const toggleDropdown = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const jsonLdData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Batyevka.NET", "item": "https://www.batyevka.net/" },
                  { "@type": "ListItem", "position": 2, "name": "Телебачення MEGOGO", "item": "https://www.batyevka.net/tv" }
                ]
            },
            {
                "@type": "Product",
                "name": "Інтерактивне телебачення MEGOGO від Batyevka.NET",
                "description": "Понад 500 каналів у HD та 4K, світові кінопрем'єри, серіали HBO та спортивні трансляції. Вигідні комбо-пакети Гігабітний Інтернет + ТБ.",
                "brand": { "@type": "Brand", "name": "MEGOGO" },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "0",
                    "highPrice": "350",
                    "priceCurrency": "UAH"
                }
            }
        ]
    };

    return (
        <>
            <div className='mt-5 scroll-smooth relative'>
                <Head>
                    <title>Телебачення MEGOGO — Batyevka.NET</title>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="Підключайте телебачення MEGOGO від Batyevka.NET. Вигідні комбо-пакети Інтернет 1 Гбіт/с + ТБ у Солом'янському районі." />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
                </Head>

                <style dangerouslySetInnerHTML={{__html: `
                    html { scroll-behavior: smooth; }
                    details > summary { list-style: none; outline: none; }
                    details > summary::-webkit-details-marker { display: none; }
                    
                    .channel-scroll::-webkit-scrollbar { width: 6px; }
                    .channel-scroll::-webkit-scrollbar-track { background: #F4F2F2; border-radius: 10px; }
                    .channel-scroll::-webkit-scrollbar-thumb { background: #BDBDBD; border-radius: 10px; }
                    .channel-scroll::-webkit-scrollbar-thumb:hover { background: #5F6061; }
                `}} />

                <div className="bg-[#F4F2F2] text-[#5F6061] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <main className="container mx-auto px-4 py-8 md:py-16">

                        {/* ----- БЛОК 1. HERO SECTION ----- */}
                        <section className="text-center py-10 md:py-16 mb-8 max-w-4xl mx-auto">
                            <span className="text-sm font-bold uppercase tracking-widest mb-6 block">
                                Партнерська послуга <span className="text-[#DC662D]">Batyevka</span><span className="text-[#0E2D43]">.NET</span>
                            </span>
                            
                            <div className="flex justify-center mb-6">
                                <svg viewBox="0 0 160 30" className="h-10 md:h-14">
                                    <text x="0" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="28" letterSpacing="-1.5">
                                        <tspan fill="#0E2D43">ME</tspan>
                                        <tspan fill="#51B18B">GO</tspan>
                                        <tspan fill="#DC662D">GO</tspan>
                                    </text>
                                </svg>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8 text-[#0E2D43]">
                                Інтерактивне телебачення
                            </h1>
                            
                            <p className="text-lg md:text-xl text-[#5F6061] mb-6 leading-relaxed">
                                Перетворіть свій телевізор на справжній домашній кінотеатр. Ми об'єднали надшвидкий інтернет Batyevka.NET та преміальний контент MEGOGO. Дивіться топові телеканали, світові кінопрем'єри, ексклюзивний спорт та серіали від HBO в найвищій якості 4K.
                            </p>

                            <div className="bg-white border border-[#DC662D]/30 rounded-2xl p-4 mb-10 max-w-2xl mx-auto flex items-center justify-center gap-3 shadow-sm">
                                <InfoIcon />
                                <p className="text-[#0E2D43] text-sm font-bold">Послуги телебачення за вказаними тарифами доступні виключно у складі послуги Інтернет.</p>
                            </div>

                            <button onClick={() => { document.getElementById('tariffs')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-[#DC662D] hover:bg-[#c45a27] text-[#FFFFFF] font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md">
                                Ознайомитись з тарифами
                            </button>
                        </section>

                        {/* ----- БЛОК 2. ПЕРЕВАГИ ----- */}
                        <section className="py-16 mb-16">
                            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
                                <article className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#BDBDBD]/30 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                    <PlayIcon />
                                    <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Керування ефіром</h3>
                                    <p className="text-sm text-[#5F6061] leading-relaxed">Запізнилися на початок? Перемотайте назад, ставте на паузу або дивіться програми в записі до 14 днів.</p>
                                </article>
                                <article className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#BDBDBD]/30 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                    <DevicesIcon />
                                    <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">1 передплата = 5 пристроїв</h3>
                                    <p className="text-sm text-[#5F6061] leading-relaxed">Акаунт працює одночасно на Smart TV, смартфоні, комп'ютері чи консолі для всієї родини.</p>
                                </article>
                                <article className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#BDBDBD]/30 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                    <NoAdsIcon />
                                    <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Кінозал без реклами</h3>
                                    <p className="text-sm text-[#5F6061] leading-relaxed">Більшість фільмів та серіалів (Disney, Paramount+, HBO) доступні без набридливих рекламних пауз.</p>
                                </article>
                                <article className="bg-[#FFFFFF] p-8 rounded-3xl border border-[#BDBDBD]/30 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                    <BillIcon />
                                    <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Єдиний рахунок</h3>
                                    <p className="text-sm text-[#5F6061] leading-relaxed">Оплачуйте інтернет та ТБ разом з особистого кабінету Batyevka.NET зручно і без комісій.</p>
                                </article>
                            </div>
                        </section>

                        {/* ----- БЛОК 3. ТАРИФИ ТА СПИСКИ КАНАЛІВ ----- */}
                        <section id="tariffs" className="py-12 max-w-[1000px] mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0E2D43] mb-4">Оберіть свою передплату</h2>
                                <p className="text-[#5F6061]">Доступно для активації діючим абонентам мережі.</p>
                            </div>

                            <div className="space-y-8 px-2 md:px-0">
                                {tvPlans.map((plan) => (
                                    <article key={plan.id} className={`bg-[#FFFFFF] rounded-[32px] border ${plan.badge ? 'border-[#DC662D] ring-1 ring-[#DC662D] shadow-xl' : 'border-[#BDBDBD]/30 shadow-sm'} overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-md`}>
                                        
                                        {/* Ліва частина: Назва, Ціна, Кнопка */}
                                        <div className="w-full md:w-[35%] bg-[#F4F2F2] p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#BDBDBD]/30 relative">
                                            {plan.badge && (
                                                <span className="absolute top-6 left-8 bg-[#DC662D] text-[#FFFFFF] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">{plan.badge}</span>
                                            )}
                                            <div className={plan.badge ? "mt-6" : ""}>
                                                <h3 className="text-3xl font-extrabold mb-4 text-[#0E2D43]">{plan.name}</h3>
                                                <p className="text-5xl font-black text-[#5984B2] mb-8">{plan.priceText}<span className="text-lg font-bold text-[#5F6061]"> грн/міс</span></p>
                                                <button
                                                    onClick={() => handleConnectClick(plan.name)}
                                                    className="w-full text-center bg-[#5984B2] hover:bg-[#0E2D43] text-[#FFFFFF] font-bold text-base py-4 rounded-xl transition-colors shadow-sm"
                                                >
                                                    Підключити
                                                </button>
                                            </div>
                                        </div>

                                        {/* Права частина: Опис, Фічі, Випадайка */}
                                        <div className="w-full md:w-[65%] p-8 flex flex-col">
                                            <p className="text-[#0E2D43] text-base leading-relaxed mb-6 font-bold">{plan.desc}</p>
                                            
                                            <ul className="space-y-3 text-[#5F6061] font-medium text-sm mb-8">
                                                {plan.highlights.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className="mt-0.5"><CheckIcon /></div>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Випадайка з каналами */}
                                            <details 
                                                className="w-full group bg-[#FFFFFF] border border-[#5984B2]/30 rounded-xl overflow-hidden mt-auto"
                                                open={openDropdown === plan.id}
                                            >
                                                <summary 
                                                    onClick={(e) => toggleDropdown(plan.id, e)}
                                                    className="font-bold p-4 bg-[#F4F2F2] hover:bg-[#BDBDBD]/20 cursor-pointer flex justify-between items-center text-[#5984B2] select-none transition-colors"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <TvIconBlue />
                                                        <span className="text-sm">Переглянути список каналів</span>
                                                    </div>
                                                    <ChevronDownIcon />
                                                </summary>
                                                
                                                {openDropdown === plan.id && (
                                                    <div className="p-6 max-h-[400px] overflow-y-auto border-t border-[#5984B2]/20 bg-[#FFFFFF] channel-scroll">
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                            {plan.channels.map((group, idx) => (
                                                                <div key={idx}>
                                                                    <h5 className="font-bold text-[#DC662D] text-[11px] mb-3 uppercase tracking-widest border-b border-[#F4F2F2] pb-1">{group.cat}</h5>
                                                                    <ul className="text-xs text-[#5F6061] space-y-2">
                                                                        {group.list.split(',').map((ch, i) => (
                                                                            <li key={i} className="leading-snug flex items-start gap-2">
                                                                                <span className="text-[#BDBDBD] font-bold mt-[1px]">•</span> 
                                                                                <span>{ch.trim()}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </details>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>

                        {/* ----- БЛОК 4. РІЧНІ ПЕРЕДПЛАТИ ----- */}
                        <section className="py-12 max-w-4xl mx-auto">
                            <div className="bg-[#FFFFFF] border border-[#DC662D]/30 rounded-3xl p-8 md:p-10 text-center shadow-sm">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#0E2D43] mb-8">Економте з річними передплатами!</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {annualPlans.map((plan, idx) => (
                                        <div key={idx} className="bg-[#F4F2F2] rounded-2xl p-6 border border-[#BDBDBD]/30 flex flex-col items-center">
                                            <h4 className="font-bold text-xl text-[#0E2D43] mb-2">{plan.name}</h4>
                                            <p className="text-3xl font-black text-[#DC662D] mb-4">{plan.price}</p>
                                            <p className="text-sm text-[#5F6061] mb-6">{plan.desc}</p>
                                            <button onClick={() => handleConnectClick(plan.name)} className="w-full mt-auto bg-[#FFFFFF] hover:bg-[#DC662D] text-[#DC662D] hover:text-[#FFFFFF] border border-[#DC662D] font-bold py-3 rounded-xl transition-colors">
                                                Підключити
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* ----- БЛОК 5. ІНСТРУКЦІЯ (Переписана під вашу логіку) ----- */}
                        <section className="py-16 my-10 bg-[#FFFFFF] rounded-[3rem] border border-[#BDBDBD]/30 shadow-sm">
                            <div className="max-w-5xl mx-auto px-6">
                                <h2 className="text-3xl font-bold text-center mb-12 text-[#0E2D43]">Як почати дивитися?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="text-center px-4">
                                        <div className="w-16 h-16 bg-[#51B18B]/10 text-[#51B18B] rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">1</div>
                                        <h4 className="font-bold text-lg text-[#0E2D43] mb-3">Залиште заявку</h4>
                                        <p className="text-sm text-[#5F6061] leading-relaxed">Оберіть тариф на сайті та натисніть «Підключити». Заповніть форму, вказавши номер вашого договору (UID) та телефон.</p>
                                    </div>
                                    <div className="text-center px-4 relative">
                                        <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#BDBDBD]/50 to-transparent -z-10"></div>
                                        <div className="w-16 h-16 bg-[#5984B2]/10 text-[#5984B2] rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6 bg-[#FFFFFF] relative z-10">2</div>
                                        <h4 className="font-bold text-lg text-[#0E2D43] mb-3">Отримайте код</h4>
                                        <p className="text-sm text-[#5F6061] leading-relaxed">Заявку опрацює менеджер. Після активації код доступу надійде на E-mail, вказаний у вашій картці абонента. Якщо E-mail відсутній — ми зателефонуємо.</p>
                                    </div>
                                    <div className="text-center px-4">
                                        <div className="w-16 h-16 bg-[#DC662D]/10 text-[#DC662D] rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">3</div>
                                        <h4 className="font-bold text-lg text-[#0E2D43] mb-3">Насолоджуйтесь!</h4>
                                        <p className="text-sm text-[#5F6061] leading-relaxed">Завантажте додаток MEGOGO на ваш телевізор або смартфон, введіть отриманий код та дивіться улюблене кіно.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ----- БЛОК 6. FAQ ----- */}
                        <section className="py-16">
                            <h2 className="text-3xl font-bold text-center mb-12 text-[#0E2D43]">Часті запитання по Телебаченню</h2>
                            <div className="max-w-3xl mx-auto space-y-4 px-4">
                                <details className="bg-[#FFFFFF] border border-[#BDBDBD]/30 rounded-2xl p-6 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                                    <summary className="font-bold text-lg text-[#0E2D43] flex justify-between items-center outline-none select-none">
                                        Чи потрібна мені спеціальна приставка (ТВ-тюнер)?
                                        <ChevronDownIcon />
                                    </summary>
                                    <p className="mt-4 pt-4 border-t border-[#F4F2F2] text-[#5F6061] text-sm leading-relaxed">Якщо у вас сучасний Smart TV або Android TV — приставка не потрібна, просто завантажте додаток. Якщо телевізор звичайний, ви можете придбати або орендувати в нас медіаплеєр.</p>
                                </details>
                                <details className="bg-[#FFFFFF] border border-[#BDBDBD]/30 rounded-2xl p-6 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                                    <summary className="font-bold text-lg text-[#0E2D43] flex justify-between items-center outline-none select-none">
                                        Що робити, якщо в мене вже є акаунт MEGOGO?
                                        <ChevronDownIcon />
                                    </summary>
                                    <p className="mt-4 pt-4 border-t border-[#F4F2F2] text-[#5F6061] text-sm leading-relaxed">Ви можете перенести його до нас. Оплата буде списуватися з вашого рахунку за інтернет Batyevka.NET, що набагато зручніше — один платіж за всі послуги без комісій.</p>
                                </details>
                                <details className="bg-[#FFFFFF] border border-[#BDBDBD]/30 rounded-2xl p-6 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                                    <summary className="font-bold text-lg text-[#0E2D43] flex justify-between items-center outline-none select-none">
                                        Чи буде працювати телебачення на смартфоні через мобільний інтернет?
                                        <ChevronDownIcon />
                                    </summary>
                                    <p className="mt-4 pt-4 border-t border-[#F4F2F2] text-[#5F6061] text-sm leading-relaxed">Так! Ви можете дивитися MEGOGO де завгодно на своєму смартфоні чи планшеті через будь-яку мережу 4G/LTE, авторизувавшись під своїм номером телефону.</p>
                                </details>
                            </div>
                        </section>

                        {/* ----- БЛОК 7. CALL TO ACTION ----- */}
                        <section className="py-16 my-8 bg-[#0E2D43] rounded-[32px] text-center shadow-lg mx-4 md:mx-0">
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#FFFFFF]">Готові поринути у світ кіно та спорту?</h2>
                            <p className="mb-10 max-w-xl mx-auto text-[#FFFFFF]/90 text-lg">Вже обрали свій ідеальний пакет MEGOGO? Залиште заявку, і наш менеджер опрацює її найближчим часом.</p>

                            <button
                                onClick={() => handleConnectClick('Будь-який')}
                                className="bg-[#DC662D] hover:bg-opacity-90 text-[#FFFFFF] font-bold text-xl py-4 px-14 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                            >
                                Підключити ТБ
                            </button>
                        </section>

                        {/* ----- БЛОК 8. ВИДИМИЙ SEO ТЕКСТ ----- */}
                        <section className="py-16 mt-8 px-4">
                            <div className="max-w-5xl mx-auto text-left bg-[#FFFFFF] border border-[#BDBDBD]/30 rounded-3xl p-8 md:p-12 shadow-sm">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#0E2D43]">Телебачення MEGOGO від інтернет-провайдера Batyevka.NET</h2>
                                <div className="leading-loose space-y-6 text-[#5F6061] text-base">
                                    <p>Шукаєте вигідні комбо-пакети Інтернет + Телебачення у Солом'янському районі Києва? Багато абонентів обирають перехід до Batyevka.NET від інших провайдерів (таких як Воля кабель та інші), адже наші тарифи чесні, прозорі та економні. Насолоджуйтесь надшвидким гігабітним інтернетом (1 Гбіт/с) та топовим телебаченням MEGOGO за єдиним рахунком.</p>
                                    <p>Партнерська послуга відкриває доступ до понад 500 телеканалів у високій якості HD та 4K, десятків тисяч світових кінопрем'єр, ексклюзивних серіалів HBO та прямих спортивних трансляцій Ліги Чемпіонів і УПЛ. Керуйте ефіром — ставте на паузу, перемотуйте або дивіться улюблені шоу в записі. Один акаунт дозволяє одночасний перегляд на 5 різних пристроях (Smart TV, смартфон, планшет чи комп'ютер), забезпечуючи розваги для всієї родини. <strong>Зверніть увагу:</strong> послуги телебачення за вказаними цінами надаються виключно у складі активних інтернет-пакетів.</p>
                                </div>
                            </div>
                        </section>

                    </main>
                </div>
                {/* JSON-LD Data для Google та AI-Агентів */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
            </div>
        </>
    );
};

export default TelevisionPage;
