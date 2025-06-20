



import { Card, CardContent } from "@/components/ui/card";

const CategoriesCard = ({ image, title, description }) => {
  return (
    <Card className="group w-full h-full flex flex-col gap-0 overflow-hidden rounded-lg shadow-lg bg-white p-0 m-0">
      {/* Image Section */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Text Section */}
      <CardContent className="bg-[#03081F] text-left flex flex-col justify-center px-4 py-3">
        <h3 className="font-playfair text-base font-semibold text-[#FC8A06] m-0">
          {title}
        </h3>
        <p className="font-inter text-sm text-white leading-relaxed m-0">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default CategoriesCard;
