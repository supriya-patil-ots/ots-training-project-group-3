import React from "react";
import axios from 'axios'


const Home = () => {
  // https://api.unsplash.com/photos/?client_id=DGrUDUd1_szERmrVoNkt0_LyHKBAgI3HJbLT6VpgPqo

  // xaGgQDZA8MdPCaOjGr1ArzuEfWXinxk7
  // 'https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=PAR&maxPrice=200&client_id=  xaGgQDZA8MdPCaOjGr1ArzuEfWXinxk7' 

  axios
  .get('https://api.unsplash.com/search/photos?page=1&query=resorts&client_id=DGrUDUd1_szERmrVoNkt0_LyHKBAgI3HJbLT6VpgPqo')
  .then((data)=>console.log(data)).catch((err)=>console.log(err));

  return <div>Home</div>;
};

export default Home;
