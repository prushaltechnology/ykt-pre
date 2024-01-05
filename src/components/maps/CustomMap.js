// CustomMap.js

import React, { useEffect } from 'react';

const CustomMap = () => {
  const openMapInNewWindow = () => {
    const mapUrl = `https://maps.app.goo.gl/GmkAgoNqNqNP3QTS8`;
    window.open(mapUrl, '_blank');
  };

  useEffect(() => {
    // Add a click event listener to the map container
    const mapContainer = document.getElementById('map');
    mapContainer.addEventListener('click', openMapInNewWindow);

    // Cleanup the event listener on component unmount
    return () => {
      mapContainer.removeEventListener('click', openMapInNewWindow);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div id="map" style={{ height: '400px', cursor: 'pointer' }}></div>
  );
};

export default CustomMap;
