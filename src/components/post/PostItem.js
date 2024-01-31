import React from "react";
import PostImg from "./PostImg";

const PostItem = ({ children, url }) => {
  return (
    <div className="w-full relative">
      <PostImg url={url}></PostImg>
      <div className=" whitespace-nowrap overflow-ellipsis top-[85%] text-xl overflow-hidden text-[#f66d40] font-medium mx-3 absolute flex items-center">
        <svg
          className="mx-2"
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10H20M20 10L11 1M20 10L11 19"
            stroke="#f66d40"
            stroke-width="2"
          />
        </svg>

        {children}
      </div>
    </div>
  );
};

export default PostItem;
