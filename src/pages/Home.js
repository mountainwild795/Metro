import React from "react";

import HomeBanner from "../components/Home/HomeBanner";
import Hero from "../components/Home/Hero";
import TwoRowHero from "../components/Home/TwoRowHero";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Hero />
      <HomeBanner />
      <TwoRowHero />
    </div>
  );
};

export default Home;
