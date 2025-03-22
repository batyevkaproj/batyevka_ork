type RouterPriceProps = {
    months: number
    price: number,
    default?: boolean,
}

export const ROUTER_PRICE: RouterPriceProps[] = [
    { months: 1, price: 1799, default: true },
    { months: 6, price: 1699 },
    { months: 12, price: 1499 },
    { months: 24, price: 1499 },
    { months: 36, price: 1499 }
];