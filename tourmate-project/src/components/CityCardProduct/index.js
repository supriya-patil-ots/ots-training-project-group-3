import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Icon, Grid } from "semantic-ui-react";
import Whishlist from "../whislist-Icon";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./index.css";
import { useSelector } from "react-redux";

const CityCardProduct = () => {
  const data1 = useSelector((state) => state.search.data);
  const CityData = useSelector((state) => state.cityData.data);
  const [searchCityData, setSearchCityData] = useState([]);
  useEffect(() => {
    if (data1) {
      const filteredData = CityData.filter((city) =>
        city.cityName.toLowerCase().includes(data1.toLowerCase())
      );
      setSearchCityData(filteredData);
    }
  }, [data1]);

  return (
    <div className="city-card">
      {data1 ? (
        <Grid doubling stackable columns={4}>
          {searchCityData.length > 0 &&
            searchCityData.map((city, index) => {
              return (
                <>
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
                            <p>
                              <b>
                                {city.cityName} , {city.countryName}
                              </b>
                            </p>
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
                </>
              );
            })}
        </Grid>
      ) : (
        <Grid doubling stackable columns={4}>
          {CityData.length > 0 &&
            CityData.map((city, index) => {
              return (
                <>
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
                              <b>
                                {city.cityName} , {city.countryName}
                              </b>
                            </h3>
                            <p>
                              <Icon name="star" size="small" />
                              {city.rating}
                            </p>
                          </Card.Header>
                          <Card.Description className="desc disc">
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
      )}
    </div>
  );
};
document.querySelector(".demo-carousel");
export default CityCardProduct;
