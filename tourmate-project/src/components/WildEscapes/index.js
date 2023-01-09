import React from "react";
import Footer from "../Footer";
import PackageData from "../packageData";
import { Link } from "react-router-dom";
import { Card, Image, Icon, Grid } from "semantic-ui-react";
import Whishlist from "../whislist-Icon";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./index.css";

const HoneymoonPackage = () => {
  const WildEscape = PackageData.category[0].data[2];
  console.log(Honeymoon);
  return (
    <>
      <div className="honeymoon">
        <Grid doubling stackable columns={4}>
          {WildEscape.length > 0 &&
            Honeymoon.map((city, index) => {
              return (
                <Grid.Column>
                  <Card key={index}>
                    <Whishlist productData={city} />
                    <Carousel verticalSwipe="standard" showStatus={false}>
                      {city.imageCollection.map((item) => (
                        <Link to={`/CityDetails/${city.id}`}>
                          <Image src={item} wrapped ui={false} />
                        </Link>
                      ))}
                    </Carousel>
                    <Link to={`/CityDetails/${city.id}`}>
                      <Card.Content>
                        <Card.Header>
                          <h3>
                            {city.cityName} , {city.countryName}
                          </h3>
                          <p>
                            <Icon name="star" size="small" />
                            {city.rating}
                          </p>
                        </Card.Header>
                        <Card.Description className="disc desc">
                          {city.description}
                        </Card.Description>
                        <Card.Meta>
                          <span className="date">{city.date}</span>
                        </Card.Meta>
                        <Card.Description>
                          <span className="date">
                            <Icon name="rupee sign" size="small" />
                            {city.price} night
                          </span>
                        </Card.Description>
                      </Card.Content>
                    </Link>
                  </Card>
                </Grid.Column>
              );
            })}
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default HoneymoonPackage;
