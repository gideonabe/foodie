import React from 'react';

import { RestaurantdetailsheroCard } from './RestaurantdetailsheroCard';

const Restaurantdetailshero = () => {
  const details = [
    {
      time: "Open until 3:00 AM",
      shorttext: "I'm loving it!",
      maintext: "McDonald's East London",
      minimumOrder: "Minimum Order: 12 GBP",
      deliveryTime: "Delivery in 20-25 Minutes",
      imageUrl: "/assets/burgerheropic.png",
      offertext: "All Offers from McDonald's East London",
      rate: "3.4",
      reviews: "1,360 reviews",
      rating: "★★★★☆",    
    }
  ]


  return (
    <section className="bg-white my-4">
      {details.map((detail, index) => (
        <RestaurantdetailsheroCard 
          key={index} {...detail}
        />

      ))}
        
    </section>
  );
};

export default Restaurantdetailshero;
