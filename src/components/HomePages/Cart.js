import React, { useState } from "react";
import Education from "./Education";
import Entertainment from "./Entertainment";
import Invest from "./Invest";
const Cart = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-max">
        <div className="xl:flex lg:none md:none sm:none ">
          <div className="xl:mx-72 lg:ml-[500px] md:ml-[380px] sm:ml-[345px] xr:ml-[255px] se:ml-[255px] pt-6">
            <div className="-ml-56">
              <h1 className="text-regal-Neutrall text-4xl mt-20">
                Hệ sinh thái Tesse
              </h1>
              <p className="text-regal-Neutral xl:w-[600px] lg:w-[400px] text-sm font-normal my-10 w-80">
                Tesse Holding không chỉ là một công ty công nghệ phần mềm tiên
                phong mà còn là một phần của một hệ sinh thái đa dạng, bao gồm
                Công Nghệ, Giáo Dục, Truyền Thông & Giải Trí, và Đầu Tư.
              </p>
              <div className="border-t-2 border-regal-Neutralll w-4/5 my-10"></div>
              <div className="mt-4">
                <button
                  className="text-white mx-1 h-10 w-8 rounded-full"
                  onClick={toggleContent}
                >
                  {isExpanded ? (
                    // Icon X when the mobile menu is open
                    <img src="/img/paddingicon2.png"></img>
                  ) : (
                    // Icon for opening the mobile menu
                    <img src="/img/paddingicon1.png"></img>
                  )}
                </button>
                <div className="text-regal-Primary font-medium text-xl ml-12 -mt-8">
                  CÔNG NGHỆ
                </div>
                {isExpanded && (
                  <div>
                    {" "}
                    <p className="text-regal-Neutral text-sm my-4 xl:w-[500px] md:w-80 xl:ml-12 md:ml-14 sm:w-72 sm:ml-12 se:w-[301px] se:ml-12">
                      The Gyeonggi province of South Korea is requiring
                      officials of rank 4 or higher to report their
                      cryptocurrency holdings from today until September...
                      <a href="#" className="hover:text-regal-Neutrall">
                        Xem thêm
                      </a>
                    </p>{" "}
                    <i className="fa-solid fa-globe text-regal-Neutrall mx-2 mb-10 ml-12 md:ml-14"></i>
                    <a
                      href="#"
                      className="text-regal-gray hover:text-regal-Neutrall "
                    >
                      www.tesse.com
                    </a>
                  </div>
                )}
              </div>
              <div className="border-t-2 border-regal-Neutralll w-4/5 my-10"></div>
              <Education/>
              <div className="border-t-2 border-regal-Neutralll w-4/5 my-10"></div>
              <Entertainment/>
              <div className="border-y-2 border-regal-Neutralll w-4/5 my-10">
                <Invest/>
              </div>
            </div>
          </div>
          <div className="flex xl:-ml-52 lg:ml-64 md:ml-36 sm:ml-20">
            <div className="my-36">
              <img
                src="/img/thongtin1.png"
                className="max-h-[647px] max-w-full"
              />
            </div>
            <div>
              <img
                src="/img/thongtin2.png"
                className="h-[362px] max-w-full -ml-10 my-16"
              />
              <img
                src="/img/thongtin3.png"
                className="h-[233px] w-[180px] -ml-6 -my-16"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
