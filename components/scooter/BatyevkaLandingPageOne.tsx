"use client";

import React, { useState } from 'react';
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

const LightningIcon: React.FC = () => (
    <svg className="h-10 w-10 text-[#8B6CB0] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);
const ShieldCheckIcon: React.FC = () => (
    <svg className="h-10 w-10 text-[#8B6CB0] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917L12 22l9-1.083A12.02 12.02 0 0021 7.984a11.955 11.955 0 01-4.382-3.001z" />
    </svg>
);
const VideoCameraIcon: React.FC = () => (
    <svg className="h-10 w-10 text-[#8B6CB0] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);
const SupportIcon: React.FC = () => (
    <svg className="h-10 w-10 text-[#8B6CB0] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);
const ChevronDownIcon: React.FC = () => (
     <svg className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

// --- ДАНІ КАНАЛІВ MEGOGO ---
const megogoChannels = {
    free: "24 канал, 5 канал HD, Еспресо TV HD, Телеканал Рада, Перший, FREEДОМ, Надія, ICTV HD, M1 HD, M2 HD, Інтер HD, 1+1 Марафон HD, УНІАН Серіал, Eco TV, Extreme Sports, Classical Harmony, #НАШЕ ретро, Milady TELEVISION, Euronews ENG, ЕТНО КАНАЛ, Дніпро ТV HD, Суспільне Культура, MEGOGO MUSIC, Київ, France 24 Français, France 24 English, France 24 Arabic, BTQ, Караван TV, Наталі, Radio NV, Kiss FM, Мелодія FM, Наше Радіо, Radio ROKS, Radio Relax, Хіт FM, Radio Jazz, Радіо МАКСИМУМ, Радіо Nostalgie, Люкс ФМ, Радіо П'ятниця, Lounge Fm, Авторадіо Україна, NRJ радіо, Апостроф TV, Львівська Хвиля, Magic Radio, DJFM, Power FM, Шлягер FM, Кухня, Подорожі, Розваги, DIY, Телесеріал, Спорт огляд, Риболовля, Чоловіче хобі, Б'юті-блог, Будівництво та ремонт, Орел і Решка, Тварини, Музичний, World of Tanks, Minecraft, ДІМ HD, Лайфстайл, Пізнавальний, Авто/Мото, Радіо Закарпаття - FM, Українське радіо, Радіо Промінь, Радіо Культура, Рукоділля, Сад і город, FM Галичина, ПЕРЕЦЬ FM, Радіо Байрактар, Українське, Сім'я Каті та Макса, [M] Подкасти, Історія без міфів, TVP World, Кулінарія, Дитячий 2, [M] Little kittens, Мандри, Пригоди, Кухня UA, Пізнавальний Kids, Документальний, [M] Трейлери, Сімейний, Авто/Мото UA, Залипальне, КИЇВ - FM, Serginio Fishing, [M] Подкасти The Ukrainians, ТЮСО, Classic Radio, Спортивний, Життя у лісі, NHK World, [M] Розмови про кіно, АРМІЯ ТБ, Рецепти Алли Ковальчук, Гід техніки, [M] Standup, Футбольний, Суспільне Спорт, Мультиленд, Креативна практика, Товари з AliExpress, [M] Goods from AliExpress, France 24 Español, Армія FM, Розслідування Мердока, Детективні хроніки, Smart Kids, Ньюспалм, Трофей Premium, Forbes, Блог Економічний, МИ - УКРАЇНА HD, МИ - УКРАЇНА + HD, [M] Колекція Радіо Культура, Євген Клопотенко, [M] Поезія, [M] Віра, Світ навиворіт+, Загублений світ+, Опер за викликом+, Сімейні мелодрами+, ЖВЛ+, [M] Доктор Комаровський, [М] Укрліт, [M] Дитячий садок, [M] Стосується кожного, [M] Речдок, [М] Кінопортал, [M] Солодкі фантазії, H1, Твій ТВ, Gagsnetwork, Капучино TV, Ми – Україна Радіо, [M] Книгарня, [M] Active TV, One Planet, [M] eXplore, КОНКУРЕНТ. УКРАЇНА, ДІМ+, Панянка-селянка+, Хіти Мегого Родина, Хіти Мегого Драма, Хіти Мегого Адреналін, Вікторина, Про Київ, Знаєм 24, [M] Zoosvit, [M] Кінокласика, Накипіло, Тернопільська Хвиля, [M] KIDDISVIT, PROVENCE, [M] Цивільна підготовка, [M] БарДак, [M] Говорить вся країна, [M] Гумористичний, [M] Драматичний, [M] Містика, [M] Реальні історії, [M] Light cinema 1, [M] Light cinema 2, [M] Танька і Володька, [M] Одного разу під Полтавою, [М] Movie Library, [M] Теленовели 2, [M] Мovie mode 1, [M] Мovie mode 2, [M] Kids town, Радіоточка, Champion Radio, [M] Doramas 1, [M] Doramas 2, [M] Детективне кіно, [M] Кримінальне кіно, [M] Мелодрами, РАІ, fashion, Radio Прищепкін TOP40 UA, SUN FM, Сонце+, РАДІОПІХОТА, [M] LOLka, BIKINI, Люкс ФМ Українські Хіти, Люкс ФМ Chill and Relax, Люкс ФМ Золоті Хіти, Люкс ФМ Сучасні Хіти, K-Pop",
    national: "24 канал, 5 канал HD, Еспресо TV HD, Телеканал Рада, Перший, СТБ HD, FREEДОМ, LALE HD, ATR, Суспільне Київ, Суспільне Ужгород, Прямий HD, Надія, Перший Західний, Новий канал HD, ICTV HD, ОЦЕ HD, M1 HD, M2 HD, НТН HD, К1 HD, К2 HD, Інтер HD, Піксель HD, Enter-фільм HD, ТЕТ HD, 1+1 Марафон HD, 2+2 HD, Бігуді, УНІАН Серіал, ПЛЮСПЛЮС HD, МЕГА HD, Eco TV, Extreme Sports, Суспільне Крим, Романтика, [M] Комедія, Драма, Жахи, Історії, Kinohit, Бойовик, Мультпрем'єра, #НАШЕ music, Classical Harmony, #НАШЕ ретро, [M] Що подивитися, Milady TELEVISION, Теперішній час HD, Kvartal TV, Суспільне Житомир, 33 канал, Euronews ENG, ЕТНО КАНАЛ, OBOZREVATEL TV HD, Star Cinema HD, Fashion TV HD, Дніпро ТV HD, Суспільне Культура, TV-4, MEGOGO MUSIC, Тернопіль1, 36.6 HD, Київ, France 24 Français, France 24 English, France 24 Arabic, Суспільне Кропивницький, Суспільне Львів, Суспільне Одеса, Суспільне Полтава, Суспільне Рівне, Суспільне Суми, Суспільне Запоріжжя, Суспільне Чернівці, Суспільне Миколаїв, Суспільне Луцьк, Суспільне Черкаси, Суспільне Харків, Суспільне Тернопіль, D1 HD, Суспільне Вінниця, Суспільне Дніпро, Суспільне Івано-Франківськ, Суспільне Херсон, Суспільне Чернігів, Суспільне Хмельницький, Правда ТУТ Львів HD, КУС-КУС, FILMUADRAMA, BTQ, Караван TV, Наталі, Radio NV, UA FASHION TV HD, Kiss FM, Мелодія FM, Наше Радіо, Radio ROKS, Radio Relax, Хіт FM, Radio Jazz, Радіо МАКСИМУМ, Радіо Nostalgie, Люкс ФМ, Радіо П'ятниця, Lounge Fm, Авторадіо Україна, NRJ радіо, Апостроф TV, Львівська Хвиля, Magic Radio, DJFM, Power FM, Шлягер FM, Союз-TV, Ісландія, ITV, 1 Подільський, Travel&food, Кухня, Подорожі, Розваги, DIY, Белсат TV, Рівне 1, Телесеріал, ВІТА ТБ, НТА, InRating, Спорт огляд, Риболовля, Чоловіче хобі, Б'юті-блог, Будівництво та ремонт, Сфера-ТБ, Конкурент Волинь, Орел і Решка, РАІ, Тварини, Місто +, ІНТБ, Музичний, World of Tanks, Minecraft, TV 7+, ДІМ HD, Лайфстайл, Пізнавальний, Авто/Мото, Радіо Закарпаття - FM, Українське радіо, Радіо Промінь, Радіо Культура, 6 Соток, Рукоділля, Сад і город, FM Галичина, ПЕРЕЦЬ FM, Радіо Байрактар, Українське, Сім'я Каті та Макса, [M] Подкасти, Історія без міфів, TVP World, Кулінарія, Дитячий 2, [M] Little kittens, Мандри, Пригоди, Кухня UA, Пізнавальний Kids, Документальний, [M] Трейлери, Сімейний, Авто/Мото UA, Залипальне, КИЇВ - FM, ICTV 2, Суспільне Донбас, 1+1 Україна, Serginio Fishing, UTRAVEL, [M] Подкасти The Ukrainians, NOW series, ТЮСО, Classic Radio, Спортивний, Життя у лісі, NHK World, [M] Розмови про кіно, АРМІЯ ТБ, Рецепти Алли Ковальчук, Гід техніки, [M] Standup, Футбольний, UPL.TV, Суспільне Спорт, Мультиленд, Креативна практика, Товари з AliExpress, [M] Goods from AliExpress, France 24 Español, Армія FM, Розслідування Мердока, Детективні хроніки, Smart Kids, Ньюспалм, Трофей Premium, Forbes, Блог Економічний, МИ - УКРАЇНА HD, МИ - УКРАЇНА + HD, [M] Колекція Радіо Культура, Євген Клопотенко, [M] Поезія, [M] Віра, Світ навиворіт+, Загублений світ+, Опер за викликом+, Сімейні мелодрами+, ЖВЛ+, [M] Доктор Комаровський, [М] Укрліт, [M] Дитячий садок, [M] Стосується кожного, [M] Речдок, [М] Кінопортал, [M] Солодкі фантазії, H1, Твій ТВ, Gagsnetwork, Капучино TV, Ми – Україна Радіо, [M] Книгарня, [M] Active TV, One Planet, [M] eXplore, КОНКУРЕНТ. УКРАЇНА, ДІМ+, Панянка-селянка+, Хіти Мегого Родина, Хіти Мегого Драма, Хіти Мегого Адреналін, Вікторина, Про Київ, Знаєм 24, [M] Zoosvit, [M] Кінокласика, Накипіло, Тернопільська Хвиля, [M] KIDDISVIT, PROVENCE, [M] Цивільна підготовка, [M] БарДак, [M] Говорить вся країна, [M] Гумористичний, [M] Драматичний, [M] Містика, [M] Реальні історії, [M] Light cinema 1, [M] Light cinema 2, [M] Танька і Володька, [M] Одного разу під Полтавою, [М] Movie Library, [M] Теленовели 2, [M] Мovie mode 1, [M] Мovie mode 2, [M] Kids town, Радіоточка, Champion Radio, [M] Doramas 1, [M] Doramas 2, [M] Детективне кіно, [M] Кримінальне кіно, [M] Мелодрами, РАІ, fashion, Radio Прищепкін TOP40 UA, SUN FM, Сонце+, РАДІОПІХОТА, [M] LOLka, BIKINI, Люкс ФМ Українські Хіти, Люкс ФМ Chill and Relax, Люкс ФМ Золоті Хіти, Люкс ФМ Сучасні Хіти, K-Pop 24",
    light: "24 канал, 5 канал HD, Еспресо TV HD, Телеканал Рада, Перший, СТБ HD, FREEДОМ, FilmBox Arthouse HD, FilmBox, DocuBox HD, FightBox HD, FashionBox HD, 360 TuneBox HD, Zoom HD, LALE HD, ATR, Суспільне Київ, Суспільне Ужгород, Сонце, Прямий HD, 8 канал HD, Надія, Перший Західний, Новий канал HD, ICTV HD, ОЦЕ HD, M1 HD, M2 HD, НТН HD, К1 HD, К2 HD, Інтер HD, Піксель HD, Enter-фільм HD, ТЕТ HD, 1+1 Марафон HD, 2+2 HD, Бігуді, УНІАН Серіал, ПЛЮСПЛЮС HD, Перший автомобільний, Трофей HD, МЕГА HD, Eco TV, EU MUSIC HD, Extreme Sports, Суспільне Крим, Романтика, [M] Комедія, Драма, Жахи, Історії, Kinohit, Бойовик, Fast’nFunBox HD, Мультпрем'єра, Телевсесвіт HD, Дитячий: UMa & UMi, #НАШЕ music, Classical Harmony, #НАШЕ ретро, [M] Що подивитися, Prime, Епоха, Трилер, Megahit, Любов, Milady TELEVISION, Теперішній час HD, Kvartal TV, DW English HD, Дивись як чутно, Суспільне Житомир, 33 канал, Gametoon HD, History 2 HD, Euronews ENG, ЕТНО КАНАЛ, OBOZREVATEL TV HD, Star Cinema HD, Fashion TV HD, Дніпро ТV HD, Телеканал MTM, Кіно звучить, [M] Фантастика, Суспільне Культура, History HD, TV-4, MEGOGO MUSIC, Тернопіль1, 36.6 HD, Київ, Фауна, СВІТЛО HD, Наука, Терра, Дача HD, France 24 Français, France 24 English, France 24 Arabic, NIKI Junior HD, NIKI Kids HD, 4ever music HD, Суспільне Кропивницький, Суспільне Львів, Суспільне Одеса, Суспільне Полтава, Суспільне Рівне, Суспільне Суми, Суспільне Запоріжжя, Суспільне Чернівці, Суспільне Миколаїв, Суспільне Луцьк, Суспільне Черкаси, Суспільне Харків, Суспільне Тернопіль, Setanta Sports HD, Kids, LEGO, D1 HD, Суспільне Вінниця, Суспільне Дніпро, Суспільне Івано-Франківськ, Суспільне Херсон, Суспільне Чернігів, Суспільне Хмельницький, Правда ТУТ Львів HD, КУС-КУС, FILMUADRAMA, BTQ, Караван TV, Наталі, Radio NV, Setanta Sports+ HD, UA FASHION TV HD, [M] Гумор, Кременчук HD, Kiss FM, Мелодія FM, Наше Радіо, Radio ROKS, Radio Relax, Хіт FM, Radio Jazz, [M] Фільми 4K, Радіо МАКСИМУМ, Радіо Nostalgie, Люкс ФМ, Радіо П'ятниця, Lounge Fm, Авторадіо Україна, NRJ радіо, Апостроф TV, Львівська Хвиля, Тoп, Magic Radio, DJFM, Power FM, Шлягер FM, [M] Казки на ніч AUDIO, Союз-TV, Ісландія, ITV, 1 Подільський, Travel&food, Кухня, Подорожі, Розваги, DIY, Белсат TV, Рівне 1, Телесеріал, ВІТА ТБ, НТА, InRating, [M] Cocomelon, Спорт огляд, Риболовля, Чоловіче хобі, [M] Документальне кіно, Б'юті-блог, Будівництво та ремонт, Equalympic, Сфера-ТБ, Timeless Dizi Channel, Конкурент Волинь, Орел і Решка, РАІ, Тварини, Місто +, ІНТБ, Музичний, World of Tanks, Minecraft, TV 7+, ДІМ HD, Лайфстайл, Пізнавальний, Авто/Мото, [M] Фільми 8K, Радіо Закарпаття - FM, Українське радіо, Радіо Промінь, Радіо Культура, 6 Соток, Рукоділля, Сад і город, FM Галичина, ПЕРЕЦЬ FM, Радіо Байрактар, Українське, DW Espanol HD, ЧЕМОДАН ТВ HD, Сіль ТБ HD, KINO 1 HD, QUIZ TV HD, Сім'я Каті та Макса, [M] Подкасти, Історія без міфів, UA Music, Black, TVP World, Кулінарія, Дитячий 2, [M] Little kittens, Мандри, Пригоди, Кухня UA, Пізнавальний Kids, Документальний, [M] Трейлери, Сімейний, Авто/Мото UA, Залипальне, КИЇВ - FM, ICTV 2, Суспільне Донбас, 1+1 Україна, Serginio Fishing, UTRAVEL, [M] Подкасти The Ukrainians, NOW series, ТЮСО, Classic Radio, DW Arabia HD, Спортивний, Життя у лісі, [M] Пес, NHK World, [M] Розмови про кіно, Bloomberg, Viva Latino, АРМІЯ ТБ, CNN, Рецепти Алли Ковальчук, Гід техніки, [M] Standup, Рибалка, Music Box, Футбольний, DORAMA, KINOWOOD, UPL.TV, Суспільне Спорт, DIVISPORT, МУЗВАР, Мультиленд, PROKINO, Креативна практика, Товари з AliExpress, [M] Goods from AliExpress, France 24 Español, Армія FM, Розслідування Мердока, Детективні хроніки, Smart Kids, МАСОН ТБ, ФРОНТ, ЗАКОН ТБ, МЕДИЧНИЙ, ТВІЙ СЕРІАЛ, Теленовели, Ньюспалм, Трофей Premium, Forbes, Блог Економічний, МИ - УКРАЇНА HD, МИ - УКРАЇНА + HD, [M] Колекція Радіо Культура, Євген Клопотенко, [M] Поезія, [M] Віра, Світ навиворіт+, Загублений світ+, Опер за викликом+, Сімейні мелодрами+, ЖВЛ+, KINO 2 HD, RAZ 1, RAZ 2, [M] Дільничий з ДВРЗ, [M] Розтин покаже, [M] Доктор Комаровський, [М] Укрліт, [M] Дитячий садок, [M] Стосується кожного, [M] Речдок, [М] Кінопортал, MusicBox Classic, [M] Солодкі фантазії, H1, Світ+, Твій ТВ, Gagsnetwork, Super+, Твоє кіно Relax, Твоє Кіно Action, Твоє кіно ХІТ, Капучино TV, Радіо БУГ, Ми – Україна Радіо, [M] Книгарня, [M] Active TV, Машина часу, Невигадані історії, One Planet, Хроніка+, [M] eXplore, КОНКУРЕНТ. УКРАЇНА, ДІМ+, Панянка-селянка+, Хіти Мегого Родина, Хіти Мегого Драма, Хіти Мегого Адреналін, Вікторина, Про Київ, Знаєм 24, [M] Zoosvit, [M] Кінокласика, Накипіло, Тернопільська Хвиля, [M] KIDDISVIT, PROVENCE, [M] Цивільна підготовка, [M] БарДак, [M] Говорить вся країна, [M] Гумористичний, [M] Драматичний, [M] Містика, [M] Реальні історії, [M] Light cinema 1, [M] Light cinema 2, [M] Танька і Володька, [M] Одного разу під Полтавою, [М] Movie Library, [M] Теленовели 2, [M] Мovie mode 1, [M] Мovie mode 2, [M] Kids town, Радіоточка, Champion Radio, [M] Doramas 1, [M] Doramas 2, [M] Детективне кіно, [M] Кримінальне кіно, [M] Мелодрами, РАІ, fashion, Radio Прищепкін TOP40 UA, SUN FM, Сонце+, РАДІОПІХОТА, [M] LOLka, BIKINI, Люкс ФМ Українські Хіти, Люкс ФМ Chill and Relax, Люкс ФМ Золоті Хіти, Люкс ФМ Сучасні Хіти, K-Pop 24",
    optimal: "24 канал, 5 канал HD, Еспресо TV HD, Телеканал Рада, Перший, СТБ HD, FREEДОМ, FilmBox Arthouse HD, FilmBox, DocuBox HD, FightBox HD, FashionBox HD, 360 TuneBox HD, Zoom HD, LALE HD, ATR, Суспільне Київ, Суспільне Ужгород, Сонце, Прямий HD, 8 канал HD, Надія, Viasat Kino Action HD, Viasat Kino World, Viasat Kino Comedy HD, Viasat Explore, Viasat History, Viasat Nature, Перший Західний, Новий канал HD, ICTV HD, ОЦЕ HD, M1 HD, M2 HD, НТН HD, К1 HD, К2 HD, Інтер HD, Піксель HD, Enter-фільм HD, ТЕТ HD, 1+1 Марафон HD, 2+2 HD, Бігуді, УНІАН Серіал, ПЛЮСПЛЮС HD, Viasat Kino HD, Перший автомобільний, Трофей HD, МЕГА HD, Travel Channel, National Geographic HD, National Geographic Wild HD, Eco TV, English club TV HD, EU MUSIC HD, Extreme Sports, Суспільне Крим, Романтика, [M] Комедія, Драма, Жахи, Історії, Kinohit, Бойовик, Fast’nFunBox HD, Мультпрем'єра, Discovery channel, Eurosport 1 HD, Eurosport 2 HD, TLC, ID: Investigation Discovery HD, Animal Planet HD, Мультсеріал, Телевсесвіт HD, Дитячий: UMa & UMi, #НАШЕ music, Classical Harmony, #НАШЕ ретро, [M] Що подивитися, Prime, Епоха, Трилер, Megahit, Любов, Milady TELEVISION, Теперішній час HD, Kvartal TV, DW English HD, Дивись як чутно, Суспільне Житомир, 33 канал, Gametoon HD, History 2 HD, FX HD, Euronews ENG, ЕТНО КАНАЛ, Erox HD, Penthouse Passion HD, Playboy TV HD, OBOZREVATEL TV HD, BOLT HD, Star Cinema HD, Fashion TV HD, Дніпро ТV HD, Телеканал MTM, Кіно звучить, [M] Фантастика, Суспільне Культура, History HD, TV-4, MEGOGO MUSIC, [M] Преміум кіно, Тернопіль1, 36.6 HD, Київ, Фауна, СВІТЛО HD, Наука, Терра, Дача HD, France 24 Français, France 24 English, France 24 Arabic, Viasat Epic Drama, NIKI Junior HD, NIKI Kids HD, 4ever music HD, Суспільне Кропивницький, Суспільне Львів, Суспільне Одеса, Суспільне Полтава, Суспільне Рівне, Суспільне Суми, Суспільне Запоріжжя, Суспільне Чернівці, Суспільне Миколаїв, Суспільне Луцьк, Суспільне Черкаси, Суспільне Харків, Суспільне Тернопіль, Setanta Sports HD, Kids, LEGO, D1 HD, Суспільне Вінниця, Суспільне Дніпро, Суспільне Івано-Франківськ, Суспільне Херсон, Суспільне Чернігів, Суспільне Хмельницький, Правда ТУТ Львів HD, КУС-КУС, FILMUADRAMA, BTQ, Караван TV, Наталі, Radio NV, Setanta Sports+ HD, UA FASHION TV HD, Baby TV, HGTV, [M] Гумор, Кременчук HD, Kiss FM, Мелодія FM, Наше Радіо, Radio ROKS, Radio Relax, Хіт FM, Radio Jazz, [M] Фільми 4K, Viasat True Crime, Радіо МАКСИМУМ, Радіо Nostalgie, Люкс ФМ, Радіо П'ятниця, Lounge Fm, Авторадіо Україна, NRJ радіо, Апостроф TV, Львівська Хвиля, Magic Radio, DJFM, Power FM, Шлягер FM, Food Network HD, [M] Казки на ніч AUDIO, Союз-TV, Ісландія, ITV, 1 Подільський, Travel&food, [M] Discovery+ 1, Кухня, Подорожі, Розваги, DIY, Белсат TV, Рівне 1, Телесеріал, ВІТА ТБ, [M] D+ Голі й налякані, [M] D+ Золота лихоманка, НТА, Українське кіно, InRating, [M] Cocomelon, Спорт огляд, Риболовля, Чоловіче хобі, Eurosport 4K, [M] Документальне кіно, [M] Paramоunt+ Kids, Б'юті-блог, Будівництво та ремонт, Equalympic, Сфера-ТБ, Timeless Dizi Channel, Конкурент Волинь, Орел і Решка, РАІ, Тварини, Місто +, ІНТБ, Музичний, World of Tanks, Minecraft, TV 7+, ДІМ HD, Лайфстайл, Пізнавальний, Авто/Мото, Радіо Закарпаття - FM, Українське радіо, Радіо Промінь, Радіо Культура, Рукоділля, Сад і город, FM Галичина, ПЕРЕЦЬ FM, Радіо Байрактар, Українське, Сім'я Каті та Макса, [M] Подкасти, Історія без міфів, TVP World, Кулінарія, Дитячий 2, [M] Little kittens, Мандри, Пригоди, Кухня UA, Пізнавальний Kids, Документальний, [M] Трейлери, Сімейний, Авто/Мото UA, Залипальне, КИЇВ - FM, Serginio Fishing, [M] Подкасти The Ukrainians, ТЮСО, Classic Radio, Спортивний, Життя у лісі, NHK World, [M] Розмови про кіно, АРМІЯ ТБ, Рецепти Алли Ковальчук, Гід техніки, [M] Standup, Футбольний, Суспільне Спорт, Мультиленд, Креативна практика, Товари з AliExpress, [M] Goods from AliExpress, France 24 Español, Армія FM, Розслідування Мердока, Детективні хроніки, Smart Kids, Ньюспалм, Трофей Premium, Forbes, Блог Економічний, МИ - УКРАЇНА HD, МИ - УКРАЇНА + HD, [M] Колекція Радіо Культура, Євген Клопотенко, [M] Поезія, [M] Віра, Світ навиворіт+, Загублений світ+, Опер за викликом+, Сімейні мелодрами+, ЖВЛ+, [M] Доктор Комаровський, [М] Укрліт, [M] Дитячий садок, [M] Стосується кожного, [M] Речдок, [М] Кінопортал, [M] Солодкі фантазії, H1, Твій ТВ, Gagsnetwork, Капучино TV, Ми – Україна Радіо, [M] Книгарня, [M] Active TV, One Planet, [M] eXplore, КОНКУРЕНТ. УКРАЇНА, ДІМ+, Панянка-селянка+, Хіти Мегого Родина, Хіти Мегого Драма, Хіти Мегого Адреналін, Вікторина, Про Київ, Знаєм 24, [M] Zoosvit, [M] Кінокласика, Накипіло, Тернопільська Хвиля, [M] KIDDISVIT, PROVENCE, [M] Цивільна підготовка, [M] БарДак, [M] Говорить вся країна, [M] Гумористичний, [M] Драматичний, [M] Містика, [M] Реальні історії, [M] Light cinema 1, [M] Light cinema 2, [M] Танька і Володька, [M] Одного разу під Полтавою, [М] Movie Library, [M] Теленовели 2, [M] Мovie mode 1, [M] Мovie mode 2, [M] Kids town, Радіоточка, Champion Radio, [M] Doramas 1, [M] Doramas 2, [M] Детективне кіно, [M] Кримінальне кіно, [M] Мелодрами, РАІ, fashion, Radio Прищепкін TOP40 UA, SUN FM, Сонце+, РАДІОПІХОТА, [M] LOLka, BIKINI, Люкс ФМ Українські Хіти, Люкс ФМ Chill and Relax, Люкс ФМ Золоті Хіти, Люкс ФМ Сучасні Хіти, K-Pop 24",
    maximal: "24 канал, 5 канал HD, Еспресо TV HD, Телеканал Рада, Перший, СТБ HD, FREEДОМ, FilmBox Arthouse HD, FilmBox, DocuBox HD, FightBox HD, FashionBox HD, 360 TuneBox HD, Zoom HD, LALE HD, ATR, Суспільне Київ, Суспільне Ужгород, Сонце, Прямий HD, 8 канал HD, Надія, Viasat Kino Action HD, Viasat Kino World, Viasat Kino Comedy HD, Viasat Explore, Viasat History, Viasat Nature, Перший Західний, Новий канал HD, ICTV HD, ОЦЕ HD, M1 HD, M2 HD, НТН HD, К1 HD, К2 HD, Інтер HD, Піксель HD, Enter-фільм HD, ТЕТ HD, 1+1 Марафон HD, 2+2 HD, Бігуді, УНІАН Серіал, ПЛЮСПЛЮС HD, Viasat Kino HD, Перший автомобільний, Трофей HD, МЕГА HD, Travel Channel, National Geographic HD, National Geographic Wild HD, Eco TV, English club TV HD, EU MUSIC HD, Sport 1, Sport 2, Extreme Sports, Суспільне Крим, Романтика, [M] Комедія, Драма, Жахи, Історії, Kinohit, Бойовик, Fast’nFunBox HD, Мультпрем'єра, Discovery channel, Eurosport 1 HD, Eurosport 2 HD, TLC, ID: Investigation Discovery HD, Animal Planet HD, Мультсеріал, Телевсесвіт HD, Дитячий: UMa & UMi, #НАШЕ music, Classical Harmony, #НАШЕ ретро, [M] Що подивитися, Prime, Епоха, Трилер, Megahit, Любов, Milady TELEVISION, Теперішній час HD, Kvartal TV, DW English HD, Дивись як чутно, Суспільне Житомир, 33 канал, Gametoon HD, History 2 HD, FX HD, Euronews ENG, ЕТНО КАНАЛ, Sport 4, Erox HD, Penthouse Passion HD, Playboy TV HD, OBOZREVATEL TV HD, BOLT HD, Star Cinema HD, Fashion TV HD, Дніпро ТV HD, Телеканал MTM, Кіно звучить, [M] Фантастика, Суспільне Культура, History HD, TV-4, MEGOGO MUSIC, [M] Преміум кіно, Тернопіль1, MEGOGO Футбол Перший, 36.6 HD, Київ, Фауна, СВІТЛО HD, Наука, Терра, Дача HD, France 24 Français, France 24 English, France 24 Arabic, Viasat Epic Drama, NIKI Junior HD, NIKI Kids HD, 4ever music HD, Суспільне Кропивницький, Суспільне Львів, Суспільне Одеса, Суспільне Полтава, Суспільне Рівне, Суспільне Суми, Суспільне Запоріжжя, Суспільне Чернівці, Суспільне Миколаїв, Суспільне Луцьк, Суспільне Черкаси, Суспільне Харків, Суспільне Тернопіль, Setanta Sports HD, Kids, LEGO, D1 HD, Суспільне Вінниця, Суспільне Дніпро, Суспільне Івано-Франківськ, Суспільне Херсон, Суспільне Чернігів, Суспільне Хмельницький, Правда ТУТ Львів HD, КУС-КУС, FILMUADRAMA, BTQ, Караван TV, Наталі, Radio NV, Setanta Sports+ HD, UA FASHION TV HD, [M] Друзі, [M] Антураж, Baby TV, HGTV, [M] Гумор, Кременчук HD, Kiss FM, Мелодія FM, Наше Радіо, Radio ROKS, Radio Relax, Хіт FM, Radio Jazz, [M] Фільми 4K, Viasat True Crime, Радіо МАКСИМУМ, Радіо Nostalgie, Люкс ФМ, Радіо П'ятниця, Lounge Fm, Авторадіо Україна, NRJ радіо, Апостроф TV, MEGOGO ГОНГ, Львівська Хвиля, Blue Hustler, Тoп, Magic Radio, DJFM, Power FM, Шлягер FM, Food Network HD, [M] Казки на ніч AUDIO, Союз-TV, Ісландія, ITV, 1 Подільський, Travel&food, [M] Discovery+ 1, Кухня, Подорожі, Розваги, DIY, Белсат TV, Рівне 1, Телесеріал, ВІТА ТБ, [M] D+ Віза нареченої, [M] D+ Голі й налякані, [M] D+ Золота лихоманка, [M] D+ Махінатори, [M] D+ Смертельний улов, НТА, Українське кіно, InRating, [M] Movie Hit, [M] Cartoon UA, [M] Cocomelon, Спорт огляд, Риболовля, Чоловіче хобі, Eurosport 4K, [M] Документальне кіно, [M] Paramоunt+ Kids, Sport 3, Dynamo TV HD, MEGOGO Футбол Другий, MEGOGO Футбол Третій, MEGOGO Футбол 4 HD, MEGOGO Футбол 5 HD, MEGOGO Футбол 6 HD, MEGOGO Футбол 7 HD, MEGOGO Футбол 8, MEGOGO Футбол 9, MEGOGO Футбол 10, MEGOGO Футбол 11, MEGOGO Футбол 12, MEGOGO Футбол 13, MEGOGO Футбол 14, MEGOGO Футбол 15, Б'юті-блог, Будівництво та ремонт, Equalympic, Сфера-ТБ, Timeless Dizi Channel, Конкурент Волинь, Орел і Решка, MEGOGO Футбол 16, MEGOGO Футбол 17, РАІ, Тварини, Місто +, ІНТБ, Музичний, World of Tanks, Minecraft, TV 7+, ДІМ HD, Лайфстайл, Пізнавальний, Авто/Мото, [M] Фільми 8K, Радіо Закарпаття - FM, Українське радіо, Радіо Промінь, Радіо Культура, 6 Соток, Рукоділля, Сад і город, FM Галичина, [M] Теорія великого вибуху, ПЕРЕЦЬ FM, Радіо Байрактар, Українське, [M] Губка Боб, [M] Щенячий патруль, DW Espanol HD, [М] Paramount+ 3, [М] Paramount+ 4, ЧЕМОДАН ТВ HD, Сіль ТБ HD, KINO 1 HD, QUIZ TV HD, Сім'я Каті та Макса, MEGOGO Спорт, [M] Подкасти, Історія без міфів, UA Music, Black, TVP World, Кулінарія, Дитячий 2, [M] Little kittens, MEGOGO Футбол 18, Мандри, Пригоди, Кухня UA, Пізнавальний Kids, Документальний, [M] Трейлери, Сімейний, Авто/Мото UA, Залипальне, КИЇВ - FM, [M] TOP animation, ICTV 2, Суспільне Донбас, 1+1 Україна, Serginio Fishing, UTRAVEL, [M] Подкасти The Ukrainians, NOW series, ТЮСО, Classic Radio, DW Arabia HD, Спортивний, Життя у лісі, Sport 1 Baltic, [M] Пес, NHK World, [M] Розмови про кіно, Bloomberg, Viva Latino, АРМІЯ ТБ, CNN, Рецепти Алли Ковальчук, Гід техніки, [M] Standup, Рибалка, Music Box, Футбольний, DORAMA, [M] D+ Я важу 300 кг, KINOWOOD, UPL.TV, Cine+, Cine+ hit, Cine+ Kids, Cine+ legend, [M] LEGO Ninjago, Суспільне Спорт, DIVISPORT, [M] Paramount+ 6, МУЗВАР, Мультиленд, [M] Легенда про Корру, [M] Аватар: Останній захисник, Viasat Serial, PROKINO, Креативна практика, Товари з AliExpress, [M] Goods from AliExpress, France 24 Español, [M] Кіноман, [M] Топ серіали 1, [M] Топ серіали 2, [M] Топ серіали 3, [M] Топ серіали 4, [M] Топ серіали 5, Армія FM, AMC, [M] Paramount+ 7, [M] Фільм на вечір, [M] Paramount+ 8, Розслідування Мердока, Детективні хроніки, Smart Kids, МАСОН ТБ, ФРОНТ, ЗАКОН ТБ, МЕДИЧНИЙ, ТВІЙ СЕРІАЛ, Теленовели, Ньюспалм, Трофей Premium, Forbes, Блог Економічний, [M] Леді Баг і Супер-Кіт, МИ - УКРАЇНА HD, МИ - УКРАЇНА + HD, [M] Колекція Радіо Культура, Євген Клопотенко, [M] Поезія, [M] Топ серіали 6, [M] Віра, Світ навиворіт+, Загублений світ+, Опер за викликом+, Сімейні мелодрами+, ЖВЛ+, KINO 2 HD, RAZ 1, RAZ 2, [M] Дільничий з ДВРЗ, [M] Розтин покаже, [M] Черепашки-ніндзя, [M] Блиск і монстрмашини, [M] Гучний дім, [M] Доктор Комаровський, [М] Укрліт, [M] Дитячий садок, [M] Стосується кожного, [M] Речдок, [М] Кінопортал, [M] CSI: Місце злочину, MusicBox Classic, [M] Солодкі фантазії, [M] Series Mix 2, MEGOGO Футбол 19, H1, MEGOGO Футбол 20, Світ+, Твій ТВ, Gagsnetwork, Cartoon Network, Super+, Твоє кіно Relax, Твоє Кіно Action, Твоє кіно ХІТ, Sport 5, Капучино TV, Радіо БУГ, Ми – Україна Радіо, [M] Книгарня, [M] Active TV, Машина часу, Невигадані історії, One Planet, Хроніка+, [M] eXplore, КОНКУРЕНТ. УКРАЇНА, ДІМ+, Панянка-селянка+, Хіти Мегого Родина, Хіти Мегого Драма, Хіти Мегого Адреналін, Вікторина, Про Київ, Знаєм 24, [M] Zoosvit, [M] Кінокласика, Накипіло, Тернопільська Хвиля, [M] Підібрано для вас, [M] Декстер, [M] Комісар Рекс, [M] KIDDISVIT, PROVENCE, [M] Цивільна підготовка, [M] БарДак, [M] Говорить вся країна, [M] Гумористичний, [M] Драматичний, [M] Містика, [M] Реальні історії, [M] Light cinema 1, [M] Light cinema 2, [M] Танька і Володька, [M] Одного разу під Полтавою, [M] Paramount+ Kids 2, [M] Paramount+ Kids 3, [М] Movie Library, [M] Теленовели 2, [M] Мovie mode 1, [M] Мovie mode 2, [M] Kids town, Радіоточка, Champion Radio, [M] Надприродне, [М] Менталіст, [M] Два з половиною чоловіки, [M] Секс і місто, [M] Вгамуй свій ентузіазм, [M] Сопрано, [M] Гра престолів, [M] Велике кохання, [M] Doramas 1, [M] Doramas 2, [M] Детективне кіно, [M] Кримінальне кіно, [M] Мелодрами, РАІ, fashion, Radio Прищепкін TOP40 UA, [M] Documentary Max, [M] Аdventure time, SUN FM, Сонце+, [M] Підозрюваний, РАДІОПІХОТА, [M] LOLka, BIKINI, Люкс ФМ Українські Хіти, Люкс ФМ Chill and Relax, Люкс ФМ Золоті Хіти, Люкс ФМ Сучасні Хіти, K-Pop 24",
    sport: "24 канал, 5 канал HD, Еспресо TV HD, Телеканал Рада, Перший, FREEДОМ, FightBox HD, Надія, ICTV HD, M1 HD, M2 HD, Інтер HD, 1+1 Марафон HD, УНІАН Серіал, Перший автомобільний, Трофей HD, Eco TV, Sport 1, Sport 2, Extreme Sports, Fast’nFunBox HD, Eurosport 1 HD, Eurosport 2 HD, Classical Harmony, #НАШЕ ретро, Milady TELEVISION, Euronews ENG, ЕТНО КАНАЛ, Sport 4, Erox HD, Penthouse Passion HD, Playboy TV HD, Дніпро ТV HD, Суспільне Культура, MEGOGO MUSIC, MEGOGO Футбол Перший, Київ, France 24 Français, France 24 English, France 24 Arabic, Setanta Sports HD, BTQ, Караван TV, Наталі, Radio NV, Setanta Sports+ HD, Kiss FM, Мелодія FM, Наше Радіо, Radio ROKS, Radio Relax, Хіт FM, Radio Jazz, Радіо МАКСИМУМ, Радіо Nostalgie, Люкс ФМ, Радіо П'ятниця, Lounge Fm, Авторадіо Україна, NRJ радіо, Апостроф TV, MEGOGO ГОНГ, Львівська Хвиля, Blue Hustler, Magic Radio, DJFM, Power FM, Шлягер FM, Кухня, Подорожі, Розваги, DIY, Телесеріал, Спорт огляд, Риболовля, Чоловіче хобі, Eurosport 4K, Sport 3, Dynamo TV HD, MEGOGO Футбол Другий, MEGOGO Футбол Третій, MEGOGO Футбол 4 HD, MEGOGO Футбол 5 HD, MEGOGO Футбол 6 HD, MEGOGO Футбол 7 HD, MEGOGO Футбол 8, MEGOGO Футбол 9, MEGOGO Футбол 10, MEGOGO Футбол 11, MEGOGO Футбол 12, MEGOGO Футбол 13, MEGOGO Футбол 14, MEGOGO Футбол 15, Б'юті-блог, Будівництво та ремонт, Орел і Решка, MEGOGO Футбол 16, MEGOGO Футбол 17, Тварини, Музичний, World of Tanks, Minecraft, ДІМ HD, Лайфстайл, Пізнавальний, Авто/Мото, Радіо Закарпаття - FM, Українське радіо, Радіо Промінь, Радіо Культура, Рукоділля, Сад і город, FM Галичина, ПЕРЕЦЬ FM, Радіо Байрактар, Українське, Сім'я Каті та Макса, MEGOGO Спорт, [M] Подкасти, Історія без міфів, TVP World, Кулінарія, Дитячий 2, [M] Little kittens, MEGOGO Футбол 18, Мандри, Пригоди, Кухня UA, Пізнавальний Kids, Документальний, [M] Трейлери, Сімейний, Авто/Мото UA, Залипальне, КИЇВ - FM, Serginio Fishing, [M] Подкасти The Ukrainians, ТЮСО, Classic Radio, Спортивний, Життя у лісі, Sport 1 Baltic, NHK World, [M] Розмови про кіно, АРМІЯ ТБ, Рецепти Алли Ковальчук, Гід техніки, [M] Standup, Футбольний, UPL.TV, Суспільне Спорт, DIVISPORT, Мультиленд, Креативна практика, Товари з AliExpress, [M] Goods from AliExpress, France 24 Español, Армія FM, Розслідування Мердока, Детективні хроніки, Smart Kids, Ньюспалм, Трофей Premium, Forbes, Блог Економічний, МИ - УКРАЇНА HD, МИ - УКРАЇНА + HD, [M] Колекція Радіо Культура, Євген Клопотенко, [M] Поезія, [M] Віра, Світ навиворіт+, Загублений світ+, Опер за викликом+, Сімейні мелодрами+, ЖВЛ+, [M] Доктор Комаровський, [М] Укрліт, [M] Дитячий садок, [M] Стосується кожного, [M] Речдок, [М] Кінопортал, [M] Солодкі фантазії, MEGOGO Футбол 19, H1, MEGOGO Футбол 20, Твій ТВ, Gagsnetwork, Sport 5, Капучино TV, Ми – Україна Радіо, [M] Книгарня, [M] Active TV, One Planet, [M] eXplore, КОНКУРЕНТ. УКРАЇНА, ДІМ+, Панянка-селянка+, Хіти Мегого Родина, Хіти Мегого Драма, Хіти Мегого Адреналін, Вікторина, Про Київ, Знаєм 24, [M] Zoosvit, [M] Кінокласика, Накипіло, Тернопільська Хвиля, [M] KIDDISVIT, PROVENCE, [M] Цивільна підготовка, [M] БарДак, [M] Говорить вся країна, [M] Гумористичний, [M] Драматичний, [M] Містика, [M] Реальні історії, [M] Light cinema 1, [M] Light cinema 2, [M] Танька і Володька, [M] Одного разу під Полтавою, [М] Movie Library, [M] Теленовели 2, [M] Мovie mode 1, [M] Мovie mode 2, [M] Kids town, Радіоточка, Champion Radio, [M] Doramas 1, [M] Doramas 2, [M] Детективне кіно, [M] Кримінальне кіно, [M] Мелодрами, РАІ, fashion, Radio Прищепкін TOP40 UA, SUN FM, Сонце+, РАДІОПІХОТА, [M] LOLka, BIKINI, Люкс ФМ Українські Хіти, Люкс ФМ Chill and Relax, Люкс ФМ Золоті Хіти, Люкс ФМ Сучасні Хіти, K-Pop 24"
};

const megogoPlansData =[
    { id: 'free', name: 'Безкоштовне ТБ', desc: '202 національні та ефірні канали.', basePrice: 0, list: megogoChannels.free.split(', ') },
    { id: 'national', name: 'Національне ТБ', desc: '289 каналів, колекція фільмів та мультфільмів.', basePrice: 50, list: megogoChannels.national.split(', ') },
    { id: 'light', name: 'Легка', desc: '379 каналів, колекція фільмів та мультфільмів.', basePrice: 85, list: megogoChannels.light.split(', ') },
    { id: 'optimal', name: 'Оптимальна', desc: '442 канали, преміум-кіно та спорт (Setanta).', basePrice: 200, list: megogoChannels.optimal.split(', ') },
    { id: 'maximal', name: 'Максимальна', desc: '501 канал, HBO, Ліга Чемпіонів та максимум кіно.', basePrice: 350, list: megogoChannels.maximal.split(', ') },
    { id: 'sport', name: 'Спорт', desc: '246 каналів. Епічний спорт світового масштабу.', basePrice: 199, list: megogoChannels.sport.split(', ') }
];

const BatyevkaLandingPage: React.FC = () => {
    const { onOpen } = useModal();
    const { toast } = useToast();

    const [selectedTariff, setSelectedTariff] = useState<number | null>(3);
    const [selectedMegogo, setSelectedMegogo] = useState<string | null>('light');

    const getIncludedMegogoLevel = (tariffId: number | null) => {
        if (tariffId === 1) return 0;
        if (tariffId === 2) return 1;
        if (tariffId === 3) return 2;
        return 0;
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

    const handleTariffClick = (tariffId: number, megogoId: string) => {
        setSelectedTariff(tariffId);
        setSelectedMegogo(megogoId);
    };

    const handleMegogoLinkClick = (e: React.MouseEvent, megogoId: string, tariffId: number) => {
        e.stopPropagation();
        setSelectedMegogo(megogoId);
        setSelectedTariff(tariffId);
        const element = document.getElementById('megogo-section');
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: y - 100, behavior: 'smooth' });
        }
    };

    const handleMegogoPlanClick = (megogoId: string) => {
        setSelectedMegogo(megogoId);
        if (megogoId === 'free') setSelectedTariff(1);
        else if (megogoId === 'national') setSelectedTariff(2);
        else if (megogoId === 'light') setSelectedTariff(3);
    };

    const jsonLdData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Batyevka.NET",
                    "item": "https://www.batyevka.net/"
                  }
                ]
            },
            {
                "@type": "Organization",
                "name": "Batyevka.NET",
                "url": "https://www.batyevka.net",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+380-800-30-32-30",
                    "contactType": "customer service",
                    "areaServed": "UA",
                    "availableLanguage": "Ukrainian"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "Як швидко відбувається підключення?", "acceptedAnswer": { "@type": "Answer", "text": "Зазвичай, підключення займає 1-3 робочі дні з моменту подачі заявки. Наш майстер узгодить з вами зручний час." } },
                    { "@type": "Question", "name": "Чи можна замовити статичну IP-адресу?", "acceptedAnswer": { "@type": "Answer", "text": "Так, ви можете замовити послугу постійної зовнішньої IP-адреси." } },
                    { "@type": "Question", "name": "Що робити, якщо зник інтернет?", "acceptedAnswer": { "@type": "Answer", "text": "Спочатку перезавантажте ваш роутер. Якщо це не допомогло, зверніться до нашої технічної підтримки." } }
                ]
            }
        ]
    };

    return (
        <div className='mt-5 scroll-smooth'>
            <Head>
                <title>Batyevka.NET — Гігабітний інтернет та XGS-PON у Києві</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>

            {/* СТИЛІ */}
            <style dangerouslySetInnerHTML={{__html: `
                html { scroll-behavior: smooth; }
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #F4F2F2; border-radius: 8px; margin: 4px 0; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #BDBDBD; border-radius: 8px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #8B6CB0; }
                details > summary { list-style: none; }
                details > summary::-webkit-details-marker { display: none; }
            `}} />

            <div className="bg-white text-[#5F6061] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
                <main className="container mx-auto px-4 py-8 md:py-16">

                    {/* ----- ГОЛОВНИЙ ЕКРАН (HERO - Концепт 2) ----- */}
                    <section className="relative bg-[#fcfbfe] rounded-[32px] border-t-[6px] border-[#8B6CB0] shadow-sm p-8 md:p-14 flex flex-col md:flex-row items-center justify-between mb-16 overflow-hidden">
                        <div className="md:w-1/2 z-10 text-center md:text-left mb-10 md:mb-0">
                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                                <span className="bg-white text-[#56AABF] text-[10px] sm:text-xs font-bold py-1.5 px-3 rounded uppercase shadow-sm">100% Оптика</span>
                                <span className="bg-white text-[#8B6CB0] text-[10px] sm:text-xs font-bold py-1.5 px-3 rounded uppercase shadow-sm">Енергонезалежність</span>
                                <span className="bg-[#DC662D] text-white text-[10px] sm:text-xs font-bold py-1.5 px-3 rounded uppercase shadow-sm">Київ</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 uppercase text-[#0E2D43] leading-tight">
                                Гігабіт та <span className="text-[#8B6CB0]">XGS-PON</span>
                            </h1>

                            <p className="text-base sm:text-lg font-medium text-[#5F6061] mb-8 max-w-[450px] mx-auto md:mx-0">
                                Batyevka.NET забезпечує стабільний та безперебійний інтернет до <strong className="text-[#0E2D43]">10 Гбіт/с</strong> у Солом’янському районі. Ми тримаємо вас онлайн навіть під час відключень світла.
                            </p>

                            <button
                                onClick={scrollToCTA}
                                className="inline-block bg-[#DC662D] text-white text-lg font-bold py-4 px-10 rounded-full shadow-[0_4px_20px_rgba(220,102,45,0.4)] transition-all duration-300 hover:bg-[#c95b27] hover:-translate-y-1"
                            >
                                Підключитись
                            </button>
                        </div>

                        <div className="md:w-1/2 z-10 relative flex justify-center md:justify-end">
                            <img
                                src="/img/banner_with_cloud.svg"
                                alt="Енергонезалежний інтернет Batyevka.NET"
                                loading="lazy"
                                className="w-full max-w-[400px] lg:max-w-[550px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </section>

                    {/* --- AI SUMMARY (TL;DR) --- */}
                    <article className="bg-[#f7f9fa] border-l-4 border-[#8B6CB0] py-5 px-6 rounded-r-lg mx-auto mb-16 max-w-[1000px] text-[1.05rem] font-medium text-[#0E2D43]">
                        <strong className="text-[#8B6CB0]">Короткий зміст:</strong> Batyevka.NET — інтернет-провайдер у Солом'янському районі Києва, що надає послуги енергонезалежного підключення за технологіями GPON та XGS-PON на швидкості від 1 до 10 Гбіт/с. Новим абонентам доступна <strong className="text-[#DC662D]">акція «Гігабіт на рік» (150 грн/міс)</strong>. Для діючих клієнтів працюють програми лояльності. Усі тарифи підтримують інтеграцію з телебаченням MEGOGO.
                    </article>

                    {/* ----- ПЕРЕВАГИ ----- */}
                    <section className="py-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#5F6061]">Чому Batyevka.NET?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <article className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200/80 flex flex-col items-center text-center">
                                <LightningIcon />
                                <h3 className="text-xl font-bold mb-2 text-[#5F6061]">Супершвидкість</h3>
                                <p className="text-sm">Оптоволоконні лінії G-PON та XGS-PON.</p>
                            </article>
                            <article className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200/80 flex flex-col items-center text-center">
                                <ShieldCheckIcon />
                                <h3 className="text-xl font-bold mb-2 text-[#5F6061]">Стабільність</h3>
                                <p className="text-sm">Працюємо навіть під час енергетичних викликів.</p>
                            </article>
                            <article className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200/80 flex flex-col items-center text-center">
                                <VideoCameraIcon />
                                <h3 className="text-xl font-bold mb-2 text-[#5F6061]">MEGOGO ТБ</h3>
                                <p className="text-sm">Топовий спорт, серіали від HBO та 400+ каналів.</p>
                            </article>
                            <article className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200/80 flex flex-col items-center text-center">
                                <SupportIcon />
                                <h3 className="text-xl font-bold mb-2 text-[#5F6061]">Підтримка</h3>
                                <p className="text-sm">Усі виклики майстра входять у вартість тарифу.</p>
                            </article>
                        </div>
                    </section>

                    {/* ----- ТАРИФИ ПОН ----- */}
                    <section className="py-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#5F6061]">Популярні тарифи PON</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                            {/* --- ТАРИФ 1 (ГІГАБІТ АКЦІЯ) --- */}
                            <article
                                onClick={() => handleTariffClick(1, 'free')}
                                className={`p-6 rounded-lg flex flex-col transition-all duration-300 cursor-pointer relative ${
                                    selectedTariff === 1
                                    ? 'ring-2 ring-[#DC662D] shadow-2xl transform md:scale-105 z-10 bg-white border-transparent'
                                    : 'border border-gray-200/80 shadow-lg hover:-translate-y-1 bg-white'
                                }`}
                            >
                                <div className="flex-grow">
                                    <span className="inline-block bg-[#5984B2]/20 text-[#5984B2] text-xs font-bold px-2 py-1 rounded-full mb-2">G-PON</span>
                                    <h3 className="text-2xl font-bold mb-2 text-[#5F6061]">1 Гбіт/с</h3>
                                    <p className="text-4xl font-extrabold text-[#DC662D]">150<span className="text-xl font-bold"> грн/міс</span></p>
                                    <p className="text-sm text-[#5F6061] mb-4">акційна ціна</p>
                                    <p className="text-sm font-bold mb-2 text-[#51B18B]">Підключення — 299 грн</p>
                                    <p
                                        className="text-sm font-bold text-[#5984B2] hover:text-[#DC662D] transition-colors underline decoration-dashed underline-offset-4 relative z-20 inline-block"
                                        onClick={(e) => handleMegogoLinkClick(e, 'free', 1)}
                                    >
                                        + MEGOGO ТБ (202 канали)
                                    </p>
                                </div>
                                <div className="mt-auto space-y-2 pt-4 relative z-20">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); scrollToCTA(); }}
                                        className="w-full block text-center bg-[#DC662D] hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Залишити заявку
                                    </button>
                                    <details className="w-full text-left bg-gray-50 border border-gray-200 rounded-lg group [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="font-bold py-2 px-4 text-[#5F6061] hover:bg-gray-100 cursor-pointer transition-colors flex justify-between items-center rounded-lg">
                                            <span>Детальніше про акцію</span>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M6 9l6 6 6-6"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="p-4 text-xs text-[#5F6061] border-t border-gray-200 leading-relaxed bg-white rounded-b-lg">
                                            <strong>Акція діє ВИКЛЮЧНО для нових підключень</strong> (або адрес, де послуги не надавалися більше 36 міс). Вартість 150 грн/міс зафіксована на перші 365 днів (1 рік). Починаючи з 366-го дня відбувається автоматичний перехід на регулярний тариф «1 Гбіт/с» вартістю 250 грн/місяць.
                                        </div>
                                    </details>
                                </div>
                            </article>

                            {/* --- ТАРИФ 2 (3 ГБІТ XGS-PON) --- */}
                            <article
                                onClick={() => handleTariffClick(2, 'national')}
                                className={`p-6 rounded-lg flex flex-col transition-all duration-300 cursor-pointer relative ${
                                    selectedTariff === 2
                                    ? 'ring-2 ring-[#DC662D] shadow-2xl transform md:scale-105 z-10 bg-white border-transparent'
                                    : 'border border-gray-200/80 shadow-lg hover:-translate-y-1 bg-white'
                                }`}
                            >
                                <div className="flex-grow">
                                    <span className="inline-block bg-[#8B6CB0]/20 text-[#8B6CB0] text-xs font-bold px-2 py-1 rounded-full mb-2">XGS-PON</span>
                                    <h3 className="text-2xl font-bold mb-2 text-[#5F6061]">3 Гбіт/с</h3>
                                    <p className="text-4xl font-extrabold text-[#DC662D]">500<span className="text-xl font-bold"> грн/міс</span></p>
                                    <p className="text-sm text-[#5F6061] mb-4">регулярна ціна</p>
                                    <p className="text-sm font-bold mb-2 text-[#51B18B]">Підключення — 2999 грн</p>
                                    <p
                                        className="text-sm font-bold text-[#5984B2] hover:text-[#DC662D] transition-colors underline decoration-dashed underline-offset-4 relative z-20 inline-block"
                                        onClick={(e) => handleMegogoLinkClick(e, 'national', 2)}
                                    >
                                        + MEGOGO Нац ТБ (289 каналів)
                                    </p>
                                </div>
                                <div className="mt-auto space-y-2 pt-4 relative z-20">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); scrollToCTA(); }}
                                        className="w-full block text-center bg-[#DC662D] hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Залишити заявку
                                    </button>
                                    <details className="w-full text-left bg-gray-50 border border-gray-200 rounded-lg group [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="font-bold py-2 px-4 text-[#5F6061] hover:bg-gray-100 cursor-pointer transition-colors flex justify-between items-center rounded-lg">
                                            <span>Детальніше про тариф</span>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M6 9l6 6 6-6"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="p-4 text-xs text-[#5F6061] border-t border-gray-200 leading-relaxed bg-white rounded-b-lg">
                                            Преміальний тариф на базі технології XGS-PON. Ідеально підходить для розумних будинків, важкого геймінгу та одночасної роботи десятків пристроїв без втрати швидкості. Надається симетричний канал (швидкість завантаження дорівнює швидкості віддачі).
                                        </div>
                                    </details>
                                </div>
                            </article>

                            {/* --- ТАРИФ 3 (5 ГБІТ ТЕМНИЙ) --- */}
                            <article
                                onClick={() => handleTariffClick(3, 'light')}
                                className={`p-6 rounded-lg flex flex-col transition-all duration-300 cursor-pointer relative ${
                                    selectedTariff === 3
                                    ? 'ring-2 ring-[#DC662D] shadow-2xl transform md:scale-105 z-10 bg-[#0E2D43] text-white border-transparent'
                                    : 'border border-[#0E2D43] shadow-lg hover:-translate-y-1 bg-[#0E2D43] text-white'
                                }`}
                            >
                                <div className="flex-grow">
                                    <span className="inline-block bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full mb-2">XGS-PON</span>
                                    <h3 className="text-2xl font-bold mb-2">5 Гбіт/с</h3>
                                    <p className="text-4xl font-extrabold text-[#DC662D]">800<span className="text-xl font-bold"> грн/міс</span></p>
                                    <p className="text-sm text-white/70 mb-4">регулярна ціна</p>
                                    <p className="text-sm font-bold mb-2">Підключення — 5999 грн</p>
                                    <p
                                        className="text-sm font-bold text-white/90 hover:text-white transition-colors underline decoration-dashed underline-offset-4 relative z-20 inline-block"
                                        onClick={(e) => handleMegogoLinkClick(e, 'light', 3)}
                                    >
                                        + MEGOGO ТБ Легка (379 каналів)
                                    </p>
                                </div>
                                <div className="mt-auto space-y-2 pt-4 relative z-20">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); scrollToCTA(); }}
                                        className="w-full block text-center bg-[#DC662D] hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Залишити заявку
                                    </button>
                                    <details className="w-full text-left bg-white/10 border border-white/20 rounded-lg group [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="font-bold py-2 px-4 text-white hover:bg-white/20 cursor-pointer transition-colors flex justify-between items-center rounded-lg">
                                            <span>Детальніше про тариф</span>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="M6 9l6 6 6-6"></path></svg>
                                            </span>
                                        </summary>
                                        <div className="p-4 text-xs text-white/80 border-t border-white/20 leading-relaxed bg-[#0E2D43] rounded-b-lg">
                                            Максимальна потужність XGS-PON для ІТ-фахівців, стрімерів та створення серверних вузлів вдома. Абсолютна енергонезалежність, симетричний канал 5 Гбіт/с та гарантована стабільність пінгу до європейських серверів.
                                        </div>
                                    </details>
                                </div>
                            </article>

                        </div>
                    </section>

                    {/* ----- XGS-PON 10 ГБІТ ----- */}
                    <section className="py-12">
                        <div className="bg-[#fcfbfe] border border-[#EAEAEA] rounded-lg p-8 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#0E2D43]">Надшвидкісні тарифи XGS-PON</h2>
                            <p className="max-w-2xl mx-auto mb-8 text-[#5F6061]">Для найвимогливіших завдань: професійного геймінгу, стрімінгу у 8K та роботи з великими обсягами даних.</p>

                            <div className="flex justify-center max-w-4xl mx-auto mb-8">
                                <div className="bg-white p-6 rounded-lg shadow-md border border-[#8B6CB0]/30 flex flex-col w-full max-w-sm">
                                    <h3 className="text-2xl font-bold text-[#0E2D43]">10 Гбіт/с</h3>
                                    <p className="text-3xl font-bold text-[#DC662D] mt-2">2000<span className="text-lg font-normal"> грн/міс</span></p>
                                    <p className="text-xs text-[#5F6061] mt-1">регулярна ціна</p>
                                </div>
                            </div>

                            <p className="text-sm mb-6 text-[#5F6061]"><span className="font-bold">Вартість підключення:</span> 5999 грн.</p>
                            <Link href="/xgspon" className="inline-block bg-[#0E2D43] hover:bg-[#1a4463] text-white font-bold py-3 px-8 rounded-lg transition-colors">Дізнатись більше про технологію</Link>
                        </div>
                    </section>

                    {/* ----- MEGOGO SECTION З ВИПАДАЙКАМИ ----- */}
                    <section id="megogo-section" className="py-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0E2D43]">Розширте можливості з передплатами MEGOGO</h2>

                         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                            {megogoPlansData.map((plan, index) => {
                                const includedLevel = getIncludedMegogoLevel(selectedTariff);
                                const isIncluded = index <= includedLevel;
                                const displayPrice = isIncluded ? 'Вже у тарифі' : `+ ${plan.basePrice} грн/міс`;
                                const priceColor = isIncluded ? 'text-[#51B18B]' : 'text-[#DC662D]';

                                return (
                                    <details
                                        key={plan.id}
                                        className={`group rounded-xl border transition-all duration-300 ${
                                            selectedMegogo === plan.id
                                                ? 'border-[#8B6CB0] ring-1 ring-[#8B6CB0] shadow-md bg-white'
                                                : 'border-gray-200 bg-gray-50 hover:border-[#8B6CB0]/50 hover:bg-white'
                                        }`}
                                        onClick={() => handleMegogoPlanClick(plan.id)}
                                    >
                                        <summary className="p-5 cursor-pointer outline-none flex flex-col justify-between h-full min-h-[140px] relative">
                                            <div>
                                                <p className="font-extrabold text-xl text-[#0E2D43] mb-1">{plan.name}</p>
                                                <p className="text-sm text-[#5F6061]">{plan.desc}</p>
                                            </div>
                                            <div className="flex justify-between items-center mt-4">
                                                <p className={`font-bold text-lg ${priceColor}`}>{displayPrice}</p>
                                                <span className="text-[#8B6CB0] bg-[#f0eaff] p-1.5 rounded-full transition-transform duration-300 group-open:rotate-180">
                                                    <svg fill="none" height="18" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" width="18"><path d="M6 9l6 6 6-6"></path></svg>
                                                </span>
                                            </div>
                                        </summary>
                                        <div className="p-5 border-t border-gray-100 bg-white rounded-b-xl">
                                            <p className="text-xs font-bold text-[#8B6CB0] mb-3 uppercase tracking-wider">Перелік каналів:</p>
                                            <div className="custom-scrollbar max-h-[250px] overflow-y-auto pr-3">
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-2 text-xs text-[#5F6061]">
                                                {plan.list.map((channel, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-[#8B6CB0] mr-1.5 text-base leading-none">•</span>
                                                        <span className="leading-tight">{channel}</span>
                                                    </li>
                                                ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </details>
                                );
                            })}
                         </div>
                    </section>

                    {/* ----- НОВИНИ ----- */}
                    <section className="py-12 bg-[#fcfbfe] rounded-[32px] border border-[#EAEAEA] mt-8">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0E2D43]">Останні новини</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Article 1 */}
                                <article className="bg-white rounded-xl shadow-sm overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 border border-gray-200/80">
                                    <Image src={news1} alt="Планові технічні роботи" width={600} height={400} className="w-full h-auto" />
                                    <div className="p-6">
                                        <p className="text-xs font-bold text-[#8B6CB0] mb-2 uppercase tracking-wide">14 травня 2026</p>
                                        <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Планові роботи з модернізації мережі</h3>
                                        <p className="text-sm text-gray-600 mb-4">Для впровадження нових покращень на магістральному обладнанні та забезпечення найвищої якості зв'язку, ми проведемо короткі технічні роботи. Цього четверга з 05:00 до 06:00 ранку</p>
                                    </div>
                                </article>

                                {/* Article 2 */}
                                <article className="bg-white rounded-xl shadow-sm overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 border border-gray-200/80">
                                    <Image src={news4} alt="Акція Приведи друга" width={600} height={400} className="w-full h-auto" />
                                    <div className="p-6">
                                        <p className="text-xs font-bold text-[#DC662D] mb-2 uppercase tracking-wide">Акція</p>
                                        <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Джекпот за сусіда — 777 грн на рахунок!</h3>
                                        <p className="text-sm text-gray-600 mb-4">Рекомендуйте нас друзям та сусідам і отримуйте 777 бонусних гривень на баланс за кожне нове підключення.</p>
                                        <Link href="/promotions/drug" className="font-bold text-[#DC662D] hover:underline text-sm">Читати детальніше →</Link>
                                    </div>
                                </article>

                                {/* Article 3 */}
                                <article className="bg-white rounded-xl shadow-sm overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 border border-gray-200/80">
                                    <Image src={news3} alt="Розширення покриття мережі" width={600} height={400} className="w-full h-auto" />
                                    <div className="p-6">
                                        <p className="text-xs font-bold text-[#56AABF] mb-2 uppercase tracking-wide">05 серпня 2025</p>
                                        <h3 className="text-xl font-bold mb-3 text-[#0E2D43]">Розширення покриття: ми підключили нові будинки</h3>
                                        <p className="text-sm text-gray-600 mb-4">Раді повідомити, що наша мережа тепер доступна за новими адресами у вашому районі. Перевірте можливість підключення!</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>

                    {/* ----- FAQ SECTION ----- */}
                    <section className="py-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0E2D43]">Часті запитання</h2>
                        <div className="max-w-3xl mx-auto space-y-4">
                            <details className="bg-gray-50 border border-gray-200/80 rounded-xl p-5 cursor-pointer group">
                                <summary className="font-bold text-lg text-[#0E2D43] flex justify-between items-center outline-none">
                                    Як швидко відбувається підключення?
                                    <ChevronDownIcon />
                                </summary>
                                <p className="mt-3 pt-3 border-t border-gray-200 text-[#5F6061]">Зазвичай, підключення займає 1-3 робочі дні з моменту подачі заявки. Наш майстер узгодить з вами зручний час.</p>
                            </details>
                            <details className="bg-gray-50 border border-gray-200/80 rounded-xl p-5 cursor-pointer group">
                                <summary className="font-bold text-lg text-[#0E2D43] flex justify-between items-center outline-none">
                                    Чи можна замовити статичну IP-адресу?
                                    <ChevronDownIcon />
                                </summary>
                                <p className="mt-3 pt-3 border-t border-gray-200 text-[#5F6061]">Так, ви можете замовити послугу постійної зовнішньої IP-адреси. Вартість підключення — 200 грн (разово), щомісячна плата — {REAL_IP_PRICE} грн.</p>
                            </details>
                            <details className="bg-gray-50 border border-gray-200/80 rounded-xl p-5 cursor-pointer group">
                                <summary className="font-bold text-lg text-[#0E2D43] flex justify-between items-center outline-none">
                                    Що робити, якщо зник інтернет?
                                    <ChevronDownIcon />
                                </summary>
                                <p className="mt-3 pt-3 border-t border-gray-200 text-[#5F6061]">Спочатку перезавантажте ваш роутер. Якщо це не допомогло, зверніться до нашої технічної підтримки за телефоном або у месенджерах. Ми на зв&apos;язку 24/7.</p>
                            </details>
                        </div>
                    </section>

                    {/* ----- CALL TO ACTION SECTION ----- */}
                    <section id="cta" className="py-14 my-8 bg-[#0E2D43] rounded-[32px] text-center border-t-4 border-[#DC662D]">
                        <h2 className="text-3xl font-extrabold mb-3 text-white">Готові до стабільного інтернету?</h2>
                        <p className="mb-8 max-w-xl mx-auto text-white/80">Залиште заявку, і наш менеджер зв&apos;яжеться з вами протягом 15 хвилин для перевірки адреси.</p>

                        <button
                            onClick={handleOpenModalGeneral}
                            className="bg-[#DC662D] text-white font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_4px_20px_rgba(220,102,45,0.4)]"
                        >
                            Залишити заявку
                        </button>
                    </section>

                    {/* ----- EXPANDED SEO TEXT ----- */}
                    <section className="py-10">
                        <div className="max-w-4xl mx-auto text-left">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0E2D43]">Batyevka.NET — ваш надійний інтернет-провайдер у Києві</h2>
                            <div className="leading-relaxed space-y-4 text-gray-700 text-sm">
                                <p>Шукаєте стабільний та швидкий інтернет у Солом&apos;янському районі? Batyevka.NET пропонує підключення за сучасною технологією оптоволоконного інтернету (G-PON), що гарантує гігабітні швидкості та безперебійну роботу навіть за умов відключення світла. Ми — локальний провайдер, тому знаємо потреби наших клієнтів і завжди поруч, щоб надати якісну технічну підтримку.</p>
                                <p>Наші тарифи розроблені як для домашнього використання — перегляду фільмів у 4K, онлайн-ігор без затримок, так і для бізнес-задач, що вимагають симетричного каналу та високої швидкості передачі даних. Підключити гігабітний інтернет у Києві ще ніколи не було так просто. Обирайте Batyevka.NET та відчуйте справжню свободу у всесвітній мережі!</p>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
            {/* JSON-LD Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
        </div>
    );
};

export default BatyevkaLandingPage;
