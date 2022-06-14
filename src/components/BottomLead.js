import React from "react";

const BottomLead = ({actionText, description, mainActionText, extraActionText, extraText}) => {
  return (
    <div className="flex flex-col justify-center h-screen lg:pt-24 lg:pb-14 bg-cover lg:h-full bg-action lg:bg-bottom">
      <p className="p-2 text-2xl font-bold leading-normal text-center text-white lg:text-2xl lg:pt-10">{actionText}</p>
      <p className="p-5 mb-3 text-5xl font-bold leading-normal text-center text-red lg:text-4xl lg:pt-10">{extraText}</p>

      <p className="pl-12 pr-12 text-xl leading-8 text-center text-gray-300 lg:text-gray-200 lg:font-medium">{description}</p>
      <div className="flex flex-col flex-wrap items-center justify-center w-full h-48 pt-5 lg:flex-row lg:pt-1">
        <button
          className="pt-3 pb-3 pl-10 pr-10 mt-3 text-2xl font-semibold text-center text-white transition-all bg-red shadow-2xl lg:mt-0 rounded-xl hover:bg-red-700 focus:outline-none ring-2 ring-white "
        >
          {mainActionText}
        </button>
        <button
          className="pt-3 pb-3 pl-6 pr-6 mt-8 text-2xl font-semibold text-center text-white transition-all shadow-2xl lg:ml-5 lg:mt-0 rounded-xl hover:text-red hover:bg-white focus:outline-none ring-2 ring-white "
        >
          {extraActionText}
        </button>
      </div>
    </div>
  );
};

export default BottomLead;
