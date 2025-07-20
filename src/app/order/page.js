import Topnav from '@/components/Topnav'
import Navbar from '@/components/Navbar'
import React from 'react'
import { RestaurantdetailsheroCard } from '@/components/RestaurantdetailsheroCard'
import { FaArrowCircleDown } from "react-icons/fa";
import { FaClock, FaCirclePlus } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import DiscountCard from '@/components/DiscountCard';
import CartCard from '@/components/CartCard';
import { FaBasketShopping } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";

const ordering = () => {

  const details = [
    {
      time: "Open until 3:00 AM",
      shorttext: "Desi Flavours with a blend of Italian aesthetics!",
      maintext: "Tandoori Pizza London",
      minimumOrder: "Minimum Order: 12 GBP",
      deliveryTime: "Delivery in 20-25 Minutes",
      imageUrl: "/assets/burgerheropic.png",
      offertext: "Order from Tandoori Pizza London",
      rate: "3.4",
      reviews: "1,360 reviews",
      rating: "★★★★☆",    
    }
  ]

  const discountData = [
    {
      imageUrl: '/assets/ladywithphone.png',
      discount: '-20%',
      title: 'First Order Discount',
      subtitle: "McDonald's East London",
      icon: <FaCirclePlus size={30} color="#03081F"/>
    },
  ]

  const cartItems = [
    {
      title: "Farm House Xtreme Pizza",
      description:
        "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
      spiceImage: "/assets/pepper.png",
      mainImage: "/assets/roundcreamypizza.png",
      sizes: [
        { label: "Small", price: "21.90", active: true },
        { label: "Medium", price: "21.90" },
        { label: "Large", price: "21.90" },
        { label: "XL Large with Sauces", price: "21.90", fullWidth: true },
      ],
    },
    {
      title: "Deluxe Pizza",
      description:
        "2 Cheeseburgers, 2 Onion Rings, Cheesy Dips, 2 Drinks, and a Brownie",
      spiceImage: "/assets/pepper.png",
      mainImage: "/assets/pepperedpizza.png",
      sizes: [
        { label: "Small", price: "19.90" },
        { label: "Medium", price: "24.90", active: true },
        { label: "Large", price: "29.90" },
        { label: "Family Pack", price: "34.90", fullWidth: true },
      ],
    },
    {
      title: "Tandoori Pizza",
      description:
        "1 Veg Pizza, 2 Garlic Breads, 1 Choco Lava Cake, and 2 Drinks",
      spiceImage: "/assets/pepper.png",
      mainImage: "/assets/friedpizza.png",
      sizes: [
        { label: "Regular", price: "17.90" },
        { label: "Large", price: "22.90", active: true },
        { label: "Party Size", price: "27.90" },
        { label: "With Dessert", price: "32.90", fullWidth: true },
      ],
    },
  ];
  

  return (
    <>
      <main>
        {/* <div className="hidden md:block ">
          <Topnav />
          <Navbar />
        </div>
        <div className="block md:hidden">
          <Navbar />
          <Topnav />
        </div> */}
        {/* <section className="bg-white my-6">
          {details.map((detail, index) => (
            <RestaurantdetailsheroCard
              key={index} {...detail}
            />
          ))}
        </section> */}


        <div className='flex flex-col md:flex-row max-w-[95%] mx-auto w-full my-4'>

          {/* Left container */}
          <div className='flex flex-[25%] w-full flex-col justify-start items-start'>
            <div className='flex flex-col w-full border rounded-lg'>
              <div className='flex justify-start items-center gap-2 p-8 w-full'>
                {/* <img src='/assets/spoonmenu.png' /> */}
                <ImSpoonKnife size={25} color="#03081F" />
                <h1 className='text-3xl font-semibold text-[#03081F]'>Menu</h1>
              </div>
              <div className='flex flex-col w-full'>
                <p className='text-white bg-[#03081F] pl-6 py-4'>Pizza</p>
                <p className='pl-6 py-4 hover:bg-[#03081F] hover:text-white'>Garlic Bread</p>
                <p className='pl-6 py-4 hover:bg-[#03081F] hover:text-white'>Calzone</p>
                <p className='pl-6 py-4 hover:bg-[#03081F] hover:text-white'>Kebabos</p>
                <p className='pl-6 py-4 hover:bg-[#03081F] hover:text-white'>Salads</p>
                <p className='pl-6 py-4 hover:bg-[#03081F] hover:text-white'>Cold drinks</p>
                <p className='pl-6 py-4 hover:bg-[#03081F] hover:text-white'>Happy Meal<sup>&reg;</sup></p>
                <p className='pl-6 py-4 hover:bg-[#03081F] hover:text-white'>Desserts</p>
                <p className='pl-6 py-4 hover:bg-[#03081F] hover:text-white'>Hot drinks</p>
                <p className='pl-6 py-4 hover:bg-[#03081F] hover:text-white'>Sauces</p>
                <p className='pl-6 py-4 hover:bg-[#03081F] hover:text-white'>Orbit<sup>&reg;</sup></p>
              </div>
            </div>
            <div className='flex flex-col w-full h-55 mt-2'>
              {discountData.map((discount, idx) => (
                <DiscountCard key={idx} {...discount}/>
              ))}
            </div>
          </div>

          {/* Middle Container */}
          <div className='flex flex-[50%] flex-col w-full'>
            <div className='flex justify-between items-center gap-2 w-full px-4 py-8 '>
              <h2 className="text-base md:text-xl font-bold text-[#03081F]">Pizzas</h2>
              <div className="relative ">
                <input 
                  type="text" 
                  className="pl-5 pr-10 py-1 border border-gray-300 rounded-full max-w-[100%]" 
                  placeholder="Sort by pricing"
                />
                <FaArrowCircleDown 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  size={20}
                />
              </div>
            </div>
            <div className="grid gap-6">
              {cartItems.map((item, index) => (
                <CartCard key={index} {...item} />
              ))}
            </div>
            <div></div>
            <div></div>
          </div>

          {/* Right Container */}
          <div className='flex flex-col flex-[25%] w-full h-full justify-center items-center relative mt-4'>
            <div className="flex w-full">
              <span className="flex justify-center items-center gap-1 bg-orange-400 text-white w-full px-4 py-6 text-sm rounded-sm font-medium shadow-md">
                <FaClock size={20}/> <p className='text-white font-semibold'>Open until 03:00 AM</p>
              </span>
            </div>
            <div className='flex flex-col w-full bg-gray-50'>
              <div className='flex flex-1 bg-[#028643] w-full rounded-t-lg justify-center items-center gap-2 mt-2 text-white px-4 py-6'>
                <FaBasketShopping size={32}/>
                <h1 className='font-semibold'>My Basket</h1>
              </div>
              <div className='flex w-full justify-evenly items-center p-3  gap-2 border-b border-gray-300'>
                <p className='bg-[#FC8A06] px-3 py-2 rounded-full text-white font-semibold'>1x</p>
                <div className='flex flex-col w-full text-sm gap-1 justify-start items-start pl-2'> 
                  <p className='text-green-600 font-semibold'>$27.90</p>
                  <p className='font-semibold'>12" Vegitarian Pizza</p>
                  <p className='text-xs'>No Mushrooms + green peppers</p>
                </div>
                <MdDeleteForever size={40} className="text-gray-500 cursor-pointer" />
              </div>
              <div className='flex w-full justify-evenly items-center p-3  gap-2 border-b border-gray-300'>
                <p className='bg-[#FC8A06] px-3 py-2 rounded-full text-white font-semibold'>1x</p>
                <div className='flex flex-col w-full text-sm gap-1 justify-start items-start pl-2'> 
                  <p className='text-green-600 font-semibold'>$27.90</p>
                  <p className='font-semibold'>12" Vegitarian Pizza</p>
                  <p className='text-xs'>No Mushrooms + green peppers</p>
                </div>
                <MdDeleteForever size={40} className="text-gray-500 cursor-pointer" />
              </div>
              <div className='flex w-full justify-evenly items-center p-3  gap-2 border-b border-gray-300'>
                <p className='bg-[#FC8A06] px-3 py-2 rounded-full text-white font-semibold'>1x</p>
                <div className='flex flex-col w-full text-sm gap-1 justify-start items-start pl-2'> 
                  <p className='text-green-600 font-semibold'>$27.90</p>
                  <p className='font-semibold'>12" Vegitarian Pizza</p>
                  <p className='text-xs'>No Mushrooms + green peppers</p>
                </div>
                <MdDeleteForever size={40} className="text-red-500 cursor-pointer" />
              </div>
              <div className='flex w-full justify-evenly items-center p-3  gap-2 border-b border-gray-300'>
                <p className='bg-[#FC8A06] px-3 py-2 rounded-full text-white font-semibold'>1x</p>
                <div className='flex flex-col w-full text-sm gap-1 justify-start items-start pl-2'> 
                  <p className='text-green-600 font-semibold'>$27.90</p>
                  <p className='font-semibold'>12" Vegitarian Pizza</p>
                  <p className='text-xs'>No Mushrooms + green peppers</p>
                </div>
                <MdDeleteForever size={40} className="text-gray-500 cursor-pointer" />
              </div>
              <div className='flex flex-col w-full justify-center items-start px-4 py-6 gap-2 border-b border-gray-300'>
                <div className='flex w-full justify-between items-center'>
                  <p className='font-semibold'>Sub Total: </p>
                  <p className=''>$127.90</p>
                </div>
                <div className='flex w-full justify-between items-center'>
                  <p className='font-semibold'>Discounts: </p>
                  <p className=' '>-3.00</p>
                </div>
                <div className='flex w-full justify-between items-center'>
                  <p className='font-semibold'>Delivery Fee: </p>
                  <p className=' '>2.50</p>
                </div>
              </div>
              <div className='flex flex-col w-full justify-center items-center p-4 gap-4 border-b border-gray-300'>
                <div className='flex w-full justify-between items-center px-4 py-4 gap-2 rounded-lg bg-orange-300 text-white'>
                  <p>Total Pay</p>
                  <p className='font-bold text-xl'>$127.90</p>
                </div>
                <div className="relative mt-2 w-full">
                  <input 
                    type="text" 
                    className="pl-5 pr-10 py-2 border w-full border-gray-300 rounded-full max-w-[100%]" 
                    placeholder="Choose your free item"
                  />
                  <FaArrowCircleDown 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                    size={20}
                  />
                </div>
                <div className="relative mb-4 w-full">
                  <input 
                    type="text" 
                    className="pl-5 pr-10 py-2 border w-full border-gray-300 rounded-full max-w-[100%]" 
                    placeholder="Apply coupon code here"
                  />
                  <FaArrowCircleDown 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                    size={20}
                  />
                </div>
              </div>
              <div className='flex flex-col w-full justify-center items-center p-4 gap-4'>
                <div className='flex justify-center items-center gap-4'>
                  <div className='flex flex-col justify-center items-center cursor-pointer bg-gray-100 border border-gray-400 rounded-lg p-2 text-sm'>
                    <MdDeliveryDining size={30} className="text-green-500 cursor-pointer"/>
                    <p>Delivery</p>
                    <p>Starts at 17:50</p>
                  </div>
                  <div className='flex flex-col justify-center items-center cursor-pointer border-l border-gray-300 p-2 text-sm'>
                    <MdDeliveryDining size={30} className="text-green-500 cursor-pointer"/>
                    <p>Collection</p>
                    <p>Starts at 17:50</p>
                  </div>
                </div>
                <div className='relative flex w-full justify-center items-center bg-red-400 text-white px-4 py-3 rounded-lg gap-2 cursor-pointer'>
                  <FaCircleArrowRight size={25} className="absolute left-5 text-white cursor-pointer" />
                  <p className='text-center text-xl'>Checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        
        

      </main>
    </>
  )
}

export default ordering