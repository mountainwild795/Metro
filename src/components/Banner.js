import React from "react";

// import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row px-8 py-10 sm:px-12 sm:py-40">
        <h1 className="text-2xl sm:text-4xl mb-4 font-semibold">
          Find the perfect Property for you
        </h1>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          odio cumque ducimus perferendis, consequatur qui velit iusto dolorem?
          Nemo, commodi.
        </p>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
