import edition20250905 from './edition-2025-09-05';

export type ContractEdition = {
    /** Частина URL сторінки редакції: /publichnyi-dohovir/<slug> */
    slug: string;
    /** Номер наказу, яким затверджено редакцію */
    orderNumber: string;
    /** Дата наказу, YYYY-MM-DD */
    orderDate: string;
    /** Дата набрання чинності, YYYY-MM-DD — показується, лише якщо заповнена */
    effectiveFrom?: string;
    /** Останній день дії, YYYY-MM-DD; не заповнено — редакція чинна */
    effectiveTo?: string;
    /** Текст договору (HTML) */
    html: string;
};

/** Адреса чинної редакції; сюди ж веде короткий лінк /dogovir */
export const CONTRACT_PATH = '/publichnyi-dohovir';

// Нову редакцію додавати НА ПОЧАТОК списку,
// а попередній проставити effectiveTo — вона автоматично стане архівною.
export const CONTRACT_EDITIONS: ContractEdition[] = [
    {
        slug: 'redaktsiia-2025-09-05',
        orderNumber: '050925',
        orderDate: '2025-09-05',
        html: edition20250905,
    },
];

export const getCurrentEdition = (): ContractEdition =>
    CONTRACT_EDITIONS.find(e => !e.effectiveTo) ?? CONTRACT_EDITIONS[0];

export const getEditionBySlug = (slug: string): ContractEdition | undefined =>
    CONTRACT_EDITIONS.find(e => e.slug === slug);

/** 2025-09-05 → 05.09.2025 */
export const formatDate = (iso: string): string => {
    const [y, m, d] = iso.split('-');
    return `${d}.${m}.${y}`;
};

/** «з 05.09.2025 по 30.09.2026», «з 05.09.2025» або порожньо, якщо дати невідомі */
export const formatPeriod = ({ effectiveFrom, effectiveTo }: ContractEdition): string => {
    if (effectiveFrom && effectiveTo) return `з ${formatDate(effectiveFrom)} по ${formatDate(effectiveTo)}`;
    if (effectiveFrom) return `з ${formatDate(effectiveFrom)}`;
    if (effectiveTo) return `по ${formatDate(effectiveTo)}`;
    return '';
};
