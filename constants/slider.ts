export type MegogoBudles = {
    value: number,
    name:string,
    price: number
}

export type PrepaidMonths = {
    value: number,
    months: number,
    sum: number
}

// Тепер використовуємо рівномірні кроки 1, 2, 3 для всіх повзунків інтернету, 
// щоб відстань між точками була однаковою на екрані.
export const MIN = 1;
export const MID = 2;
export const MAX = 3;

export const marks =[
    { value: MIN },
    { value: MID },
    { value: MAX },
];

export const MARKS_MOBILE =[
    { value: MIN },
    { value: MID },
    { value: MAX },
];

export const MEGOGO_BUNDLES: MegogoBudles[] =[
    {
        value: 0,
        name: 'Безкоштовне ТБ',
        price: 0
    },
    {
        value: 1,
        name: 'Нац ТБ',
        price: 50
    },
    {
        value: 2,
        name: 'Легка',
        price: 85
    },
    {
        value: 3,
        name: 'Оптимальна',
        price: 200
    },
    {
        value: 4,
        name: 'Максимальна',
        price: 350
    }
];

export const MONTHS: PrepaidMonths[] =[
    {
        value: 1,
        months: 1,
        sum: 0
    },
    {
        value: 2,
        months: 6,
        sum: 20
    },
    {
        value: 3,
        months: 12,
        sum: 30
    }
];