import React from "react";
import Title from "../Title";

import PostItem from "../post/PostItem";
import { NavLink } from "react-router-dom";

const CarNews = () => {
  return (
    <div>
      <Title>Các hãng xe nổi bật</Title>
      <div className="grid grid-cols-3 gap-5 mx-[100px] mt-5">
        <PostItem url="/xe2.jpg">
          <NavLink> Nhà xe abc</NavLink>
        </PostItem>

        <PostItem url="/xe2.jpg">
          <NavLink> Nhà xe abc</NavLink>
        </PostItem>

        <PostItem url="/xe2.jpg">
          <NavLink> Nhà xe abc</NavLink>
        </PostItem>
      </div>
    </div>
  );
};

export default CarNews;
