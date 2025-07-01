import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerIconRedPng from "../../assets/marker-icon-red.png";
import districts from '../../assets/warehouses.json';
import FocusHandler from "./FocusHandler";


const DefaultIcon = L.icon({
  iconUrl: markerIconPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "leaflet/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const FocusedIcon = L.icon({
  iconUrl: markerIconRedPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "leaflet/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});


const BangladeshMap = ({ focusedDistrict }) => {
    const center = [23.685, 90.3563]; // Approx center of Bangladesh

    console.log(focusedDistrict);

    return (
        <div className="h-96 w-full rounded-lg overflow-hidden">
            <MapContainer center={center} zoom={7} scrollWheelZoom={false} className="h-full w-full">

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Focus logic inside valid context */}
                {focusedDistrict && <FocusHandler focusedDistrict={focusedDistrict} />}

                {districts.map((district, idx) => {
                    const isFocused = focusedDistrict && district.district.toLowerCase() === focusedDistrict.district.toLowerCase();

                    return (
                        <Marker
                            key={idx}
                            position={[district.latitude, district.longitude]}
                            icon={isFocused ? FocusedIcon : DefaultIcon}
                        >
                            <Popup>
                                <strong>{district.district}</strong><br />
                                Region: {district.region} <br />
                                Covered Areas: {district.covered_area.join(', ')} <br />
                                <a href={district.flowchart} target="_blank" rel="noreferrer">
                                    View Flowchart
                                </a>
                            </Popup>
                        </Marker>
                    );
                })}

            </MapContainer>
        </div>
    );
};

export default BangladeshMap;
