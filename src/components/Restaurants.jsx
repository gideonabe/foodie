import React from 'react';
import RestaurantCard from './RestaurantCard';

  const cardData = [
    {
      id: 1,
      imageUrl: '/assets/burger.png',
      category: 'Restaurant',
      description: 'Chef Burgers London',
      discount: '-40%', // New discount prop
    },
    {
      id: 2,
      imageUrl: '/assets/suya.png',
      category: 'Cafe & Bistro',
      description: 'Grand Ai Cafe London',
      discount: '-20%', // New discount prop
    },
    {
      id: 3,
      imageUrl: '/assets/burger.png',
      category: 'Bakery',
      description: "Butter Brof C'afe London",
      discount: '-17%', // New discount prop
    },
  ];




const Restaurants = () => {
  return (
    <>
      
      <section id="restaurants">
        <div className="max-w-[95%] mx-auto px-2 py-4">
          {/* Header Row */}
          <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-4">
            <h1 className="font-semibold text-center md:text-left text-2xl flex-1">
              Up to -40%🎊Order.uk exclusive deals
            </h1>
            <div className="flex gap-10 items-center text-sm flex-wrap justify-center md:justify-end">
              <p>Vegan</p>
              <p>Sushi</p>
              <p className="border border-orange-500 py-2 px-4 text-orange-500 rounded-full">
                Pizza & Fast food
              </p>
              <p>Others</p>
            </div>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {cardData.map((card) => (
              <RestaurantCard
                key={card.id}
                imageUrl={card.imageUrl}
                category={card.category}
                description={card.description}
                discount={card.discount}
              />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Restaurants