import React from "react";

import Connect from "../components/AboutTesse/Connect";
import Conten from "../components/AboutTesse/Conten";
import Tessemodel from "../components/AboutTesse/Tessemodel";
import TesseHistory from "../components/AboutTesse/TesseHistory";
import Cart from "../components/HomePages/Cart";
import Manage from "../components/AboutTesse/Manage";
import Header from "../Layout/Header";

const About = () => {
  return (
    <div className="font-Inter">
      <div className="bg-BG h-[702px] w-auto bg-center bg-cover ">
        <Header/>
        <Connect />
      </div>
      <div className="mx-auto max-w-max">
        <Conten />
      </div>
      <div className="mx-auto max-w-max">
        <Tessemodel />
      </div>
      <div className="bg-black ">
        <TesseHistory />
        <Cart/>
      </div>
      <div>
        <Manage/>
      </div>
    </div>
  );
};

export default About;
