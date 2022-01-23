import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState, useCallback } from 'react';
import { ImLocation } from 'react-icons/im';


const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 50.4546,
  lng: 30.5238
};


const positionVorota = {
  lat: 50.4465, 
  lng: 30.5150
}

const positionCum={
  lat: 50.4453,
  lng: 30.5194
}
const positionPinchuk={
  lat: 50.4422, 
  lng: 30.5211
}



function MyMap() {
  const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyDjig4z6QhR6ymOMTIFXLy5zgQFDFw5_sA",
  })

  const [map, setMap] = useState(null)

//   const handleClick = (event) = {
  
// }
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])
// const onLoadMarker = marker => {
//   console.log('marker: ', marker)
// }
  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
     <Marker
          position={positionVorota}
          // onClick={handleClick}
        />
         <Marker
      position={positionCum}
    />
         <Marker
      position={positionPinchuk}
    />
    
        <></>
    </GoogleMap>
    
      </>
  ) : <></>
}

export default React.memo(MyMap)