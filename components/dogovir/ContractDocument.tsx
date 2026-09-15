import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
    CONTRACT_EDITIONS,
    CONTRACT_PATH,
    formatDate,
    formatPeriod,
    getCurrentEdition,
    type ContractEdition,
} from '@/constants/dogovir';

const editionHref = (edition: ContractEdition, current: ContractEdition) =>
    edition.slug === current.slug ? CONTRACT_PATH : `${CONTRACT_PATH}/${edition.slug}`;

const ContractDocument = ({ edition }: { edition: ContractEdition }) => {
    const current = getCurrentEdition();
    const isCurrent = edition.slug === current.slug;
    const period = formatPeriod(edition);

    return (
        <div className="min-w-[350px] bg-white">
            <Header theme="white" business={false} />

            <main className="max-w-[900px] mx-auto px-4 md:px-8 py-10 md:py-16 text-[#5F6061]">

                {/* Архівна редакція — одразу кажемо, що вона вже не діє */}
                {!isCurrent && (
                    <div className="mb-8 rounded-xl border border-[#DC662D]/30 bg-orange-50 px-5 py-4 text-sm leading-relaxed">
                        <p className="font-bold text-[#DC662D]">Це попередня редакція договору</p>
                        {period && <p>Період дії: {period}.</p>}
                        <p>
                            Чинна редакція:{' '}
                            <Link href={CONTRACT_PATH} className="font-semibold text-[#DC662D] underline underline-offset-2">
                                наказ від {formatDate(current.orderDate)} №{current.orderNumber}
                            </Link>
                        </p>
                    </div>
                )}

                <p className="text-right text-xs md:text-sm font-semibold leading-relaxed">
                    ЗАТВЕРДЖЕНО<br />
                    НАКАЗОМ ТОВ «БАТИЇВКА»<br />
                    ВІД {formatDate(edition.orderDate)} №{edition.orderNumber}
                </p>

                <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-center">ПУБЛІЧНИЙ ДОГОВІР</h1>
                <p className="mt-2 text-center text-base md:text-lg font-semibold">
                    про надання електронних комунікаційних послуг на умовах публічної оферти
                </p>

                <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <div className="rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
                        <dt className="text-gray-400">Дата наказу</dt>
                        <dd className="font-bold">{formatDate(edition.orderDate)} №{edition.orderNumber}</dd>
                    </div>
                    {edition.effectiveFrom && (
                        <div className="rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
                            <dt className="text-gray-400">Дата набрання чинності</dt>
                            <dd className="font-bold">{formatDate(edition.effectiveFrom)}</dd>
                        </div>
                    )}
                    <div className="rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
                        <dt className="text-gray-400">Статус</dt>
                        <dd className={`font-bold ${isCurrent ? 'text-[#51B18B]' : 'text-[#DC662D]'}`}>
                            {isCurrent ? 'Чинна редакція' : `Попередня редакція${period ? ` (${period})` : ''}`}
                        </dd>
                    </div>
                </dl>

                {/* Текст договору — статичний, з нашого ж репозиторію */}
                <article className="dogovir-body mt-10" dangerouslySetInnerHTML={{ __html: edition.html }} />

                <nav aria-label="Редакції договору" className="mt-14 border-t border-gray-100 pt-8">
                    <h2 className="text-xl font-extrabold mb-4">Редакції договору</h2>
                    <ul className="space-y-3 text-sm">
                        {CONTRACT_EDITIONS.map((e) => {
                            const isThis = e.slug === edition.slug;
                            const ePeriod = formatPeriod(e);
                            const label = `Редакція від ${formatDate(e.orderDate)} (наказ №${e.orderNumber})`;
                            return (
                                <li key={e.slug} className="flex flex-wrap items-baseline gap-x-2">
                                    {isThis
                                        ? <span className="font-bold">{label}</span>
                                        : <Link href={editionHref(e, current)} className="font-semibold text-[#DC662D] underline underline-offset-2">{label}</Link>}
                                    <span className="text-gray-400">
                                        {e.slug === current.slug ? '— чинна' : `— діяла ${ePeriod}`.trim()}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </main>

            <Footer theme="white" />
        </div>
    );
};

export default ContractDocument;
