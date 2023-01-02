import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Segment, Image } from "semantic-ui-react";
import CityData from "../Data/CityData";

import "./index.css";

const CityDetails = () => {
  const { id } = useParams();
  const {
    countryName,
    cityName,
    rating,
    description,
    date,
    imageMain,
    imageCollection,
    price,
  } = CityData[id];
  return (
    <div className="city-details">
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <Image src={imageCollection[0]} wrapped ui={false} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Image src={imageCollection[1]} wrapped ui={false} />
            </Segment>
            <Segment>
              <Image src={imageCollection[2]} wrapped ui={false} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Image src={imageCollection[3]} wrapped ui={false} />
            </Segment>
            <Segment>
              <Image src={imageCollection[4]} wrapped ui={false} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default CityDetails;
