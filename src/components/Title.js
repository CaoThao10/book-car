import React from "react";

const Title = ({ children }) => {
  return (
    <div className="mt-5 mx-[100px]">
      <h1 className="border w-[50px]  border-b-2 border-[#f66d40]"></h1>
      <h3 className="text-2xl font-semibold text-[#f66d40]">{children}</h3>
    </div>
  );
};

export default Title;
