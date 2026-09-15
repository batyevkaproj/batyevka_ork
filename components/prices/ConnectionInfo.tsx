// Блоки для сторінки /prices: що входить у стандартне підключення
// та адреси з окремою вартістю підключення й абонплатою (узгоджено 15.09.2026).

/** Адреси з підвищеною вартістю підключення */
const SPECIAL_ADDRESSES: { addresses: string; setupPrice: number }[] = [
    { addresses: 'Лобановського, 9/1', setupPrice: 799 },
    { addresses: 'Докучаївська, 16; Проценко; Роздільна; Городня, 13', setupPrice: 1500 },
];

/** Абонплата за цими адресами */
const SPECIAL_MONTHLY: { speed: string; price: number }[] = [
    { speed: '300 Мбіт/с', price: 399 },
    { speed: '1 Гбіт/с', price: 499 },
];

const ConnectionInfo = () => (
    <div className="max-w-[1100px] mx-auto px-5 md:px-8 mt-16 md:mt-24 text-[#5F6061] grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

        <section className="rounded-[24px] border border-gray-100 bg-white shadow-[0_4px_29px_0px_#E6E3E3] p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">Що таке стандартне підключення</h2>
            <div className="space-y-3 text-[15px] md:text-base leading-relaxed">
                <p>
                    Стандартне підключення — заведення оптики в приміщення і встановлення провайдерської оптичної розетки в межах ±2 м від точки вводу; розетка — межа відповідальності Batyevka.NET.
                </p>
                <p>
                    Хочете оптику до роутера вглиб квартири — оптична переноска з прокладкою (патч-корд потрібної довжини з розеткою APC) — <strong className="text-[#DC662D]">1200 грн</strong>; комплект для самостійного прокладання — <strong className="text-[#DC662D]">800 грн</strong>.
                </p>
                <p>
                    Немає розетки 220 В біля оптичної розетки — комплект PoE-інжекторів для живлення ONU по витій парі — <strong className="text-[#DC662D]">750 грн</strong> (потрібен UTP від ONU до роутера).
                </p>
            </div>
        </section>

        <section className="rounded-[24px] border border-gray-100 bg-white shadow-[0_4px_29px_0px_#E6E3E3] p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">Адреси з окремими умовами</h2>
            <p className="text-[15px] md:text-base leading-relaxed mb-4">
                За цими адресами вартість підключення й абонплата відрізняються від стандартних, які показує калькулятор.
            </p>

            <table className="w-full text-[15px] md:text-base">
                <thead>
                    <tr className="text-left text-sm text-gray-400 border-b border-gray-100">
                        <th className="font-medium pb-2 pr-4">Адреса</th>
                        <th className="font-medium pb-2 text-right whitespace-nowrap">Підключення</th>
                    </tr>
                </thead>
                <tbody>
                    {SPECIAL_ADDRESSES.map((row) => (
                        <tr key={row.addresses} className="border-b border-gray-100 last:border-0">
                            <td className="py-3 pr-4 leading-snug">{row.addresses}</td>
                            <td className="py-3 text-right font-bold text-[#DC662D] whitespace-nowrap">{row.setupPrice} грн</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-5 rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
                <p className="text-sm text-gray-400 mb-1">Абонплата за цими адресами</p>
                <ul className="space-y-1">
                    {SPECIAL_MONTHLY.map((row) => (
                        <li key={row.speed} className="flex justify-between gap-4">
                            <span>{row.speed}</span>
                            <span className="font-bold">{row.price} грн/міс</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </div>
);

export default ConnectionInfo;
