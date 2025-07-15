// import React from 'react'

// const Offers = () => {
//   return (
//     <>
//       <section className='bg-[#FC8A06] mb-4'>
//         <div className='max-w-[95%] mx-auto flex flex-wrap justify-center md:justify-between items-center py-4 text-base text-white'>
//           <p className='bg-[#03081F] rounded-full py-1 px-4'>Offers</p>
//           <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Burgers</p>
//           <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Fries</p>
//           <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Snacks</p>
//           <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Salads</p>
//           <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Cold drinks</p>
//           <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Happy Meal<sup>&reg;</sup></p>
//           <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Desserts</p>
//           <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Hot drinks</p>
//           <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Sauces</p>
//           <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Orbit<sup>&reg;</sup></p>
//         </div>

//       </section>
//     </>
//   )
// }

// export default Offers




import React from 'react'

const Offers = () => {
  return (
    <>
      <section className='bg-[#FC8A06] mb-4 overflow-hidden'>
        {/* STATIC VERSION */}
        {/* <div className='max-w-[95%] mx-auto flex flex-wrap justify-center md:justify-between items-center py-4 text-base text-white'>
          <p className='bg-[#03081F] rounded-full py-1 px-4'>Offers</p>
          <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Burgers</p>
          <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Fries</p>
          <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Snacks</p>
          <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Salads</p>
          <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Cold drinks</p>
          <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Happy Meal<sup>&reg;</sup></p>
          <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Desserts</p>
          <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Hot drinks</p>
          <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Sauces</p>
          <p className='cursor-pointer rounded-full py-1 px-4 md:hover:bg-[#03081F]'>Orbit<sup>&reg;</sup></p>
        </div> */}

        {/* MARQUEE VERSION - UNCOMMENT TO USE */}

        <div className="whitespace-nowrap overflow-hidden relative text-white py-4">
          <div className="animate-marquee flex gap-4 text-base w-max">
            <p className='bg-[#03081F] rounded-full py-1 px-4'>Offers</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Burgers</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Fries</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Snacks</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Salads</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Cold drinks</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Happy Meal<sup>&reg;</sup></p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Desserts</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Hot drinks</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Sauces</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Orbit<sup>&reg;</sup></p>

            {/* Repeat content for seamless scrolling */}
            <p className='bg-[#03081F] rounded-full py-1 px-4'>Offers</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Burgers</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Fries</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Snacks</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Salads</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Cold drinks</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Happy Meal<sup>&reg;</sup></p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Desserts</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Hot drinks</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Sauces</p>
            <p className='cursor-pointer rounded-full py-1 px-4'>Orbit<sup>&reg;</sup></p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Offers
