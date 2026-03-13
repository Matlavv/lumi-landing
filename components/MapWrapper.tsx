'use client';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

// Fix typical react-leaflet default icon issue
const customIcon = L.divIcon({
  className: 'custom-leaflet-icon',
  html: `<div style="width: 24px; height: 24px; background-color: #f877af; border-radius: 50%; border: 3px solid #151525; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);"></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const alertIcon = L.divIcon({
  className: 'custom-leaflet-icon-alert',
  html: `<div style="width: 28px; height: 28px; background-color: #fd3630; border-radius: 50%; border: 3px solid #151525; display:flex; align-items:center; justify-content:center; color:white; font-weight:bold; font-size:14px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">!</div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
});

interface MapWrapperProps {
  reports: any[];
}

export default function MapWrapper({ reports }: MapWrapperProps) {
  const centerPosition: [number, number] = [50.6364, 3.0708]; // Gare de Lille Flandres

  return (
    <MapContainer 
      center={centerPosition} 
      zoom={14} 
      scrollWheelZoom={false} 
      style={{ height: '100%', width: '100%', zIndex: 10 }}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      
      {reports.map((report) => (
        <Marker 
          key={report.id} 
          position={[report.latitude, report.longitude]} 
          icon={report.type === 'agression' ? alertIcon : customIcon}
        >
          <Popup className="lumi-popup">
            <div className="font-sans">
              <span className="text-xs font-bold text-lumi-violet uppercase tracking-wider">{report.typeLabel}</span>
              <p className="mt-1 font-medium text-sm">{report.description}</p>
              <p className="mt-2 text-xs text-zinc-500">Signalé à {report.time}</p>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Red danger zone area */}
      <Circle 
        center={[50.6370, 3.0680]} 
        radius={220} 
        pathOptions={{ color: '#fd3630', fillColor: '#fd3630', fillOpacity: 0.15, stroke: true, weight: 1, dashArray: '4' }} 
      />

      {/* User location dot approx (Republic square in Lille usually) */}
      <Circle 
        center={[50.6364, 3.0708]} 
        radius={150} 
        pathOptions={{ color: '#5722CF', fillColor: '#5722CF', fillOpacity: 0.15, stroke: false }} 
      />
      <Circle 
        center={[50.6364, 3.0708]} 
        radius={20} 
        pathOptions={{ color: '#ffffff', fillColor: '#5722CF', fillOpacity: 1, weight: 2 }} 
      />
    </MapContainer>
  );
}
