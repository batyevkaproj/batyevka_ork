'use client';

import React, { useEffect, useState } from "react";
import Head from 'next/head';
import Image from 'next/image';
import { useModal } from "@/hooks/use-modal-store";
import { Montserrat } from "next/font/google";

// Import and set up the Montserrat font
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ['400', '700', '800', '900'],
});

// A reusable component for the accent underline style
const AccentUnderline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative inline-block ${className}`}>
    {children}
    <div className="absolute left-0 bottom-[-6px] w-[88px] h-[4px] rounded-[4px] bg-[#DC662D]"></div>
  </div>
);

// Updated Button component with new variants
const Button = ({
  href,
  onClick,
  variant = 'primary',
  children,
  className = '',
  ariaLabel,
}: {
  href?: string;
  onClick?: (event: React.MouseEvent) => void;
  variant?: 'primary' | 'ghost' | 'accent' | 'accent-outline';
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2.5 whitespace-nowrap py-[14px] px-[18px] rounded-[14px] font-extrabold min-h-[48px] cursor-pointer transition-transform duration-150 ease-in-out hover:scale-[1.03] active:scale-[0.97] motion-reduce:transition-none";
  
  const variantClasses = {
    primary: "bg-[#51B18B] text-white shadow-[0_6px_24px_rgba(2,6,23,.08)] hover:brightness-95",
    ghost: "border border-[#BDBDBD] bg-white text-[#5F6061] hover:bg-slate-50",
    accent: "bg-[#DC662D] text-white",
    'accent-outline': "bg-transparent border-2 border-[#DC662D] text-[#DC662D] hover:bg-[#DC662D]/10",
  };

  const commonProps = {
    className: `${baseClasses} ${variantClasses[variant]} ${className}`,
    "aria-label": ariaLabel,
  };

  if (href && !onClick) {
    return <a href={href} {...commonProps}>{children}</a>;
  }

  return <button onClick={onClick} {...commonProps}>{children}</button>;
};

export default function BatyevkaPage() {
  const { onOpen } = useModal();
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); }
  };

  return (
    <>
      <Head>
        <title>Batyevka.NET — Інтернет до 10 Гбіт/с у Солом’янському районі Києва</title>
        <meta name="description" content="Batyevka.NET: інтернет до 10 Гбіт/с на технологіях G‑PON та XGS‑PON у Солом’янському районі Києва." />
        <meta name="theme-color" content="#DC662D" />
      </Head>

      <div className={`${montserrat.className} bg-[#F4F2F2] text-[#5F6061]`}>
        <header className="sticky top-0 z-30 bg-white/95 backdrop-saturate-110 backdrop-blur-lg border-b border-[#BDBDBD]">
          <div className="w-full max-w-none xl:max-w-[1200px] 2xl:max-w-[1320px] 3xl:max-w-[1440px] mx-auto px-[clamp(14px,3.2vw,28px)]">
            <nav className="flex items-center justify-between h-16" role="navigation">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[9px] bg-[#DC662D]" aria-hidden="true"></div>
                <div className="font-black tracking-[.2px] text-lg">Batyevka.NET</div>
              </div>
              <div className="hidden sm:flex items-center gap-2.5">
                <Button onClick={() => scrollToId('benefits')} variant="accent-outline" className="py-2.5 px-4 text-sm md:text-base">Переваги</Button>
                <Button onClick={() => onOpen("call")} variant="accent" className="py-2.5 px-4 text-sm md:text-base">Підключити 10 Гбіт/с</Button>
              </div>
            </nav>
          </div>
        </header>

        <main id="top" className="w-full max-w-none xl:max-w-[1200px] 2xl:max-w-[1320px] 3xl:max-w-[1440px] mx-auto px-[clamp(14px,3.2vw,28px)]">
          {/* HERO */}
          <section className="py-12 md:py-20" aria-labelledby="h1">
            <div className="inline-flex gap-2 items-center px-4 py-2 rounded-full font-extrabold text-white bg-gradient-to-br from-[#DC662D] to-[#5984B2] mb-4">
              <span>10G</span><span>оптика XGS‑PON</span>
            </div>
            <h1 id="h1" className="text-[clamp(28px,4.5vw,64px)] font-black leading-tight tracking-tighter mb-8">
              <AccentUnderline>Інтернет до 10 Гбіт/с — найшвидше підключення в Україні</AccentUnderline>
            </h1>
            <p className="text-[clamp(15px,2.2vw,20px)] max-w-4xl mb-5 opacity-90">
              Batyevka.NET забезпечує стабільний та безперебійний інтернет і сучасне цифрове телебачення у Солом’янському районі Києва. Технології <strong>G‑PON</strong> та <strong>XGS‑PON</strong> тримають вас онлайн навіть під час енергетичних викликів.
            </p>
            <div className="my-5 h-[3px] w-[140px] rounded-[3px] bg-gradient-to-r from-[#DC662D] to-transparent"></div>
            <div className="flex gap-3 flex-wrap">
              <Button onClick={() => onOpen("call")} variant="accent" ariaLabel="Підключити 10 гігабіт за 1 клік">Підключити 10 Гбіт/с — дізнатись більше</Button>
              <Button onClick={() => scrollToId('benefits')} variant="ghost">Що входить у сервіс</Button>
            </div>
            <div className="flex gap-x-4 gap-y-2 text-sm mt-4 flex-wrap opacity-75">
              <div>Стабільність 24/7</div>
              <div>170+ ТВ‑каналів</div>
              <div>Локальна підтримка</div>
            </div>
          </section>

          {/* BENEFITS */}
          <section id="benefits" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 my-16" aria-labelledby="btitle">
            <h2 id="btitle" className="sr-only">Наші переваги</h2>
            {[
              { icon: "speed", alt: "Швидкість", title: "Швидкість майбутнього", desc: "До <strong>10 Гбіт/с</strong> для роботи, ігор та 4K/8K‑стрімінгу без затримок." },
              { icon: "uptime", alt: "Надійність", title: "Надійність", desc: "Резерв живлення та оптична мережа <strong>G‑PON / XGS‑PON</strong> — онлайн навіть під час відключень." },
              { icon: "kit", alt: "Комплект", title: "Повний комплект", desc: "Роутери, IPTV‑приставки, налаштування, зовнішня IP, страхування кабелю, push‑нагадування." },
            ].map(item => (
              <article key={item.title} className="border border-[#BDBDBD] rounded-[16px] p-5 bg-white">
                <div className="w-[30px] h-[30px] mb-3">
                  <Image src={`https://business.batyevka.net/assets/icons/desktop/${item.icon}.svg`} alt={item.alt} width={30} height={30} unoptimized/>
                </div>
                <h3 className="text-[clamp(18px,2.8vw,28px)] font-black mb-1.5">{item.title}</h3>
                <p className="opacity-95 text-[clamp(15px,1.9vw,17px)]" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              </article>
            ))}
          </section>

          {/* SERVICE / EQUIPMENT - RESTORED */}
          <section className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-12 items-center my-16" aria-labelledby="serv">
            <div className="border-2 border-dashed border-[#DC662D] rounded-[16px] min-h-[220px] bg-white" aria-hidden="true"></div>
            <div>
              <h2 id="serv" className="text-[clamp(22px,3.6vw,44px)] font-black mb-4">Все для комфортного інтернету у вас вдома</h2>
              <p className="mb-4">Ми не просто підключаємо інтернет — даємо готові рішення «під ключ». Професійна установка, налаштування Wi‑Fi, IPTV і супровід. Обладнання — лише перевірені моделі.</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Wi‑Fi‑роутери</strong> з гігабітними портами</li>
                <li><strong>IPTV‑приставки</strong> і 170+ каналів</li>
                <li><strong>Зовнішня IP</strong>, <strong>страхування кабелю</strong>, <strong>push‑повідомлення</strong></li>
              </ul>
              <Button onClick={() => scrollToId('faq')} variant="ghost">Питання та відповіді</Button>
            </div>
          </section>

          {/* PLANS - RESTORED & STYLED */}
          <section aria-labelledby="plans-title" className="my-16">
            <h2 id="plans-title" className="text-[clamp(22px,3.6vw,44px)] font-black mb-8">
              <AccentUnderline>Тарифи та підключення</AccentUnderline>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Оптика G‑PON", tag: "популярно", speed: "до 1 Гбіт/с", desc: "Стабільний інтернет + ТВ. Ідеально для сім’ї.", cta: "Підключити" },
                { title: "XGS‑PON", speed: "до 10 Гбіт/с", desc: "Максимум швидкості для бізнесу, геймінгу та 8K‑контенту.", cta: "Підключити" },
                { title: "IPTV", speed: "170+ каналів", desc: "HD/4K‑канали, архів передач, зручна приставка.", cta: "Замовити" },
              ].map(plan => (
                <div key={plan.title} className="border-2 border-[#BDBDBD] rounded-[18px] p-5 flex flex-col bg-white">
                  <h4 className="font-bold text-lg">{plan.title} {plan.tag && <span className="inline-block py-1.5 px-3 rounded-full bg-[#DC662D] text-white font-extrabold text-xs ml-2 align-middle">{plan.tag}</span>}</h4>
                  <div className="text-[28px] font-black text-[#5984B2] my-2">{plan.speed}</div>
                  <p className="opacity-75 flex-grow mb-5">{plan.desc}</p>
                  <div className="mt-auto"><Button onClick={() => onOpen("call")} variant="accent">{plan.cta}</Button></div>
                </div>
              ))}
            </div>
          </section>

          {/* HOW TO CONNECT - RESTORED */}
          <section id="connect" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center my-16" aria-labelledby="steps">
            <div className="order-last lg:order-first">
              <h2 id="steps" className="text-[clamp(22px,3.6vw,44px)] font-black mb-4">Як підключитись у 1 клік</h2>
              <ol className="list-decimal list-inside space-y-2 mb-6">
                <li>Залиште адресу та контакт у формі (кнопка нижче).</li>
                <li>Майстер узгодить час, перевірить оптичну трасу.</li>
                <li>Монтаж, налаштування Wi‑Fi та ТВ — ви онлайн.</li>
              </ol>
              <div className="flex gap-3 flex-wrap">
                <Button onClick={() => onOpen("call")} variant="accent">Підключити 10 Гбіт/с</Button>
                <Button onClick={() => onOpen("call")} variant="ghost">Перевірити покриття</Button>
              </div>
            </div>
            <div className="border-2 border-dashed border-[#DC662D] rounded-[16px] min-h-[220px] bg-white" aria-hidden="true"></div>
          </section>

          {/* FAQ - RESTORED */}
          <section id="faq" aria-labelledby="faqh" className="my-16 max-w-4xl mx-auto">
            <h2 id="faqh" className="text-[clamp(22px,3.6vw,44px)] font-black mb-8">
              <AccentUnderline>Часті запитання</AccentUnderline>
            </h2>
            <div className="space-y-2.5">
              <details className="border border-[#BDBDBD] rounded-xl p-4 bg-white group cursor-pointer">
                <summary className="font-extrabold list-none flex justify-between items-center">
                  Чи дійсні 10 Гбіт/с у квартирі?
                  <span className="text-[#DC662D] text-2xl transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 pt-2 border-t border-[#BDBDBD]/50">Так, на мережі XGS‑PON. Для такої швидкості потрібні сумісний роутер і кінцеве обладнання з 10G‑портами.</p>
              </details>
              <details className="border border-[#BDBDBD] rounded-xl p-4 bg-white group cursor-pointer">
                <summary className="font-extrabold list-none flex justify-between items-center">
                  Як ви забезпечуєте стабільність під час відключень?
                  <span className="text-[#DC662D] text-2xl transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 pt-2 border-t border-[#BDBDBD]/50">Резерв живлення на вузлах та оптична інфраструктура. Мережа спроєктована для безперебійної роботи.</p>
              </details>
              <details className="border border-[#BDBDBD] rounded-xl p-4 bg-white group cursor-pointer">
                <summary className="font-extrabold list-none flex justify-between items-center">
                  Чи можна замовити зовнішню IP?
                  <span className="text-[#DC662D] text-2xl transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 pt-2 border-t border-[#BDBDBD]/50">Так, опція доступна під час підключення або у підтримці.</p>
              </details>
            </div>
          </section>

          {/* SEO FOOTER TEXT - RESTORED */}
          <section className="my-16 opacity-95" aria-labelledby="seoh">
            <h3 id="seoh" className="text-[clamp(18px,2.8vw,28px)] font-black mb-8">
              <AccentUnderline>Batyevka.NET — інтернет до 10 Гбіт/с у Солом’янському районі Києва</AccentUnderline>
            </h3>
            <p className="text-[clamp(15px,1.9vw,17px)]">Надаємо високошвидкісний інтернет і цифрове телебачення на технологіях <strong>G‑PON</strong> та <strong>XGS‑PON</strong>. Стабільність, надійність і швидкість до <strong>10 Гбіт/с</strong> — для роботи, розваг і безперервного зв’язку у вашій оселі. Локальна підтримка та повний комплект обладнання.</p>
          </section>
        </main>

        <footer className="border-t-2 border-[#DC662D] mt-8 py-5 opacity-90 text-sm">
          <div className="w-full max-w-none xl:max-w-[1200px] 2xl:max-w-[1320px] 3xl:max-w-[1440px] mx-auto px-[clamp(14px,3.2vw,28px)]">
            <strong>Batyevka.NET</strong> — локальний провайдер Солом’янського району. Працюємо для сусідів.
            <div className="flex gap-2.5 flex-wrap mt-2">
              <Button onClick={() => onOpen("call")} variant="accent">Підключити 10 Гбіт/с</Button>
              <Button onClick={() => onOpen("call")} variant="ghost">Перевірити покриття</Button>
            </div>
            <div className="mt-2">© {year} Batyevka.NET</div>
          </div>
        </footer>
      </div>
    </>
  );
}