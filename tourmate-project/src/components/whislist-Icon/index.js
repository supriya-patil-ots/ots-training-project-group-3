<<<<<<< HEAD
import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
=======
import React, {useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import { useDispatch, useSelector} from "react-redux";
>>>>>>> e73a45a3d445b0e843d27f96b9154d35cdb356c6
import { addCart } from "../../redux/cartReducer";
import {  removeFromCart } from "../../redux/cartReducer";

<<<<<<< HEAD
function Whishlist({ productData }) {
=======
function Whishlist({ productData}) {
  const { cartItem } = useSelector((state) => state.cart.data);
>>>>>>> e73a45a3d445b0e843d27f96b9154d35cdb356c6
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
<<<<<<< HEAD
=======
  useEffect(()=>{
   if(cartItem.hasOwnProperty(productData.id)){
    setColor("red");
   }
  },[cartItem])
>>>>>>> e73a45a3d445b0e843d27f96b9154d35cdb356c6

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
