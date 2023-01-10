import React from "react";
import { Link } from "react-router-dom";
import { Grid, Image, Icon, Card} from "semantic-ui-react";
import { categoryData } from "../../redux/PackagesDataReducer";
import { useDispatch} from "react-redux";
import TopCarousel from "./TopCarousel";
import InternationalData from "./InternationalData";
import unexploredData from "./unexploredData";
import "./index.css";

const packageData = [
  {
    image:
      "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/6555/Phuket%20long%20stay%20Couple.jpg",
    Title: "HONEYMOON",
  },
  {
    image:
      "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1381/Varanasi.jpg",
    Title: "PILGRIMAGE",
  },
  {
    image:
      "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1240/Ranthambore-Family-Getaway-21102016.jpg",
    Title: "WILD ESCAPES",
  },
];

const Packages = () => {
  const dispatch = useDispatch();

  return (
    <>
      <TopCarousel />
      <div className="why-tourmate-section">
        <Grid doubling stackable verticalAlign="middle">
          <Grid.Row columns={5}>
            <Grid.Column>
              <div className="why_tourmate">
                <h2>Why tourmate</h2>
                <p>Assurance,Safety and Reliablity</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="expertise">
                <Image
                  src="https://cdn.pixabay.com/photo/2019/10/14/07/53/travel-4548127_1280.png"
                  size="mini"
                  color="blue"
                />
                <h4> Over Two decades of expertise.</h4>
                <p>With 2 mn+ happy travellers.</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="safety">
                <Icon name="check circle" size="large" />
                <h4> Assurance with Safety..</h4>
                <p> safe holidays with assured stays..</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="reliable">
                <Icon name="sync" size="large" />
                <h4> Reliablity with flexible cancelation.</h4>
                <p> cancel or reschedule your your trips .</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="deals">
                <Icon name="rupee sign" size="large" />
                <h4> Unmatched Pricing.</h4>
                <p> Best deals and offers in the industry</p>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className="packages">
        <Grid doubling verticalAlign="middle" stackable>
          <Grid.Row columns={5}>
            <Grid.Column>
              <Image
                src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/CategorySectionv2.png"
                size="medium"
                color="blue"
                className="package_img"
              />
            </Grid.Column>
            <Grid.Column>
              <div className="explore">
                <h4>EXPLORE</h4>
                <h2 style={{ color: "brown", fontWeight: "bolder" }}>
                  HOLIDAYS
                </h2>
                <h3>BY THEME</h3>
                <p>Pick from our specially curated packages</p>
              </div>
            </Grid.Column>
            {packageData.map((item, index) => {
              return (
                <Grid.Column>
                  <Card>
                    <div className="package-type">
                      <Image src={item.image} color="blue" />
                      <Card.Description className="package_card">
                        <h4> {item.Title}</h4>
                        <Link to={`/packages/${index}`}>
                          <button
                            className="packages_btn"
                            onClick={() => dispatch(categoryData(index))}
                          >
                            See More
                          </button>
                        </Link>
                      </Card.Description>
                    </div>
                  </Card>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </div>
      <div className="international_destinations">
        <h2>International Destinations</h2>
        <p>Now travel the world without any hassle!</p>
        <Grid doubling stackable verticalAlign="middle">
          <Grid.Row columns={5}>
            {InternationalData.map((item) => {
              return (
                <Grid.Column>
                  <div className="package-type">
                    <Image src={item.img} color="blue" />
                    <Card.Description className="package_card">
                      <h4> {item.title}</h4>
                      <p className="desc">
                        starting at <Icon name="rupee" size="small" />
                        {item.price} Per person
                      </p>
                      <Link to="/">
                        <button className="packages_btn">See More</button>
                      </Link>
                    </Card.Description>
                  </div>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </div>
      <div className="unexplored_destinations">
        <h2>Explore the Unexplored</h2>

        <Grid doubling stackable verticalAlign="middle">
          <Grid.Row columns={5}>
            {unexploredData.map((item) => {
              return (
                <Grid.Column>
                  <div className="package-type">
                    <Image src={item.img} color="blue" />
                    <Card.Description className="package_card">
                      <h4> {item.title}</h4>
                      <p className="desc">
                        starting at <Icon name="rupee" size="small" />
                        {item.price} Per person
                      </p>
                      <Link to="/">
                        <button className="packages_btn">See More</button>
                      </Link>
                    </Card.Description>
                  </div>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};

export default Packages;
