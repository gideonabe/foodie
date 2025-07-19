import Topnav from '@/components/Topnav'
import Navbar from '@/components/Navbar'
import React from 'react'
import { RestaurantdetailsheroCard } from '@/components/RestaurantdetailsheroCard'
import { FaArrowCircleDown } from "react-icons/fa";
import { FaClock, FaCirclePlus } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import DiscountCard from '@/components/DiscountCard';
import CartCard from '@/components/CartCard';

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

        <div className='flex max-w-[95%] mx-auto w-full my-4'>

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
          <div className='flex flex-[25%] w-full justify-center items-center relative'>
            <div className="flex">
              <span className="flex justify-center items-center gap-1 bg-orange-400 text-white px-8 py-2 text-sm rounded-sm font-medium shadow-md">
                <FaClock size={15}/> <p className='text-white'>03:00</p>
              </span>
            </div>
            
          </div>
        </div>
        
        
        
        

      </main>
    </>
  )
}

export default ordering