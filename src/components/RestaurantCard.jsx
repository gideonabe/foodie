import { Card, CardContent } from "@/components/ui/card"; 
import Link from "next/link";

const RestaurantCard = ({ imageUrl, category, description, discount }) => { 
  return (
    <Link href="/restaurant">
      <Card className="relative w-full h-72 overflow-hidden rounded-lg shadow-lg cursor-pointer">
        {/* Your existing card content here */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        {discount && ( 
          <div className="absolute top-0 bg-[#03081F] right-6 text-white text-sm font-semibold px-3 py-3 rounded-bl-lg rounded-br-lg z-20">
            {discount}
          </div>
        )}

        {/* Content */}
        <CardContent className="absolute bottom-5 left-5 p-4 text-white z-10">
          <p className="text-sm text-[#FC8A06] font-light">{category}</p>
          <p className="text-md font-semibold leading-tight mt-1">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;