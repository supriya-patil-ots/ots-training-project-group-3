import React, { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cartReducer";
import { removeFromCart } from "../../redux/cartReducer";
import LoginOrSignup from "../LoginOrSignup";

function Whishlist({ productData }) {
  const { cartItem } = useSelector((state) => state.cart.data);
  const { userData } = useSelector((state) => state.user.data);
  const [color, setColor] = useState("white");
  const dispatch = useDispatch();
  const handleWhishlist = () => {
    if (Object.keys(userData).length === 0) {
      alert('Please Login or Sign Up first')
    } else {
      if (color === "red") {
        setColor("white");
        dispatch(removeFromCart(productData.id));
      } else {
        setColor("red");
        dispatch(addCart(productData));
      }
    }
  };
  useEffect(() => {
    if (cartItem.hasOwnProperty(productData.id)) {
      setColor("red");
    }
  }, [cartItem]);

  return (
    <>
      <Icon
        name="heart"
        size="large"
        className="heartIcon"
        onClick={handleWhishlist}
        color={color}
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          zIndex: 1,
          color: "white",
        }}
      />
    </>
  );
}

export default Whishlist;
