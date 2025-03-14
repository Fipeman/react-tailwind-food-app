import React from "react";

import rectangle_1 from '../assets/Rectangle_1.png';
import rectangle_2 from '../assets/Rectangle_2.png'; 


const Hero = ({appType, tagLine, description, mainActionText, extraActionText}) => {
  return (
    <div id="product">
      <div style={{textShadow:'0px 1px 1px gray'}} className="flex flex-col items-center justify-start font-sans min-h-96 lg:pt-10 lg:pb-10 bg-hero bg-no-repeat bg-cover">
        {/* <div>
          <p className="p-3 pt-12 text-lg font-bold text-gray-500 lg:text-gray-300">{appType}</p>
        </div> */}
        <div>
          <p className="p-2 text-3xl font-bold text-center text-gray-100 lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100">
            {tagLine}
          </p>
        </div>
        <div>
          <p className="p-4 pt-6 font-sans text-2xl leading-10 text-center text-gray-200 lg:text-gray-200">
            {description}
          </p>
        </div>
        <div className="relative z-50 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90 sm:pb-5">
          <button
            className="pt-3 pb-3 pl-14 pr-14 text-xl font-semibold text-center text-white transition-all bg-red rounded-full shadow-2xl lg:ml-5 hover:ring-white hover:ring-4 focus:outline-none ring-4 ring-white lg:ring-2 lg:font-medium "
          >
            {mainActionText}
          </button>
          <button
            className="pt-3 pb-3 text-xl font-semibold text-center text-red transition-all rounded-full shadow-2xl lg:mr-5 hover:text-red hover:bg-gray-50 pl-11 pr-11 bg-gray-50 focus:outline-none ring-4 ring-red lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white"
          >
            {extraActionText}
          </button>
        </div>
        
      </div>
      {/* <div className="z-0 flex flex-row items-start justify-center w-screen h-screen pt-20 -mb-16 bg-gray-50 lg:bg-white lg:mb-20 lg:w-full lg:h-96 lg:pt-0">
          <img className="absolute left-0 lg:left-auto lg:-mt-64" src={rectangle_1} alt=""/><img className="absolute right-0 lg:right-auto lg:ml-24 lg:-mt-16" src={rectangle_2} alt=""/>
        </div> */}
    </div>
  );
};

export default Hero;
