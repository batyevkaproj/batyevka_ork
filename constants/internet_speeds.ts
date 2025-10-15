export type SpeedItemProps = {
    value: number,
    speed: number,
    measure: string,
    price: number
}

export const GPON_SPEEDS: SpeedItemProps[] = [
    { value: 1, speed: 10, measure: 'Гбіт', price: 1600 },
    { value: 2, speed: 5, measure: 'Гбіт', price: 800 },
    { value: 3, speed: 2.5, measure: 'Гбіт', price: 500 }
];

export const UTP_SPEEDS: SpeedItemProps[] = [
    { value: 1, speed: 100, measure: 'Мбіт', price: 200 },
    { value: 2, speed: 300, measure: 'Мбіт', price: 230 },
    { value: 3, speed: 1, measure: 'Гбіт', price: 250 },
];

export const REAL_IP_PRICE = 50;
export const REAL_IP_PRICE_physic = 50;



export const ONT_model = 'ONU XGS-PON';
