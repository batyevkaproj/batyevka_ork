export type SpeedItemProps = {
    value: number,
    speed: number,
    measure: string,
    /** Швидкість у Мбіт/с — єдиний ключ для цін підключення та ТБ-пакетів */
    mbps: number,
    price: number
}


// Єдина шкала швидкостей: 100Мб · 300Мб · 1Гіг · 3Гіг · 5Гіг · 10Гіг
// Абонплата: 3 Гіг — за прайсом (379), решта — чинні ціни сайту
export const UTP_SPEEDS: SpeedItemProps[] = [
    { value: 1, speed: 100, measure: 'Мбіт', mbps: 100,   price: 299 },
    { value: 2, speed: 300, measure: 'Мбіт', mbps: 300,   price: 325 },
    { value: 3, speed: 1,   measure: 'Гбіт', mbps: 1000,  price: 350 },
    { value: 4, speed: 3,   measure: 'Гбіт', mbps: 3000,  price: 379 },
    { value: 5, speed: 5,   measure: 'Гбіт', mbps: 5000,  price: 800 },
    { value: 6, speed: 10,  measure: 'Гбіт', mbps: 10000, price: 2000 },
];

// Тільки надшвидкісні тарифи (XGS-PON) — ті самі ціни, що й на спільній шкалі
export const GPON_SPEEDS: SpeedItemProps[] = [
    { value: 1, speed: 3,  measure: 'Гбіт', mbps: 3000,  price: 379 },
    { value: 2, speed: 5,  measure: 'Гбіт', mbps: 5000,  price: 800 },
    { value: 3, speed: 10, measure: 'Гбіт', mbps: 10000, price: 2000 },
];

/** З 3 Гбіт/с і вище тариф працює на XGS-PON, нижче — на G-PON */
export const isXgsPon = (mbps: number) => mbps >= 3000;

export const REAL_IP_PRICE = 100;
export const REAL_IP_PRICE_physic = 50;

export const ONT_model = 'ONU XGS-PON';
