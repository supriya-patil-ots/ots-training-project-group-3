import React, { useEffect, useState } from "react";
import axios from "axios";
import CityCardProduct from "../CityCardProduct";
import CityData from "../Data/CityData";
import GoogleMapContainer2 from "../Map/GoogleMapsContainerComponent2";
import { Button, Icon } from "semantic-ui-react";
import "./index.css";
const Home = () => {
  const [showButtonText, setShowButtonText] = useState("Show Map");

  let data1 = [];
  let newCoords = CityData.map((city) => {
    let querry = city.cityName.toLowerCase();
    for (let i = 0; i < 2; i++) {
      let data = axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          querry +
          "&appid=39a4ebd67c8aae0b7021e69ff34c45d7&units=metric"

      )
      .then((data) =>
        data1.push({ lat: data.data.coord.lat, lng: data.data.coord.lon })
      )
      .catch((err) => console.log(err));
      return data;
    }
  });

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
      {showButtonText === "Show Cards" && <GoogleMapContainer2 arr={data1} />}
    </div>
  );
};

export default Home;
