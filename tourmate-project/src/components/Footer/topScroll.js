import React from "react";
import ScrollToTop from "react-scroll-to-top";

const topScrollup = () => {
  return (
    <div>
      <div style={{ marginTop: "150vh" }} />
      <ScrollToTop smooth />
    </div>
  );
};

export default topScrollup;
