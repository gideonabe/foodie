import React from 'react'
import { RiMapPin2Fill } from "react-icons/ri";
import { FaBasketShopping } from "react-icons/fa6";
import { IoArrowDownCircle } from "react-icons/io5";
import Image from 'next/image';

const Topnav = () => {
  return (
    <>
      {/* Mobile */}
      <div className='flex flex-col'>
        <div className='flex md:hidden flex-row items-center justify-center bg-gray-100 shadow-md max-w-full h-12'>
          <div className='flex flex-1 items-center justify-center bg-[#FC8A06] h-full gap-2'>
            <img src="/assets/review.png" alt="userimage" className='w-10 h-10'/>
            <h1 className=''>Aycan</h1>
          </div>
          <div className='flex flex-1 bg-[#028643]  justify-center items-center gap-2 text-white px-4 py-2'>
            <FaBasketShopping size={32}/>
            <h1 className='font-semibold'>GBP 79.89</h1>
          </div>
        </div>
        <div className='flex md:hidden items-center justify-end gap-2'>
          <RiMapPin2Fill size={20} />
          <h1 className='text-base'>Lution Street, N4G-00...</h1>
        </div>
      </div>


      {/* Desktop */}
      <div className='hidden md:flex flex-col md:flex-row md:items-stretch justify-between items-center bg-gray-100 shadow-md  max-w-full mx-auto rounded-bl-xl rounded-br-xl gap-4 w-full min-h-10'>
        <div className="flex items-center gap-2 text-sm ml-6 ">
          <span className="text-xl">🌟</span>
          <span className="flex items-center flex-wrap gap-1">
            Get 5% off your first order,
            <a
              href="#"
              className="text-[#FC8A06] underline font-bold text-sm"
            >
              Promo: ORDER5
            </a>
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center justify-center">
            <RiMapPin2Fill size={20} />
          </div>

          <div className="flex items-center flex-wrap gap-1">
            <h4 className="whitespace-nowrap">
              Regent Street, <span className="underline">A4</span>, A4201, London
            </h4>

            <a
              href="#"
              className="underline font-semibold text-[#FC8A06] whitespace-nowrap"
            >
              Change Location
            </a>
          </div>
        </div>


        <div className='flex items-center h-full md:h-auto text-white overflow-hidden divide-x divide-white md:self-stretch rounded-b-xl' style={{backgroundColor: '#028643'}}>
          <div className='flex items-center justify-center px-4 py-2 h-full'>
            <FaBasketShopping size={32}/>    
          </div>
          <div className="flex items-center justify-center px-4 py-2 h-full">
            <h4 className='font-semibold text-sm'>23 Items</h4>
          </div>
          <div className="flex items-center justify-center px-4 py-2 h-full">
            <h4 className='font-semibold text-sm'>GBP 79.89</h4>
          </div>
          <div className="flex items-center justify-center px-4 py-2 h-full">
            <IoArrowDownCircle size={32} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Topnav