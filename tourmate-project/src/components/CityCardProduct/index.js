import React from "react";
import { Link } from "react-router-dom";
import CityData from "../Data/CityData";
import { Card, Image, Icon, Grid } from "semantic-ui-react";
import Whishlist from "../whislist-Icon";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./index.css";
import { cityDetailData } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

const CityCardProduct = () => {
  const dispatch = useDispatch();
  return (
    <div className="city-card">
      <Grid doubling stackable columns={4}>
        {CityData.length > 0 &&
          CityData.map((city, index) => {
            return (
              <>
                <Grid.Column>
                  <Card key={index}>
                    <Whishlist productData={city} />
                    <Carousel verticalSwipe="standard">
                      {city.imageCollection.map((item) => (
                        <Link to="/CityDetails">
                          <Image
                            src={item}
                            wrapped
                            ui={false}
                            onClick={() => {
                              dispatch(cityDetailData(city));
                            }}
                          />
                        </Link>
                      ))}
                    </Carousel>
                    <Link to="/CityDetails">
                      <Card.Content
                        onClick={() => {
                          dispatch(cityDetailData(city));
                        }}
                      >
                        <Card.Header>
                          <p>
                            {city.cityName} , {city.countryName}
                          </p>
                          <p>
                            <Icon name="star" size="small" />
                            {city.rating}
                          </p>
                        </Card.Header>
                        <Card.Description className="desc">
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
              </>
            );
          })}
      </Grid>
    </div>
  );
};
document.querySelector(".demo-carousel");
export default CityCardProduct;
