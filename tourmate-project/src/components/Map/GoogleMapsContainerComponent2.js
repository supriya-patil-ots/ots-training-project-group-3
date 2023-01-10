import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import data from "./Coordinates";

const GoogleMapContainer2 = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBmc9trQvqHIrTShvRAb0MoHOFZzzKB5GY",
  });

  if (isLoaded) {
    return (
      <>
        {data.length > 0 && <GoogleMap
          zoom={3}
          center={data[4]}
          mapContainerStyle={{ height: "80vh", width: "95%", margin: 30 }}
        >
          {
            data.map((location) => {
              return <MarkerF position={location} />;
            })}
        </GoogleMap>}
      </>
    );
  }
};
export default GoogleMapContainer2;
