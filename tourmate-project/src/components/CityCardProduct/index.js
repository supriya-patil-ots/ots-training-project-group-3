import React from "react";
import CityData from "../MockCityData";
import { Card, Image, Icon, Grid } from "semantic-ui-react";
import "./index.css";

const CityCardProduct = () => {
  return (
    <div className="city-card">
      <Grid container doubling stackable columns={4}>
        {CityData.length > 0 &&
          CityData.map((city) => {
            return (
              <>
                <Grid.Column>
                  <Card>
                    <Image src={city.cityimage} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{city.name}</Card.Header>
                      <Card.Description>{city.desc}</Card.Description>
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
                  </Card>
                </Grid.Column>
              </>
            );
          })}
      </Grid>
    </div>
  );
};

export default CityCardProduct;
