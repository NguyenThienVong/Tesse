import React from "react";

const Footer = () => {
  return (
    <div className="bg-white mx-auto max-w-max py-20 bg-vector bg-cover">
      <div className="lg:ml-0 xr:ml-2 se:ml-2 flex">
        <div className="lg:-ml-32 lg:mr-40 md:mx-10 md:mr-32 sm:mx-10 sm:mr-20 xl:-ml-[50px]">
        <div className="xl:text-5xl lg:text-5xl md:text-3xl sm:text-3xl font-medium my-8 xr:text-xl se:text-xl">
          Trở thành cộng sự của Tesse
        </div>
        <div className="font-normal xl:text-2xl lg:text-2xl md:text-xl sm:text-lg xr:text-base text-gray-400">
          Cơ hội nghề nghiệp với Tesse
        </div>
        </div>
        <div className="xl:ml-28 xl:mt-10 lg:mt-10 md:mt-8 sm:mt-8 xr:mt-9 xr:ml-5 se:mt-10 se:ml-8">
        <img className="absolute xl:w-[112px] xl:h-[112px] xr:w-20 se:w-16" src="/img/Polygonn.png"/>
        <img className="absolute xl:w-[72px] xr:xr:w-12 mt-5 ml-5 se:w-10" src="/img/Arrow1.png"/>
        </div>
        </div>  
      <div className="border-b-4 border-neutral-300 w-auto h-auto mt-10 xl:-ml-10 lg:-ml-32 sm:ml-12"></div>
      <div className=" xl:flex sm:float-none mt-16 -ml-40 text-4xl">
        <div className="lg:ml-7 sm:ml-52 xl:ml-32 xr:ml-40 se:ml-40">
        <i
          className="fa-brands fa-x-twitter ml-3"
          style={{ color: "#050505" }}
        ></i>
        <i
          className="fa-brands fa-facebook  ml-3"
          style={{ color: "#0434f6" }}
        ></i>
        <i
          className="fa-brands fa-telegram  ml-3"
          style={{ color: "#d4ce16" }}
        ></i>
        <i
          className="fa-brands fa-discord   ml-3"
          style={{ color: "#4812de" }}
        ></i>
        <div className="text-sm font-normal leading-6 text-gray-400 mt-5 ml-4">
              Copyright © 2023. All Rights Reserved.
        </div>
        </div>
        {/* -------------------------------- */}
        <div className="xl:flex xr:float-none lg:flex md:flex sm:flex">
          <div className="mx-14 se:ml-44 sm:ml-56 sm:mt-4 xl:ml-20 xl:mt-1 lg:ml-12 xr:ml-44 xr:mt-2 lg:flex-none se:mt-5">
          <div className="mb-7">
          <p className="text-base font-medium mb-2 text-regal-Character leading-6">TP. Hồ Chí Minh, Việt Nam</p>
          <div className="text-sm font-normal text-gray-400 w-48">Tầng 3, 163 Nguyễn Văn Trỗi, Phường 11, Quận Phú Nhuận, TP Hồ Chí Minh</div>
          </div>
          {/* -------------------------------*/}
          <div className=" "> 
            <p className="text-base font-medium text-regal-Character leading-6">CA, USA</p>
            <div className="text-gray-400 text-sm font-normal">3030 Potrero Ave, El Monte, CA 91733, USA</div>
          </div>
          </div>
          {/* ------------------------------ */} 
          <div className="xr:flex lg:flex se:flex">
          <div className="sm:mt-4 xl:mt-1 xl:mx-7 xr:ml-44 xr:mt-4 lg:ml-10 md:ml-0 sm:ml-0 se:ml-44 se:mt-5">
            <p className="text-base font-medium text-regal-Character leading-6">Hệ sinh thái</p>
            <ul className="text-sm font-normal text-gray-400 my-2">
                    <li className="my-3">
                      <a href="#" className="hover:text-regal-Primary">Công nghệ</a>
                    </li>
                    <li className="my-3">
                      <a href="#" className="hover:text-regal-Primary">Giáo dục</a>
                    </li>
                    <li className="my-3">
                      <a href="#" className="hover:text-regal-Primary">Truyền thông & giải trí</a>
                    </li> 
                    <li className="my-3">
                      <a href="#" className="hover:text-regal-Primary">Đầu tư</a>
                    </li>
            </ul>
          </div>
          {/* -------------- */}
          <div className="ml-20 sm:mt-4 xl:mt-1 xr:ml-20 xr:mt-4 se:ml-20 se:mt-5 md:ml-10 xl:ml-10 lg:ml-32">
            <p className="text-base font-medium mb-2 text-regal-Character leading-6">Trò chuyện với Tesse</p>
            <div className="text-sm text-gray-400 mb-2">037 2484 418</div>
            <div className="text-sm text-gray-400 mb-2">+16262462919</div>
            <div className="text-sm text-gray-400 mb-2">support@tesse.io</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
