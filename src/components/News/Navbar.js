import React, { useState } from "react";
import {
  DownOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";
import { Link } from "react-router-dom";
const menu = [
  {
    label: "Hệ sinh thái Tesse",
    key: "SubMenu",
    children: [
      {
        type: "group",
        label: "Tesse",
        children: [
          {
            label: "Công nghệ",
            key: "setting:1",
          },
          {
            label: "Giáo Dục",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Tesse",
        children: [
          {
            label: "Truyền thông & giải trí",
            key: "setting:3",
          },
          {
            label: "Đầu Tư",
            key: "setting:4",
          },
        ],
      },
    ],
  },
];
const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Viêt Nam
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        English
      </a>
    ),
  },
];
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="flex mx-auto max-w-max text-center items-center pt-4">
      {!isMobileMenuOpen && (
        <Link  to="/">
        <img
          className="w-auto h-10 hover:cursor-pointer xl:ml-10 mb-2 xr:ml-10 se:ml-20"
          src="/img/Logo.png"
        />
        </Link>
      )}
      <ul
        className="hidden lg:flex md:text-justify font-normal 
      xl:text-sm md:text-base text-center items-center 
      leading-5 pl-14"
      >
        <li className="mr-6 md:my-4 sm:my-4">
          <Link
            className=" text-regal-Character relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            to="/aboutTesse"
          >
            Về Tesse
          </Link>
        </li>
         <Link to="/TesseEcosystem">
        <Menu
          mode="horizontal"
          items={menu}
          className=" text-regal-Character xl:relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px]  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center xl:w-40 md:w-40"
          
          style={{ background: "transparent" }}
        ></Menu>
        </Link>
        <li className="mr-6 md:my-4 sm:my-4">
          <Link
            className="text-regal-Character relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            to="/news"
          >
            Tin tức
          </Link>
        </li>
        <li className="mr-1 md:my-4 sm:my-4">
          <Link
            className="text-regal-Character relative text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            href="#"
          >
            Cơ hội nghề nghiệp
          </Link>
        </li>
      </ul>
      <ul className="hidden lg:flex font-normal  items-center xl:pl-80 md:px-4 ipx:px-4 md:justify-between se:items-center se:px-4 se:justify-center">
        <li className="text-regal-Character">
          <a
            href="#"
            className="relative se:text-xs xl:text-sm md:text-sm lg:text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            Liên Hệ
          </a>
        </li>

        <Dropdown
          className="text-regal-Character hover:cursor-pointer mx-5 relative se:text-xs xl:text-sm md:text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          menu={{ items }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              VIE
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        {/* -------------------------------------------------------------------------------------- */}
      </ul>
      <div className="lg:hidden">
        {/* Mobile Menu Icon */}
        <button
          className={`text-regal-Character mx-32 h-12 w-10 rounded-full relative ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <CloseOutlined className="transition-transform duration-300 ease-in-out transform  absolute xr:top-1/2 xr:-left-40 -translate-y-1/2 se:-left-40 text-2xl" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer text-primary md:ml-44 xr:ml-10 se:ml-5"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden absolute top-0 md:left-[500px] h-[1200px] w-[250px] sm:left-[23rem] bg-black  p-4 flex flex-col z-40 xr:left-44 se:left-32
        transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        >
          <Link to="/">
          <img src="/img/Logo.png" className="w-28 h-10 my-10 mx-4 mt-0" /></Link>
          
          <Link
            to="/aboutTesse"
            className="text-Character  -ml-[100px] mb-4 text-base xr:-ml-24 hover:text-regal-Primary"
          >
            Về Tesse
          </Link>
     <Link to="/TesseEcosystem">
          <Menu
            mode="inline"
            items={menu}
            className="bg-black text-Character xl:w-40 md:w-56 -ml-3 my-4 text-base sm:-ml-4 xr:-ml-4"
          ></Menu>
          </Link>
          <Link
            to="/news"
            className="text-Character  -ml-[110px] my-4 text-base xr:-ml-28 hover:text-regal-Primary"
          >
            Tin tức
          </Link>
          <a
            href="#"
            className="text-Character  -ml-[15px] my-4 mb-16 text-base xr:-ml-5 hover:text-regal-Primary"
          >
            Cơ hội nghề nghiệp
          </a>
          <div className="border border-borderNeutral"></div>
          <div className="mt-20">
            <a
              href="#"
              className="text-Character -ml-[100px] my-2 text-base hover:text-regal-Primary"
            >
              Liên hệ
            </a>
            <Dropdown
              className="text-Character hover:cursor-pointer mx-5 relative xl:text-sm md:text-sm w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center my-10 md:-ml-[-35px] text-base sm:ml-9 xr:ml-9 xr:text-sm se:text-sm se:ml-8 hover:text-regal-Primary"
              menu={{ items }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  VIE
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="mt-36 hover:text-regal-Primary">
            <p className="text-regal-Primary -ml-[15px] my-2">
              Trò chuyện với Tesse
            </p>
            <p className="text-Character  -ml-[60px] my-2">037 2484 418</p>
            <p className="text-Character  -ml-[55px] my-2">+16262462919</p>
            <p className="text-Character  -ml-[40px] my-2">support@tesse.io</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
