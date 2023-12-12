import React from 'react'
import Header from "../Layout/Header";
import Conten from "../components/HomePages/Conten";
import KhamPha from "../components/HomePages/KhamPha";
import ThanhTua from "../components/HomePages/ThanhTua";
import Cart from "../components/HomePages/Cart";
import TinTuc from "../components/HomePages/TinTuc";
import Carousell from "../components/HomePages/Carousel";
const HomePages = () => {
  return (
    <div className="font-Inter">
         <div className="bg-hero-pattern h-[856px] bg-cover bg-center">
         <Header />
        <Carousell />
      </div>
      {/* ----------------------------------*/}
      <div className="bg-white xl:flex lg:float-none md:float-none sm:float-none mx-auto max-w-max ">
        <div className="flex-1">
          <KhamPha />
        </div>
        <div className="flex-1">
          <ThanhTua />
        </div>
      </div>
      {/* ---------------------------------- */}
      <Conten />
      <div className="xl:mt-[700px] lg:mt-[0px] md:mt-[0px] sm:mt-[0px] xr:mt-[50px] ">
        <Cart />
      </div>
      <TinTuc />
    </div>
  )
}

export default HomePages