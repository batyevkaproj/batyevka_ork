type MegogoBudles = {
    value: number,
    name:string
}

type PrepaidMonths = {
    value: number,
    months: number
}

type SpeedProps = {
    value: number,
    speed: string,
    price: number,
    label: string
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

export const marks_mobile = [
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

export const megogo_bundles: MegogoBudles[] = [
    {
        value: 1,
        name: 'Легка'
    },
    {
        value: 2,
        name: 'Оптимальна'
    },
    {
        value: 3,
        name: 'Максимальна'
    },
    {
        value: 4,
        name: 'Спорт'
    },
    {
        value: 5,
        name: 'Кіно+'
    },
    {
        value: 6,
        name: 'Нац ТБ'
    }
];

export const months: PrepaidMonths[] = [
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