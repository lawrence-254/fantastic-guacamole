import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ lat, lng }) => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current && mapContainerRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([lat, lng], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        mapRef.current
      );
      L.marker([lat, lng]).addTo(mapRef.current);

      // Invalidate size to ensure the map renders correctly
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 0);
    } else if (mapRef.current) {
      mapRef.current.setView([lat, lng], 13);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [lat, lng]);

  return (
    <div
      ref={mapContainerRef}
      id="map"
      style={{ width: "95%", height: "87%", borderRadius: "0 24px 24px 0" }}
    ></div>
  );
};

export default Map;
