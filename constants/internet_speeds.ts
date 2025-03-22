export type SpeedItemProps = {
    value: number,
    speed: number,
    measure: string,
    price: number
}

export const GPON_SPEEDS: SpeedItemProps[] = [
    { value: 1, speed: 300, measure: 'Мбіт', price: 399 },
    { value: 2, speed: 1, measure: 'Гбіт', price: 499 },
    { value: 3, speed: 2.5, measure: 'Гбіт', price: 1120 },
    { value: 4, speed: 5, measure: 'Гбіт', price: 2245 }
];

export const UTP_SPEEDS: SpeedItemProps[] = [
    { value: 1, speed: 100, measure: 'Мбіт', price: 200 },
    { value: 2, speed: 1, measure: 'Гбіт', price: 250 }
];

export const REAL_IP_PRICE = 50;