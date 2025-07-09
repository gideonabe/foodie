import React from 'react'
import Image from 'next/image';
import googleplay from '../../public/assets/googleplay.jpeg'
import appstore from '../../public/assets/appstore.jpeg'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";


const Footer = () => {

  const year = new Date().getFullYear();

  return (

    <>
      <section id='footer' className='bg-[#EDEDED]'>
        <div className='max-w-[95%] mx-auto '>
          <div className=" py-10 px-6 md:px-0 flex flex-col md:flex-row flex-wrap md:space-x-10 space-y-10 md:space-y-0">
      
            {/* Column 1 - Logo and App Badges */}
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-start gap-4 flex-1 min-w-[300px]">
              <img src="/logo2.png" alt="Order UK Logo" className="w-40 md:w-45 h-10" />
              <div className="flex gap-2">
                <Image
                  src={appstore}
                  alt="App Store"
                  width={100}
                  height={40}
                  className="cursor-pointer"
                />
                <Image
                  src={googleplay}
                  alt="Google Play Store"
                  width={120}
                  height={40}
                  className="cursor-pointer"
                />
              </div>
              <p className="md:text-sm text-xs text-black mt-2">
                Company # 490039-445, Registered with House of companies.
              </p>
            </div>

            {/* Column 2 - Newsletter */}
            <div className="flex flex-col gap-3 flex-1 min-w-[400px]">
              <p className="font-semibold text-center md:text-start text-black text-[14px]">Get Exclusive Deals in your Inbox</p>
              <div className="flex items-center bg-gray-200 rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  className="flex-1 px-4 py-3 text-sm text-black bg-transparent outline-none"
                />
                <button className="bg-[#FC8A06] text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-500 transition">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-center md:text-start text-[#03081F]">
                we won't spam, read our <a href="#" className="underline">email policy</a>
              </p>

              <div className="flex justify-center md:justify-start  gap-4 text-xl mt-1 text-black">
                <a href="#"><FaFacebook size={30}/></a>
                <a href="#"><FaInstagram size={30}/></a>
                <a href="#"><AiFillTikTok size={30}/></a>
                <a href="#"><BsSnapchat size={30}/></a>
              </div>
            </div>

            {/* Column 3 - Legal Pages */}
            <div className="flex flex-col gap-2 flex-1 min-w-[180px]">
              <p className="font-semibold text-black text-[14px]">Legal Pages</p>
              <a href="#" className="underline text-sm text-black">Terms and conditions</a>
              <a href="#" className="underline text-sm text-black">Privacy</a>
              <a href="#" className="underline text-sm text-black">Cookies</a>
              <a href="#" className="underline text-sm text-black">Modern Slavery Statement</a>
            </div>

            {/* Column 4 - Important Links */}
            <div className="flex flex-col gap-2 flex-1 min-w-[180px]">
              <p className="font-semibold text-black text-[14px]">Important Links</p>
              <a href="#" className="underline text-sm text-black">Get help</a>
              <a href="#" className="underline text-sm text-black">Add your restaurant</a>
              <a href="#" className="underline text-sm text-black">Sign up to deliver</a>
              <a href="#" className="underline text-sm text-black">Create a business account</a>
            </div>

          </div>
          
        </div>
        <div className="bg-[#03081F]">
          <div className="max-w-[95%] mx-auto text-white py-4 px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-center md:text-left">
            
            {/* Left Side - Copyright */}
            <h1 className="whitespace-nowrap">
              Order.uk Copyright {year}, All Rights Reserved.
            </h1>

            {/* Right Side - Links */}
            <div className="flex flex-col md:flex-row  justify-center md:justify-end gap-x-6 gap-y-2">
              <p className="cursor-pointer">Privacy Policy</p>
              <p className="cursor-pointer">Terms</p>
              <p className="cursor-pointer">Pricing</p>
              <p className="cursor-pointer">Do not sell or share my personal information</p>
            </div>

          </div>
        </div>

      </section>
    
    </>
  )
}

export default Footer