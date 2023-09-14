import React, { useRef, useState } from "react";

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

function Carousel() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      <div>
        <img src="https://firebasestorage.googleapis.com/v0/b/metro-da27d.appspot.com/o/1.jpeg?alt=media&token=fef4c242-f367-4a12-9498-8032c605cc56" className="w-full h-[450px] lg:h-[550px]" alt="" />
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
