import React, { useState } from "react";
import { Input, Menu, Image, Dropdown, Flag, Search } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "../image/logo2.png";
import LoginOrSignup from "../LoginOrSignup";
import { searchData } from "../../redux/searchReducer";
import { useDispatch } from "react-redux";
import { mainData } from "../../redux/mockDataReducer";
import CityData from "../Data/CityData";

const Navigation = () => {
  const dispatch = useDispatch();
  const [modalOf, setModalOf] = useState("");

  const [loginActive, setLoginActive] = useState(false);
  const [signupActive, setSignupActive] = useState(false);
  const state = { activeItem: "home" };

  if (state.activeItem === "home") {
    dispatch(mainData(CityData));
  }
  const handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  const handleSignup = () => {
    setLoginActive(false);
    setSignupActive(!signupActive);
  };
  const handleLoginActive = () => {
    setSignupActive(false);
    setLoginActive(!loginActive);
  };

  const { activeItem } = state;

  return (
    <div>
      <div className="nav">
        <Menu secondary stackable>
          <Menu.Item
            name="logo"
            active={activeItem === "logo"}
            onClick={handleItemClick}
          >
            <Image src={logo} width="20px" size="small" />
          </Menu.Item>

          <Menu.Menu>
            <Menu.Item style={{ width: "100%" }}>
              <Search
                icon="search"
                placeholder="Search..."
                onChange={(e) => dispatch(searchData(e.target.value))}
              />
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu position="right">
            <Menu.Item
              name="Sign Up"
              active={activeItem === "Sign Up"}
              onClick={() => setModalOf("signup")}
            />
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={() => setModalOf("login")}
            />
          </Menu.Menu>
        </Menu>
      </div>
      <div className="sub-nav">
        <Menu pointing secondary stackable>
          <Link to="/">
            <Menu.Item
              name="tourmate"
              active={activeItem === "Home"}
              onClick={handleItemClick}
            />
          </Link>
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
