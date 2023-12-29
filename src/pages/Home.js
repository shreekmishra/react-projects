import React from "react";
import HomePageBanner from "../components/home-component/HomePageBanner";
import HomePageFeatures from "../components/home-component/HomePageFeatures";
import Developers from "../components/home-component/Developers";

function Home() {
  return (
    <div className="d-flex flex-column">
      <HomePageBanner />
      <HomePageFeatures />
    </div>
  );
}

export default Home;
