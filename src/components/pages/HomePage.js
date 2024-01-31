import React from "react";
import Header from "../layout/Header";
import Banner from "../layout/Banner";
import Popular from "../layout/Popular";
import Deal from "../layout/Deal";
import CarNews from "../layout/CarNews";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Popular></Popular>
      <Deal></Deal>
      <CarNews></CarNews>
    </div>
  );
};

export default HomePage;
