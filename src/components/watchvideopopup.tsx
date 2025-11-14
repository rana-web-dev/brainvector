import React, { useState } from "react";

const PopupModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="play-btn w-[190px] mt-[15px] cursor-pointer flex items-center gap-[8px] px-[18px] py-[12px] border rounded-full pointer hover:bg-[#bebebe] hover:border-[#bebebe] hover:text-black"
          ><img
            style={{ width: "20px !important;" }}
            src="./images/video.svg"
            alt="video play"
          /> Watch the video</button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 z-1000 flex justify-center items-center 
                     w-full h-full bg-black/50"
        >
          {/* Modal Container */}
          <div className="relative rounded-lg shadow dark:bg-gray-700 w-full max-w-8xl">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="absolute z-100 top-8 right-8 text-gray-400 bg-transparent hover:text-white rounded-lg text-sm w-8 h-8 inline-flex justify-center 
                         items-center cursor-pointer dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            {/* Modal Content */}
            <div className="p-4 md:p-5 text-center">
              <video autoPlay controls className="rounded-xl w-full" poster="./images/img/home-bg-img.png">
                <source src="./videos/brainvector-home-popup.mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupModal;
