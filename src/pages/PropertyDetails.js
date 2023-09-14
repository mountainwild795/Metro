import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { HouseContext } from "../contexts/HouseContext";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { RiMapPinLine } from "react-icons/ri";
import { FaShower } from "react-icons/fa6";
import { AiFillCar } from "react-icons/ai";
import Carousel from "../components/Carousel";

const PropertyDetails = () => {
  const { houses } = useContext(HouseContext);
  const { id } = useParams();
  const house = houses.find((house) => {
    return house._id === id;
  });
  return (
    <div className="min-h-[1800px]">
      <div className="container mx-auto">
        <div className="text-xl font-semibold mb-6">{house?.address}</div>
        <div>
          <Carousel />
        </div>
        <h1 className="my-8 text-xl font-semibold">title</h1>
        <div className="flex flex-col lg:flex-row lg:gap-6">
          <div className="lg:flex-1">
            <p className="py-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aliquam ipsum veniam minima corrupti nemo laboriosam sunt omnis.</p>
            <div className="py-4">
              <h1 className="py-1">Features:</h1>
              <ul>
                <li className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ipsa.</li>
                <li className="py-1">Lorem ipsum dolor sit amet consectetur.</li>
                <li className="py-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate?</li>
                <li className="py-1">Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
            <div className="py-10">
              <h1 className="py-1">locations:</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quibusdam!</p>
            </div>
            <div className="py-10">
              <div>Rent: ${house?.price}</div>
              <div>Bond: 4 weeks</div>
            </div>
            <div className="pb-10">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ex error est! Eum, saepe! Atque optio animi sapiente numquam sed.</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:flex-1 lg:justify-between">
            <div className="flex flex-col lg:flex-row lg:justify-center lg: gap-6 lg:mt-10">
              <div className="flex justify-between items-center">
                <div className="flex flex-col lg:flex-row gap-3">
                  <div className="flex gap-2 bg-icon_bg text-xs px-2 py-1">
                    <div>
                      <RiMapPinLine />
                    </div>
                    <div>{house?.address}</div>
                  </div>
                  <div className="flex gap-2 bg-icon_bg text-xs px-2 py-1">
                    <div>
                      <BiBed />
                    </div>
                    <div>{house?.bedrooms} Bedrooms</div>
                  </div>
                  <div className="flex gap-2 bg-icon_bg text-xs px-2 py-1">
                    <div>
                      <FaShower />
                    </div>
                    <div>{house?.bathrooms} Bathrooms</div>
                  </div>
                  <div className="flex gap-2 bg-icon_bg text-xs px-2 py-1">
                    <div>
                      <AiFillCar />
                    </div>
                    <div>2 Parking spaces</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:mb-10 lg:justify-center">
              <button className="bg-primary text-sm text-white py-3 px-4 rounded-lg  w-[170px]">Save to Watchlist</button>
              <button className="bg-primary text-sm text-white py-3 px-8 rounded-lg  w-[170px]">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
