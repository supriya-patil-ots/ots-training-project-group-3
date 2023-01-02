import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Image, Icon, Grid, Button } from "semantic-ui-react";
import { removeFromCart } from "../../redux/cartReducer";
import "./index.css";

function Cart() {
  const { cartItem } = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  console.log(cartItem);
  return (
    <div className="city-card">
      <Grid doubling stackable columns={4}>
        {Object.keys(cartItem).length > 0 &&
          Object.keys(cartItem).map((city) => {
            return (
              <Grid.Column key={cartItem[city].id}>
                <Card>
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
                      <button
                        className="cart-remove-btn"
                        primary
                        onClick={() =>
                          dispatch(removeFromCart(cartItem[city].id))
                        }
                      >
                        Remove Destination
                      </button>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
      </Grid>
    </div>
  );
}

export default Cart;
