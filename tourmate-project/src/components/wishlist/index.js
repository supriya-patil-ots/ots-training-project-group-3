import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Image, Icon, Grid, Button } from "semantic-ui-react";
import { cityDetailData, removeFromCart } from "../../redux/cartReducer";
import "./index.css";
import { Link } from "react-router-dom";

function Wishlist() {
  const { cartItem } = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  return (
    <div className="city-card">
      <Grid doubling stackable columns={4}>
        {Object.keys(cartItem).length > 0 &&
          Object.keys(cartItem).map((city) => {
            return (
              <Grid.Column key={cartItem[city].id}>
                {/* <Link to="/CityDetails"> */}
                <Card  onClick={() => {
                              dispatch(cityDetailData(cartItem[city]));
                            }}>
                  <Image src={cartItem[city].imageMain} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>
                      <p>
                        {cartItem[city].cityName} , {cartItem[city].countryName}
                      </p>
                      <p>
                        <Icon name="star" size="small" />
                        {cartItem[city].rating}
                      </p>
                    </Card.Header>
                    <Card.Description>
                      {cartItem[city].description}
                    </Card.Description>
                    <Card.Meta>
                      <span className="date">{cartItem[city].date}</span>
                    </Card.Meta>
                    <Card.Description style={{ color: "white" }}>
                      <span className="date">
                        <Icon name="rupee sign" size="small" />
                        {cartItem[city].price} night
                      </span>
                      <br />
                      <Button
                        className="cart-remove-btn"
                        primary
                        onClick={() =>
                          dispatch(removeFromCart(cartItem[city].id))
                        }
                      >
                        Remove Destination
                      </Button>
                    </Card.Description>
                  </Card.Content>
                </Card>
                {/* </Link> */}
              </Grid.Column>
            );
          })}
      </Grid>
    </div>
  );
}

export default Wishlist;
