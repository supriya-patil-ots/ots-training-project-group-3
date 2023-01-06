import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Image, Icon, Grid, Button } from "semantic-ui-react";
import { removeFromCart } from "../../redux/cartReducer";
import "./index.css";
import { Link } from "react-router-dom";


function Wishlist() {
  const { cartItem } = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  return (
    <div className="wishlist-card">
    <div className="city-card">
      <Grid doubling stackable columns={4}>
        {Object.keys(cartItem).length > 0 &&
          Object.keys(cartItem).map((city) => {
            return (
              <Grid.Column>
                <Card key={cartItem[city].id}>
                  <Link to={`/CityDetails/${cartItem[city].id}`}>
                    <Image src={cartItem[city].imageMain} wrapped ui={false} />
                  </Link>
                  <Card.Content>

                    <Card.Header>
                      <Link to={`/CityDetails/${cartItem[city].id}`}>
                        <p>
                          {cartItem[city].cityName} , {cartItem[city].countryName}
                        </p>
                        <p>
                          <Icon name="star" size="small" />
                          {cartItem[city].rating}
                        </p>
                      </Link>
                    </Card.Header>
                    <Card.Description>
                    <Link to={`/CityDetails/${cartItem[city].id}`}>
                    {cartItem[city].description}
                    </Link>
                    </Card.Description>
                    <Card.Meta>
                    <Link to={`/CityDetails/${cartItem[city].id}`}>
                    <span className="date">{cartItem[city].date}</span>
                    </Link>
                    </Card.Meta>
                    <Card.Description style={{ color: "white" }}>
                    <Link to={`/CityDetails/${cartItem[city].id}`}>
                    <span className="date">
                        <Icon name="rupee sign" size="small" />
                        {cartItem[city].price} night
                      </span>
                    </Link>
                      <Button
                        className="cart-remove-btn"
                        secondary
                        onClick={() =>
                          dispatch(removeFromCart(cartItem[city].id))
                        }
                        style={{ marginLeft: '20px', width: '120px', padding: '2px' }}
                      >
                        Remove Destination
                      </Button>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
      </Grid>
    </div>
    </div>
  );
}

export default Wishlist;
