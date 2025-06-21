
import { Card, CardContent } from "@/components/ui/card"; 

const PORCard = ({ imageUrl, subheading, heading, button, info }) => { // Add 'discount' prop
  return (
    <Card className="relative w-full h-[425px] overflow-hidden rounded-lg shadow-lg">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/15 to-transparent"></div>
      </div>

      {info && ( 
        <div className="absolute top-0 bg-white left-30 text-[#03081F] text-sm font-semibold px-4 py-[17px] rounded-bl-lg rounded-br-lg z-20">
          {info}
        </div>
      )}

      {/* Content */}
      <CardContent className="absolute bottom-7 left-17 p-4 text-white z-10">
        <div className="flex flex-col mb-4">
          <p className="text-base text-[#FC8A06] font-light">{subheading}</p>
          <p className="text-4xl font-bold leading-relaxed">{heading}</p>
        </div>
        <p className="text-md font-normal leading-tight text-center text-white bg-[#FC8A06] py-4 px-6 rounded-full mt-1">{button}</p>
      </CardContent>
    </Card>
  );
};

export default PORCard;