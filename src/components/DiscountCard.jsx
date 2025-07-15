import React from 'react'

const DiscountCard = ({imageUrl, subtitle, title, discount, icon}) => {
  return (
    // <div className="relative w-full h-70 overflow-hidden rounded-lg shadow-lg cursor-pointer">
    //   <div
    //     className="absolute inset-0 bg-cover bg-center"
    //     style={{ backgroundImage: `url(${imageUrl})` }}
    //   >
    //     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
    //   </div>

    //   {discount && ( 
    //     <div className="absolute top-0 bg-[#03081F] right-6 text-white text-sm font-semibold px-3 py-3 rounded-bl-lg rounded-br-lg z-20">
    //       {discount}
    //     </div>
    //   )}

    //   {/* Content */}
    //   <div className="absolute bottom-5 left-5 p-4 text-white z-10">
    //     <p className="text-sm text-[#FC8A06] font-light">{title}</p>
    //     <p className="text-md font-semibold leading-tight mt-1">{subtitle}</p>
    //   </div>
    //   <div className='absolute p-4 z-30 items-center bg-gray-100 rounded-tl-[30px] bottom-0 right-0 '>
    //    <p className="mt-1">{icon}</p>
    //   </div>
    // </div>

    <div 
      className='relative w-full h-50 md:h-70 lg:75 overflow-hidden rounded-lg shadow-sm cursor-pointer bg-cover bg-center'
      style={{backgroundImage: `url(${imageUrl})`}}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent'></div>

      <div className='absolute top-0 bg-[#03081F] right-6 text-white text-sm font-semibold px-3 py-3 rounded-bl-lg rounded-br-lg z-20'>
        {discount}
      </div>

      <div className="absolute bottom-5 left-5 p-4 text-white z-10">
        <p className="text-sm text-[#FC8A06] font-light">{title}</p>
        <p className="text-md font-semibold leading-tight mt-1">{subtitle}</p>
      </div>
      <div className='absolute p-4 z-30 items-center bg-white/80 fill-transparent rounded-tl-[30px] bottom-0 right-0 '>
        <p className="">{icon}</p>

      </div>
    </div>
  )
}

export default DiscountCard