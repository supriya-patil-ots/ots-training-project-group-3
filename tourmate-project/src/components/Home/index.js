import React from "react";
import axios from "axios";
import CityCardProduct from "../CityCardProduct";
import Footer from "../Footer";

const Home = () => {
  // // https://api.unsplash.com/photos/?client_id=DGrUDUd1_szERmrVoNkt0_LyHKBAgI3HJbLT6VpgPqo

  // // xaGgQDZA8MdPCaOjGr1ArzuEfWXinxk7
  // // 'https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200&client_id=  xaGgQDZA8MdPCaOjGr1ArzuEfWXinxk7'

  // axios
  //   .get(
  //     "https://api.unsplash.com/search/photos?page=1&query=resorts&client_id=DGrUDUd1_szERmrVoNkt0_LyHKBAgI3HJbLT6VpgPqo"
  //   )
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));

  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng',
    params: {
      longitude: '109.19553',
      latitude: '12.235588',
      lunit: 'km',
      currency: 'USD',
      lang: 'en_US'
    },
    headers: {
      'X-RapidAPI-Key': 'a65a80bf25msh93c3ec85e82fac8p1d2ceejsnb7a5bc014cd5',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  return (
    <div>
      <CityCardProduct />
      <Footer />
    </div>
  );
};

export default Home;
