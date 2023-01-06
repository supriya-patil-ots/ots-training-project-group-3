import React, { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/cartReducer";
import { removeFromCart } from "../../redux/cartReducer";
import "./index.css";

function Whishlist({ productData }) {
  const { cartItem } = useSelector((state) => state.cart.data);
  const [color, setColor] = useState("white");

  const dispatch = useDispatch();
  const handleWhishlist = () => {
    if (color === "red") {
      setColor("white");
      dispatch(removeFromCart(productData.id));
    } else {
      setColor("red");
      dispatch(addCart(productData));
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
        className={color == "red" ? "redheart" : "heartIcon"}
        onClick={handleWhishlist}
        color={color}
      />
    </>
  );
}

export default Whishlist;
