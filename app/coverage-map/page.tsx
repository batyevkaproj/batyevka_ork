"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback, Component, type ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useModal } from '@/hooks/use-modal-store';
import { coverageAddresses, type CoverageAddress, type TechType } from '@/app/data/coverageAddresses';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

// ─── Error boundary — catches Leaflet hydration crashes ─────────────────────────
class MapErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean}> {
  constructor(props: {children: ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err: Error) { console.warn('[MapErrorBoundary] caught:', err.message); }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ width: '100%', height: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f9f9f9', borderRadius: 24, gap: 12 }}>
          <p className="text-[#5F6061] font-medium text-sm">Виникла помилка завантаження карти.</p>
          <button
            className="px-6 py-2.5 bg-[#DC662D] text-white rounded-full font-bold text-sm hover:bg-[#c85825] transition-colors"
            onClick={() => this.setState({ hasError: false })}>
            Спробувати ще раз
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}


// ─── SSR-safe map ─────────────────────────────────────────────────────────────
const DynamicMap = dynamic(() => import('@/components/CoverageMapClient'), {
  ssr: false,
  loading: () => (
    <div style={{ width: '100%', height: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9f9f9', borderRadius: 24 }}>
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-[#DC662D] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-[#5F6061] font-medium">Завантаження карти…</p>
      </div>
    </div>
  ),
});

// ─── Brand config ─────────────────────────────────────────────────────────────
const TECH_COLORS: Record<TechType, string> = {
  'XGS-PON': '#8B6CB0',
  'GPON':    '#56AABF',
  'PLANNED': '#9CA3AF',
};

// ─── Traffic data generator ───────────────────────────────────────────────────
function generateTrafficData(points: number, peakGbps: number, seed: number) {
  // Use seed to get a unique-per-address curve
  const rng = (n: number) => {
    const x = Math.sin(seed + n) * 10000;
    return x - Math.floor(x);
  };
  return Array.from({ length: points }, (_, i) => {
    const morning = Math.exp(-((i - 9)  ** 2) / 18) * 0.55;
    const evening = Math.exp(-((i - 20) ** 2) / 12) * 1.0;
    const base = 0.1;
    const raw = (base + morning + evening) * peakGbps;
    const noise = (rng(i) - 0.5) * 0.08 * peakGbps;
    return {
      label: `${String(i).padStart(2, '0')}:00`,
      value: parseFloat(Math.max(0.03, raw + noise).toFixed(2)),
    };
  });
}

// Random free capacity between 6.0 and 9.5
function randomFreeCapacity(seed: number): string {
  const x = Math.sin(seed * 7.3) * 10000;
  const rand = x - Math.floor(x);
  return (6.0 + rand * 3.5).toFixed(1);
}

const TRAFFIC_TABS = [
  { id: 'day',   label: 'день',   points: 24 },
  { id: 'week',  label: 'тиждень', points: 7  },
  { id: 'month', label: 'місяць',  points: 30 },
  { id: 'year',  label: 'рік',     points: 12 },
];

// ─── Autocomplete input ────────────────────────────────────────────────────────
function AutocompleteInput({ value, onChange, options, placeholder, disabled = false }: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const filtered = useMemo(
    () => options.filter(o => o.toLowerCase().includes(value.toLowerCase())).slice(0, 40),
    [options, value],
  );
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);
  return (
    <div ref={ref} className="relative flex-1">
      <input
        type="text"
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={e => { onChange(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        className="w-full px-5 py-3.5 rounded-full border-2 border-gray-200 text-[#5F6061] text-sm font-medium
                   bg-white focus:outline-none focus:border-[#DC662D] transition-colors shadow-sm
                   disabled:opacity-50 disabled:cursor-not-allowed"
      />
      {open && filtered.length > 0 && (
        <ul className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-2xl shadow-xl z-[500]
                       max-h-52 overflow-y-auto text-sm text-[#5F6061]">
          {filtered.map(opt => (
            <li key={opt} className="px-5 py-2.5 hover:bg-orange-50 hover:text-[#DC662D] cursor-pointer transition-colors first:rounded-t-2xl last:rounded-b-2xl font-medium"
              onMouseDown={() => { onChange(opt); setOpen(false); }}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Legend SVGs ──────────────────────────────────────────────────────────────
const PinSVG = ({ color }: { color: string }) => (
  <svg width="16" height="22" viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill={color}/>
    <circle cx="14" cy="14" r="5" fill="white" opacity="0.9"/>
  </svg>
);
const ClusterSVG = () => {
  const R = 18; const r = 11; const cx = 22;
  const dash = (2 * Math.PI * R / 6) - 3;
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <circle cx={cx} cy={cx} r={R} fill="none" stroke="#DC662D" strokeWidth="2.5"
        strokeDasharray={`${dash} 3`} strokeLinecap="round" opacity="0.7"/>
      <circle cx={cx} cy={cx} r={r} fill="#DC662D"/>
      <text x={cx} y={cx+1} textAnchor="middle" dominantBaseline="middle" fill="white"
        fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="8">12</text>
    </svg>
  );
};

// ─── Dynamic Sidebar CTA ──────────────────────────────────────────────────────
type SidebarState = 'default' | 'covered' | 'not-covered';

function SidebarCTA({ state, tech, onConnect }: { state: SidebarState; tech?: TechType; onConnect: () => void }) {
  if (state === 'covered' && tech) return (
    <div className="bg-[#F4F2F2] rounded-3xl p-7 shadow-sm">
      <p className="text-[#DC662D] font-bold text-xl">Batyevka.NET</p>
      <div className="mt-3 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
        <span className="text-green-600 text-xs font-bold">Покриття є!</span>
      </div>
      <h2 className="text-[#5F6061] font-bold text-base mt-3 leading-snug">
        Чудові новини! Ваша адреса підключена до нашої енергонезалежної мережі.
      </h2>
      <p className="text-sm mt-2 text-[#5F6061]/80">
        Доступна технологія:{' '}
        <span style={{ color: TECH_COLORS[tech], fontWeight: 700 }}>{tech}</span>
      </p>
      <button onClick={onConnect} className="w-full mt-5 py-3.5 bg-[#DC662D] text-white rounded-full font-bold text-sm hover:bg-[#c85825] transition-colors shadow-md shadow-orange-200 active:scale-[0.98]">
        Замовити підключення
      </button>
    </div>
  );
  if (state === 'not-covered') return (
    <div className="bg-[#F4F2F2] rounded-3xl p-7 shadow-sm">
      <p className="text-[#DC662D] font-bold text-xl">Batyevka.NET</p>
      <div className="mt-3 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-400 flex-shrink-0" />
        <span className="text-gray-500 text-xs font-bold">Покриття відсутнє</span>
      </div>
      <h2 className="text-[#5F6061] font-bold text-base mt-3 leading-snug">
        На жаль, за цією адресою поки немає нашого покриття.
      </h2>
      <p className="text-sm mt-2 text-[#5F6061]/80 leading-relaxed">
        Але ми активно розбудовуємо мережу. Залиште заявку, і ми першими повідомимо вас про можливість підключення!
      </p>
      <button onClick={onConnect} className="w-full mt-5 py-3.5 bg-[#5F6061] text-white rounded-full font-bold text-sm hover:bg-[#444] transition-colors shadow-sm active:scale-[0.98]">
        Залишити заявку
      </button>
    </div>
  );
  return (
    <div className="bg-[#F4F2F2] rounded-3xl p-7 shadow-sm">
      <p className="text-[#DC662D] font-bold text-xl">Batyevka.NET</p>
      <h2 className="text-[#5F6061] font-bold text-base mt-4 leading-snug">
        Шановні абоненти, наша мережа активно розвивається
      </h2>
      <p className="text-[#5F6061] text-sm mt-3 leading-relaxed opacity-80">
        Вкажіть свою адресу, щоб перевірити можливість підключення у Вашому будинку.
      </p>
      <button onClick={onConnect} className="w-full mt-6 py-3.5 bg-[#DC662D] text-white rounded-full font-bold text-sm hover:bg-[#c85825] transition-colors shadow-md shadow-orange-200 active:scale-[0.98]">
        Підключити
      </button>
    </div>
  );
}

// ─── Tariff card data ─────────────────────────────────────────────────────────
const TARIFF_PLANS = [
  {
    name:      '1 Гбіт/с Акційний',
    speed:     '1 000 Мбіт/с',
    price:     '150',
    priceNote: 'перші 12 міс., далі 350 грн/міс',
    badge:     '🎁 Акція',
    desc:      'Симетричний гігабіт за акційною ціною — найвигідніша пропозиція для старту.',
    features:  [
      'Симетричний канал 1000 Мбіт/с',
      'Енергонезалежність > 100 годин',
      'Безкоштовне ТБ (200+ каналів)',
      'Підключення: 299 грн',
    ],
  },
  {
    name:      '3 Гік',
    speed:     '3 000 Мбіт/с',
    price:     '379',
    priceNote: 'Флагманський тариф для сучасного дому',
    badge:     '🔥 Хіт',
    desc:      'Ідеально для великих родин і роботи з дому. Максимальна стабільність під час блекаутів.',
    features:  [
      'Симетричний канал 3000 Мбіт/с',
      'Енергонезалежність > 100 годин',
      'Безкоштовне ТБ (200+ каналів)',
      'Підключення: 500 грн (за умови оплати за 6 міс.)',
    ],
    highlight: true,
  },
  {
    name:      '5 Гбіт/с',
    speed:     '5 000 Мбіт/с',
    price:     '550',
    priceNote: 'Для IT-спеціалістів та великих родин',
    badge:     '🚀 Топ',
    desc:      'Для IT-спеціалістів, геймерів і сімей з кількома 4K-потоками одночасно.',
    features:  [
      'Симетричний канал 5000 Мбіт/с',
      'Енергонезалежність > 100 годин',
      'Пакет ТБ «Легка» у подарунок',
      'Підключення: 999 грн (за умови оплати за 6 міс.)',
    ],
  },
];

// ─── Main page ────────────────────────────────────────────────────────────────
export default function CoverageMapPage() {
  const { onOpen } = useModal();

  const [activeTab,    setActiveTab]    = useState('day');
  const [streetInput,  setStreetInput]  = useState('');
  const [houseInput,   setHouseInput]   = useState('');
  const [sidebarState, setSidebarState] = useState<SidebarState>('default');
  const [activeTech,   setActiveTech]   = useState<TechType | undefined>(undefined);
  const [activeAddr,   setActiveAddr]   = useState<CoverageAddress | null>(null);
  const [trafficData,  setTrafficData]  = useState<{label:string;value:number}[]>([]);
  const [freeCapacity, setFreeCapacity] = useState('8.4');
  const [graphPeak,    setGraphPeak]    = useState(1.0);

  const streets = useMemo(() => Array.from(new Set(coverageAddresses.map(a => a.street))).sort(), []);
  const houses  = useMemo(() => {
    if (!streetInput) return [];
    const matched = coverageAddresses.filter(a => a.street.toLowerCase() === streetInput.toLowerCase());
    return Array.from(new Set(matched.map(a => a.house))).sort((a, b) => a.localeCompare(b, 'uk'));
  }, [streetInput]);

  // ── Regenerate graph whenever address or tab changes ──────────────────────
  useEffect(() => {
    const seed = activeAddr ? activeAddr.id : 0;
    const tab  = TRAFFIC_TABS.find(t => t.id === activeTab)!;
    setTrafficData(generateTrafficData(tab.points, graphPeak, seed));
    setFreeCapacity(randomFreeCapacity(seed + tab.points));
  }, [activeAddr, activeTab, graphPeak]);

  // ── On house confirm → check coverage ─────────────────────────────────────
  useEffect(() => {
    if (!houseInput || !streetInput) { setSidebarState('default'); setActiveTech(undefined); setActiveAddr(null); return; }
    const found = coverageAddresses.find(
      a => a.street.toLowerCase() === streetInput.toLowerCase()
        && a.house.toLowerCase()  === houseInput.toLowerCase(),
    );
    if (found) {
      setSidebarState('covered');
      setActiveTech(found.techType);
      setActiveAddr(found);
      setGraphPeak(found.techType === 'XGS-PON' ? 2.0 : 1.0);
    } else {
      setSidebarState('not-covered');
      setActiveTech(undefined);
      setActiveAddr(null);
      setGraphPeak(1.0);
    }
  }, [streetInput, houseInput]);

  // ── Map callbacks ─────────────────────────────────────────────────────────
  const handleMarkerClick = useCallback((addr: CoverageAddress) => {
    setStreetInput(addr.street);
    setHouseInput(addr.house);
    setSidebarState('covered');
    setActiveTech(addr.techType);
    setActiveAddr(addr);
    setGraphPeak(addr.techType === 'XGS-PON' ? 2.0 : 1.0);
  }, []);

  // ── Open modal with pre-filled address data ───────────────────────────────
  const handleConnectRequest = useCallback((addr?: CoverageAddress) => {
    const street = addr?.street ?? streetInput;
    const house  = addr?.house  ?? houseInput;
    onOpen('request-connection', {
      prefilledStreet: street,
      prefilledHouse:  house,
      type: addr?.techType ?? 'XGS-PON',
    });
  }, [onOpen, streetInput, houseInput]);

  // ── Graph stats ───────────────────────────────────────────────────────────
  const graphStats = useMemo(() => {
    if (!trafficData.length) return { max: 0, min: 0, avg: 0 };
    const vals = trafficData.map(d => d.value);
    const max  = Math.max(...vals);
    const min  = Math.min(...vals);
    const avg  = vals.reduce((a, b) => a + b, 0) / vals.length;
    return { max: max.toFixed(2), min: min.toFixed(2), avg: avg.toFixed(2) };
  }, [trafficData]);

  const maxGbps = graphPeak === 2.0 ? 2 : 1;

  return (
    <>
      <Header theme="white" business={false} />

      <main className="bg-white min-h-screen">

        {/* JSON-LD — InternetServiceProvider schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InternetServiceProvider',
            name: 'Batyevka.NET',
            url: 'https://batyevka.net',
            logo: 'https://batyevka.net/logo.svg',
            description: 'Енергонезалежний інтернет-провайдер за технологією XGS-PON у Соломʼянському районі Києва.',
            areaServed: {
              '@type': 'Place',
              name: 'Соломʼянський район, Київ, Україна',
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Київ',
              addressRegion: 'Київська область',
              addressCountry: 'UA',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Тарифні плани Batyevka.NET',
              itemListElement: [
                { '@type': 'Offer', name: '1 Гбіт/с Акційний', price: '150', priceCurrency: 'UAH' },
                { '@type': 'Offer', name: '3 Гік',               price: '379', priceCurrency: 'UAH' },
                { '@type': 'Offer', name: '5 Гбіт/с',             price: '550', priceCurrency: 'UAH' },
              ],
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '312',
            },
          }) }}
        />

        <div className="max-w-[1600px] w-full mx-auto px-4 md:px-8 mt-10 pb-8">

          {/* ── Header ── */}
          <div className="text-center mb-8">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="text-sm text-[#5F6061]/60 font-medium mb-4 flex items-center gap-2 justify-center">
              <a href="/" className="hover:text-[#DC662D] transition-colors">Головна</a>
              <span>/</span>
              <a href="/b2c" className="hover:text-[#DC662D] transition-colors">Абоненту</a>
              <span>/</span>
              <span className="text-[#DC662D]">Карта покриття</span>
            </nav>
            <h1 className="text-4xl font-bold text-[#5F6061] mb-2">Карта покриття</h1>
            <p className="text-gray-500 text-base">Взнайте, чи є можливість підключення за Вашою адресою</p>
          </div>

          {/* ── Autocomplete Search ── */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-6">
            <AutocompleteInput
              value={streetInput}
              onChange={v => { setStreetInput(v); setHouseInput(''); setSidebarState('default'); }}
              options={streets}
              placeholder="🔍 Введіть вулицю…"
            />
            <AutocompleteInput
              value={houseInput}
              onChange={setHouseInput}
              options={houses}
              placeholder="Будинок"
              disabled={houses.length === 0 && !streetInput}
            />
            {sidebarState === 'covered' && activeTech && (
              <div className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold flex-shrink-0"
                style={{ background: TECH_COLORS[activeTech] + '18', color: TECH_COLORS[activeTech], border: `1.5px solid ${TECH_COLORS[activeTech]}44` }}>
                ✓ {activeTech}
              </div>
            )}
          </div>

          {/* ── 2-column grid ── */}
          <div className="grid lg:grid-cols-12 gap-6 mt-6">

            {/* Map */}
            <div className="lg:col-span-8 xl:col-span-9">
              <div className="rounded-3xl overflow-hidden shadow-xl shadow-gray-200/60 border border-gray-100" style={{ height: 700 }}>
                <MapErrorBoundary>
                  <DynamicMap onMarkerClick={handleMarkerClick} onConnectRequest={handleConnectRequest} />
                </MapErrorBoundary>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-5">

              <SidebarCTA state={sidebarState} tech={activeTech} onConnect={() => handleConnectRequest()} />

              {/* Traffic graph widget */}
              <div className="bg-[#F4F2F2] rounded-3xl p-6 shadow-sm flex-1">
                <h3 className="text-[#5F6061] font-bold text-sm leading-snug">
                  Спожитий трафік у будинку
                </h3>
                {/* Marketing metric */}
                <div className="mt-2 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <span className="text-green-600 text-xs font-semibold">
                    Вільний канал: ~{freeCapacity} Гбіт/с
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex gap-1 mb-4">
                  {TRAFFIC_TABS.map(t => (
                    <button key={t.id} onClick={() => setActiveTab(t.id)}
                      className={`flex-1 text-[11px] py-1.5 rounded-full font-semibold transition-all
                        ${activeTab === t.id ? 'bg-[#DC662D] text-white shadow-sm' : 'text-[#5F6061]/60 hover:text-[#5F6061]'}`}>
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Chart */}
                <div style={{ width: '100%', height: 175 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trafficData} margin={{ top: 4, right: 4, bottom: 0, left: -18 }}>
                      <defs>
                        <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%"  stopColor="#DC662D" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#DC662D" stopOpacity={0.02}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0dede" vertical={false}/>
                      <XAxis dataKey="label" tick={{ fontSize: 9, fill: '#9CA3AF', fontFamily: 'Montserrat,sans-serif' }}
                        tickLine={false} axisLine={false} interval={activeTab === 'day' ? 5 : 0}/>
                      <YAxis tick={{ fontSize: 9, fill: '#9CA3AF', fontFamily: 'Montserrat,sans-serif' }}
                        tickLine={false} axisLine={false}
                        tickFormatter={v => `${v}Г`} domain={[0, maxGbps]}/>
                      <Tooltip
                        contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, fontFamily: 'Montserrat,sans-serif', fontSize: 12, padding: '6px 12px' }}
                        formatter={v => [`${v} Гбіт/с`, 'Навантаження']}
                        labelStyle={{ fontWeight: 700, color: '#5F6061' }}
                        cursor={{ stroke: '#DC662D', strokeWidth: 1, strokeDasharray: '4 2' }}
                      />
                      <Area type="monotone" dataKey="value" stroke="#DC662D" strokeWidth={2.5}
                        fill="url(#tg)" dot={false}
                        activeDot={{ r: 5, fill: '#DC662D', stroke: 'white', strokeWidth: 2 }}/>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Bottom stats */}
                <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between text-[10px] text-gray-400 font-semibold">
                  <span>Макс: <span className="text-[#DC662D]">{graphStats.max} Г</span></span>
                  <span>Сер:  <span className="text-[#5F6061]">{graphStats.avg} Г</span></span>
                  <span>Мін:  <span className="text-gray-300">{graphStats.min} Г</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Legend ── */}
          <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#5F6061]">
            <span className="font-semibold text-xs text-gray-400 uppercase tracking-wide">Позначення:</span>
            <div className="flex items-center gap-2"><PinSVG color="#8B6CB0" /><span className="font-medium">XGS-PON — до 10 Гбіт/с</span></div>
            <div className="flex items-center gap-2"><PinSVG color="#56AABF" /><span className="font-medium">GPON — до 1 Гбіт/с</span></div>
            <div className="flex items-center gap-2"><PinSVG color="#9CA3AF" /><span className="font-medium">В планах — за заявкою</span></div>
            <div className="flex items-center gap-2"><ClusterSVG /><span className="font-medium">Група будинків</span></div>
          </div>

        </div>{/* /container */}

        {/* ══════════════════════════════════════════════════════════════════════
            TARIFF CARDS SECTION
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mt-16 mb-8 text-[#5F6061]">
            Рекомендовані тарифи для вашої адреси
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TARIFF_PLANS.map((plan) => (
              <div key={plan.name}
                className={`bg-[#F4F2F2] rounded-3xl p-8 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${plan.highlight ? 'ring-2 ring-[#DC662D] shadow-lg shadow-orange-100' : 'shadow-sm'}`}>
                {plan.badge && (
                  <div className="absolute top-6 right-6 bg-[#DC662D] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <p className="text-[#DC662D] font-bold text-sm mb-1 uppercase tracking-wide">Тариф</p>
                <h3 className="text-[#5F6061] font-extrabold text-3xl mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-[#DC662D] font-extrabold text-4xl">{plan.price}</span>
                  <span className="text-[#5F6061]/60 text-sm mb-1">грн/міс</span>
                </div>
                {plan.priceNote && (
                  <p className="text-[#5F6061]/50 text-xs mb-5 leading-snug">{plan.priceNote}</p>
                )}
                <p className="text-[#5F6061]/70 text-sm mb-6 leading-relaxed">{plan.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[#5F6061]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="#DC662D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleConnectRequest()}
                  className="w-full py-3.5 bg-[#DC662D] text-white rounded-full font-bold text-sm hover:bg-[#c85825] transition-colors shadow-md shadow-orange-200 active:scale-[0.98]">
                  Хочу цей тариф
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            SEO ARTICLE — MASSIVE LONG-READ (v3)
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="max-w-4xl mx-auto px-4 md:px-8 text-[#5F6061] mt-16 mb-24 space-y-6">

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            Як перевірити можливість підключення до провайдера Batyevka.NET за адресою
          </h2>
          <p className="leading-relaxed">
            Якщо вам потрібен перевірений, надійний та енергонезалежний інтернет-провайдер за адресою у Києві
            (Солом&apos;янський район), та ви прагнете отримати актуальну інформацію без дзвінків і очікування,
            скористайтесь нашим сервісом. Карта покриття на сайті Batyevka.NET створена для швидкої та зручної перевірки
            доступності послуг. Достатньо ввести назву вулиці та номер вашого будинку або знайти свою локацію
            безпосередньо на мапі, і система відразу покаже покриття інтернету за адресою та можливі
            варіанти підключення (XGS-PON або GPON).
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            Переваги енергонезалежного інтернету від Batyevka.NET
          </h2>
          <p className="leading-relaxed">
            Вибираючи провайдера, користувач насамперед оцінює найважливіші критерії, як-от стабільність, швидкість
            і доступність у своєму будинку під час блекаутів. Саме тому наша карта покриття інтернет-провайдера
            дозволяє відразу зрозуміти, чи доступні послуги енергонезалежного інтернету за конкретною
            адресою та які умови підключення пропонуються.
          </p>
          <p className="leading-relaxed">
            Batyevka.NET пропонує преміальні рішення, які зручно використовувати щодня як для роботи,
            так і для дому. Завдяки сучасній інфраструктурі на базі технології XGS-PON забезпечується швидкісний
            інтернет до 10 Гбіт/с без просідань швидкості навіть у години пікового навантаження.
            Це особливо важливо для відеодзвінків, стримінгу та онлайн-ігор.
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>
              <strong>абсолютна автономність</strong> завдяки потужним акумуляторам LiFePO4 на вузлах (понад 100 годин без світла);
            </li>
            <li>стабільна доступність інтернету в Солом&apos;янському районі та постійне розширення мережі;</li>
            <li>широка зона покриття, яку можна перевірити за допомогою зручної інтерактивної карти на сайті;</li>
            <li>
              <strong>ювелірний монтаж</strong>: жодних мотків кабелю по під&apos;їзду, акуратне заведення оптики у квартиру
              та фірмова розетка;
            </li>
            <li>гнучкі тарифи, адаптовані під різні потреби користувачів (від 1 Гбіт/с до 10 Гбіт/с).</li>
          </ul>
          <p className="leading-relaxed">
            Окрему увагу приділено інфраструктурі в районах Києва (Батиєва Гора,
            Олександрівська Слобідка), де мережа вже охоплює значну частину житлових
            і комерційних будівель.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            Як підключити інтернет за адресою
          </h2>
          <p className="leading-relaxed">
            Щоб підключити послуги інтернет-провайдера за адресою, достатньо зробити декілька простих кроків:
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li>скористатися картою інтернет-покриття, вибравши потрібну адресу;</li>
            <li>якщо підключення доступне – залишити заявку онлайн або зателефонувати за номером гарячої лінії;</li>
            <li>у разі відсутності адреси у списку також подати заявку для уточнення (в планах);</li>
            <li>дочекатися дзвінка фахівця, який перевірить технічну можливість підключення;</li>
            <li>узгодити деталі – тариф, обладнання та зручний час прибуття майстра для монтажу.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
            Покриття інтернету в Україні та захист інфраструктури
          </h2>
          <p className="leading-relaxed">
            Покриття інтернету залежить від конкретного міста, району та технічної інфраструктури.
            Зверніть увагу: карта інтернет-покриття, представлена на цій сторінці, актуальна для
            Солом&apos;янського району міста Києва. Такий підхід допомагає швидко визначити, чи доступні
            послуги провайдера за вашою адресою, а потім вибрати оптимальне рішення без зайвих витрат часу.
          </p>
          <div className="bg-[#F4F2F2] p-7 rounded-2xl border border-gray-200">
            <p className="text-sm leading-relaxed">
              <strong>Зверніть увагу:</strong> Оптичний термінал (ONU), патч-корд та оптична розетка є
              власністю Batyevka.NET. Клієнт оплачує лише роботу з монтажу. Використання нашої
              інфраструктури для підключення до інших провайдерів <strong>суворо заборонено!</strong>
            </p>
          </div>

        </section>

      </main>

      <Footer theme="white" />
    </>
  );
}
