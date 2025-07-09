import React from 'react';
import { LuBike } from "react-icons/lu";
import { TbChecklist } from "react-icons/tb";
import { FaClock } from "react-icons/fa6";
import { AiOutlineSearch } from 'react-icons/ai';

const Restaurantdetailshero = () => {
  return (
    <section className="bg-white my-4">
      <div className="max-w-[95%] mx-auto rounded-xl overflow-hidden">

        {/* Hero container with background */}
        <div className="relative bg-[url('/assets/burgerbg.png')] bg-cover bg-center bg-no-repeat w-full rounded-xl py-4 px-4 md:px-2 md:py-2">

          {/* Dark Blue Overlay */}
          <div className="absolute inset-0 bg-[#03081F]/90 rounded-xl"></div>

          {/* Open until 3:00 AM Pill - Bottom Left */}
          <div className="absolute -bottom-5 left-0 z-20">
            <span className="flex justify-center items-center gap-1 bg-orange-400 text-white px-8 py-2 text-sm rounded-tr-lg rounded-br-lg font-medium shadow-md">
              <FaClock size={15}/> Open until 3:00 AM
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center h-full p-6 md:p-8 text-white">

            {/* Left side content */}
            <div className="flex flex-1 flex-col gap-3 max-w-[100%] md:max-w-[70%]">
              <p className="text-sm md:text-base text-gray-300">I'm lovin' it!</p>
              <h1 className="text-2xl md:text-[45px] font-bold leading-tight">McDonald's East London</h1>

              <div className="flex gap-3 mt-2 flex-wrap">
                <div className="flex justify-center items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base border border-white/20">
                  <span className='flex justify-center items-center gap-2'><TbChecklist size={25}/> Minimum Order: 12 GBP</span> 
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base border border-white/20">
                  <span className='flex justify-center items-center gap-2'><LuBike size={25}/>Delivery in 20-25 Minutes</span> 
                </div>
              </div>
            </div>

            {/* Right side image and rating */}
            <div className="relative flex-1 justify-center mt-6 md:mt-0">

              {/* Food image */}
              <img
                src="/assets/burgerheropic.png"
                alt="Meal"
                className="rounded-lg shadow-lg w-full"
              />

              {/* Rating card - bottom-left of the image */}
              <div className="absolute -bottom-2 -left-8  text-black rounded-xl shadow-md bg-white py-1  px-1 w-18 md:w-25 md:py-3 md:px-6 text-center flex flex-col justify-center items-center">
                <p className="text-2xl md:text-5xl font-semibold">3.4</p>
                <p className="text-yellow-400 text-sm leading-none">★★★★☆</p>
                <p className="text-gray-500 text-xs md:text-sm">1,360 reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Offers section title */}
        <div className=" max-w-[95%] md:max-w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center mt-10 md:mt-8 px-4 md:px-0 gap-4">
          <h2 className="text-base md:text-xl font-bold">All Offers from McDonald's East London</h2>
          <div className="relative ">
            <input 
              type="text" 
              className="pl-9 pr-14 py-2 border border-gray-300 rounded-full max-w-[100%]" 
              placeholder="Search from menu..."
            />
            <AiOutlineSearch 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              size={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurantdetailshero;
