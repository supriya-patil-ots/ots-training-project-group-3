import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cityDetailData } from "../../redux/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer";
import CityData from "../Data/CityData";
import { Card, Image, Icon, Grid } from "semantic-ui-react";
import Whishlist from "../whislist-Icon";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./index.css";
const City = () => {
  const data1 = useSelector((state) => state.search.data);
  const [cityList, setCityList] = useState([]);
  const [searchCityData, setSearchCityData] = useState([]);
  const [sortedCityList, setSortedCityList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data1 != "") {
      const filteredData = CityData.filter((city) =>
        city.cityName.toLowerCase().includes(data1)
      );
      setSearchCityData(filteredData);
    }
  }, [data1]);

  useEffect(() => {
    setCityList(CityData);
  }, []);

  useEffect(() => {
    if (cityList.length > 0) {
      const newData = cityList.sort(function (a, b) {
        let x = a.cityName.toLowerCase();
        let y = b.cityName.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
      setSortedCityList(newData);
    }
  }, [cityList]);

  // --------------------- done sorting ----------------

  //  setCityList(newData)

  return (
    <>
      <div className="city-card">
        {data1 ? <Grid doubling stackable columns={4}>
          {searchCityData.length > 0 &&
            searchCityData.map((city, index) => {
              return (
                <>
                  <Grid.Column>
                    <Card key={index}>
                      <Whishlist productData={city} />
                      <Carousel verticalSwipe="standard" showStatus={false}>
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
          : <Grid doubling stackable columns={4}>
            {sortedCityList.length > 0 &&
              sortedCityList.map((city, index) => {
                return (
                  <>
                    <Grid.Column>
                      <Card key={index}>
                        <Whishlist productData={city} />
                        <Carousel verticalSwipe="standard" showStatus={false}>
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
        }
      </div>
      <Footer />
    </>
  );
};

export default City;
