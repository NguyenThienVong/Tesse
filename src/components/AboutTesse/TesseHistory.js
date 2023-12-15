import { useState, useEffect } from "react";

const TesseHistory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(getTotalSlides());

  // Function to determine total slides based on window width
  function getTotalSlides() {
    return window.innerWidth >= 1024 ? 3 : 5;
  }

  // Update totalSlides when window is resized
  useEffect(() => {
    function handleResize() {
      setTotalSlides(getTotalSlides());
    }

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const transformValue = -currentSlide * 100;
  return (
    <div className="mx-auto max-w-max">
      <div className=" xl:flex lg:flex md:flex sm:flex xr:flex-none py-10">
        <div className="md:ml-10 xl:ml-72 xr:ml-10 se:ml-10">
          <div className="text-3xl font-semibold leading-10 text-regal-Primary w-72">
            Lịch Sử
            <span className="text-3xl font-semibold leading-10 text-white-Neutral mx-4 ">
              Công Ty
            </span>
          </div>
        </div>
        <div className="text-white-Neutral text-sm font-normal leading-5 xl:w-[560px] lg:w-[560px] md:w-[560px] sm:w-[560px] xl:mx-40 lg:mx-16 md:mx-10 xr:w-[350px] se:w-[340px] se:mx-9 se:mr-2 se:mt-4 xr:mt-10 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 xr:mx-10">
          Tesse với 6 năm thành lập, công ty đã có những bước tiến vô cùng thành
          công. Hình thành bởi 2 con người có tầm nhìn xa ,sát cánh cùng với đội
          ngũ tinh nhuệ, thiện chiến.
        </div>
      </div>

      <img
        src="./img/baner.png"
        className=" rounded object-cover w-full h-[316px] mb-52"
      />

      {/* ----------------------------------------------------------- */}
      <div className=" xl:-mt-20 xl:ml-32 lg:mt-28 md:mt-28 sm:mt-0 xr:-mt-44 p-4 ">
        <div className="relative overflow-hidden xl:w-[1100px] lg:w-[900px] md:w-[595px] xr:block xl:block lg:block sm:block md:block md:mx-16">
          <div
            className="flex transition-transform duration-300 ease-in-out "
            style={{ transform: `translateX(${transformValue}%)` }}
          >
            {/* Slide 1 */}
            <div className="">
              <div className="border-dashed border-b-4 border-borderPrimary text-regal-Primary xl:w-[372px] h-[114px] lg:w-[300px] xr:w-[390px] text-2xl font-semibold leading-10">
                2016
              </div>
              <div className="-ml-[3,5px] mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path
                    d="M8 0L15.7942 4.5V13.5L8 18L0.205771 13.5V4.5L8 0Z"
                    fill="#ECC329"
                  />
                </svg>
              </div>
              <div className="w-[298px] ml-2 h-[100px] text-white-Neutral text-sm font-normal leading-5 border-dotted border-l-2 border-borderPrimaryy px-10 p-5">
                Tuấn Anh & Trung Tâm gặp nhau, lên kế hoạch & thực hiện dự án
                công nghệ. Cùng một chí hướng & sứ mệnh phát triển lớn
              </div>
            </div>
            {/* --------------------------------- */}
            <div>
              <div className="border-dashed border-b-4 border-borderPrimary text-regal-Primary xl:w-[372px] h-[114px] text-2xl font-semibold leading-10 mx-1 lg:w-[300px] xr:w-[390px]">
                2017
              </div>
              <div className="-ml-2 mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path
                    d="M8 0L15.7942 4.5V13.5L8 18L0.205771 13.5V4.5L8 0Z"
                    fill="#ECC329"
                  />
                </svg>
              </div>
              <div className="w-[298px] h-[100px] text-white-Neutral text-sm font-normal leading-5 border-dotted border-l-2 border-borderPrimaryy px-10 p-5">
                Hệ thống công nghệ được đưa ra thị trường toàn cầu trong vòng 8
                tháng. Sau đó quay lại Việt Nam, tạo ra mảng công nghệ dạy học
                trực tuyến về giáo dục.
              </div>
            </div>
            {/* -------------------------------- */}
            <div>
              <div className="border-dashed border-b-4 border-borderPrimary text-regal-Primary xl:w-[370px] lg:w-[300px] h-[114px] text-2xl font-semibold leading-10 xr:w-[390px]">
                2018
              </div>
              <div className="-ml-2 mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path
                    d="M8 0L15.7942 4.5V13.5L8 18L0.205771 13.5V4.5L8 0Z"
                    fill="#ECC329"
                  />
                </svg>
              </div>
              <div className="w-[298px] h-[100px] text-white-Neutral text-sm font-normal leading-5 border-dotted border-l-2 border-borderPrimaryy px-10 p-5">
                Thành lập Tesse Tech ngày 05/11/2018 về mảng nghiên cứu công
                nghệ & outsource.
              </div>
            </div>
            {/* Slide 1 */}
            {/* Slide 2 */}
            <div>
              <div className="border-dashed border-b-4 border-borderPrimary text-regal-Primary xl:w-[372px] h-[114px] text-2xl font-semibold leading-10 ml-1 lg:w-[300px] xr:w-[370px]">
                2019
              </div>
              <div className="-ml-2 mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path
                    d="M8 0L15.7942 4.5V13.5L8 18L0.205771 13.5V4.5L8 0Z"
                    fill="#ECC329"
                  />
                </svg>
              </div>
              <div className="w-[298px] h-[100px] text-white-Neutral text-sm font-normal leading-5 border-dotted border-l-2 border-borderPrimaryy px-10 p-5">
                Tuấn Anh & Trung Tâm gặp nhau, lên kế hoạch & thực hiện dự án
                công nghệ. Cùng một chí hướng & sứ mệnh phát triển lớn
              </div>
            </div>
            {/* ---------------------------------- */}
            <div>
              <div className="border-dashed border-b-4 border-borderPrimary text-regal-Primary xl:w-[372px] h-[114px] text-2xl font-semibold leading-10 mx-1 lg:w-[300px] xr:w-[360px]">
                2020
              </div>
              <div className="-ml-2 mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path
                    d="M8 0L15.7942 4.5V13.5L8 18L0.205771 13.5V4.5L8 0Z"
                    fill="#ECC329"
                  />
                </svg>
              </div>
              <div className="w-[298px] h-[100px] text-white-Neutral text-sm font-normal leading-5 border-dotted border-l-2 border-borderPrimaryy px-10 p-5">
                Hệ thống công nghệ được đưa ra thị trường toàn cầu trong vòng 8
                tháng. Sau đó quay lại Việt Nam, tạo ra mảng công nghệ dạy học
                trực tuyến về giáo dục.
              </div>
            </div>
            {/* ------------------------------------- */}
            <div>
              <div className="border-dashed border-b-4 border-borderPrimary text-regal-Primary xl:w-[372px] h-[114px] text-2xl font-semibold leading-10 lg:w-[300px]">
                2021
              </div>
              <div className="-ml-2 mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path
                    d="M8 0L15.7942 4.5V13.5L8 18L0.205771 13.5V4.5L8 0Z"
                    fill="#ECC329"
                  />
                </svg>
              </div>
              <div className="w-[298px] h-[100px] text-white-Neutral text-sm font-normal leading-5 border-dotted border-l-2 border-borderPrimaryy px-10 p-5">
                Thành lập Tesse Tech ngày 05/11/2018 về mảng nghiên cứu công
                nghệ & outsource.
              </div>
            </div>
            {/* Slide 3 */}
            <div>
              <div className="border-dashed border-b-4 border-borderPrimary text-regal-Primary xl:w-[372px] h-[114px] text-2xl font-semibold leading-10 ml-1 lg:w-[300px]">
                2022
              </div>
              <div className="-ml-2 mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path
                    d="M8 0L15.7942 4.5V13.5L8 18L0.205771 13.5V4.5L8 0Z"
                    fill="#ECC329"
                  />
                </svg>
              </div>
              <div className="w-[298px] h-[100px] text-white-Neutral text-sm font-normal leading-5 border-dotted border-l-2 border-borderPrimaryy px-10 p-5">
                Tuấn Anh & Trung Tâm gặp nhau, lên kế hoạch & thực hiện dự án
                công nghệ. Cùng một chí hướng & sứ mệnh phát triển lớn
              </div>
            </div>
            {/* ------------------------------- */}
            <div>
              <div className="border-dashed border-b-4 border-borderPrimary text-regal-Primary xl:w-[372px] h-[114px] text-2xl font-semibold leading-10 mx-1 lg:w-[300px]">
                2023
              </div>
              <div className="-ml-2 mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path
                    d="M8 0L15.7942 4.5V13.5L8 18L0.205771 13.5V4.5L8 0Z"
                    fill="#ECC329"
                  />
                </svg>
              </div>
              <div className="w-[298px] h-[100px] text-white-Neutral text-sm font-normal leading-5 border-dotted border-l-2 border-borderPrimaryy px-10 p-5">
                Hệ thống công nghệ được đưa ra thị trường toàn cầu trong vòng 8
                tháng. Sau đó quay lại Việt Nam, tạo ra mảng công nghệ dạy học
                trực tuyến về giáo dục.
              </div>
            </div>
            {/* ------------------------------ */}
            <div>
              <div className="border-dashed border-b-4 border-borderPrimary text-regal-Primary xl:w-[372px] h-[114px] text-2xl font-semibold leading-10 lg:w-[300px]">
                2024
              </div>
              <div className="-ml-2 mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <path
                    d="M8 0L15.7942 4.5V13.5L8 18L0.205771 13.5V4.5L8 0Z"
                    fill="#ECC329"
                  />
                </svg>
              </div>
              <div className="w-[298px] h-[100px] text-white-Neutral text-sm font-normal leading-5 border-dotted border-l-2 border-borderPrimaryy px-10 p-5">
                Thành lập Tesse Tech ngày 05/11/2018 về mảng nghiên cứu công
                nghệ & outsource.
              </div>
            </div>
            {/* slider3 */}
          </div>
        </div>
        <div className="xl:-ml-20 lg:ml-10 md:text-center my-24 sm:text-center xr:text-center se:ml-16">
          <button
            onClick={prevSlide}
            className="relative group transition-transform transform-gpu hover:scale-105"
          >
            <img
              src="/img/ArrowLeft.png.png"
              className="w-[50px] h-[50px] rounded-full bg-opacity-30 group-hover:opacity-25 opacity-100 transition-opacity mx-10"
            />
          </button>
          <button
            onClick={nextSlide}
            className=" relative group transition-transform transform-gpu hover:scale-105 "
          >
            <img
              src="/img/ArrowRight.png"
              className="w-[50px] h-[50px] rounded-full bg-opacity-30 group-hover:opacity-25 opacity-100 transition-opacity "
            />
          </button>
        </div>
      </div>
      {/* -------------------------------------------- */}
    </div>
  );
};

export default TesseHistory;
