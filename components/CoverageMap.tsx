// components/CoverageMap.tsx

"use client";

import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

interface CoverageMapProps {
  coverageAreas: LatLngExpression[][];
}

const CoverageMap: React.FC<CoverageMapProps> = ({ coverageAreas }) => {
  const position: LatLngExpression = [50.43, 30.465]; // Центр карти (Солом'янський район)
  const polygonColor = { color: '#DC662D', weight: 2 };

  return (
    <MapContainer center={position} zoom={14} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {coverageAreas.map((area, index) => (
        <Polygon key={index} pathOptions={polygonColor} positions={area} />
      ))}
    </MapContainer>
  );
};

export default CoverageMap;