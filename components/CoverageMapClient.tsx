"use client";

import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import { coverageAddresses, type CoverageAddress, type TechType } from '@/app/data/coverageAddresses';
// CSS is globally imported in globals.css

// ─── Tech config ─────────────────────────────────────────────────────────────
const TECH_COLORS: Record<TechType, string> = {
  'XGS-PON': '#8B6CB0',
  'GPON':    '#56AABF',
  'PLANNED': '#9CA3AF',
};

// ─── Real production tariff badges per tech type ─────────────────────────────
const TARIFF_BADGES: Record<TechType, { icon: string; label: string; price?: string; tint: string; border: string }[]> = {
  'XGS-PON': [
    { icon: '🎁', label: 'Акція: 1 Гбіт/с',        price: '150 грн/міс',  tint: '#DC662D', border: 'rgba(220,102,45,0.25)'  },
    { icon: '🚀', label: 'Топ: 3 Гік',              price: '379 грн/міс',  tint: '#8B6CB0', border: 'rgba(139,108,176,0.25)' },
    { icon: '🏢', label: 'Для бізнесу: 1 Гбіт/с',  price: '999 грн/міс',  tint: '#5F6061', border: 'rgba(95,96,97,0.2)'     },
  ],
  'GPON': [
    { icon: '🎁', label: 'Акція: 1 Гбіт/с',         price: '150 грн/міс',  tint: '#DC662D', border: 'rgba(220,102,45,0.25)'  },
    { icon: '⚡', label: 'Хіт: 300 Мбіт/с',          price: '100 грн/міс',  tint: '#56AABF', border: 'rgba(86,170,191,0.25)' },
    { icon: '🏢', label: 'Для бізнесу: 100 Мбіт/с', price: '499 грн/міс',  tint: '#5F6061', border: 'rgba(95,96,97,0.2)'     },
  ],
  'PLANNED': [
    { icon: '🚧', label: 'Збираємо заявки на підключення', tint: '#9CA3AF', border: 'rgba(156,163,175,0.25)' },
  ],
};


function buildPinSVG(color: string): string {
  const id = color.replace('#', '');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
    <defs><filter id="ps${id}" x="-40%" y="-20%" width="180%" height="180%">
      <feDropShadow dx="0" dy="2" stdDeviation="2.5" flood-color="rgba(0,0,0,0.28)"/>
    </filter></defs>
    <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z"
      fill="${color}" filter="url(#ps${id})"/>
    <circle cx="14" cy="14" r="5" fill="white" opacity="0.9"/>
  </svg>`;
}

interface Props {
  onConnectRequest: (addr: CoverageAddress) => void;
  onMarkerClick:    (addr: CoverageAddress) => void;
}

export default function CoverageMapClient({ onConnectRequest, onMarkerClick }: Props) {

  // ─── All L.* inside useMemo ───────────────────────────────────────────────
  const pinIcons = useMemo<Record<TechType, L.DivIcon>>(() => {
    const make = (tech: TechType) => L.divIcon({
      className: '',
      html: buildPinSVG(TECH_COLORS[tech]),
      iconSize: [28, 36],
      iconAnchor: [14, 36],
      popupAnchor: [0, -42],
    });
    return { 'XGS-PON': make('XGS-PON'), 'GPON': make('GPON'), 'PLANNED': make('PLANNED') };
  }, []);

  const createClusterIcon = useMemo(() => (cluster: any) => {
    const count = cluster.getChildCount();
    const R = 34; const r = 22; const cx = 42;
    const dashLen = (2 * Math.PI * R / 6) - 4;
    const size = cx * 2;
    return L.divIcon({
      className: '',
      html: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <defs><filter id="cls" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="rgba(220,102,45,0.35)"/>
        </filter></defs>
        <circle cx="${cx}" cy="${cx}" r="${R}" fill="none" stroke="#DC662D" stroke-width="3"
          stroke-dasharray="${dashLen} 4" stroke-linecap="round" opacity="0.75"/>
        <circle cx="${cx}" cy="${cx}" r="${r}" fill="#DC662D" filter="url(#cls)"/>
        <text x="${cx}" y="${cx+1}" text-anchor="middle" dominant-baseline="middle"
          fill="white" font-family="Montserrat,sans-serif" font-weight="700" font-size="13">${count}</text>
      </svg>`,
      iconSize: [size, size],
      iconAnchor: [cx, cx],
    });
  }, []);

  return (
    // z-index:0 creates isolated stacking context — Leaflet z-indexes (200–600) never bleed above modals
    <div style={{ width: '100%', height: '700px', position: 'relative', zIndex: 0 }}>
      <style>{`
        .leaflet-popup-content-wrapper {
          background: #F4F2F2 !important;
          border-radius: 20px !important;
          padding: 0 !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12) !important;
          border: 1px solid rgba(255,255,255,0.7) !important;
        }
        .leaflet-popup-tip-container { display: none !important; }
        .leaflet-popup-content { margin: 16px 18px !important; min-width: 270px !important; }
        .leaflet-popup-close-button { color: #9CA3AF !important; font-size: 20px !important; padding: 6px 10px !important; top: 4px !important; right: 4px !important; }
        .leaflet-control-zoom a { border-radius: 10px !important; color: #5F6061 !important; }
        .leaflet-control-zoom a:hover { background: #F4F2F2 !important; }
      `}</style>

      <MapContainer
        center={[50.4265, 30.4633]}
        zoom={14}
        scrollWheelZoom
        zoomControl={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <ZoomControl position="bottomright" />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterIcon}
          maxClusterRadius={50}
          showCoverageOnHover={false}
        >
          {coverageAddresses.map((addr) => {
            const badges = TARIFF_BADGES[addr.techType];
            const color  = TECH_COLORS[addr.techType];
            return (
              <Marker
                key={addr.id}
                position={[addr.lat, addr.lng]}
                icon={pinIcons[addr.techType]}
                eventHandlers={{ click: () => onMarkerClick(addr) }}
              >
                <Popup>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', minWidth: 270 }}>

                    {/* Tech badge */}
                    <div style={{ marginBottom: 10 }}>
                      <span style={{
                        background: color + '1A', color,
                        border: `1px solid ${color}44`,
                        borderRadius: 999, fontSize: 11, fontWeight: 700,
                        padding: '3px 11px', letterSpacing: '0.03em',
                      }}>{addr.techType}</span>
                    </div>

                    {/* Address */}
                    <p style={{ fontWeight: 700, fontSize: 16, color: '#5F6061', margin: '0 0 12px', lineHeight: 1.3 }}>
                      вул. {addr.street}, {addr.house}
                    </p>

                    {/* USPs */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                        stroke="#8B6CB0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#8B6CB0' }}>XGS-PON — до 10 Гбіт/с</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 14 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                        stroke="#56AABF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="16" height="10" rx="2"/><line x1="22" y1="11" x2="22" y2="13"/>
                      </svg>
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#56AABF' }}>Енергонезалежність: &gt; 100 год</span>
                    </div>

                    {/* ── Segmented Marketing Badges ──────────────────── */}
                    <p style={{ fontSize: 10, fontWeight: 600, color: '#9CA3AF', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Доступні тарифи
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
                      {badges.map((b, i) => (
                        <div key={i} style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          background: b.tint + '0D',
                          border: `1px solid ${b.border}`,
                          borderRadius: 10, padding: '7px 11px',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                        }}>
                          <span style={{ fontSize: 12, fontWeight: 600, color: b.tint }}>
                            {b.icon} {b.label}
                          </span>
                          {b.price && (
                            <span style={{ fontSize: 12, fontWeight: 700, color: b.tint, whiteSpace: 'nowrap', marginLeft: 8 }}>
                              {b.price}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* CTA — button, no href, no navigation */}
                    <button
                      onClick={() => onConnectRequest(addr)}
                      style={{
                        background: '#DC662D', color: 'white', border: 'none',
                        borderRadius: 999, width: '100%', padding: '11px 0',
                        fontWeight: 700, fontSize: 14, cursor: 'pointer',
                        fontFamily: 'Montserrat, sans-serif', transition: 'background 0.2s',
                      }}
                      onMouseOver={e => (e.currentTarget.style.background = '#c85825')}
                      onMouseOut={e  => (e.currentTarget.style.background = '#DC662D')}
                    >
                      Замовити підключення
                    </button>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
