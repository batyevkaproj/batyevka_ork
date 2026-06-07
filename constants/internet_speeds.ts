export type SpeedItemProps = {
    value: number,
    speed: number,
    measure: string,
    price: number
}


export const UTP_SPEEDS: SpeedItemProps[] = [
    { value: 1, speed: 300, measure: 'Мбіт', price: 325 },
    { value: 2, speed: 1, measure: 'Гбіт', price: 350 },
    { value: 3, speed: 3, measure: 'Гбіт', price: 500 },
];

export const GPON_SPEEDS: SpeedItemProps[] =[
    { value: 1, speed: 10, measure: 'Гбіт', price: 2800 },
    { value: 2, speed: 5, measure: 'Гбіт', price: 1250 },
    { value: 3, speed: 3, measure: 'Гбіт', price: 800 }
];

export const REAL_IP_PRICE = 100;
export const REAL_IP_PRICE_physic = 50;

export const ONT_model = 'ONU XGS-PON';
