'use client';

import React, { useEffect, useState } from "react";
import Head from 'next/head';
import { useModal } from "@/hooks/use-modal-store";

// A reusable Button component, improved for accessibility
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
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2.5 whitespace-nowrap py-[14px] px-[18px] rounded-[14px] font-bold min-h-[48px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2 transition-transform duration-150 ease-in-out hover:scale-[1.02] active:scale-[0.98] motion-reduce:transition-none";
  
  const variantClasses = {
    primary: "bg-[#DC662D] text-[#ffffff] shadow-[0_6px_24px_rgba(2,6,23,.08)] hover:brightness-105 contrast-more:shadow-none",
    ghost: "border border-[#e2e8f0] bg-white hover:bg-slate-50",
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

      <div className="bg-white text-[#0f172a] antialiased mt-5">
        <main id="top" className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* HERO */}
          <section className="text-center md:text-left py-12 md:py-20" aria-labelledby="h1">
            <div className="inline-flex gap-2 items-center px-3 py-2 border border-[#e2e8f0] rounded-full font-semibold text-[#0b7a2a] bg-[#f0fdf4] mb-4">
              <span>⚡</span><span>Швидкість до 10 Гбіт/с</span>
            </div>
            <h1 id="h1" className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tighter mb-4">
              Інтернет до 10 Гбіт/с — найшвидше підключення в Україні
            </h1>
            <p className="text-[#475569] text-base md:text-lg max-w-3xl mx-auto md:mx-0 mb-6">
              Batyevka.NET забезпечує стабільний та безперебійний інтернет і сучасне цифрове телебачення у Солом’янському районі Києва. Ми використовуємо технології <strong>G‑PON</strong> та <strong>XGS‑PON</strong>, щоб ви залишались онлайн навіть під час енергетичних викликів.
            </p>
            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
              <Button onClick={() => onOpen("call")} ariaLabel="Підключити 10 гігабіт за 1 клік">Підключити 10 Гбіт/с</Button>
              <Button onClick={() => scrollToId('benefits')} variant="ghost">Що входить у сервіс</Button>
            </div>
            <div className="flex gap-x-4 gap-y-2 text-[#475569] mt-4 flex-wrap justify-center md:justify-start text-sm" aria-label="Короткі факти">
              <div>Стабільність 24/7</div>
              <div>170+ ТВ‑каналів</div>
              <div>Локальна підтримка</div>
            </div>
          </section>

          {/* BENEFITS */}
          <section id="benefits" className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12 md:my-16" aria-labelledby="btitle">
            <h2 id="btitle" className="sr-only">Наші переваги</h2>
            {[
              { title: "Швидкість майбутнього", desc: "До <strong>10 Гбіт/с</strong> для роботи, ігор та 4K/8K‑стрімінгу без затримок." },
              { title: "Надійність", desc: "Резерв живлення та оптична мережа <strong>G‑PON / XGS‑PON</strong> — онлайн навіть під час відключень." },
              { title: "Повний комплект", desc: "Роутери, IPTV‑приставки, налаштування, зовнішня IP, страхування кабелю, push‑нагадування." },
            ].map(item => (
              <article key={item.title} className="border border-[#e2e8f0] rounded-[16px] p-5 bg-white text-center md:text-left">
                <i className="inline-block w-8 h-8 rounded-lg bg-indigo-100 mb-3" aria-hidden="true"></i>
                <h3 className="text-lg font-semibold mb-1.5">{item.title}</h3>
                <p className="text-[#475569] text-sm" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              </article>
            ))}
          </section>

          {/* SERVICE / EQUIPMENT */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center my-12 md:my-16" aria-labelledby="serv">
            <div className="order-last lg:order-first">
              <h2 id="serv" className="text-2xl md:text-3xl font-bold mb-3">Все для комфортного інтернету у вас вдома</h2>
              <p className="text-[#475569] mb-4">Ми не просто підключаємо інтернет — даємо готові рішення «під ключ». Професійна установка, налаштування Wi‑Fi, IPTV і супровід. Обладнання — лише перевірені моделі.</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Wi‑Fi‑роутери</strong> з гігабітними портами</li>
                <li><strong>IPTV‑приставки</strong> і 170+ каналів</li>
                <li><strong>Зовнішня IP</strong>, <strong>страхування кабелю</strong>, <strong>push‑повідомлення</strong></li>
              </ul>
              <Button onClick={() => scrollToId('faq')} variant="ghost">Питання та відповіді</Button>
            </div>
            <div className="border border-dashed border-[#e2e8f0] rounded-[16px] min-h-[250px] bg-slate-50" aria-hidden="true"></div>
          </section>

          {/* PLANS */}
          <section aria-labelledby="plans-title" className="my-12 md:my-16">
            <h2 id="plans-title" className="text-2xl md:text-3xl font-bold mb-6 text-center">Тарифи та підключення</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Оптика G‑PON", tag: "популярно", speed: "до 1 Гбіт/с", desc: "Стабільний інтернет + ТВ. Ідеально для сім’ї.", cta: "Підключити" },
                { title: "XGS‑PON", speed: "до 10 Гбіт/с", desc: "Максимум швидкості для бізнесу, геймінгу та 8K‑контенту.", cta: "Підключити" },
                { title: "IPTV", speed: "170+ каналів", desc: "HD/4K‑канали, архів передач, зручна приставка.", cta: "Замовити" },
              ].map(plan => (
                <div key={plan.title} className="border-[1.5px] border-[#e2e8f0] rounded-[18px] p-5 flex flex-col text-center">
                  <h4 className="font-bold text-lg">{plan.title} {plan.tag && <span className="inline-block py-1 px-2.5 rounded-full bg-[#eff6ff] text-[#1d4ed8] font-bold text-xs ml-2 align-middle">{plan.tag}</span>}</h4>
                  <div className="text-4xl font-extrabold my-2">{plan.speed}</div>
                  <p className="text-[#475569] flex-grow mb-5">{plan.desc}</p>
                  <div className="mt-auto"><Button onClick={() => onOpen("call")}>{plan.cta}</Button></div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}