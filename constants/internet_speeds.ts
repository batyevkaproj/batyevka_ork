export type SpeedItemProps = {
    value: number,
    speed: number,
    measure: string,
    price: number

}

export const GPON_SPEEDS: SpeedItemProps[] = [
    { value: 1, speed: 300, measure: 'Мбіт', price: 559 },
    { value: 2, speed: 1, measure: 'Гбіт', price: 979 },
    { value: 3, speed: 2.5, measure: 'Гбіт', price: 1609 },
    { value: 4, speed: 5, measure: 'Гбіт', price: 2499 }
];

export const UTP_SPEEDS: SpeedItemProps[] = [
    { value: 1, speed: 100, measure: 'Мбіт', price: 399 },
    { value: 2, speed: 500, measure: 'Мбіт', price: 599 },
    { value: 3, speed: 1, measure: 'Гбіт', price: 979 }
];