import React from 'react'
import {
    FieldTimeOutlined,
  } from "@ant-design/icons";
const Similararticles = () => {
  return (
    <div className='mx-auto max-w-max'>
        <div className='text-2xl font-semibold leading-8 text-center'>Bài viết <span className='text-regal-Primary'>tương tự</span></div>
        <div className=' mt-8 xr:ml-1 flex xl:xl:overflow-hidden lg:overflow-x-scroll sm:overflow-x-scroll md:overflow-x-scroll se:scrolling-container se:overflow-x-scroll xr:scrolling-container xr:overflow-x-scroll '>
           {/* ------------------------ */}
            <div className='sm:mx-5 se:mx-4 xr:mr-0'>
            <img className='w-auto h-36' src='/img/news.png'/>
            <div className='w-60 mt-2 text-base font-normal hover:text-regal-Primary hover:cursor-pointer '>Lorem Ipsum is just dummy text used in the printing and typesetting industries</div>
            <div className='flex mt-3'>
            <span className='text-gray-500 -mt-2'><FieldTimeOutlined /></span><div className='text-gray-500 text-xs ml-2 w-28 -mt-1'>1 min 80 views</div>
            <div className='xl:mx-2 xr:mx-4 sm:mx-0 text-gray-500 text-xs w-28 -mt-1'>6 Thg 2, 2023</div>
            </div>
            </div> 
            {/* ----------------------- */}
            <div className='sm:mr-4 se:mr-4 xr:mr-0'>
            <img className='w-auto h-36' src='/img/news1.png'/>
            <div className='w-60 mt-2 text-base font-normal hover:text-regal-Primary hover:cursor-pointer'>Lorem Ipsum is just dummy text used in the printing and  </div>
            <div className='flex mt-9'>
            <span className='text-gray-500 -mt-2'><FieldTimeOutlined /></span><div className='text-gray-500 text-xs ml-2 w-28 -mt-1'>1 min 80 views</div>
            <div className='xl:mx-2 xr:mx-4 sm:mx-0 text-gray-500 text-xs w-28 -mt-1'>6 Thg 2, 2023</div>
            </div>
            </div>
            {/* ------------------------------*/}
            <div className='sm:mr-4 se:mr-4 xr:mr-0'>
            <img className='w-auto h-36' src='/img/news2.png'/>
            <div className='w-60 mt-2 text-base font-normal hover:text-regal-Primary hover:cursor-pointer'>Lorem Ipsum is just dummy text used in the printing and typesetting industries</div>
            <div className='flex mt-3'>
            <span className='text-gray-500 -mt-2'><FieldTimeOutlined /></span><div className='text-gray-500 text-xs ml-2 w-28 -mt-1'>1 min 80 views</div>
            <div className=' xl:mx-2 xr:mx-4 sm:mx-0 text-gray-500 text-xs w-28 -mt-1'>6 Thg 2, 2023</div>
            </div>
            </div>
            <div className='sm:mr-4 xr:mr-0'>
            <img className='w-auto h-36' src='/img/news3.png'/>
            <div className='w-60 mt-2 text-base font-normal hover:text-regal-Primary hover:cursor-pointer'>Lorem Ipsum is just dummy </div>
            <div className='flex mt-14'>
            <span className='text-gray-500 -mt-2'><FieldTimeOutlined /></span><div className=' text-gray-500 text-xs ml-2 w-28 -mt-1'>1 min 80 views</div>
            <div className='mx-2 sm:mx-0 text-gray-500 text-xs w-28 -mt-1'>6 Thg 2, 2023</div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Similararticles