import React from 'react'

const Contact = () => {
  return (
    <div className=" z-40 fixed xl:block lg:block md:block sm:block xr:hidden se:hidden top-72 xl:right-0 lg:right-0 md:right-0 sm:right-0 xr:right-72 flex flex-col items-center justify-center w-[50px] h-[168px] bg-regal-Primary text-2xl rounded-lg hover:cursor-pointer shadow-xl hover:shadow-xl hover:shadow-regal-Primary
    ">
      <div className="py-2 ml-4">
        <i
          className="fa-sharp fa-solid fa-phone-flip text-2xl"
          style={{ color: "#050505" }}
        ></i>
      </div>
      <div className=" ml-3 border-t-2 border-black w-7">
      </div>
      <i className="fa-solid fa-message inline-block my-4 ml-4 text-2xl"></i>
      <div className=" ml-3 border-t-2 border-black w-7"></div>
      <div className="py-2 ml-5">
        <i
          className="fa-solid fa-location-dot inline-block text-2xl"
          style={{ color: "#050505" }}
        ></i>
      </div>
    </div>
  )
}

export default Contact