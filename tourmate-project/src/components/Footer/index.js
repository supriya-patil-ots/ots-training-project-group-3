import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Grid, Icon} from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Grid doubling stackable>
          <Grid.Row columns={4}>
            <Grid.Column>
              <div className="footer-child-two">
                <h3>Our Services In India</h3>
                <ul>
                  <Link to="/CityDetails/3">
                    <li>Manali</li>
                  </Link>
                  <Link to="/CityDetails/12">
                    <li>Reis Magos </li>
                  </Link>
                  <Link to="/CityDetails/14">
                    <li>Agra</li>
                  </Link>
                  <Link to="/CityDetails/17">
                    <li>Karnataka</li>
                  </Link>
                  <Link to="/CityDetails/9">
                    <li>Maldives</li>
                  </Link>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="footer-child-three">
                <h3>Quick Links</h3>

                <ul>
                  <Link to="/">
                    <li>Trending Destinations</li>
                  </Link>
                  <Link to="/packages">
                    <li>Packages</li>
                  </Link>
                  <Link to="/city">
                    <li>City</li>
                  </Link>
                  <Link to="/contact">
                    <li>Contact</li>
                  </Link>
                  <Link to="/wishlist">
                    <li>Wishlist</li>
                  </Link>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="footer-child-three">
                <h3>Our Packages</h3>

                <ul>
                  <Link to="/packages/0">
                    <li>Honeymoon</li>
                  </Link>
                  <Link to="/packages/1">
                    <li>Pilgrimage</li>
                  </Link>
                  <Link to="/packages/2">
                    <li>Wild Escapes</li>
                  </Link>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="footer-child-four">
                <h2>Follow us on:</h2>

                <ul className="social-icon">
                  <li>
                    <Icon
                      name="instagram"
                      size="large"
                      inverted
                      color="white"
                    />
                  </li>

                  <li>
                    <Icon name="facebook f" color="white" size="large" />
                  </li>

                  <li>
                    <Icon name="mail" color="white" size="large" />
                  </li>
                </ul>

                <p>
                  <Icon
                    name="phone"
                    color="white"
                    size="small"
                    flipped="horizontally"
                  />
                  :(972) 454-4888
                </p>

                <p>
                  <Icon
                    name="map marker alternate"
                    color="white"
                    size="small"
                  />
                  :16,Bootstrat,4th floar,
                  <br />
                  &nbsp; &nbsp; &nbsp;City Vista,Kharadi,pune.
                </p>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className="foote_end">
        <p>© 2023 Tourmate.com.All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
