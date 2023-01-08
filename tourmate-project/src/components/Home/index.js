import React, { useEffect, useState } from "react";
import axios from "axios";
import CityCardProduct from "../CityCardProduct";
import Footer from "../Footer";
import CityData from "../Data/CityData";
import GoogleMapContainer2 from "../Map/GoogleMapsContainerComponent2";
import { Button } from "semantic-ui-react";

const Home = () => {
  const [showButtonText, setShowButtonText] = useState("Show Map");

  let data1 = [];
  let newCoords = CityData.map((city) => {
    let querry = city.cityName.toLowerCase();
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
  });

  return (
    <div>
      {showButtonText === "Show Map" && (
        <Button
          onClick={() => setShowButtonText("Show Cards")}
          secondary
          circular
          style={{ margin: 5 }}
        >
          {showButtonText}
        </Button>
      )}

      {showButtonText === "Show Map" && <CityCardProduct />}
      {showButtonText === "Show Cards" && (
        <Button
          onClick={() => setShowButtonText("Show Map")}
          secondary
          circular
          style={{ margin: 5 }}
        >
          {showButtonText}
        </Button>
      )}
      {showButtonText === "Show Cards" && <GoogleMapContainer2 arr={data1} />}

      <Footer />
    </div>
  );
};

export default Home;
