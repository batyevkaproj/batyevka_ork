type RouterPriceProps = {
    months: number
    price: number,
    default?: boolean,
}

export const ROUTER_PRICE: RouterPriceProps[] = [
    { months: 1, price: 1799, default: true },
    { months: 6, price: 1299 },
    { months: 12, price: 799 },
    { months: 24, price: 299 },
    { months: 36, price: 100 }
];