import React from "react";
import House1 from "../assets/img/houses/house1.png";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { RiMapPinLine } from "react-icons/ri";

const House = ({ house }) => {
  return (
    <div className="flex flex-col">
      <img src={House1} alt="" className="max-w-[300px] aspect-video mx-auto" />
      <div className="max-w-[300px] w-full mx-auto bg-card_bg text-white p-5">
        <div className="font-light mb-4">7240C Argyle St. Lawndale, CA 90260</div>
        <div>
          <p className="font-extralight mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, commodi!</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <div className="flex">
              <div>
                <BiBed />
              </div>
              <div>6</div>
            </div>
            <div className="flex">
              <div>
                <BiBed />
              </div>
              <div>6</div>
            </div>
            <div className="flex">
              <div>
                <BiBed />
              </div>
              <div>6</div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <RiMapPinLine />
            <div>Auckland</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
