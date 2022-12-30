import React, { useState } from 'react'
import { Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from '../../redux/cartReducer';


function Whishlist({productData}) {
    const [color, setColor] = useState('grey');
    const dispatch=useDispatch();
    const handleWhishlist = () => {
        if(color==="red")
        {
            setColor("grey")
        }
        else{
            setColor('red')
        }
    dispatch(addCart(productData));
    }

    return (
        <>
            <Icon name="heart" size="big" className="heartIcon" onClick={handleWhishlist} color={color}
                style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    zIndex: 1,
                     
                }} />
        </>
    )
}

export default Whishlist