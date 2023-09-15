import React, { useRef, useState, useEffect } from "react";
import { Spin } from "antd";

import { Swiper, SwiperSlide } from "swiper/react";
import carousel_1 from "../assets/img/carousel/31.jpeg";
import carousel_2 from "../assets/img/carousel/32.jpeg";
import carousel_3 from "../assets/img/carousel/33.jpeg";
import carousel_4 from "../assets/img/carousel/34.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

function Carousel({ houseImage }) {
  const [swiperRef, setSwiperRef] = useState(null);

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
    <div>
      <div>
        <Spin spinning={loading}>
          <img src={houseImage} className="w-full h-[450px] lg:h-[550px]" alt="" />
        </Spin>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <img src={carousel_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel_4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
