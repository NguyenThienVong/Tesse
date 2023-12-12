import React from "react";

const Manage = () => {
  return (
    <div className="mx-auto max-w-max">
      <div className=" xl:flex lg:flex md:flex sm:flex py-20">
        <div className="flex-1 mr-32 ml-10">
          <div className="font-semibold text-3xl leading-10">Nhân sự</div>
          <p className="font-semibold text-3xl leading-10 text-regal-Primary my-4">
            chủ chốt
          </p>
          <div className="text-sm font-normal leading-7 w-[180px] text-gray-400 relative">
            Những cá nhân chủ chốt tại Tesse Holding là những người đam mê, tận
            tâm, và tài năng, là nguồn cảm hứng để đưa công ty đến vị trí hàng
            đầu trong lĩnh vực công nghệ.
          </div>
          <img src='./img/detail.png' className='w-96 h-96 xl:-ml-32 xl:-mt-32 lg:-ml-8 lg:-mt-20 md:-mt-20 md:-ml-8 sm:-mt-20 sm:-ml-8 xr:-mt-32 xr:-ml-8 se:-mt-32 se:-ml-8'/>
        </div>
        {/* ------------------------- */}
        <div className="flex-auto xl:-ml-16 lg:-ml-16 md:-ml-16 sm:-ml-16 xr:ml-12 se:ml-10 mr-4 mt-10">
          <div className="xl:flex lg:flex md:flex sm:flex xr:flex-none">
            {/* ------------- */}
            <div className="mr-4 hover:shadow-10xl hover:cursor-pointer hover:rounded-2xl ease-in-out duration-300 hover:mb-4 xl:p-8 xr:p-8 lg:p-0 md:p-0 sm:p-0 se:p-8">
              <img
                className="object-cover max-w-full h-auto rounded-xl bg-neutral-200"
                src="./img/imgTam.png"
              />
              <div className="my-4">
                <div className="font-medium text-base leading-6 ">
                  NGUYỄN TRUNG TÂM
                </div>
                <div className="font-no rmal text-sm leading-5 text-gray-400">
                  Chairman, CO-FOUNDER
                </div>
              </div>
            </div>
            {/* --------------- */}
            <div className="mr-4 hover:shadow-10xl hover:cursor-pointer hover:rounded-2xl ease-in-out duration-300 hover:mb-4 xl:p-8 xr:p-8 lg:p-0 md:p-0 sm:p-0 se:p-8">
              <img
                className="object-cover max-w-full h-auto rounded-xl bg-neutral-200"
                src="./img/imgTuanAnh.png"
              />
              <div className="my-4 ">
                <div className="font-medium text-base leading-6 ">
                  NGUYỄN PHẠM TUẤN ANH
                </div>
                <div className="font-normal text-sm leading-5 text-gray-400">
                  Vice-Chairman, CO-FOUNDER
                </div>
              </div>
            </div>
            <div className=" hover:shadow-10xl hover:cursor-pointer hover:rounded-2xl ease-in-out duration-300 hover:mb-4 xl:p-8 xr:p-8 lg:p-0 md:p-0 sm:p-0 se:p-8">
              <img
                className="object-cover max-w-full h-auto rounded-xl bg-neutral-200"
                src="./img/imgLu.png"
              />
              <div className="my-4">
                <div className="font-medium text-base leading-6 ">
                  VINCENT LU
                </div>
                <div className="font-normal text-sm leading-5 text-gray-400">
                  Board of Directors TESSE HOLDING
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------- */}
          <div className="xl:flex lg:flex md:flex sm:flex">
            {/* ------------- */}
            <div className="mr-4 hover:shadow-10xl hover:cursor-pointer hover:rounded-2xl ease-in-out duration-300 xl:p-8 xr:p-8 lg:p-0 md:p-0 sm:p-0 se:p-8 se:hover:mb-4">
              <img
                className="object-cover max-w-full h-auto rounded-xl bg-neutral-200"
                src="./img/imgThan.png"
              />
              <div className="my-4">
                <div className="font-medium text-base leading-6 ">
                  PHẠM NGỌC THÂN
                </div>
                <div className="font-no rmal text-sm leading-5 text-gray-400">
                  Giám Đốc Edutek
                </div>
              </div>
            </div>
            {/* ------------- */}
            <div className="mr-4 hover:shadow-10xl hover:cursor-pointer hover:rounded-2xl ease-in-out duration-300 hover:mb-4 xl:p-8 xr:p-8 lg:p-0 md:p-0 sm:p-0 se:p-8">
              <img
                className="object-cover max-w-full h-auto rounded-xl bg-neutral-200"
                src="./img/imgNhan.png"
              />
              <div className="my-4 ">
                <div className="font-medium text-base leading-6 ">
                NGUYỄN THANH NHÀN
                </div>
                <div className="font-normal text-sm leading-5 text-gray-400">
                Giám Đốc Tesse Tech
                </div>
              </div>
            </div>
            <div className="hover:shadow-10xl hover:cursor-pointer hover:rounded-2xl ease-in-out duration-300 xl:p-8 xr:p-8 lg:p-0 md:p-0 sm:p-0 se:p-8 se:hover:mb-4">
              <img
                className="object-cover max-w-full h-auto rounded-xl bg-neutral-200"
                src="./img/imgTran.png"
              />
              <div className="my-4">
                <div className="font-medium text-base leading-6 ">
                  ĐẶNG HIẾU TRÂN
                </div>
                <div className="font-normal text-sm leading-5 text-gray-400">
                  Giám Đốc izTalk
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------- */}
        </div>
      </div>
      <div className=" bg-black  xl:w-[1116px] h-[272px] lg:w-[1000px] rounded-xl xl:ml-32 lg:ml-1 ">
      <div className="flex pt-16 pb-10">
        <div className="xl:mx-5 lg:mx-5 md:mx-5 sm:mx-5 xr:mx-1">
        <img src="./img/image15.png " className="w-full max-w-md h-auto hover:shadow-11xl hover:cursor-pointer hover:rounded-xl ease-in-out duration-300  "/>
        </div>
        <div className="xl:mx-5 lg:mx-5 md:mx-5 sm:mx-5 xr:mx-1">
        <img src="./img/image16.png" className="w-full max-w-md h-auto hover:shadow-11xl hover:cursor-pointer hover:rounded-xl ease-in-out duration-300"/>
        </div>
        <div className="xl:mx-5 lg:mx-5 md:mx-5 sm:mx-5 xr:mx-1">
        <img src="./img/image17.png" className="w-full max-w-md h-auto hover:shadow-11xl hover:cursor-pointer hover:rounded-xl ease-in-out duration-300"/>
        </div>
        <div className="xl:mx-5 lg:mx-5 md:mx-5 sm:mx-5 xr:mx-1">
        <img src="./img/image20.png" className="w-full max-w-md h-auto hover:shadow-11xl hover:cursor-pointer hover:rounded-xl ease-in-out duration-300"/>
        </div>
        <div className="xl:mx-5 lg:mx-5 md:mx-5 sm:mx-5 xr:mx-1">
        <img src="./img/image21.png" className="w-full max-w-md h-auto hover:shadow-11xl hover:cursor-pointer hover:rounded-xl ease-in-out duration-300"/>
        </div>
      </div>
      <div className="flex">
        <div className="xl:mx-10 lg:ml-10 md:mx-6 xr:mx-3 se:mx-2">
        <img src="./img/image25.png" className="w-[115px] h-10 hover:shadow-11xl hover:cursor-pointer hover:rounded-md ease-in-out duration-300"/>
        </div>
        <div className=" md:mx-6 xl:mx-10 xr:mx-3 se:mx-2">
        <img src="./img/image26.png" className="w-[115px] h-10 hover:shadow-11xl hover:cursor-pointer hover:rounded-md ease-in-out duration-300"/>
        </div>
        <div className="md:mx-6 xl:mx-10 xr:mx-3 se:mx-2">
        <img src="./img/image27.png" className="w-[115px] h-10 hover:shadow-11xl hover:cursor-pointer hover:rounded-md ease-in-out duration-300"/>
        </div>
        <div className="md:mx-6 xl:mx-10 xr:mx-3 se:mx-2">
        <img src="./img/image19.png" className="w-[115px] h-10 hover:shadow-11xl hover:cursor-pointer hover:rounded-md ease-in-out duration-300"/>
        </div>
        <div className="md:mx-6 xl:mx-10 xr:mx-3 se:mx-2">
        <img src="./img/image22.png" className="w-[115px] h-10 hover:shadow-11xl hover:cursor-pointer hover:rounded-md ease-in-out duration-300"/>
        </div>
        <div className="md:mx-6 xl:mx-10 xr:mx-3 se:mx-2">
        <img src="./img/image18.png" className="w-[115px] h-10 hover:shadow-11xl hover:cursor-pointer hover:rounded-md ease-in-out duration-300"/>
        </div>
        <div className="md:mx-6 xl:mx-10 xr:mx-3 se:mx-2">
        <img src="./img/image23.png" className="w-[115px] h-10 hover:shadow-11xl hover:cursor-pointer hover:rounded-md ease-in-out duration-300"/>
        </div>
        <div className="md:mx-6 xl:mx-10 xr:mx-3 se:mx-2">
        <img src="./img/image24.png" className="w-[115px] h-10 hover:shadow-11xl hover:cursor-pointer hover:rounded-md ease-in-out duration-300"/>
        </div>
      </div>
      
      </div>
      
    </div>
  );
};

export default Manage;
