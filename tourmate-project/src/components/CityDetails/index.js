import React from "react";
import { Grid, Segment, Image, Icon } from "semantic-ui-react";
import "./index.css";
import { useSelector } from "react-redux";
import Footer from "../Footer";

const CityDetails = () => {
  const { cartItem } = useSelector((state) => state.cart.data);
  const { imageCollection } = cartItem;
  return (
    <>
      <div>
        <h1>{cartItem.cityName}</h1>
      </div>
      <div>
        <span>
          <span>
            <Icon name="star" />
            {cartItem.rating}
          </span>
          <span>10 reviews, </span>
          <span>{cartItem.cityName} ,</span>
          <span>{cartItem.countryName}</span>
        </span>
      </div>
      <div className="city-details">
        <Grid container stackable columns={3} divided>
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
      <div>
        <h1>
          Spend Your quality time in {cartItem.cityName} ,{" "}
          {cartItem.countryName}
        </h1>
      </div>
      <div>
        <h2>{cartItem.description}</h2>
      </div>
      <div>
        <span>
          <span>12 guests</span>
          <span>10 Bedrooms, </span>
          <span>10 Beds,</span>
          <span>8 Bathrooms</span>
        </span>
      </div>
      <div>
        <p>
          From its mountaintop perch, villa Suralai enjoys incredible views of
          Samui’s lush canopy and the ocean. With six luxurious en-suite
          bedrooms, this contemporary villa is perfect for a family beach
          vacation, a golf trip with friends, and any other occasion worth
          celebrating in style. Nearby, you’ll have no trouble finding plenty of
          pristine beachfront along Chaweng’s coast, as well as golf, shopping,
          restaurants, and adventure tourism. Suralai is the home of the angels
          in Thai mythology, and that is exactly the vibe at this mountaintop
          getaway. Decorated with rich wood tones, sleek and stylish furniture,
          and plenty of floor-to-ceiling glass, Suralai shows off its modern
          contemporary design, while celebrating its beautiful natural
          surroundings. The spacious living room opens to the terrace and a
          spectacular ocean view. An open concept layout encourages a social
          environment, with the main lounge, dining table, and kitchen all
          residing under the wood-paneled, vaulted ceiling. In the kitchen,
          state of the art appliances are seamlessly integrated into the
          functional workspace against the rear wall. Just in front, a
          seven-seat bar with built-in wine coolers separates the kitchen area,
          without closing it off. Outside, Suralai’s covered lounge area is
          sunken to meet the level of the pool’s built-in bar. Whether you feel
          like enjoying a cocktail from a bar stool underwater or keeping dry in
          the lounge, you’ll be able to share the same table with everyone else.
          Inside, Suralai is outfitted with high-end electronics,
          air-conditioned bedrooms, a home gym, and Wi-Fi. The villa is staffed
          with an English speaking manager, maid, handyman, chef that prepares a
          complimentary daily breakfast.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default CityDetails;
