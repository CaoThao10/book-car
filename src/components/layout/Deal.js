import React from "react";
import Title from "../Title";
import PostItem from "../post/PostItem";
import { NavLink } from "react-router-dom";

const Deal = () => {
  return (
    <div>
      <Title>Ưu đãi nổi bật</Title>
      <div>
        <div className="grid grid-cols-3 gap-5 mx-[100px] mt-5">
          <PostItem url="/deal1.jpg">
            <NavLink>Nhận ưu đãi x2 khi đặt dịch vụ xe ...</NavLink>
          </PostItem>
          <PostItem url="/deal1.jpg">
            <NavLink>Nhận ưu đãi x2 khi đặt dịch vụ xe ...</NavLink>
          </PostItem>
          <PostItem url="/deal1.jpg">
            <NavLink>Nhận ưu đãi x2 khi đặt dịch vụ xe ...</NavLink>
          </PostItem>

          {/* <PostItem></PostItem> */}
        </div>
      </div>
    </div>
  );
};

export default Deal;
