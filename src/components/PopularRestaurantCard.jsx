import React from 'react'
import { Card, CardContent } from "@/components/ui/card";

const PopularRestaurantCard = ({image, title}) => {
  return (
    <>
      <Card className="group w-full h-full flex flex-col gap-0 overflow-hidden rounded-lg shadow-lg bg-white p-0 m-0">
      {/* Image Section */}
        <div className=" relative w-full h-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /> */}
        </div>

        {/* Text Section */}
        <CardContent className="bg-[#FC8A06] text-center flex flex-col justify-center px-4 py-3">
          <h3 className="font-playfair text-sm font-semibold text-white m-0">
            {title}
          </h3>
        </CardContent>
      </Card>

    </>
  )
}

export default PopularRestaurantCard