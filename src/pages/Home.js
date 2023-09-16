import React from "react";

import HomeBanner from "../components/Home/HomeBanner";
import Hero from "../components/Home/Hero";
import TwoRowHero from "../components/Home/TwoRowHero";
import ReviewBanner from "../components/Home/ReviewBanner";
import FAQBanner from "../components/Home/FAQBanner";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Hero />
      <HomeBanner />
      <TwoRowHero />
      <ReviewBanner />
      <FAQBanner />
    </div>
  );
};

export default Home;
