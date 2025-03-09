import React from "react";

const OverlayContainer = ({ imgSrc, imgSrc2, imgAlt, children }) => {
  return (
    <div className="relative overflow-hidden flex justify-center items-center transition-opacity duration-500 group">
      {imgSrc2 ? (
        <>
          <div className="hidden sm:block w-full">
            <img
              className="w-full transition-transform duration-500 group-hover:scale-110"
              src={imgSrc}
              alt={imgAlt}
            />
          </div>
          <div className="block sm:hidden w-full">
            <img
              className="w-full transition-transform duration-500 group-hover:scale-110"
              src={imgSrc2}
              alt={imgAlt}
            />
          </div>
        </>
      ) : (
        <img
          className="w-full transition-transform duration-500 group-hover:scale-110"
          src={imgSrc}
          alt={imgAlt}
        />
      )}
      {children}
      <div className="absolute bg-gray500 opacity-0 group-hover:opacity-50 h-full w-full top-0 transition-opacity duration-500"></div>
      <div className="absolute left-[10%] bottom-[10%] h-0 w-[1px] bg-white transition-[height] duration-800 delay-200 group-hover:h-[80%]"></div>
      <div className="absolute right-[10%] bottom-[10%] w-0 h-[1px] bg-white transition-[width] duration-300 delay-100 group-hover:w-[80%]"></div>
      <div className="absolute right-[10%] top-[10%] h-0 w-[1px] bg-white transition-[height] duration-800 delay-1500 group-hover:h-[80%]"></div>
      <div className="absolute left-[10%] top-[10%] w-0 h-[1px] bg-white transition-[width] duration-800 delay-800 group-hover:w-[80%]"></div>
    </div>
  );
};

export default OverlayContainer;
