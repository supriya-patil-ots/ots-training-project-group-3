import React, { useState } from "react";
import { Input, Menu, Image, Dropdown, Flag } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./index.css";
import LoginOrSignup from "../LoginOrSignup";
import { searchData } from "../../redux/searchReducer";
import { useDispatch } from "react-redux";
import { mainData } from "../../redux/mockDataReducer";
import CityData from "../Data/CityData";

const Navigation = () => {
   const dispatch =useDispatch();
  const [modalOf, setModalOf] = useState("");

  const [loginActive, setLoginActive] = useState(false);
  const [signupActive, setSignupActive] = useState(false);
  const state = { activeItem: "home" };

  if(state.activeItem==='home'){
     dispatch(mainData(CityData));
  }
  const handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
   
  };

  const handleSignup = () => {
    setLoginActive(false);
    setSignupActive(!signupActive);
  };
  console.log(signupActive);
  const handleLoginActive = () => {
    setSignupActive(false);
    setLoginActive(!loginActive);
  };

  const { activeItem } = state;

  return (
    <div>
      <div className="nav">
        <Menu secondary>
          <Menu.Item
            name="logo"
            active={activeItem === "logo"}
            onClick={handleItemClick}
          >
            <Image
              src="https://cdn.pixabay.com/photo/2019/10/14/07/53/travel-4548127_1280.png"
              width="20px"
              size="small"
            />
          </Menu.Item>

          <Menu.Menu>
            <Menu.Item style={{ width: "100%" }}>
              <Input icon="search" placeholder="Search..." onChange={(e)=>dispatch(searchData(e.target.value))}/>
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
        <Menu pointing secondary>
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
        <LoginOrSignup
          modalOf={modalOf}
          handleLoginActive={loginActive}
          signupActive={signupActive}
        />
      </div>
    </div>
  );
};

export default Navigation;
