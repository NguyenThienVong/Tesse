import React from 'react'
import { FieldTimeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const TinTuc = () => {
  return (
    <div className='mx-auto max-w-max'>
      <div className='mt-32'>
        <div className='xl:flex lg:flex sm:float-none md:flex xr:ml-3 xl:ml-7 sm:ml-6 se:ml-3'>
          <div className='font-normal text-2xl text-regal-Character'>Tin tức</div>
          <div className='flex xl:ml-[540px] lg:ml-[300px] md:ml-0 md:mt-2 sm:-ml-3 sm:mt-5 xr:mt-4 '>
          <ul className='flex'>
            <li className='xl:mx-4 xr:mx-2 se:mr-3 font-normal text-sm text-regal-Primary'><a >Tất Cả</a></li>
            <li className=' xl:mx-4 xr:mx-2 se:mr-3 font-normal text-sm text-gray-500 hover:text-regal-Primary'><a >Về Tesse</a></li>
            <li className=' xl:mx-4 xr:mx-2 se:mr-3 font-normal text-sm text-gray-500 hover:text-regal-Primary'><a >Công Nghệ</a></li>
            <li className=' xl:mx-4 xr:mx-2 se:mr-3 font-normal text-sm text-gray-500 hover:text-regal-Primary'><a >Giáo Dục</a></li>
          </ul>
          <Link to="/news">
          <button className=' xl:mx-4 xr:mx-2 font-normal text-sm rounded-full bg-regal-Primary gap-8 p-2 -mt-2 hover:shadow-xl'>Xem Thêm</button>
          </Link>
          </div>
        </div>
        {/* -------------------------------------------------------- */}
        <div className=' mt-8 xr:ml-1 flex xl:overflow-hidden lg:overflow-x-scroll md:overflow-x-scroll sm:overflow-x-scroll xr:overflow-x-scroll se:overflow-x-scroll cursor-pointer '>
           {/* ------------------------------- */}
            <div className='sm:mx-5 se:mx-4 xr:mr-0'>
            <img className='w-auto h-36' src='/img/Image1.png'/>
            <div className='mt-4 text-xs font-normal text-regal-Primary'>Giáo Dục</div>
            <div className='w-60 mt-2 text-base font-normal hover:text-regal-Primary hover:cursor-pointer '>Senior Gyeonggi Officials Required to Declare Virtual Asset Holdings by Sept 1</div>
            <div className='flex mt-3'>
            <span className='text-gray-500 -mt-2'><FieldTimeOutlined /></span><div className='text-gray-500 text-xs ml-2 w-28 -mt-1'>1 min 80 views</div>
            <div className='xl:mx-2 xr:mx-4 sm:mx-0 text-gray-500 text-xs w-28 -mt-1'>6 Thg 2, 2023</div>
            </div>
            </div> 
            {/* --------------------------- */}
            <div className='sm:mr-4 se:mr-4 xr:mr-0'>
            <img className='w-auto h-36' src='/img/Image2.png'/>
            <div className='mt-4 text-xs font-normal text-regal-Primary'>Giáo Dục</div>
            <div className='w-60 mt-2 text-base font-normal hover:text-regal-Primary hover:cursor-pointer'>Senior Gyeonggi Officials Required to Declare Virtual Asset </div>
            <div className='flex mt-9'>
            <span className='text-gray-500 -mt-2'><FieldTimeOutlined /></span><div className='text-gray-500 text-xs ml-2 w-28 -mt-1'>1 min 80 views</div>
            <div className='xl:mx-2 xr:mx-4 sm:mx-0 text-gray-500 text-xs w-28 -mt-1'>6 Thg 2, 2023</div>
            </div>
            </div>
            {/* ------------------------------*/}
            <div className='sm:mr-4 se:mr-4 xr:mr-0'>
            <img className='w-auto h-36' src='/img/Image3.png'/>
            <div className='mt-4 text-xs font-normal text-regal-Primary'>Giáo Dục</div>
            <div className='w-60 mt-2 text-base font-normal hover:text-regal-Primary hover:cursor-pointer'>Senior Gyeonggi Officials Required to Declare Virtual Asset Holdings by Sept 1</div>
            <div className='flex mt-3'>
            <span className='text-gray-500 -mt-2'><FieldTimeOutlined /></span><div className='text-gray-500 text-xs ml-2 w-28 -mt-1'>1 min 80 views</div>
            <div className=' xl:mx-2 xr:mx-4 sm:mx-0 text-gray-500 text-xs w-28 -mt-1'>6 Thg 2, 2023</div>
            </div>
            </div>
            <div className='sm:mr-4 xr:mr-0'>
            <img className='w-auto h-36' src='/img/Image4.png'/>
            <div className='mt-4 text-xs font-normal text-regal-Primary'>Giáo Dục</div>
            <div className='w-60 mt-2 text-base font-normal hover:text-regal-Primary hover:cursor-pointer'>Senior Gyeonggi Officials </div>
            <div className='flex mt-14'>
            <span className='text-gray-500 -mt-2'><FieldTimeOutlined /></span><div className=' text-gray-500 text-xs ml-2 w-28 -mt-1'>1 min 80 views</div>
            <div className='mx-2 sm:mx-0 text-gray-500 text-xs w-28 -mt-1'>6 Thg 2, 2023</div>
            </div>
            </div>
            </div>
        </div>
      </div>
   
  )
}

export default TinTuc