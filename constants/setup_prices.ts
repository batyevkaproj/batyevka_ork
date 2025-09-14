export type SetupPriceProps = {
    months: number;
    price: number;
    default?: boolean;
}

export const UTP_SETUP_PRICES: SetupPriceProps[] = [
    { months: 1, price: 0, default: true },
    { months: 6, price: 0 },
    { months: 12, price: 0 }
];

export const GPON_SETUP_PRICES: SetupPriceProps[] = [
    { months: 1, price: 0, default: true },
    { months: 6, price: 0 },
    { months: 12, price: 0 }
];