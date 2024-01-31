import React from "react";
import Title from "../Title";
import PostItem from "../post/PostItem";
import { NavLink } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/swiper-react";

const Popular = () => {
  return (
    <div>
      <Title>Tuyến đường phổ biến</Title>
      <div className="grid grid-cols-3 gap-5 mx-[100px] mt-5">
        <PostItem url="/xe1.jpg">
          <NavLink>Sài Gòn - Nha Trang</NavLink>
        </PostItem>
        <PostItem url="/xe1.jpg">
          <NavLink>Hà Nội - Tuyên Quang</NavLink>
        </PostItem>
        <PostItem url="/xe1.jpg">
          <NavLink>Hà Nội - Đà Nẵng</NavLink>
        </PostItem>
        {/* <PostItem></PostItem> */}
      </div>
    </div>
  );
};

export default Popular;
