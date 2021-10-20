import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: 23.758427,
    lng: 90.411644,
  };

const Map = () => {
    return (
       <LoadScript
         myGooogleMapsApiKey = " "
       >
      <GoogleMap 
        mapContainerStyle={containerStyle}
        center ={center}
        zoom ={20}
      ></GoogleMap>
      <>
        
      </>

       </LoadScript>
    );
};

export default Map;