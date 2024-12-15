import React from 'react';

const GoogleMap: React.FC = () => {
  // Coordenadas de ejemplo (Madrid, España)
  const location = {
    address: 'Calle de Example 123, Madrid, España',
    lat: 40.4168,
    lng: -3.7038
  };

  return (
    <div className="map-container" id="Contacto">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6167761435297!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzAwLjQiTiAzwrA0MicxMy43Ilc!5e0!3m2!1ses!2ses!4v1635959876543!5m2!1ses!2ses`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de FitTracking"
      />
      <a 
        href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
        className="map-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir en Google Maps"
      />
    </div>
  );
};

export default GoogleMap;