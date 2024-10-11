export type SpeedItemProps = {
    speed: number,
    measure: string,
    price: number

}

export const GPON_SPEEDS: SpeedItemProps[] = [
    { speed: 300, measure: 'Мбіт', price: 559 },
    { speed: 1, measure: 'Гбіт', price: 979 },
    { speed: 2.5, measure: 'Гбіт', price: 1609 },
    { speed: 5, measure: 'Гбіт', price: 2499 }
];

export const UTP_SPEEDS: SpeedItemProps[] = [
    { speed: 100, measure: 'Мбіт', price: 399 },
    { speed: 500, measure: 'Мбіт', price: 599 },
    { speed: 1, measure: 'Гбіт', price: 979 }
];