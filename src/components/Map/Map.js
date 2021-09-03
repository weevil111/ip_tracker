import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from "leaflet"
import icon from "../../assets/icon-location.svg"

function Map() {
  const customMarker = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(35, 45),
    className: ''
  });
  const position = [51.505, -0.09]
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "64vh" }}
    >
      <TileLayer
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=9AQA3kM6G5K9AzVv0GqW"
      />
      <Marker position={[51.505, -0.09]} icon={customMarker}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
