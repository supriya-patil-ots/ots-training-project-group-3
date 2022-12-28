import React from "react";
import "./index.css";
import { Grid, Icon, Image } from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Grid doubling stackable>
          <Grid.Row columns={4}>
            <Grid.Column>
              <div className="footer-child-one">
                <h2>Our Company</h2>
                <ul>
                  <li>About Us</li>

                  <li>Franchise</li>

                  <li>Awards & Accolades</li>

                  <li>Our Reachs</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="footer-child-two">
                <h2>Trending</h2>
                <ul>
                  <li>About Us</li>
                  <li>Franchise</li>
                  <li>Awards & Accolades</li>
                  <li>Our Reachs</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="footer-child-three">
                <h2>Quick Links</h2>

                <ul>
                  <li>About Us</li>
                  <li>Franchise</li>
                  <li>Awards & Accolades</li>
                  <li>Our Reachs</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="footer-child-four">
                <h2>Get In Touch</h2>

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
                    <Icon name="facebook f" color="large" size="large" />
                  </li>

                  <li>
                    <Icon name="mail" color="white" size="large" />
                  </li>
                </ul>

                <p>Awards & Accolades</p>

                <p>Our Reachs</p>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
