import React from "react";

const TesseTeach = () => {
  return (
    <div className="mx-auto max-w-max items-center">
      <div className="xl:flex lg:float-none">
        <div className="xl:-ml-96 lg:mx-32 md:mx-20 sm:mx-5 my-32 mr-10 xr:ml-10 se:ml-5">
          <p
            className="text-xl font-medium text-regal-Primary
            leading-7"
          >
            Hệ sinh thái Tesse
          </p>
          <p className="font-medium text-5xl text-regal-Character">
            TESSE TECH
          </p>
          <div className="flex">
            <div className="text-sm font-normal text-gray-400 xl:w-[310px] lg:w-[310px] md:w-[310px] sm:w-[310px] xr:w-auto my-5 se:w-full">
              Chúng tôi không ngừng nghiên cứu, phát triển và triển khai các
              giải pháp công nghệ tiên tiến để tạo ra những sản phẩm mang tinh
              thần dân tộc Việt Nam.
            </div>
            <div className="text-sm font-normal text-gray-400 xl:w-[240px] lg:w-[240px] md:w-[240px] sm:w-[240px] xr:w-auto  my-5 mx-16 se:w-full">
              Tess Tech đảm bảo ba nhiệm vụ quan trọng, bao gồm nghiên cứu và
              phát triển (R&D), phát triển sản phẩm (Product development) và
              thực hiện các dự án thuê ngoài (Outsourcing)
            </div>
          </div>
          <div className="border-b-2 border-borderNeutral2 w-auto"></div>
          <div className="xl:flex lg:flex md:flex sm:flex xr:flex-none">
            {/* --------------------------------------------- */}
          <div className="my-10 xl:-ml-5 lg:-ml-5 md:-ml-5 sm:-ml-5 xr:ml-20 se:ml-20">
            <div className="w-[65px] h-[56px] mx-12 mt-2">
            <img src="/img/iconRocket.png" alt="rocket" className="object-cover"/>
            </div>
            <div className="mt-12 mx-16 text-base font-semibold ">R&D</div>
            <p className="w-[166px] text-center my-3 xl:-ml-5 lg:-ml-5 md:-ml-5  text-xs text-gray-400 font-normal">Tìm kiếm giải pháp sáng tạo và công nghệ tiên tiến</p>
          </div>
          {/* --------------------------------------------- */}
          <div className="my-10  xl:mx-5 xl:ml-5 lg:-ml-5 md:-ml-5 sm:-ml-5 xr:ml-20 se:ml-20">
            <div className="w-[65px] h-[56px] mx-14 mt-7">
            <img src="/img/iconKey.png" alt="rocket" className="object-cover"/>
            </div>
            <div className="mt-7 mx-2 text-base font-semibold ">Product development</div>
            <p className="w-[166px] text-center my-4 text-xs text-gray-400 font-normal">Phát triển các sản phẩm công nghệ tiên tiến </p>
          </div>
          {/* --------------------------------------------- */}
          <div className="my-10 xl:ml-0 lg:-ml-5 md:-ml-5 sm:-ml-5 xr:ml-20 se:ml-20">
            <div className="w-[65px] h-[56px] mx-12 mt-2">
            <img src="/img/iconCup.png" alt="rocket" className="object-cover"/>
            </div>
            <div className="mt-12 mx-10 text-base font-semibold ">Outsourcing</div>
            <p className="w-[166px] text-center my-3 text-xs text-gray-400 font-normal">Đáp ứng nhu cầu của khách hàng với tầm nhìn đa dạng</p>
          </div>
          {/* --------------------------------------------- */}
          </div>
        </div>
        
        <div className=" xl:my-32 xl:-ml-32 my-32 lg:mb-[700px] xr:mb-[700px] md:mb-[700px] sm:mb-[700px] se:mb-[700px]   lg:-mt-32 lg:mx-28 md:-mt-32 md:mx-12 sm:-mt-32 sm:mx-0 xr:mt-10">
          <img
            src="./img/Polygon.png"
            className="absolute xl:ml-[250px] xl:-mt-[32px] xl:w-[328px] xl:h-[328px] lg:ml-72 lg:-mt-10 md:ml-72 md:-mt-10 sm:ml-72 sm:-mt-10 xr:ml-20 xr:-mt-28 se:ml-10 se:-mt-28"
          />
          <img
            src="/img/TessTeach.png"
            alt="tesseTeach"
            className="absolute w-[458px] h-[458px] mt-10"
          />
        </div>
        
      </div>
    </div>
  );
};

export default TesseTeach;
