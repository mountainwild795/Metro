import React, { useContext } from "react";
import House from "./House";
import { HouseContext } from "../contexts/HouseContext";
import { Link } from "react-router-dom";

const HouseList = () => {
  const { houses } = useContext(HouseContext);
  console.log(houses);
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="mb-6">Find Your Dream Space</h1>
          <h1 className="text-2xl font-semibold mb-8">Look through our rental property listings</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur sed neque delectus animi quidem expedita, dolorem eum optio, praesentium itaque ad, eius ipsam? Consequuntur mollitia
            eveniet inventore libero?
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {houses &&
            houses.length !== 0 &&
            houses.map((house, index) => {
              return (
                <Link to={`/property/${house._id}`} key={house.id}>
                  <House key={house.id} house={house} />
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
