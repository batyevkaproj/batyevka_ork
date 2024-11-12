export type TariffProps = {
    id: number;
    price: number;
    nonPromoPrice: number;
    checked: boolean;
    promotion?: boolean;
    speed: string;
    type?: "G-PON" | "XGS-PON";
    setupPrice?: number;
}