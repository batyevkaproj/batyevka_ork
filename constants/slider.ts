type MegogoBudles = {
    value: number,
    name:string,
    price: number
}

type PrepaidMonths = {
    value: number,
    months: number
}

export const MIN_MOBILE = 3;
export const MID_G_MOBILE = 4;
export const MID_MOBILE = 5;
export const MAX_MOBILE = 10;

export const MIN = 1;
export const MID_G = 3;
export const MID = 5;
export const MAX = 10;

export const marks = [
    {
        value: MIN,
    },
    {
        value: MID,
    },
    {
        value: MAX,
    },
];

export const MARKS_MOBILE = [
    {
        value: MIN_MOBILE,
    },
    {
        value: MID_MOBILE,
    },
    {
        value: MAX_MOBILE,
    },
];

export const MEGOGO_BUNDLES: MegogoBudles[] = [
    {
        value: 1,
        name: 'Легка',
        price: 199
    },
    {
        value: 2,
        name: 'Оптимальна',
        price: 299
    },
    {
        value: 3,
        name: 'Максимальна',
        price: 399
    },
    {
        value: 4,
        name: 'Спорт',
        price: 599
    },
    {
        value: 5,
        name: 'Кіно+',
        price: 699
    },
    {
        value: 6,
        name: 'Нац ТБ',
        price: 99
    }
];

export const MONTHS: PrepaidMonths[] = [
    {
        value: 1,
        months: 1
    },
    {
        value: 2,
        months: 6
    },
    {
        value: 3,
        months: 12
    },
    {
        value: 4,
        months: 24
    },
    {
        value: 5,
        months: 36
    }
];