"use client";

import React, { useRef, useState } from 'react';
import { Info } from 'lucide-react';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { PROMO_CONDITION, PROMO_OFFERS, type PromoOffer } from '@/constants/promotions';

// Підказка (i): наведення на десктопі, тап на мобільному; Escape і клік поза — закриває
const PromoHint = ({ id, text }: { id: string; text: string }) => {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const hintId = `promo-hint-${id}`;

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    ref={triggerRef}
                    type="button"
                    aria-label="Детальніше про акційну ціну"
                    aria-describedby={open ? hintId : undefined}
                    // клік по іконці не має спрацьовувати як клік по картці
                    onClick={(e) => e.stopPropagation()}
                    onPointerEnter={(e) => { if (e.pointerType === 'mouse') setOpen(true); }}
                    onPointerLeave={(e) => { if (e.pointerType === 'mouse') setOpen(false); }}
                    // без рамки й тіні у focus/active — лишається тільки зміна кольору
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                    className="shrink-0 appearance-none bg-transparent border-0 p-0 leading-none cursor-pointer text-gray-400 hover:text-[#5F6061] transition-colors shadow-none outline-none ring-0 focus:outline-none focus:ring-0 focus:shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none active:shadow-none"
                >
                    <Info className="w-4 h-4" aria-hidden="true" />
                </button>
            </PopoverTrigger>
            <PopoverContent
                id={hintId}
                role="tooltip"
                side="top"
                align="start"
                sideOffset={8}
                collisionPadding={12}
                onOpenAutoFocus={(e) => e.preventDefault()}
                // не повертаємо фокус на іконку після закриття — щоб не лишався focus-стан
                onCloseAutoFocus={(e) => { e.preventDefault(); triggerRef.current?.blur(); }}
                onClick={(e) => e.stopPropagation()}
                className="w-[280px] max-w-[calc(100vw-24px)] p-3 bg-white border-gray-200 text-xs leading-relaxed text-[#5F6061] font-normal"
            >
                {text}
            </PopoverContent>
        </Popover>
    );
};

type PromoCardsProps = {
    /** Заголовок секції; передайте null, щоб не показувати */
    title?: string | null;
    onConnect: (offer: PromoOffer) => void;
};

const PromoCards = ({ title = 'Акційні тарифи', onConnect }: PromoCardsProps) => (
    <div>
        {title && (
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-[#5F6061]">{title}</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto text-left">
            {PROMO_OFFERS.map((offer) => (
                <article
                    key={offer.id}
                    className="bg-white rounded-[32px] border border-gray-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col overflow-hidden"
                >
                    <div className="p-7 md:p-8 flex-grow">
                        <span className="inline-block bg-[#51B18B]/10 text-[#51B18B] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg mb-2">
                            {offer.badge}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#5F6061] leading-none">{offer.speed}</h3>

                        <div className="flex items-baseline gap-2 flex-wrap">
                            <p className="text-4xl font-extrabold text-[#DC662D]">
                                {offer.price}<span className="text-lg font-bold text-[#5F6061]"> грн/міс</span>
                            </p>
                            <span className="text-base text-gray-400 line-through">{offer.regularPrice} грн/міс</span>
                        </div>

                        <p className="text-sm font-semibold text-[#5F6061] mt-2 flex items-center gap-1.5">
                            {offer.term}
                            {offer.hint && <PromoHint id={offer.id} text={offer.hint} />}
                        </p>

                        <p className="mt-5 rounded-xl bg-gray-50 border border-gray-100 px-4 py-3 text-xs leading-relaxed text-gray-500">
                            {PROMO_CONDITION}
                        </p>
                    </div>

                    <div className="px-7 md:px-8 pb-7 md:pb-8">
                        <button
                            type="button"
                            onClick={() => onConnect(offer)}
                            className="w-full bg-[#DC662D] hover:bg-[#c45a27] text-white font-bold text-base py-3 px-4 rounded-xl transition-colors shadow-sm"
                        >
                            Підключити
                        </button>
                    </div>
                </article>
            ))}
        </div>
    </div>
);

export default PromoCards;
