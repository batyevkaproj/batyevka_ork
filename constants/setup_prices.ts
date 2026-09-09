/** Вартість підключення: швидкість (Мбіт/с) → місяці передплати → ціна, грн */
export const SETUP_PRICES: Record<number, Record<number, number>> = {
    100:   { 1: 350,  6: 0,    12: 0   }, // тариф поки не на шкалі, ціна за прайсом
    300:   { 1: 350,  6: 0,    12: 0   },
    1000:  { 1: 350,  6: 0,    12: 0   },
    3000:  { 1: 1499, 6: 999,  12: 499 },
    5000:  { 1: 1999, 6: 999,  12: 499 },
    10000: { 1: 2499, 6: 1499, 12: 499 },
};

/** Ціна підключення для обраної швидкості та строку передплати */
export const getSetupPrice = (mbps: number, months: number): number => {
    const byMonths = SETUP_PRICES[mbps];
    if (!byMonths) return 0;
    return byMonths[months] ?? byMonths[1] ?? 0;
};
