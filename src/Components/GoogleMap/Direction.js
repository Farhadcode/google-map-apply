import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const mapStyle = {
    height: '100vh',
    width: '100%'
}
const location = {
    lat: 23.758427,
    lng: 90.411644,
}
const Direction = () => {

    const [response, setResponse] = useState(null);
    const directionsCallback = (res) => {
        if (res !== null) {
            setResponse(res);
        }

    }

    return (
        <div>
            <LoadScript
                myGooogleMapsApiKey=" amr personasl APi link use kortay hobay "
            >
                <GoogleMap
                    id='direction-example'
                    mapContainerStyle={mapStyle}
                    zoom={14}
                    center={location}
                >
                    {
                        <DirectionsService
                            //  location how to you go  
                            options={{
                                destination: 'gulshan 1',
                                origin: 'mirpur',
                                travelMode: 'DRIVING'
                            }}

                            callback={directionsCallback}

                        />

                    }

                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{
                                    directions: response
                                }}
                                // optional
                                onLoad={directionsRenderer => {
                                    console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                                }}
                                // optional
                                onUnmount={directionsRenderer => {
                                    console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                                }}
                            />
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Direction;