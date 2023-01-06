import React from "react";
import "./index.css";
import { Grid, Icon, Image } from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Grid doubling stackable>
          <Grid.Row columns={3}>
            <Grid.Column>
              <div className="footer-child-two">
                <h3>Our Services In India</h3>
                <ul>
                  <li>Manali</li>
                  <li>Agonda</li>
                  <li>Agra</li>
                  <li>Karnataka</li>
                  <li>Maldives</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="footer-child-three">
                <h3>Quick Links</h3>

                <ul>
                  <li>Trending Destinations</li>
                  <li>Packages</li>
                  <li>City</li>
                  <li>Wishlist</li>
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
