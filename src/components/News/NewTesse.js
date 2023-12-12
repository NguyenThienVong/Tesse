import React from 'react'
import { FieldTimeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const NewTesse = () => {
  return (
    <div className='mx-auto max-w-max'>
      <div className=''>
        <div className='xl:flex lg:flex sm:float-none md:flex xr:ml-3 xl:ml-7 sm:ml-6 se:ml-3'>
          <div className='font-semibold text-2xl text-regal-Character'>Tin mới nhất</div>
          <div className=' xl:justify-end xl:ml-[825px] lg:ml-[300px] md:ml-0 md:mt-2 sm:-ml-3 sm:mt-5 xr:mt-4 '>
          <Link to="/Newsfillter"><button className=' xl:mx-4 xr:mx-2 font-normal text-sm  gap-8 p-2 -mt-2 hover:shadow-xl rounded-full'>Xem toàn bộ</button></Link>
          </div>
        </div>
        {/* -------------------------------------------------------- */}
        <div className=' mt-8 xr:ml-1 flex xl:xl:overflow-hidden  lg:overflow-x-scroll sm:overflow-x-scroll md:overflow-x-scroll se:scrolling-container se:overflow-x-scroll xr:scrolling-container xr:overflow-x-scroll'>
           {/* ------------------------ */}
           
            <div className='sm:mx-5 se:mx-4 xr:mr-0 hover:shadow-2xl hover:rounded-xl cursor-pointer'>
            <img className='w-auto h-36' src='/img/news.png'/>
            <div className='w-60 mt-6 text-base font-normal hover:text-regal-Primary hover:cursor-pointer '>Lorem Ipsum is just dummy text used in the printing and typesetting industries  </div>
            <div className='flex mt-3'>
            <span className='text-gray-500 -mt-2'><FieldTimeOutlined /></span><div className='text-gray-500 text-xs ml-2 w-28 -mt-1'>1 min 80 views</div>
            <div className='xl:mx-2 xr:mx-4 sm:mx-0 text-gray-500 text-xs w-28 -mt-1'>20 Thg 1, 2023</div>
            </div>
            </div> 
            
            {/* ----------------------- */}
            
            <div className='sm:mr-4 se:mr-4 xr:mr-0 hover:shadow-2xl hover:rounded-xl cursor-pointer'>
            <img className='w-auto h-36' src='/img/news1.png'/>
            <div className='w-60  text-base font-normal mt-6 hover:text-regal-Primary hover:cursor-pointer'>Lorem Ipsum is just dummy text used in the printing and  </div>
            <div className='flex mt-9'>
            <span className='text-gray-500 -mt-2'><FieldTimeOutlined /></span><div className='text-gray-500 text-xs ml-2 w-28 -mt-1'>1 min 80 views</div>
            <div className='xl:mx-2 xr:mx-4 sm:mx-0 text-gray-500 text-xs w-28 -mt-1'>20 Thg 1, 2023</div>
            </div>
            </div>
          
            {/* ------------------------------*/}
           
            <div className='sm:mr-4 se:mr-4 xr:mr-0 hover:shadow-2xl hover:rounded-xl cursor-pointer'>
            <img className='w-auto h-36' src='/img/news2.png'/>
            <div className='w-60 text-base font-normal hover:text-regal-Primary hover:cursor-pointer mt-6'>Lorem Ipsum is just dummy text used in the printing and typesetting industries </div>
            <div className='flex mt-3'>
            <span className='text-gray-500 -mt-2'><FieldTimeOutlined /></span><div className='text-gray-500 text-xs ml-2 w-28 -mt-1'>1 min 80 views</div>
            <div className=' xl:mx-2 xr:mx-4 sm:mx-0 text-gray-500 text-xs w-28 -mt-1'>20 Thg 1, 2023</div>
            </div>
            </div>
          
            <div className='sm:mr-4 xr:mr-0 hover:shadow-2xl hover:rounded-xl cursor-pointer'>
            <img className='w-auto h-36' src='/img/news3.png'/>
            <div className='w-60  text-base font-normal hover:text-regal-Primary hover:cursor-pointer mt-6'>Lorem Ipsum is just dummy   </div>
            <div className='flex mt-14'>
            <span className='text-gray-500 -mt-2'><FieldTimeOutlined /></span><div className=' text-gray-500 text-xs ml-2 w-28 -mt-1'>1 min 80 views</div>
            <div className='mx-2 sm:mx-0 text-gray-500 text-xs w-28 -mt-1'>20 Thg 1, 2023</div>
            </div>
            </div>
            
            </div>
        </div>
        {/* +----------------------------------------------------------------+ */}
        
      </div>
  )
}

export default NewTesse