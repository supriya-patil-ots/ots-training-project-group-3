import React, { useEffect } from "react";
import { Grid, Segment, Image, Icon, Button, Popup } from "semantic-ui-react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Counter from "../Counter";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import { cityDetailData } from "../../redux/cityDetailReducer";
import axios from "axios";
import GoogleMapContainer from "../Map/GoogleMapsContainerComponent";


const reviewData = [
  {
    image:
      "https://a0.muscache.com/im/pictures/user/82c5778b-22f2-4877-a4fb-59435681d8b6.jpg?im_w=240",
    name: "Jike",
    testimonial: "Staff was really friendly and super helpful!",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/user/be661b43-87af-411a-a991-18f48be33fcc.jpg?im_w=240",
    name: "Rahul",
    testimonial: "smooth checking",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/user/f102d11d-b817-4614-92b4-aa1f4ba7ed9f.jpg?im_w=240",
    name: "Nitish",
    testimonial: "Really clean and cozy place!",
  },
];

const CityDetails = () => {
  const { id } = useParams();
  const cartItem = useSelector((state) => state.cityDetail.data);
  const { imageCollection } = cartItem;
  const [buttonText, setButtonText] = useState("Reserve");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guest, setGuest] = useState({ adult: 0, child: 0, infant: 0 });
  const [position, setPosition] = useState({ lat: null, lng: null });
 

  // open weather map code -----------------------

  let cityInfo = "";
  if (Object.keys(cartItem).length > 0) {
    cityInfo = cityInfo.concat(cartItem.cityName.toLowerCase());
  }

  useEffect(() => {
    if (cityInfo) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityInfo}&appid=877ea5d6c238269928dee4b65e6858a3&units=metric`
        )
        .then((data) => {
          setPosition({
            lat: data.data.coord.lat,
            lng: data.data.coord.lon,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [cityInfo]);

  let daysToStay = endDate.getDate() - startDate.getDate();
  let totalNightsPrice = cartItem.price * daysToStay;

  const handleCounter = (of, counter) => {
    const newGuest = { ...guest };
    newGuest[of] = counter;
    setGuest(newGuest);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(cityDetailData(id));
    }
  }, []);

  return (
    <>
      {Object.keys(cartItem).length > 0 && (
        <div className="city_details">
          <div className="details_name">
            <h2>{cartItem.cityName}</h2>
          </div>
          <div className="city_details_heading">
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
          <div className="city-details-grid">
            <Grid stackable columns={3} divided>
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
          <div className="city_details_desc_section">
            <Grid divided="vertically" container stackable>
              <Grid.Column width={10}>
                <div className="details_desc">
                  <h3>
                    <span style={{ color: "#8c8c8c", paddingRight: "5px" }}>
                      Spend Your quality time in
                    </span>
                    {cartItem.cityName}&nbsp;
                    {cartItem.countryName}
                  </h3>
                  <p className="sub_head">{cartItem.description}</p>

                  <span>
                    <span>12 guests</span>
                    <span>10 Bedrooms, </span>
                    <span>10 Beds,</span>
                    <span>8 Bathrooms</span>
                  </span>

                  <p>
                    From its mountaintop perch, villa Suralai enjoys incredible
                    views of Samui’s lush canopy and the ocean. With six
                    luxurious en-suite bedrooms, this contemporary villa is
                    perfect for a family beach vacation, a golf trip with
                    friends, and any other occasion worth celebrating in style.
                    Nearby, you’ll have no trouble finding plenty of pristine
                    beachfront along Chaweng’s coast, as well as golf, shopping,
                    restaurants, and adventure tourism. Suralai is the home of
                    the angels in Thai mythology, and that is exactly the vibe
                    at this mountaintop getaway. Decorated with rich wood tones,
                    sleek and stylish furniture, and plenty of floor-to-ceiling
                    glass, Suralai shows off its modern contemporary design,
                    while celebrating its beautiful natural surroundings. The
                    spacious living room opens to the terrace and a spectacular
                    ocean view. An open concept layout encourages a social
                    environment, with the main lounge, dining table, and kitchen
                    all residing under the wood-paneled, vaulted ceiling. In the
                    kitchen, state of the art appliances are seamlessly
                    integrated into the functional workspace against the rear
                    wall. Just in front, a seven-seat bar with built-in wine
                    coolers separates the kitchen area, without closing it off.
                    Outside, Suralai’s covered lounge area is sunken to meet the
                    level of the pool’s built-in bar. Whether you feel like
                    enjoying a cocktail from a bar stool underwater or keeping
                    dry in the lounge, you’ll be able to share the same table
                    with everyone else. Inside, Suralai is outfitted with
                    high-end electronics, air-conditioned bedrooms, a home gym,
                    and Wi-Fi. The villa is staffed with an English speaking
                    manager, maid, handyman, chef that prepares a complimentary
                    daily breakfast.
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column width={6}>
                <div className="booking_section">
                  <div className="booking_card">
                    <div className="heading">
                      <div className="pricing">
                        <p>
                          <Icon name="rupee sign" />
                          <b>{cartItem.price} </b>night
                        </p>
                      </div>
                      <div className="rating_review">
                        <span>
                          <Icon name="star" />
                          <b> {cartItem.rating}</b>
                        </span>
                        <span> . 10 reviews, </span>
                      </div>
                    </div>
                    <div className="booking">
                      <div className="booking_date">
                        <p className="first_date">
                          <span>Check In</span>
                          <DatePicker
                            selected={startDate}
                            value={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </p>
                        <p className="second_date">
                          <span>Check Out</span>
                          <DatePicker
                            selected={endDate}
                            value={endDate}
                            onChange={(date) => setEndDate(date)}
                          />
                        </p>
                      </div>
                      <Popup
                        on="click"
                        pinned
                        position="bottom center"
                        trigger={
                          <Button className="drop_down" value="Guest">
                            {guest.adult +
                              " adult," +
                              guest.child +
                              " child," +
                              guest.infant +
                              " infant."}
                          </Button>
                        }
                      >
                        <Grid centered divided columns={2}>
                          <Grid.Row textAlign="center">
                            <Grid.Column>
                              <h4>Adults</h4>
                              <p>Age 13+</p>
                            </Grid.Column>
                            <Grid.Column>
                              <Counter
                                of={"adult"}
                                handleCounter={handleCounter}
                              />
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row textAlign="center">
                            <Grid.Column>
                              <h4>Children</h4>
                              <p>Age 2-12</p>
                            </Grid.Column>
                            <Grid.Column>
                              <Counter
                                of={"child"}
                                handleCounter={handleCounter}
                              />
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row textAlign="center">
                            <Grid.Column>
                              <h4>Infants</h4>
                              <p>Age 0-2</p>
                            </Grid.Column>
                            <Grid.Column>
                              <Counter
                                of={"infant"}
                                handleCounter={handleCounter}
                              />
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </Popup>
                    </div>
                    {daysToStay === 0 ? (
                      <Button
                        className="check-availability-btn"
                        content="Check Availablity"
                        style={{ background: "#01afd1" }}
                        circular
                      />
                    ) : (
                      <Button
                        content={buttonText}
                        style={{ background: "#01afd1" }}
                        circular
                        onClick={() => setButtonText("Destination Booked")}
                      />
                    )}
                    {daysToStay > 0 && (
                      <div>
                        <div className="pricing">
                          <h3>
                            <Icon name="rupee sign" />
                            {cartItem.price}
                            <Icon name="close" size="tini" />
                            {daysToStay} night
                          </h3>

                          <h3>
                            <Icon name="rupee sign" />
                            {totalNightsPrice}
                          </h3>
                        </div>
                        <div className="pricing">
                          <h3>Long Stay Discount </h3>
                          <strike>
                            <h3>
                              -<Icon name="rupee sign" />
                              {(totalNightsPrice * 20) / 100}
                            </h3>
                          </strike>
                        </div>
                        <div className="pricing">
                          <h3>Service Charge.. </h3>
                          <h3>
                            +<Icon name="rupee sign" />
                            {(totalNightsPrice * 17) / 100}
                          </h3>
                        </div>
                        <div className="pricing">
                          <h3>Total Amount to pay </h3>
                          <h3>
                            <Icon name="rupee sign" />
                            {Math.ceil(
                              totalNightsPrice +
                                (totalNightsPrice * 17) / 100 -
                                (totalNightsPrice * 20) / 100
                            )}
                          </h3>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </div>
          <div className="testimonial">
            <h1>Testimonials</h1>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              interval={3000}
              infiniteLoop={true}
            >
              {reviewData.map((review) => {
                return (
                  <div className="review">
                    <img
                      src={review.image}
                      className="review_img"
                      alt="profile"
                    />
                    <h2>{review.name}</h2>
                    <p>{review.testimonial}</p>
                  </div>
                );
              })}
            </Carousel>
          </div>
          {position.lat && (
            <div style={{ textAlign: "center" }}>
              <h2>See in Google Map</h2>
              <GoogleMapContainer currentLocation={position} />
            </div>
          )}
        </div>
      )}
    </>
  );
};
document.querySelector(".demo-carousel");
export default CityDetails;

