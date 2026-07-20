"use client";
import React, { useRef, useEffect, useState, useCallback } from 'react';

// ─────────────────────────────────────────────────────────────────
// SpeedometerGauge v7 — Ookla 240° · DONE-екран результатів
//
// Фази: IDLE → PING → DOWN → POST_DOWN → RESET → UP → LIVE → DONE
//
// DONE-фаза:
//  • SVG-дуга розчиняється (opacity 0 + scale 0.92)
//  • Хедер "з'їжджає" вниз і збільшується до великих цифр
//  • Кнопка "Повторити тест" з'являється знизу
//  • min-h на контейнері запобігає "схлопуванню" картки
// ─────────────────────────────────────────────────────────────────

type Phase = 'IDLE' | 'PING' | 'DOWN' | 'POST_DOWN' | 'RESET' | 'UP' | 'LIVE' | 'DONE';

// ── Фірмові кольори ──────────────────────────────────────────────
const CYAN   = '#56AABF';   // Secondary — фаза ЗАВАНТАЖЕННЯ
const VIOLET = '#8B6CB0';   // Custom    — фаза ВІДДАЧІ + LIVE + DONE

// ── Геометрія SVG ────────────────────────────────────────────────
const W = 300, H = 240;
const CX = 150, CY = 115, R = 108;

const ARC_START = 210;
const ARC_SPAN  = 240;
const ARC_END   = ARC_START - ARC_SPAN;
const ARC_LEN   = +(R * ARC_SPAN * Math.PI / 180).toFixed(2);

const NEEDLE_TIP  = R - 22;
const NEEDLE_TAIL = 16;
const TIP_HW      = 2;
const BASE_HW     = 8;
const MAX_MBPS    = 3000;

const NUM_Y  = +(CY + R * 0.72).toFixed(0);
const UNIT_Y = NUM_Y + 18;

// ── Утиліти ──────────────────────────────────────────────────────
function svgPt(deg: number, r: number) {
    const rad = deg * Math.PI / 180;
    return { x: CX + r * Math.cos(rad), y: CY - r * Math.sin(rad) };
}

const ARC_S = svgPt(ARC_START, R);
const ARC_E = svgPt(ARC_END,   R);
const ARC_PATH = `M ${ARC_S.x.toFixed(1)} ${ARC_S.y.toFixed(1)} A ${R} ${R} 0 1 1 ${ARC_E.x.toFixed(1)} ${ARC_E.y.toFixed(1)}`;

const fToAngle = (f: number) => ARC_START - f * ARC_SPAN;

const SCALE = [
    { mbps:    0, label: '0'      },
    { mbps: 1000, label: '1'      },
    { mbps: 2000, label: '2'      },
    { mbps: 3000, label: '3 Гбіт' },
];

// ── Ease-функції ──────────────────────────────────────────────────
function ooklaEase(t: number): number {
    if (t < 0.22) return (t / 0.22) * 0.72;
    const s = (t - 0.22) / 0.78;
    return 0.72 + s * 0.28 * (1 - Math.pow(1 - s, 2.5));
}
function easeOutQuad(t: number): number { return t * (2 - t); }

// ── Іконки ───────────────────────────────────────────────────────
const PingIcon = () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
);
const DownIcon = () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M19 12l-7 7-7-7"/>
    </svg>
);
const UpIcon = () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7"/>
    </svg>
);
const ReplayIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
    </svg>
);

// ─────────────────────────────────────────────────────────────────
// Компонент
// ─────────────────────────────────────────────────────────────────
const SpeedometerGauge: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [phase, setPhase] = useState<Phase>('IDLE');

    const fracRef = useRef(0);
    const [dispFrac,  setDispFrac]  = useState(0);
    const [dispSpeed, setDispSpeed] = useState(0);
    const [pingR,  setPingR]  = useState<number | null>(null);
    const [downR,  setDownR]  = useState<number | null>(null);
    const [upR,    setUpR]    = useState<number | null>(null);

    // DONE-екран: видимість елементів
    const [gaugeVisible,   setGaugeVisible]   = useState(true);  // SVG + лічильник
    const [resultsVisible, setResultsVisible] = useState(false); // великі цифри в центрі
    const [replayVisible,  setReplayVisible]  = useState(false); // кнопка Повторити

    // ── Запуск при появі у viewport ──────────────────────────────
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting && phase === 'IDLE') { setPhase('PING'); io.disconnect(); } },
            { threshold: 0.35 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [phase]);

    // ── rAF-анімація ─────────────────────────────────────────────
    const animTo = useCallback((
        target: number, dur: number,
        ease: (t: number) => number, done: () => void
    ): () => void => {
        const from = fracRef.current;
        let t0: number | null = null, id: number;

        const step = (ts: number) => {
            if (!t0) t0 = ts;
            const t = Math.min((ts - t0) / dur, 1);
            const f = from + (target - from) * ease(t);
            fracRef.current = f;
            setDispFrac(f);
            setDispSpeed(Math.round(Math.min(f, 1) * MAX_MBPS));
            if (t < 1) {
                id = requestAnimationFrame(step);
            } else {
                fracRef.current = target;
                setDispFrac(target);
                setDispSpeed(Math.round(Math.min(target, 1) * MAX_MBPS));
                done();
            }
        };

        id = requestAnimationFrame(step);
        return () => cancelAnimationFrame(id);
    }, []);

    // ── Скидання стану для Replay ─────────────────────────────────
    const handleReplay = useCallback(() => {
        fracRef.current = 0;
        setDispFrac(0);
        setDispSpeed(0);
        setPingR(null);
        setDownR(null);
        setUpR(null);
        setGaugeVisible(true);
        setResultsVisible(false);
        setReplayVisible(false);
        // Невелика затримка щоб CSS-reset встиг, потім запускаємо
        setTimeout(() => setPhase('PING'), 80);
    }, []);

    // ── State Machine ─────────────────────────────────────────────
    useEffect(() => {
        if (phase === 'IDLE' || phase === 'DONE') return;
        let cleanup: (() => void) | undefined;
        let timer: ReturnType<typeof setTimeout>;

        switch (phase) {
            case 'PING':
                fracRef.current = 0;
                setDispFrac(0);
                setDispSpeed(0);
                setPingR(1);
                timer = setTimeout(() => setPhase('DOWN'), 2000);
                break;

            case 'DOWN': {
                const t = (3012 + Math.floor(Math.random() * 30)) / MAX_MBPS;
                cleanup = animTo(t, 11000, ooklaEase, () => {
                    setDownR(Math.round(t * MAX_MBPS));
                    setPhase('POST_DOWN');
                });
                break;
            }

            case 'POST_DOWN':
                timer = setTimeout(() => setPhase('RESET'), 2500);
                break;

            case 'RESET':
                cleanup = animTo(0, 900, easeOutQuad, () => {
                    timer = setTimeout(() => setPhase('UP'), 900);
                });
                break;

            case 'UP': {
                const t = (3018 + Math.floor(Math.random() * 20)) / MAX_MBPS;
                cleanup = animTo(t, 11000, ooklaEase, () => {
                    setUpR(Math.round(t * MAX_MBPS));
                    setPhase('LIVE');
                });
                break;
            }

            case 'LIVE': {
                const base = fracRef.current;
                let id: number;
                let last = performance.now();

                const tick = (ts: number) => {
                    if (ts - last > 1200 + Math.random() * 700) {
                        const f = Math.max(0.97, Math.min(1.005, base + (Math.random() - 0.5) * 0.003));
                        fracRef.current = f;
                        setDispFrac(f);
                        setDispSpeed(Math.round(Math.min(f, 1) * MAX_MBPS));
                        last = ts;
                    }
                    id = requestAnimationFrame(tick);
                };
                id = requestAnimationFrame(tick);
                cleanup = () => cancelAnimationFrame(id);

                // Через 1.4 с після завершення — переходимо до DONE
                timer = setTimeout(() => {
                    cancelAnimationFrame(id);
                    setPhase('DONE');
                }, 1400);
                break;
            }
        }

        return () => { clearTimeout(timer); cleanup?.(); };
    }, [phase, animTo]);

    // ── DONE-анімація (стейт-машина через CSS transitions) ────────
    useEffect(() => {
        if (phase !== 'DONE') return;

        // Крок 1: розчиняємо дугу (700ms)
        setGaugeVisible(false);

        // Крок 2: через 750ms з'являються великі результати
        const t1 = setTimeout(() => setResultsVisible(true), 750);

        // Крок 3: через 1300ms з'являється кнопка Повторити
        const t2 = setTimeout(() => setReplayVisible(true), 1300);

        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [phase]);

    // ── SVG розрахунки ────────────────────────────────────────────
    const f          = Math.min(Math.max(dispFrac, 0), 1);
    const dashOffset = ARC_LEN * (1 - f);

    const nDeg = fToAngle(f);
    const nRad = nDeg * Math.PI / 180;
    const pRad = (nDeg - 90) * Math.PI / 180;
    const fX = Math.cos(nRad), fY = -Math.sin(nRad);
    const pX = Math.cos(pRad), pY = -Math.sin(pRad);

    const vStr = (fl: number, pl: number) =>
        `${(CX + fX*fl + pX*pl).toFixed(1)},${(CY + fY*fl + pY*pl).toFixed(1)}`;

    const needlePoints = [
        vStr( NEEDLE_TIP,  TIP_HW),
        vStr( NEEDLE_TIP, -TIP_HW),
        vStr(-NEEDLE_TAIL,-BASE_HW),
        vStr(-NEEDLE_TAIL, BASE_HW),
    ].join(' ');

    // ── Кольори ───────────────────────────────────────────────────
    const isDown   = phase === 'DOWN' || phase === 'POST_DOWN' || phase === 'RESET';
    const isUp     = phase === 'UP'   || phase === 'LIVE';
    const isDone   = phase === 'DONE';

    const arcColor   = isDown ? CYAN : VIOLET;   // VIOLET у LIVE, DONE тощо
    const needleFill = isDown ? CYAN : VIOLET;
    const numColor   = isDown ? CYAN : VIOLET;

    const downValColor = (isDown || downR != null) ? CYAN   : '#d1d5db';
    const upValColor   = (isUp   || upR   != null || isDone) ? VIOLET : '#d1d5db';

    // ── Render ────────────────────────────────────────────────────
    return (
        <div
            ref={containerRef}
            className="w-full flex flex-col items-center select-none"
            // min-h фіксує висоту під час DONE щоб картка не "схлопнулась"
            style={{ minHeight: '290px' }}
        >

            {/* ══════════════════════════════════════════════════
                ЗВИЧАЙНИЙ РЕЖИМ (IDLE → LIVE)
                Зникає у фазі DONE через opacity + scale
            ═══════════════════════════════════════════════════ */}
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    opacity:    gaugeVisible ? 1 : 0,
                    transform:  gaugeVisible ? 'scale(1)' : 'scale(0.92)',
                    transition: 'opacity 650ms ease-in-out, transform 650ms ease-in-out',
                    // Коли зник — не займає місця і не перекриває results-блок
                    pointerEvents: gaugeVisible ? 'auto' : 'none',
                    position:      gaugeVisible ? 'relative' : 'absolute',
                }}
            >
                {/* ── Хедер: ПІНГ | ЗАВАНТ. | ВІДДАЧА ── */}
                <div className="flex justify-between w-full max-w-[270px] mb-2 px-1">

                    {/* Пінг */}
                    <div className={`flex flex-col items-center transition-colors duration-500 ${phase !== 'IDLE' ? 'text-gray-700' : 'text-gray-300'}`}>
                        <div className="flex items-center gap-0.5 text-[9px] font-bold text-gray-400 tracking-widest uppercase mb-0.5">
                            <PingIcon /> Пінг
                        </div>
                        <div className="text-lg font-black tabular-nums leading-tight">{pingR ?? '—'}</div>
                        <div className="text-[9px] text-gray-400">ms</div>
                    </div>

                    {/* Завантаження */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-0.5 text-[9px] font-bold text-gray-400 tracking-widest uppercase mb-0.5">
                            <DownIcon /> Завант.
                        </div>
                        <div className="text-lg font-black tabular-nums leading-tight"
                            style={{ color: downValColor, transition: 'color 0.4s ease' }}>
                            {downR ?? (isDown && dispSpeed > 50 ? dispSpeed : '—')}
                        </div>
                        <div className="text-[9px] text-gray-400">Мбіт/с</div>
                    </div>

                    {/* Віддача */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-0.5 text-[9px] font-bold text-gray-400 tracking-widest uppercase mb-0.5">
                            <UpIcon /> Віддача
                        </div>
                        <div className="text-lg font-black tabular-nums leading-tight"
                            style={{ color: upValColor, transition: 'color 0.4s ease' }}>
                            {upR ?? (isUp && dispSpeed > 50 ? dispSpeed : '—')}
                        </div>
                        <div className="text-[9px] text-gray-400">Мбіт/с</div>
                    </div>
                </div>

                {/* ── SVG Gauge ── */}
                <div className="w-full max-w-[300px]">
                    <svg viewBox={`0 0 ${W} ${H}`} className="w-full overflow-visible" aria-hidden="true">

                        {/* Halo */}
                        <path d={ARC_PATH} fill="none" stroke={arcColor} strokeWidth="28"
                            strokeLinecap="round" strokeDasharray={ARC_LEN} strokeDashoffset={dashOffset}
                            opacity="0.14" style={{ transition: 'stroke 0.5s ease' }} />

                        {/* Фонова дуга */}
                        <path d={ARC_PATH} fill="none" stroke="#e9eaed" strokeWidth="20" strokeLinecap="round" />

                        {/* Прогрес */}
                        <path d={ARC_PATH} fill="none" stroke={arcColor} strokeWidth="20"
                            strokeLinecap="round" strokeDasharray={ARC_LEN} strokeDashoffset={dashOffset}
                            style={{ transition: 'stroke 0.5s ease' }} />

                        {/* Мітки шкали */}
                        {SCALE.map(({ mbps, label }) => {
                            const a     = fToAngle(mbps / MAX_MBPS);
                            const inner = svgPt(a, R - 11);
                            const outer = svgPt(a, R + 9);
                            const text  = svgPt(a, R - 29);
                            return (
                                <g key={mbps}>
                                    <line x1={inner.x.toFixed(1)} y1={inner.y.toFixed(1)}
                                        x2={outer.x.toFixed(1)} y2={outer.y.toFixed(1)}
                                        stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" />
                                    <text x={text.x.toFixed(1)} y={text.y.toFixed(1)}
                                        textAnchor="middle" dominantBaseline="middle"
                                        fontSize="9" fontWeight="600" fill="#b0b7c3"
                                        fontFamily="Inter, system-ui, sans-serif">
                                        {label}
                                    </text>
                                </g>
                            );
                        })}

                        {/* Стрілка */}
                        <polygon points={needlePoints} fill={needleFill}
                            style={{ filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.22))', transition: 'fill 0.5s ease' }} />

                        {/* Лічильник */}
                        <text x={CX} y={NUM_Y} textAnchor="middle" dominantBaseline="auto"
                            fontSize="46" fontWeight="700" fill={numColor}
                            fontFamily="Inter, system-ui, sans-serif"
                            style={{ fontVariantNumeric: 'tabular-nums', transition: 'fill 0.4s ease' }}>
                            {dispSpeed}
                        </text>

                        {/* Одиниця */}
                        <text x={CX} y={UNIT_Y} textAnchor="middle" dominantBaseline="auto"
                            fontSize="10" fontWeight="500" fill="#b0b7c3"
                            fontFamily="Inter, system-ui, sans-serif">
                            Мбіт/с
                        </text>
                    </svg>
                </div>
            </div>

            {/* ══════════════════════════════════════════════════
                DONE-ЕКРАН: великі цифри + кнопка Replay
                З'являється після розчинення дуги
            ═══════════════════════════════════════════════════ */}
            <div
                style={{
                    position: isDone ? 'relative' : 'absolute',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px 0 4px',
                    opacity:    resultsVisible ? 1 : 0,
                    transform:  resultsVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 600ms ease-out, transform 600ms ease-out',
                    pointerEvents: resultsVisible ? 'auto' : 'none',
                }}
            >
                {/* Великі результати — дві колонки поруч */}
                <div className="flex items-start justify-center gap-10 w-full mb-4">

                    {/* ЗАВАНТАЖЕННЯ */}
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                            <DownIcon /> Завант.
                        </div>
                        <div
                            className="font-black tabular-nums leading-none"
                            style={{ fontSize: '52px', color: CYAN }}
                        >
                            {downR ?? '—'}
                        </div>
                        <div className="text-xs text-gray-400 font-medium">Мбіт/с</div>
                    </div>

                    {/* Роздільник */}
                    <div className="w-px bg-gray-200 self-stretch mt-6 mb-3" />

                    {/* ВІДДАЧА */}
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                            <UpIcon /> Віддача
                        </div>
                        <div
                            className="font-black tabular-nums leading-none"
                            style={{ fontSize: '52px', color: VIOLET }}
                        >
                            {upR ?? '—'}
                        </div>
                        <div className="text-xs text-gray-400 font-medium">Мбіт/с</div>
                    </div>
                </div>

                {/* Підпис "Симетричний канал" */}
                <div className="text-[11px] text-gray-400 font-medium mb-5 tracking-wide">
                    Симетричний канал XGS-PON
                </div>

                {/* Динамічний FOMO — преміум-плашка, з'являється разом із кнопкою */}
                <div
                    style={{
                        opacity:    replayVisible ? 1 : 0,
                        transform:  replayVisible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.97)',
                        transition: 'opacity 550ms ease-out, transform 550ms ease-out',
                    }}
                    className="mb-4 w-full max-w-[270px] rounded-2xl border border-[#DC662D]/25 bg-gradient-to-br from-orange-50 to-amber-50 px-4 py-3 shadow-sm"
                >
                    <p className="text-center text-sm font-semibold leading-snug text-[#DC662D]">
                        🔥 <span className="font-extrabold">Обмежена пропозиція:</span> залишилося всього{' '}
                        <span className="font-extrabold">20 підключень</span>{' '}
                        на цей тариф. Встигніть залишити заявку!
                    </p>
                </div>

                {/* Кнопка Повторити тест */}
                <button
                    onClick={handleReplay}
                    style={{
                        opacity:    replayVisible ? 1 : 0,
                        transform:  replayVisible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.95)',
                        transition: 'opacity 500ms ease-out, transform 500ms ease-out',
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white hover:border-[#56AABF] hover:text-[#56AABF] text-gray-500 text-xs font-semibold transition-colors duration-200 shadow-sm"
                >
                    <ReplayIcon />
                    Повторити тест
                </button>
            </div>

        </div>
    );
};

export default SpeedometerGauge;
