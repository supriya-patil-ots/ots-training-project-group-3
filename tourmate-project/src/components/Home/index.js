import React, {useState } from "react";
import CityCardProduct from "../CityCardProduct";
import GoogleMapContainer2 from "../Map/GoogleMapsContainerComponent2";
import { Button, Icon } from "semantic-ui-react";
import "./index.css";
const Home = () => {
  const [showButtonText, setShowButtonText] = useState("Show Map");

  return (
    <div>
      {showButtonText === "Show Map" && (
        <Button
          onClick={() => setShowButtonText("Show Cards")}
          secondary
          circular
          className="map_btn"
        >
          <Icon name="map" size="small" />
          {showButtonText}
        </Button>
      )}

      {showButtonText === "Show Map" && <CityCardProduct />}
      {showButtonText === "Show Cards" && (
        <Button
          className="map-btn"
          onClick={() => setShowButtonText("Show Map")}
          secondary
          circular
          style={{ margin: 5 }}
        >
          {showButtonText}
        </Button>
      )}
      {showButtonText === "Show Cards" && <GoogleMapContainer2 />}
    </div>
  );
};

export default Home;
