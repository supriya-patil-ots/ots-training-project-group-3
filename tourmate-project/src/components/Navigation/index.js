import React from "react";
import { Input, Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./index.css";

const Navigation = () => {
  const state = { activeItem: "home" };

  const handleItemClick = (e, { name }) => this.setState({ activeItem: name });
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
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu position="right">
            <Menu.Item
              name="Sign Up"
              active={activeItem === "Sign Up"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
      <div className="sub-nav">
        <Menu secondary>
          <Link to="/">
            <Menu.Item
              name="Home"
              active={activeItem === "Home"}
              onClick={handleItemClick}
            />
          </Link>

          <Link to="/products">
            <Menu.Item
              name="Products"
              active={activeItem === "Products"}
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
        </Menu>
      </div>
    </div>
  );
};

export default Navigation;
