export type SetupPriceProps = {
    months: number;
    price: number;
    default?: boolean;
}

export const UTP_SETUP_PRICES: SetupPriceProps[] = [
    { months: 1, price: 499 },
    { months: 6, price: 199, default: true },
    { months: 12, price: 1 },
    { months: 24, price: 1 },
    { months: 36, price: 1 }
];

export const GPON_SETUP_PRICES: SetupPriceProps[] = [
    { months: 1, price: 1499 },
    { months: 6, price: 1, default: true },
    { months: 12, price: 1 },
    { months: 24, price: 1 },
    { months: 36, price: 1 }
];