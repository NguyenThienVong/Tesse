import React from "react";
import { Carousel } from "antd";

const Metting = () => {
  return (
    <div className="mx-auto max-w-max items-center justify-center">
      <div className="xl:grid xl:grid-cols-3 gap-4 lg:grid-cols-none">
        <div className="xl:my-52 xl:mx-0 lg:my-32 md:my-28 md:mx-10 sm:my-28 sm:mx-16 xr:my-10 xr:ml-5 se:my-10 se:mx-5">
          <p className="font-medium text-2xl leading-7 w-[358px] text-regal-Character">
            Lorem Ipsum is just dummy text used in the printing and typesetting
            industries.
          </p>
          <p className="text-sm font-normal text-gray-400 leading-6 w-[358px] my-5">
            Lorem Ipsum is just dummy text used in the printing and typesetting
            industries. Since the 1500s, when an unknown printer scrambled a
            galley of type to make...
          </p>
          <button className="rounded-full hover:shadow-10xl bg-regal-Primary h-10 w-[99px] hover:bg-white hover:text-regal-Primary hover:cursor-pointer hover:rounded-full ease-in-out duration-300">Xem thêm</button>
        </div>
        <div className="col-span-2 xl:w-[734px] lg:w-[734px] sm:w-[620px] xl:my-28 lg:mb-28 md:mb-28 sm:mb-28 xr:mb-10 se:mb-20">
        <Carousel autoplay dotPosition="bottom">
        <div className="rounded-xl bg-metting bg-cover object-cover h-[413px] min-h-full">
          </div>
          <div className="rounded-xl bg-metting bg-cover object-cover h-[413px]  min-h-full">
          </div>
          <div className="rounded-xl bg-metting bg-cover object-cover h-[413px] min-h-full">
          </div>
          <div className="rounded-xl bg-metting bg-cover object-cover h-[413px] min-h-full">
          </div>
        </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Metting;
