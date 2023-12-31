import React, { useEffect, useState } from "react";
import { BiBed } from "react-icons/bi";
import { RiMapPinLine } from "react-icons/ri";
import { Spin } from "antd";

const House = ({ house }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="max-w-[300px] h-[168px] aspect-video mx-auto flex justify-center items-center">
        <Spin spinning={loading}>
          <img src={house.image} loading="lazy" alt="" className="max-w-[300px] aspect-video mx-auto" />
          {/* <img src={House1} loading="lazy" alt="" className="max-w-[300px] aspect-video mx-auto" /> */}
        </Spin>
      </div>
      <div className="max-w-[300px] w-full mx-auto bg-card_bg text-white p-5">
        <div className="font-light mb-4">{house.address}</div>
        {/* <div className="font-light mb-4">7240C Argyle St. Lawndale, CA 90260</div> */}
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
            <div>{house.country}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
