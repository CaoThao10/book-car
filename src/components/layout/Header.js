import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <div className="flex h-16 justify-between mx-[100px] border-b border-[#ebac97] ">
        <div className=" flex  items-center ">
          <img className="h-full object-cover" src="/logo.png" alt="" />
          <h3 className="text-2xl font-semibold text-[#fc9876]">
            Book tickets
          </h3>
          <div className="border rounded-full ml-4 border-[#fc9876]">
            <input
              className=" outline-none px-3 rounded-full"
              type="text"
              placeholder="Bạn cần tìm gì???"
            />
          </div>
        </div>
        <div className="flex h-full items-center">
          <ul className="flex gap-7 text-[#fc9876] text-xl font-medium cursor-pointer">
            <NavLink to="/">Trang chủ</NavLink>
            <NavLink to="/cars">Hãng xe</NavLink>
            <NavLink to="/book">Đặt vé</NavLink>
            <NavLink to="/">Giới thiệu</NavLink>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
