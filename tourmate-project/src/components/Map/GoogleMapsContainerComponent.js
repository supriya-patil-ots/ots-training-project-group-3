import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

const GoogleMapContainer = ({ currentLocation }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBmc9trQvqHIrTShvRAb0MoHOFZzzKB5GY",
  });

  if (isLoaded) {
    return (
      <GoogleMap
        zoom={10}
        center={currentLocation}
        mapContainerStyle={{ height: "70vh", width: "85%",marginLeft:100 }}
      >
        <MarkerF position={currentLocation} />
      
      </GoogleMap>
    );
  }
};

export default GoogleMapContainer;