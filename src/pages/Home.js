import React from "react";

import HomeHomeBanner from "../components/Home/HomeHomeBanner";
import HomeHero from "../components/Home/HomeHero";
import HomeTwoRowHero from "../components/Home/HomeTwoRowHero";
import HomeReviewBanner from "../components/Home/HomeReviewBanner";
import HomeFAQBanner from "../components/Home/HomeFAQBanner";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <HomeHero />
      <HomeHomeBanner />
      <HomeTwoRowHero />
      <HomeReviewBanner />
      <HomeFAQBanner />
    </div>
  );
};

export default Home;
