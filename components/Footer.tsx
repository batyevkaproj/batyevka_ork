import Link from 'next/link';
import Image from 'next/image';
import type { ThemeProps } from '@/types/Theme';

import orange_mini_phone from '../public/img/orange_mini_phone.svg';
import orange_mini_place_marker from '../public/img/orange_mini_place_marker.svg';
import orange_mini_tg_logo from '../public/img/orange_mini_tg_logo.svg';
import orange_mini_mail from '../public/img/orange_mini_mail.svg';

const Footer = ({ theme }: ThemeProps) => {
  const isDark = theme === 'dark' || theme !== 'white';

  // Для страниц с белой темой (promotions, main, etc.) — светлый футер
  const isLight = theme === 'white';

  const bg = isLight ? 'bg-[#F4F2F2] border-t border-[#E6E3E3]' : 'bg-[#0E2D43]';
  const headingColor = isLight ? 'text-[#0E2D43]' : 'text-white';
  const linkColor = isLight ? 'text-[#5F6061] hover:text-[#DC662D]' : 'text-white/70 hover:text-[#DC662D]';
  const subTextColor = isLight ? 'text-[#BDBDBD]' : 'text-white/40';
  const dividerColor = isLight ? 'border-[#E6E3E3]' : 'border-white/10';

  return (
    <footer className={`${bg} font-normal`} style={{ fontFamily: "'Inter', 'Montserrat', sans-serif" }}>

      {/* ── ОСНОВНА СІТКА ── */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Колонка 1: Про компанію */}
          <div>
            <h3 className={`${headingColor} font-extrabold uppercase tracking-wider text-sm mb-6`}>
              Batyevka.NET
            </h3>
            <ul className="space-y-3">
              <li className={`${linkColor} text-sm transition-colors`}>
                Надійний провайдер Солом&apos;янського<br />та Святошинського районів Києва
              </li>
              <li className={`${linkColor} text-sm transition-colors`}>
                🛡 У мережі з <strong>2004</strong> року
              </li>
            </ul>

            {/* Адреса */}
            <div className={`mt-6 flex items-start gap-2 text-sm ${linkColor} transition-colors`}>
              <Image src={orange_mini_place_marker} alt="" className="w-3 h-4 mt-[2px] shrink-0" />
              <span>03110, м. Київ, а/с 26</span>
            </div>
          </div>

          {/* Колонка 2: Тарифи та Інформація */}
          <div>
            <h3 className={`${headingColor} font-extrabold uppercase tracking-wider text-sm mb-6`}>
              Інформація абонентам
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://old.batyevka.net/uk/blog-dogovor"
                  className={`${linkColor} text-sm transition-colors block`}
                >
                  Публічний договір
                </Link>
              </li>
              <li>
                <Link href="/coverage-map" className={`${linkColor} text-sm transition-colors block`}>
                  Мапа покриття
                </Link>
              </li>
              <li>
                <Link
                  href="https://abills.batyevka.net:9443"
                  className={`${linkColor} text-sm transition-colors block`}
                >
                  Особистий кабінет
                </Link>
              </li>
              <li>
                <a
                  href="/Протокол_вимірювання_якості_БАТИЇВКА.pdf"
                  download
                  className={`${linkColor} text-sm transition-colors block`}
                >
                  Протокол вимірювання якості (PDF)
                </a>
              </li>
            </ul>

            <h3 className={`${headingColor} font-extrabold uppercase tracking-wider text-sm mt-8 mb-4`}>
              Тарифи
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/business" className={`${linkColor} text-sm transition-colors block`}>
                  Для бізнесу
                </Link>
              </li>
              <li>
                <Link href="/" className={`${linkColor} text-sm transition-colors block`}>
                  Для багатоповерхівок
                </Link>
              </li>
              <li>
                <Link href="/private-sector" className={`${linkColor} text-sm transition-colors block`}>
                  Для приватних будинків
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Технічна підтримка */}
          <div>
            <h3 className={`${headingColor} font-extrabold uppercase tracking-wider text-sm mb-6`}>
              Технічна підтримка
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:0444955549" className={`${linkColor} text-sm transition-colors flex items-center gap-2`}>
                  <Image src={orange_mini_phone} alt="" className="w-4 h-4 shrink-0" />
                  044 49 555 49
                </a>
              </li>
              <li>
                <a href="mailto:support@batyevka.net" className={`${linkColor} text-sm transition-colors flex items-center gap-2`}>
                  <Image src={orange_mini_mail} alt="" className="w-4 h-3 shrink-0" />
                  support@batyevka.net
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/BatyevkaChatbot?start=z5iwjJZeJOOJJEbp1P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkColor} text-sm transition-colors flex items-center gap-2`}
                >
                  <Image src={orange_mini_tg_logo} alt="" className="w-4 h-4 shrink-0" />
                  Telegram-бот (Підтримка)
                </a>
              </li>
            </ul>

            <h3 className={`${headingColor} font-extrabold uppercase tracking-wider text-sm mt-8 mb-4`}>
              Контакти
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:08003032300" className={`${linkColor} text-sm transition-colors flex items-center gap-2`}>
                  <Image src={orange_mini_phone} alt="" className="w-4 h-4 shrink-0" />
                  0 800 30 32 30
                </a>
              </li>
              <li>
                <a href="mailto:dogovor@batyevka.net" className={`${linkColor} text-sm transition-colors flex items-center gap-2`}>
                  <Image src={orange_mini_mail} alt="" className="w-4 h-3 shrink-0" />
                  dogovor@batyevka.net
                </a>
              </li>
            </ul>
          </div>

          {/* Колонка 4: Telegram */}
          <div>
            <h3 className={`${headingColor} font-extrabold uppercase tracking-wider text-sm mb-6`}>
              Соціальні мережі
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://t.me/batyevka_chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkColor} text-sm transition-colors flex items-center gap-3 group`}
                >
                  <span className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-colors ${isLight ? 'bg-[#E6E3E3] group-hover:bg-[#DC662D]/10' : 'bg-white/10 group-hover:bg-white/20'}`}>
                    <Image src={orange_mini_tg_logo} alt="" className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block font-semibold">Telegram-канал</span>
                    <span className={`text-xs ${subTextColor}`}>Новини та акції</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/BatyevkaChatbot?start=z5iwjJZeJOOJJEbp1P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkColor} text-sm transition-colors flex items-center gap-3 group`}
                >
                  <span className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-colors ${isLight ? 'bg-[#E6E3E3] group-hover:bg-[#DC662D]/10' : 'bg-white/10 group-hover:bg-white/20'}`}>
                    <Image src={orange_mini_tg_logo} alt="" className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block font-semibold">Telegram-бот</span>
                    <span className={`text-xs ${subTextColor}`}>Підтримка 24/7</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── НИЖНІЙ РЯД: Копирайт ── */}
      <div className={`border-t ${dividerColor}`}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Десктоп: pl-20 захищає від Binotel-віджету */}
          <span className={`text-sm ${subTextColor} pl-20`}>
            © Batyevka 2007-2026
          </span>
          <span className={`text-xs ${subTextColor} text-center sm:text-right`}>
            Усі права захищені. Передплата послуг регулюється{' '}
            <a
              href="https://old.batyevka.net/uk/blog-dogovor"
              className={`underline ${linkColor}`}
            >
              Публічним договором
            </a>
            .
          </span>
        </div>
        {/* Мобільний блок: pb-20 захищає від Binotel-віджету */}
        <div className={`sm:hidden pb-20 text-center text-xs ${subTextColor} px-6`}>
          &nbsp;
        </div>
      </div>

    </footer>
  );
};

export default Footer;
