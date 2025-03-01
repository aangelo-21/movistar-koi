import "./InteractiveMap.css"
import "leaflet/dist/leaflet.css"
import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

function InteractiveMap() {
  const [center] = useState([40.39282225483843, -3.698554389580734]);

  const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });

  return (
    <>
      <MapContainer
        center={center}
        zoom={20}
        scrollWheelZoom={true}
        className="interactive-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={icon}>
          <Popup className="map-popup">
            Movistar Esports Center 
            <br /> P.º de la Chopera, 14, Arganzuela, 28045 Madrid 
            <br /> <img className='interactive-map-photo' src="/movistar-koi/movistar-esports-center.webp" alt="" />
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default InteractiveMap;