import { useMap } from "react-leaflet";
import { useEffect } from "react";

const FocusHandler = ({ focusedDistrict }) => {
    const map = useMap();

    useEffect(() => {
        if (focusedDistrict) {
            map.setView([focusedDistrict.latitude, focusedDistrict.longitude], 9); // Zoom to district
        }
    }, [focusedDistrict, map]);

    return null;
};

export default FocusHandler;
