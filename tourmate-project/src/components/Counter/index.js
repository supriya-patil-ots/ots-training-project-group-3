import React, { useEffect, useState } from "react";
import "./index.css";

const Counter = ({ handleCounter, of }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    handleCounter(of, counter);
  }, [counter]);

  const increase = () => {
    setCounter((counter) => counter + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  };

  return (
    <div className="counter">
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>
          +
        </button>
        <span className="counter__output">{counter}</span>
        <button className="control__btn" onClick={decrease}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
