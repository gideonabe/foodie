import React from 'react'
import googleplay from '../../public/assets/googleplay.jpeg'
import appstore from '../../public/assets/appstore.jpeg'
import friendslaughing from '../../public/assets/friendslaughing.png'
import friendslaughingblur from '../../public/assets/friendslaughingblur.png'
import Image from 'next/image'

const Orderingapp = () => {
  return (
    <section>
      {/* === Mobile Layout === */}
      <div className="relative flex lg:hidden justify-center items-center w-full h-[420px] overflow-hidden rounded-md">
        {/* Background Image (Blur) */}
        <Image
          src={friendslaughingblur}
          alt="Mobile Background"
          fill
          className="object-cover z-0"
        />

        {/* Dark overlay to reduce brightness */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        {/* Content Overlaid */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4 text-center text-white">
          <div className="flex items-end justify-center gap-2 mb-2">
            <img src="/logo.png" alt="Logo" className="h-12" />
            <h1 className="text-3xl text-[#FC8A06] font-semibold">ing is more</h1>
          </div>
          <div className="bg-[#03081F] text-white py-2 px-6 rounded-full text-lg mb-2">
            <h2>
              <span className="text-[#FC8A06] underline">Personalised</span> & Instant
            </h2>
          </div>
          <p className="text-sm mt-1 text-[#FC8A06]">Download the Order.uk app for faster ordering</p>
          <div className="flex gap-2 items-center mt-3">
            <Image src={appstore} alt="App Store" width={120} height={40} />
            <Image src={googleplay} alt="Google Play Store" width={120} height={40} />
          </div>
        </div>
      </div>


      {/* === Desktop Layout === */}
      <div className="hidden lg:flex relative justify-center items-center bg-gradient-to-r from-[#EEEEEE] to-[#E0E1DC] max-w-[95%] mx-auto p-10 mt-4">
        <div className="flex flex-1">
          <Image
            src={friendslaughing}
            alt="Friends Laughing"
            className="absolute bottom-0 left-8 object-cover"
            width={650}
            height={750}
          />
          <Image
            src={friendslaughingblur}
            alt="Blurred Friends"
            className="absolute bottom-0 left-5 object-cover"
            width={650}
            height={750}
          />
        </div>

        <div className="flex flex-col justify-center m-10 p-4">
          <div className="flex flex-col items-end">
            <div className="flex justify-center mb-2 mr-10">
              <img src="/logo.png" alt="" className="h-16" />
              <h1 className="text-7xl align-text-bottom font-semibold">ing is more</h1>
            </div>
            <div className="bg-[#03081F] text-white justify-center py-2 rounded-full pr-10 pl-80 mt-4 text-center text-5xl">
              <h2>
                <span className="text-[#FC8A06] underline">Personalised</span> & Instant
              </h2>
            </div>
            <p className="text-lg mt-4 mr-40 text-center">Download the Order.uk app for faster ordering</p>
          </div>
          <div className="flex gap-3 items-center justify-end w-[83%] mt-1">
            <Image
              src={appstore}
              alt="App Store"
              width={200}
              height={60}
              className="mt-4 cursor-pointer"
            />
            <Image
              src={googleplay}
              alt="Google Play Store"
              width={200}
              height={60}
              className="mt-4 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Orderingapp
