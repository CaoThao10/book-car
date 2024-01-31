import React from "react";

const PostImg = ({ url }) => {
  return (
    <div>
      <img className="rounded-2xl h-full object-cover" src={url} />
    </div>
  );
};

export default PostImg;
