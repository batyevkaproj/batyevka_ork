export type SetupPriceProps = {
    months: number;
    price: number;
    default?: boolean;
}

export const UTP_SETUP_PRICES: SetupPriceProps[] = [
    { months: 1, price: 299, default: true },
    { months: 6, price: 299 },
    { months: 12, price: 299 }
];

export const GPON_SETUP_PRICES: SetupPriceProps[] = [
    { months: 1, price: 299, default: true },
    { months: 6, price: 299 },
    { months: 12, price: 299 }
];
