import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ContractDocument from '@/components/dogovir/ContractDocument';
import {
    CONTRACT_EDITIONS,
    formatDate,
    formatPeriod,
    getCurrentEdition,
    getEditionBySlug,
} from '@/constants/dogovir';

type Props = { params: { slug: string } };

// Окремі сторінки — лише для попередніх редакцій; чинна живе за адресою /publichnyi-dohovir.
// Решта адрес — 404.
export const dynamicParams = false;

export function generateStaticParams() {
    const currentSlug = getCurrentEdition().slug;
    return CONTRACT_EDITIONS
        .filter(({ slug }) => slug !== currentSlug)
        .map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
    const edition = getEditionBySlug(params.slug);
    if (!edition) return {};

    const period = formatPeriod(edition);
    return {
        title: `Публічний договір, редакція від ${formatDate(edition.orderDate)} — Batyevka.NET`,
        description: `Попередня редакція публічного договору ТОВ «БАТИЇВКА» (наказ №${edition.orderNumber})${period ? `, діяла ${period}` : ''}.`,
    };
}

export default function ContractEditionPage({ params }: Props) {
    const edition = getEditionBySlug(params.slug);
    if (!edition || edition.slug === getCurrentEdition().slug) notFound();

    return <ContractDocument edition={edition} />;
}
