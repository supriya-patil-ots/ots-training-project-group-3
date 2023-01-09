import React, { useEffect, useState } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

const GoogleMapContainer2 = ({ arr }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (arr.length > 0) {
      setData(arr);
    }
  }, [arr]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBmc9trQvqHIrTShvRAb0MoHOFZzzKB5GY",
  });

  if (isLoaded) {
    return (
      <>
        <GoogleMap
          zoom={3}
          center={{ lat: 28.70406, lng: 77.102493 }}
          mapContainerStyle={{ height: "80vh", width: "95%", margin: 30 }}
        >
          {data.length > 0 &&
            data.map((location) => {
             return <MarkerF position={location} />;
            })}
        </GoogleMap>
      </>
    );
  }
};
export default GoogleMapContainer2;
