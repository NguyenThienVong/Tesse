import React from "react";
const Conten = () => {
  return (
    <div className="">
      <div className="text-center">
        <div className="-mt-20 rounded-full bg-white w-[138px] h-[138px] p-4 mx-auto">
          <img src="./img/Logo2.png" className="" />
        </div>
        <div className="mt-10 text-xl font-medium not-italic leading-7 xl:w-[926px] lg:w-[926px] md:w-auto text-center mx-auto">
          Chúng tôi là công ty mảng công nghệ phần mềm, mang đến cho khách hàng
          những sản phẩm, dịch vụ chất lượng cao như: các hệ thống đào tạo
          elearning, mua bán khoá học online, các dự án website, app,
          blockchain,...
        </div>
      </div>
      <div className="xl:-ml-32 lg:ml-32">
        <div className="xl:grid grid-cols-3 mt-32 gap-4 xl:ml-48 sm:ml-44 se:mx-4">
          <div className="col-span-2">
            <div className="xl:flex md:none gap-4 ">
              <div className="rounded-xl w-[356px] h-[316px] bg-neutral-100 ipx:ml-4">
                <div className="pt-28 pl-14">
                  <h1 className="font-semibold text-3xl">Sứ Mệnh</h1>
                  <div className="text-gray-400 text-sm gap-3 leading-6 w-56">
                    Kết nối các nguồn tri thức sống trên toàn thế giới vào trong
                    một hệ thống
                  </div>
                </div>
              </div>
              <div className="rounded-xl w-[356px] h-[316px] bg-neutral-100 xl:mt-0 md:mt-4 sm:mt-4 ipx:mt-4 ipx:ml-4 se:mt-4 xl:ml-1">
                <div className="pt-28 pl-14">
                  <h1 className="font-semibold text-3xl">Tầm nhìn</h1>
                  <div className="text-gray-400 text-sm gap-3 leading-6 w-52">
                    Mạng lưới tri thức đa chiều Kết nối cả tỷ người giúp hỗ trợ
                    học tập,làm việc và giải trí trong phạm vi toàn cầu.
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl mt-4 ml-0">
              <img className=" object-cover" src="./img/img 2.png" />
            </div>
          </div>
          <div className="xl:mt-0 md:mt-4 sm:mt-4 ipx:mt-4 ipx:ml-6 se:my-6 se:ml-0 xl:-ml-0">
            <div className=" text-white bg-hero w-[350px] h-[649px] pt-96 pl-16 rounded-xl object-cover">
              <div className="text-3xl font-semibold leading-10">
                Giá Trị Cốt Lõi
              </div>
              <div className="pt-4 w-56 text-justify">
                Phá vỡ nguyên tắc Sản phẩm mang tính dân tộc, nhân văn Không bao
                giờ bỏ cuộc
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conten;
