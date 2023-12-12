import React, { useState } from "react";
import { Carousel } from 'antd';

const Carousell = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Set the total number of slides

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const transformValue = -currentSlide * 100;

  return (
    <div className="max-w-md mx-auto">
    <div className=" mt-60 p-4 -ml-[150px]">
      <div className="relative overflow-hidden w-[700px] xr:hidden xl:block lg:block se:hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out "
          style={{ transform: `translateX(${transformValue}%)` }}
        >
          {/* Slide 1 */}
          <div className="w-full flex-shrink-0 text-center">
            <div className="p-6 h-80 rounded-md">
              <h1 className="text-6xl font-medium text-white-Neutral">
                Tech Potential Tesse ltd.
              </h1>
              <p className="text-lg font-medium text-white-Neutral">
                Chúng tôi sở hữu Tesse Tech, Edutek, Tesse Education, TBLabs,
                Universe Labs và Tesse Investment
              </p>
              <button className="rounded-full w-36 h-10 bg-regal-Primary my-3">
                Tìm Hiểu
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="w-full flex-shrink-0 text-center">
            <div className=" p-6 h-40 rounded-md">
            <h1 className="text-6xl font-medium text-white-Neutral">
                Tech Potential Tesse ltd.
              </h1>
              <p className="text-lg font-medium text-white-Neutral">
                Chúng tôi sở hữu Tesse Tech, Edutek, Tesse Education, TBLabs,
                Universe Labs và Tesse Investment
              </p>
              <button className="rounded-full w-36 h-10 bg-regal-Primary my-3">
                Tìm Hiểu
              </button>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="w-full flex-shrink-0 text-center">
            <div className=" p-6 h-40 rounded-md">
            <h1 className="text-6xl font-medium text-white-Neutral">
                Tech Potential Tesse ltd.
              </h1>
              <p className="text-lg font-medium text-white-Neutral">
                Chúng tôi sở hữu Tesse Tech, Edutek, Tesse Education, TBLabs,
                Universe Labs và Tesse Investment
              </p>
              <button className="rounded-full w-36 h-10 bg-regal-Primary my-3">
                Tìm Hiểu
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-1/2 transform -translate-y-1/2 flex justify-between w-full">
          <button
            onClick={prevSlide}
            className="-ml-36 -mt-[505px] relative group transition-transform transform-gpu hover:scale-105"
          >
            <img src="/img/ArrowLeft.png.png" className="w-[50px] h-[50px] rounded-full bg-opacity-30 group-hover:opacity-25 opacity-100 transition-opacity"/>
          </button>
          <button
            onClick={nextSlide}
            className="-mr-72 -mt-[515px] relative group transition-transform transform-gpu hover:scale-105 "
          >
            <img src="/img/ArrowRight.png" className="w-[50px] h-[50px] rounded-full bg-opacity-30 group-hover:opacity-25 opacity-100 transition-opacity " />
          </button>
        </div>
    </div>
    {/* ------------------------------------------------------------------- */}
    <div className="xl:hidden lg:hidden">
    <Carousel>
      <div className="text-center">
        <h1 className=" text-4xl font-medium text-Character">Tech Potential Tesse ltd.</h1>
        <p className=" text-sm text-Character">Chúng tôi sở hữu Tesse Tech, Edutek, Tesse Education, TBLabs, Universe Labs và Tesse Investment</p>
        <button className="rounded-full w-32 h-10 bg-regal-Primary my-10">
                Tìm Hiểu
        </button>
      </div>
      <div className="text-center">
      <h1 className=" text-4xl font-medium text-Character">Tech Potential Tesse ltd.</h1>
        <p className=" text-sm text-Character">Chúng tôi sở hữu Tesse Tech, Edutek, Tesse Education, TBLabs, Universe Labs và Tesse Investment</p>
        <button className="rounded-full w-32 h-10 bg-regal-Primary my-10">
                Tìm Hiểu
        </button>
      </div>
      <div className="text-center">
      <h1 className=" text-4xl font-medium text-Character">Tech Potential Tesse ltd.</h1>
        <p className=" text-sm text-Character">Chúng tôi sở hữu Tesse Tech, Edutek, Tesse Education, TBLabs, Universe Labs và Tesse Investment</p>
        <button className="rounded-full w-32 h-10 bg-regal-Primary my-10">
                Tìm Hiểu
        </button>
      </div>
    </Carousel>
    </div>
    </div>
  );
};

export default Carousell;
