type MegogoBudles = {
    value: number,
    name:string,
    price: number
}

type PrepaidMonths = {
    value: number,
    months: number,
    sum: number
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
        price: 150
    },
    {
        value: 4,
        name: 'Максимальна',
        price: 350
    }
];

export const MONTHS: PrepaidMonths[] = [
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