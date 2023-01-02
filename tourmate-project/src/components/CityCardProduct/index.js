import React from "react";
import { Link } from "react-router-dom";
import CityData from "../Data/CityData";
import { Card, Image, Icon, Grid } from "semantic-ui-react";
import Whishlist from "../whislist-Icon";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./index.css";

const CityCardProduct = () => {
  return (
    <div className="city-card">
      <Grid doubling stackable columns={4}>
        {CityData.length > 0 &&
          CityData.map((city, index) => {
            return (
              <>
                <Grid.Column>
                  <Card key={city.id}>
                    <Whishlist productData={city} />
                    <Carousel verticalSwipe="standard">
                      {city.imageCollection.map((item) => (
                        <Image src={item} wrapped ui={false} />
                      ))}
                    </Carousel>
                    <Link to={`/CityDetails/${index}`}>
                      <Card.Content>
                        <Card.Header>
                          <p>
                            {city.cityName} , {city.countryName}
                          </p>
                          <p>
                            <Icon name="star" size="small" />
                            {city.rating}
                          </p>
                        </Card.Header>
                        <Card.Description>{city.description}</Card.Description>
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
              </>
            );
          })}
      </Grid>
    </div>
  );
};
document.querySelector(".demo-carousel");
export default CityCardProduct;
