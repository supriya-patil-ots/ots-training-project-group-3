import React, { useState } from "react";
import { Input, Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "../image/logo2.png";
import LoginOrSignup from "../LoginOrSignup";
import { searchData } from "../../redux/searchReducer";
import { useDispatch, useSelector } from "react-redux";
import { mainData } from "../../redux/mockDataReducer";
import CityData from "../Data/CityData";

const Navigation = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user.data);
  const [state, setState] = useState({ activeItem: "home" });

  if (state.activeItem === "home") {
    dispatch(mainData(CityData));
  }
  const handleItemClick = (e, { name }) => {
    setState({ activeItem: name });
  };

  const { activeItem } = state;

  return (
    <div>
      <div className="nav">
        <Menu secondary stackable>
          <Link to="/" style={{ width: "100%" }}>
            <Menu.Item
              name="logo"
              active={activeItem === "logo"}
              onClick={handleItemClick}
            >
              <Image src={logo} width="30%" size="small" />
            </Menu.Item>
          </Link>
          <Menu.Menu>
            <Menu.Item style={{ width: "100%" }}>
              <Input
                icon="search"
                placeholder="Search..."
                onChange={(e) => dispatch(searchData(e.target.value))}
                style={{ width: 250 }}
              />
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu position="right">
            <Menu.Item>
              <LoginOrSignup title="Sign Up" />
            </Menu.Item>
            <Menu.Item>
              {Object.keys(userData).length === 0 && (
                <LoginOrSignup title="Login" />
              )}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
      <div className="sub-nav">
        <Menu pointing secondary stackable>
          <Link to="/">
            <Menu.Item
              name="Trending Destinations"
              active={activeItem === "Home"}
              onClick={handleItemClick}
            />
          </Link>

          <Link to="/packages">
            <Menu.Item
              name="Packages"
              active={activeItem === "Packages"}
              onClick={handleItemClick}
            />
          </Link>
          <Link to="/city">
            <Menu.Item
              name="City"
              active={activeItem === "City"}
              onClick={handleItemClick}
            />
          </Link>
          <Link to="/contact">
            <Menu.Item
              name="Contact"
              active={activeItem === "Contact"}
              onClick={handleItemClick}
            />
          </Link>
          <Link to="/Wishlist">
            <Menu.Item
              name="Wishlist"
              active={activeItem === "Wishlist"}
              onClick={handleItemClick}
            />
          </Link>
        </Menu>
      </div>
    </div>
  );
};

export default Navigation;
