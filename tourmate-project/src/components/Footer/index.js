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
                <h2>Lorem Ipsum</h2>
                <ul>
                  <li>Lorem Ipsum</li>

                  <li>Lorem Ipsum</li>

                  <li>Lorem Ipsum</li>

                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="footer-child-two">
                <h2>Lorem Ipsum</h2>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="footer-child-three">
                <h2>Lorem Ipsum</h2>

                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="footer-child-four">
                <h2>Lorem Ipsum</h2>

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

                <p>Lorem Ipsum</p>

                <p>Lorem Ipsum</p>
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
