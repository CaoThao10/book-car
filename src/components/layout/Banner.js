import React from "react";

const Banner = () => {
  return (
    <div className="mx-[100px] mt-3 h-[450px] relative">
      <img className="h-full object-cover" src="/banner.jpg" alt="" />
      <div className="absolute  top-[50%] left-[50%] translate-x-[-50%]">
        <h2 className="text-3xl w-[900px] font-medium text-red-500">
          Book Tickets - Cam kết hoàn tiền 200% nếu nhà xe không giữ chỗ
        </h2>
        <div className="flex  bg-white items-center justify-around mt-3 py-2 rounded-xl">
          <div className="flex flex-col ">
            <label className="text-[#9c9b9b]" for="add">
              Nơi xuất phát
            </label>
            <select className="outline-none" name="địa điểm" id="add">
              <option value="hanoi">Hà Nội</option>
              <option value="tuyenquang">Tuyên Quang</option>
              <option value="haiduong">Hải Dương</option>
              <option value="hochiminh">Hồ Chí Minh</option>
            </select>
          </div>
          <div className=" border h-8 border-l-0 border-gray-950"></div>
          <div className="flex flex-col  ">
            <label className="text-[#9c9b9b]" for="add">
              Nơi đến
            </label>
            <select className="outline-none" name="địa điểm" id="add">
              <option value="hanoi">Hà Nội</option>
              <option value="tuyenquang">Tuyên Quang</option>
              <option value="haiduong">Hải Dương</option>
              <option value="hochiminh">Hồ Chí Minh</option>
            </select>
          </div>
          <div className=" border h-8 border-l-0 border-gray-950"></div>

          <div className="flex flex-col  ">
            <label className="text-[#9c9b9b]" for="add">
              Ngày đi
            </label>
            <input type="date" />
          </div>
          <div className=" border h-8 border-l-0 border-gray-950"></div>

          <div className="flex flex-col  ">
            <label className="text-[#9c9b9b]" for="add">
              Thêm ngày về
            </label>
            <input type="date" />
          </div>
          <div className=" border h-8 border-l-0 border-gray-950"></div>

          <div>
            <button
              className="bg-[#fc9876] p-2 text-white font-medium rounded-lg"
              type="submit"
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
