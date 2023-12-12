import React, { useState } from 'react'

const Entertainment = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="mt-4">
                <button
                  className="text-white mx-1 h-10 w-8 rounded-full"
                  onClick={toggleContent}
                >
                  {isExpanded ? (
                    // Icon X when the mobile menu is open
                    <img src="/img/paddingicon2.png"></img>
                  ) : (
                    // Icon for opening the mobile menu
                    <img src="/img/paddingicon1.png"></img>
                  )}
                </button>
                <div className="text-regal-Primary font-medium text-xl ml-12 -mt-8">
                  Truyền Thông & Giải Trí
                </div>
                {isExpanded && (
                  <div>
                    {" "}
                    <p className="text-regal-Neutral text-sm my-4 xl:w-[500px] md:w-80 xl:ml-12 md:ml-14 sm:w-72 sm:ml-12 se:w-[301px] se:ml-12">
                      The Gyeonggi province of South Korea is requiring
                      officials of rank 4 or higher to report their
                      cryptocurrency holdings from today until September...
                      <a href="#" className="hover:text-regal-Neutrall">
                        Xem thêm
                      </a>
                    </p>{" "}
                    <i className="fa-solid fa-globe text-regal-Neutrall mx-2 mb-10 ml-12 md:ml-14"></i>
                    <a
                      href="#"
                      className="text-regal-gray hover:text-regal-Neutrall "
                    >
                      www.tesse.com
                    </a>
                  </div>
                )}
              </div>
  )
}

export default Entertainment