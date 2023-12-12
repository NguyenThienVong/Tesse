import React from "react";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
const Conten = () => {
  return (
    <div className="bg-white mx-auto max-w-max my-28 xr:mt-[750px] xl:mt-0 se:mt-[670px]">
      <div className="bg-bgNeutralll xl:w-[1116px] xl:h-[328px] ">
        <div className="flex text p-16 gap-16 lg:mt-[600px] xl:mt-0 md:mt-[600px] xr:mt-[600px] sm:mt-[600px] ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <div className="grid gap-y-2 xl:w-72 xl:py-0 xr:text-center se:text-center se:my-10 xr:py-16">
                <div className="flex items-center justify-center">
                  <img src="/img/icon.png" alt="Icon 1" />
                </div>
                <div className="leading-7 text-xl font-medium">Sứ mệnh</div>
                <div className="leading-6 text-base font-normal text-gray-400">
                  Kết nối các nguồn tri thức sống trên toàn thế giới vào trong
                  một hệ thống
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid gap-y-2 xl:w-72 xl:py-0 xr:text-center se:text-center se:my-10 xr:py-16">
                <div className="flex items-center justify-center">
                  <img src="/img/icon2.png" alt="Icon 2" />
                </div>
                <div className="leading-7 text-xl font-medium">Sứ mệnh</div>
                <div className="leading-6 text-base font-normal text-gray-400">
                  Mạng lưới tri thức đa chiều kết nối cả tỷ người giúp hỗ trợ
                  học tập, làm việc và giải trí trong phạm vi toàn cầu.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid gap-y-2 xl:py-0 xl:w-72 xr:text-center se:text-center se:my-10 xr:py-16">
                <div className="flex items-center justify-center">
                  <img src="/img/icon3.png" alt="Icon 3" />
                </div>
                <div className="leading-7 text-xl font-medium">
                  Giá trị cốt lõi
                </div>
                <div className="leading-6 text-base font-normal text-gray-400">
                  Phá vỡ nguyên tắc Sản phẩm mang tính dân tộc, nhân văn Không
                  bao giờ bỏ cuộc
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-20">
          <div className="lg:ml-96 md:ml-48 sm:ml-28 xr:ml-2 se:ml-7 leading-10 font-semibold xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl xr:text-3xl se:text-2xl">
            Chứng nhận & Giải thưởng
          </div>
          <div className="xl:flex lg:none md:none sm:none lg:ml-[400px] xl:ml-0 md:ml-52 sm:ml-32 xr:ml-8 se:ml-3">
            <div className="mt-14 grid gap-y-2">
              <div className="w-[353px] h-[424px]">
                <img src="./img/Rectangle1.png" />
                <div className="leading-5 text-sm font-medium text-yellow-400 my-3">
                  GIẢI NHẤT
                </div>
                <div className="leading-7 text-xl font-medium border-b-2 border-neutral-300 hover:text-regal-Primary hover:cursor-pointer">
                  THE BEST INNOVATORS AWARD 2017
                </div>
                <div className="leading-6 text-sm font-normal text-gray-500 my-4">
                  Được tổ chức bởi Deutsches Haus, Leipzig University & VCCI.
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-y-2 xl:mx-6 lg:mx-0">
              <div className="w-[353px] h-[424px]">
                <img src="./img/Rectangle2.png" />
                <div className="leading-5 text-sm font-medium text-yellow-400 my-3">
                  GIẢI NHẤT
                </div>
                <div className="leading-7 text-xl font-medium border-b-2 border-neutral-300 hover:text-regal-Primary hover:cursor-pointer">
                  BUSINESS MATCHING, INVESTMENT PITCHING
                </div>
                <div className="leading-6 text-sm font-normal text-gray-500 my-4">
                  Được tổ chức bởi group Quản Trị và Khởi nghiệp năm 2017
                </div>
              </div>
            </div>

            <div className="mt-14 grid gap-y-2">
              <div className="w-[353px] h-[424px]">
                <img src="./img/Rectangle3.png" />
                <div className="leading-5 text-sm font-medium text-yellow-400 my-3">
                TOP 25
                </div>
                <div className="leading-7 text-xl font-medium  hover:text-regal-Primary hover:cursor-pointer">
                  STARTUP XUẤT SẮC NHẤT 2018
                </div>
                <div className="border-b-2 border-neutral-300 mt-7"></div>
                <div className="leading-6 text-sm font-normal text-gray-500 my-4">
                  Được tổ chức và bình chọn bởi VNExpress.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conten;
