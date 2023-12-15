import React from 'react'

const Pioneers = () => {
  return (
    <div className='mx-auto max-w-max items-center '>
      <div className='xl:flex lg:flex-none bg-bgNeutralll'>
        <div className=''>
          <div className='xl:w-[736px] xl:h-[490px] lg:w-[736px] lg:h-[490px] md:w-[736px] md:h-[490px]xl:mx-0 md:mx-32'>
            <img src='/img/BG.png' alt='BG'/>
          </div>
          <div className='w-[163px] xl:h-[359px] lg:h-[359px] sm:h-[303px] absolute xl:-mt-[490px] sm:-mt-[303px] xl:ml-32 lg:ml-32 lg:-mt-[489px] bg-regal-Primary opacity-30'>
            </div>
        </div>
        <div className='xl:mx-0 xl:my-16 xl:text-left lg:text-center md:text-center md:mx-52 md:-mt-24 md:my-16 lg:mx-80 lg:-mt-24 lg:my-16 sm:text-center sm:mx-32 sm:mt-24 sm:my-16 xr:text-center xr:mx-5 xr:mt-20 xr:my-12 se:mx-5 se:mt-20 se:my-12 se:text-center '>
          <p className='font-semibold text-3xl text-regal-Character w-[356px]'>Tiên phong đổi mới công nghệ</p>
          <p className='text-sm font-normal text-gray-400 w-[356px]'>Tesse Holding là công ty mảng công nghệ phần mềm, mang đến cho khách hàng những sản phẩm, dịch vụ chất lượng cao như: các hệ thống đào tạo elearning, mua bán khoá học online, các dự án website, app, blockchain,...</p>
          <button className='rounded-full my-5 w-[169px] h-10 bg-regal-Primary hover:bg-white-Neutral hover:text-regal-Primary hover:shadow-11xl hover:cursor-pointer  ease-in-out duration-300'> <i className="fa-solid fa-globe  mx-2 my-2 text-black"></i>www.tesse.com</button>
        </div>
      </div>
      <div className='xl:flex lg:flex md:flex sm:flex xl:ml-72 lg:ml-24 md:mx-5 mb-32 xr:hidden se:hidden xl:block lg:block md:block sm:block'>
        <div className='w-[102px] hover:shadow-11xl hover:cursor-pointer hover:rounded-xl ease-in-out duration-300'>
          <img src='/img/BeeLimk.png' alt=''/>
        </div>
        <div className='w-[102px] mx-10 hover:shadow-11xl hover:cursor-pointer hover:rounded-xl ease-in-out duration-300'>
          <img src='/img/ichill.png' alt=''/>
        </div>
        <div className='w-[102px] hover:shadow-11xl hover:cursor-pointer hover:rounded-xl ease-in-out duration-300'>
        <img src='/img/webcloud.png' alt=''/>
        </div>
        <div className='w-[102px] mx-10 -mr-2 '>
        <img src='/img/reactjs.png' alt='' className='object-cover h-[42px] hover:shadow-11xl hover:cursor-pointer hover:rounded-full ease-in-out duration-300'/>
        </div>
        <div className='w-[102px] hover:shadow-11xl hover:cursor-pointer hover:rounded-xl ease-in-out duration-300'>
          <img src='/img/mindblock.png' alt=''/>
        </div>
        <div className='w-[102px] mx-10 hover:shadow-11xl hover:cursor-pointer hover:rounded-xl ease-in-out duration-300'>
        <img src='/img/Crowfi.png' alt=''/>
      </div>
      <div className='w-[102px] hover:shadow-11xl hover:cursor-pointer hover:rounded-xl ease-in-out duration-300'>
          <img src='/img/vireal.png' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Pioneers