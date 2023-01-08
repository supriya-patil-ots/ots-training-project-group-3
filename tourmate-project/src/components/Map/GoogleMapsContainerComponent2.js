import React, { useEffect, useState } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

const GoogleMapContainer2 = ({ arr }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (arr.length > 0) {
      setData(arr);
    }
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBmc9trQvqHIrTShvRAb0MoHOFZzzKB5GY",
  });

  if (isLoaded) {
    return (
      <>
        <GoogleMap
          zoom={3}
          center={arr[6]}
          mapContainerStyle={{ height: "80vh", width: "95%", margin: 30 }}
        >
          {data.map((location) => {
            <MarkerF position={location}  />;
          })}
        </GoogleMap>
      </>
    );
  }
};
export default GoogleMapContainer2;
