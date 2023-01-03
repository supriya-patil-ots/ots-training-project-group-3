import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Segment, Image, Icon } from 'semantic-ui-react';
import Footer from "../Footer";

const Products = () => {
  return (
    <>
      <div style={{ margin: "20px", padding: '10px' }}>
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}>
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
      <div style={{ margin: 10 }}>
        <Segment.Group horizontal size="massive" >
          <Segment textAlign="left">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div>Why tourmate
                <div style={{ fontSize: 'x-small' }}>Assurance,Safety and Reliablity</div>
              </div>
              <div style={{ marginLeft: '50px', marginTop: '2px' }}>
                <Image
                  src="https://cdn.pixabay.com/photo/2019/10/14/07/53/travel-4548127_1280.png"
                  size="mini"
                  color='blue'
                />
              </div>
              <div style={{ marginLeft: 5, fontSize: 'small' }}>
                Over Two decades of expertise.
                <div style={{ fontSize: 'x-small' }}>
                  With 2 mn+ happy travellers.
                </div>
              </div>
              <div style={{ marginLeft: 50 }}>
                <Icon name='check circle' size="large" />
              </div>
              <div style={{ marginLeft: 5, fontSize: 'small' }}>
                Assurance with Safety.
                <div style={{ fontSize: 'x-small' }}>
                  safe holidays with assured stays.
                </div>
              </div>
              <div style={{ marginLeft: 80 }}>
                <Icon name='sync' size="large" />
              </div>
              <div style={{ marginLeft: 5, fontSize: 'small' }}>
                Reliablity with flexible cancelation.
                <div style={{ fontSize: 'x-small' }}>
                  cancel or reschedule your your trips .
                </div>
              </div>
              <div style={{ marginLeft: 90 }}>
                <Icon name='rupee sign' size="large" />
              </div>
              <div style={{ marginLeft: 5, fontSize: 'small' }}>
                Unmatched Pricing.
                <div style={{ fontSize: 'x-small' }}>
                  Best deals and offers in the industry
                </div>
              </div>
            </div>
          </Segment>
        </Segment.Group>
      </div>
      <Footer />
    </>
  );
};

export default Products;



