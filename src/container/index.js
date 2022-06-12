import React from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
const Container = () => {
  return (
    <div className="text-center">
      <Header />
      <div style={{ paddingTop: "80px" }}>
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Container;
