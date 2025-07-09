import React from 'react'
import Image from 'next/image'
import Ladyeatingpizza from '../../public/assets/ladyeatingpizza.png'
import Ladyholdingpizza from '../../public/assets/ladyholdingpizza.png'
import roundedorange from '../../public/assets/roundedorange.png'

const Hero = () => {
  return (
    <section className="w-full text-white relative overflow-hidden">
      <div className="max-w-[95%] mx-auto flex flex-col md:flex-row items-stretch rounded-sm pt-12 md:pt-20 relative bg-[#010326]">
        
        {/* Left Section */}
        <div className="flex-1 z-10 p-4 md:p-8 flex flex-col justify-center items-center md:items-start gap-4">
          <h4 className="text-sm">Order Restaurant food, takeaway and groceries.</h4>
          <h1 className="text-4xl md:text-[42px] text-start ml-10 md:ml-0 font-bold leading-tight">
            Feast Your Senses,<br />
            <span className="text-[#FC8A06]">Fast and Fresh</span>
          </h1>

          <div className="flex flex-col gap-2 mt-6 w-full max-w-md">
            <p className="text-sm text-center md:text-start ml-5">Enter a postcode to see what we deliver</p>
            <div className="flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="e.g. EC4R 3TE"
                className="w-full px-4 py-3 text-sm text-black outline-none"
              />
              <button className="bg-[#FC8A06] text-white font-semibold px-4 md:px-10 py-3 rounded-full hover:bg-orange-500 transition">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex-1 z-10 flex items-end justify-center relative">
          <Image
            src={Ladyeatingpizza}
            alt="Lady Eating Pizza"
            className="w-[300px] h-[300px] md:w-full md:h-full object-contain max-h-[100%] scale-150"
            priority
          />
        </div>

        {/* Right Orange Shape */}
        <div className="flex-1 hidden md:block items-end justify-center -bottom-4 relative pt-3">
          <Image
            src={roundedorange}
            alt="Orange Shape"
            className="w-full h-full object-contain max-h-[100%]"
            priority
          />
        </div>
      </div>

      {/* Overlay Lady Holding Pizza and Info Cards */}
      <div className="absolute top-30 right-75 h-full w-[50%] flex items-end justify-end pr-6 pb-6 pointer-events-none">
        <div className="relative w-full max-w-[500px]">
          <Image
            src={Ladyholdingpizza}
            alt="Lady Holding Pizza"
            className="hidden md:flex w-full h-auto max-h-[450px] object-contain top-[-18.9rem] absolute"
            priority
          />

          {/* Card 1 */}
          <div className="relative top-[-10rem] hidden md:block right-[-14rem] md:top-[-15rem] md:right-[-23rem] bg-white shadow-xl rounded-md p-3 w-50 md:w-64 text-sm z-10">

            <span className="absolute -top-10 -right-2 text-7xl outlined-number z-0 select-none">
              1
            </span>


            <span className="absolute top-2 right-2 text-[10px] font-semibold text-gray-500 uppercase">
              Now
            </span>

            <Image 
              src='/logo.png'
              alt="Order.uk Logo"
              width={65}
              height={50}
              className='mb-2'
            />
            <p className="text-[10px] md:text-xs text-gray-600 mb-[1px]">We've Received your order!</p>
            <p className="text-[10px] md:text-xs text-gray-500">Awaiting Restaurant acceptance</p>
          </div>


          {/* Card 2 */}
          <div className="relative top-[-8rem] hidden md:block right-[-18rem] md:top-[-12rem] md:right-[-28rem] bg-white shadow-xl rounded-md p-3 w-50 md:w-64 text-sm pointer-events-auto z-10">

            <span className="absolute -top-13 -right-1 text-7xl outlined-number z-0">
              2
            </span>



            <span className="absolute top-2 right-2 text-[10px] font-semibold text-gray-500 uppercase">
              Now
            </span>

            <Image 
              src='/logo.png'
              alt="Order.uk Logo"
              width={65}
              height={50}
              className='mb-2'
            />
            <p className="text-[10px] md:text-xs text-gray-600 mb-[1px]">Order accepted!</p>
            <p className="text-[10px] md:text-xs text-gray-500">Your order will be delivered shortly</p>
          </div>

          {/* Card 3 */}
          <div className="relative bottom-[7rem] hidden md:block right-[-20rem] bg-white shadow-xl rounded-md p-3 w-50 md:w-64 text-sm pointer-events-auto z-10">

            <span className="absolute -top-12 -right-4 text-7xl outlined-number z-0 select-none">
              3
            </span>


            <span className="absolute top-2 right-2 text-[10px] font-semibold text-gray-500 uppercase">
              Now
            </span>

            <Image 
              src='/logo.png'
              alt="Order.uk Logo"
              width={65}
              height={50}
              className='mb-2'
            />
            <p className="text-[10px] md:text-xs text-gray-600 mb-[1px]">Your rider's nearby 🎉</p>
            <p className="text-[10px] md:text-xs text-gray-500">They're almost there - get ready!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
