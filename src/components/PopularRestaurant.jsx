import React from 'react'
import PopularRestaurantCard from './PopularRestaurantCard'

const PopularRestaurant = () => {

  const restaurantData = [
    {
      id: 1,
      imageUrl: "/assets/mcdonalds.png",
      title: "McDonald's London",
    },
    {
      id: 2,
      imageUrl: "/assets/papajohns.png",
      title: "Papa Johns",
    },
    {
      id: 3,
      imageUrl: "/assets/kfc.png",
      title: "KFC West London",
    },
    {
      id: 4,
      imageUrl: "/assets/texaskitchen.png",
      title: "Texas Kitchen",
    },
    {
      id: 5,
      imageUrl: "/assets/burgerking.png",
      title: "Burger King",
    },
    {
      id: 6,
      imageUrl: "/assets/shaurma1.png",
      title: "Shaurma 1",
    },
  ];


  return (
    <section>
      <div className="max-w-[95%] mx-auto py-4 mt-4">
        <div>
          
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-1'>  
            {restaurantData.map((restaurant) => (
              <PopularRestaurantCard
                key={restaurant.id}
                image={restaurant.imageUrl}
                title={restaurant.title}
              />
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default PopularRestaurant