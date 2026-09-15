import type { Metadata } from 'next';

import ContractDocument from '@/components/dogovir/ContractDocument';
import { CONTRACT_PATH, formatDate, getCurrentEdition } from '@/constants/dogovir';

const edition = getCurrentEdition();

export const metadata: Metadata = {
    title: 'Публічний договір — Batyevka.NET',
    description: `Публічний договір про надання електронних комунікаційних послуг ТОВ «БАТИЇВКА». Чинна редакція, затверджена наказом від ${formatDate(edition.orderDate)} №${edition.orderNumber}.`,
    alternates: { canonical: CONTRACT_PATH },
};

export default function PublicContractPage() {
    return <ContractDocument edition={edition} />;
}
