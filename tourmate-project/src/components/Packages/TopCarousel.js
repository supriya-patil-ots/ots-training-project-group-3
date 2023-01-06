import React from "react";
import { Carousel } from "react-responsive-carousel";
function TopCarousel() {
  return (
    <div style={{}}>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
      >
        <div>
          <img src=" https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/Sun-SationalEurope1_1200x320_27Dec_Desktop.jpg?crop=1282:342" />
        </div>
        <div>
          <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/Vh1Supersonic_1200x320_15Dec.jpg?crop=1200:320" />
        </div>
        <div>
          <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/HoneymoonPackage_1200x320_22Aug.jpg?crop=1200:320" />
        </div>
        <div>
          <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/Thailand_1200x320_26Dec.jpg?crop=1200:320" />
        </div>
        <div>
          <img src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/heroBannerImages/Mauritius_1200x320_23Dec.jpg?crop=1200:320" />
        </div>
      </Carousel>
    </div>
  );
}

export default TopCarousel;
