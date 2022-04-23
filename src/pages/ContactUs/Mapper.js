
// import React from 'react';
import "./Contact.css";
import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Mapper() {
    const mapRef = useRef();
    const [bounds, setbounds] = useState([
      [-10, -180],
      [90, 180],
    ]);
    const position = [28, -0.09];
  return (
    <>
      <MapContainer
        ref={mapRef}
        center={[0, 0]}
        zoom={3}
        maxZoom={19}
        minZoom={2}
        bounceAtZoomLimits={true}
        maxBoundsViscosity={0.95}
        maxBounds={bounds}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="OpenStreet">
            <TileLayer
              noWrap={false}
              url="https://tile.openstreetmap.org/11/28/77.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite">
            <TileLayer
              noWrap={false}
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/11/28/77.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="Dark">
            <TileLayer
              noWrap={false}
              url="https://{s}.basemaps.cartocdn.com/dark_all/11/28/77/22.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
}

export default Mapper;