import Topnav from '@/components/Topnav'
import Navbar from '@/components/Navbar'
import React from 'react'
import { RestaurantdetailsheroCard } from '@/components/RestaurantdetailsheroCard'

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

  return (
    <>
      <main>
        <div className="hidden md:block ">
          <Topnav />
          <Navbar />
        </div>
        <div className="block md:hidden">
          <Navbar />
          <Topnav />
        </div>
        <section className="bg-white my-4">
          {details.map((detail, index) => (
            <RestaurantdetailsheroCard
              key={index} {...detail}
            />
          ))}
            
        </section>
        
        
        
        

      </main>
    </>
  )
}

export default ordering