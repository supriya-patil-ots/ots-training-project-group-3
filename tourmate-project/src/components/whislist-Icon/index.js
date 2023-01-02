import React, {useState } from "react";
import { Icon } from "semantic-ui-react";
import { useDispatch} from "react-redux";
import { addCart } from "../../redux/cartReducer";

function Whishlist({ productData ,clickedData}) {
  const [color, setColor] = useState("white");
  const dispatch = useDispatch();
  const handleWhishlist = () => {
    if (color === "red") {
      setColor("white");
    } else {
      setColor("red");
    }
    dispatch(addCart(productData));
  };


  return (
    <>
      <Icon
        name="heart"
        size="big"
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
