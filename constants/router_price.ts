type RouterPriceProps = {
    months: number
    price: number,
    default?: boolean,
}

export const ROUTER_PRICE: RouterPriceProps[] = [
    { months: 1, price: 3000, default: true },
    { months: 12, price: 2500 },
    { months: 24, price: 1500 },
    { months: 36, price: 499 }
]