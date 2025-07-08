import React from "react";
import AboutusCard from "./AboutusCard";

const Aboutus = () => {
  const cards = [
    {
      title: "Place an Order!",
      image: "/assets/order-food-1.png",
      description: "Place order through our website or Mobile app",
    },
    {
      title: "Track Progress",
      image: "/assets/food-1.png",
      description: "Your can track your order status with delivery time",
    },
    {
      title: "Get your Order!",
      image: "/assets/order-1.png",
      description: "Receive your order at a lighting fast speed",
    },
  ];

  return (
    <section id="aboutus" className="mt-4 mb-8">
      <div className="max-w-[95%] mx-auto space-y-10 p-5 pb-20 md:p-20 bg-gray-100 rounded-2xl">
        {/* Header */}
        <div className="text-center md:flex md:justify-between">
          <h1 className="font-bold text-2xl md:text-3xl mb-4">Know more about us!</h1>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm md:text-base font-medium">
            <p className="border border-orange-400 rounded-full px-5 py-2 text-black">Frequent Questions</p>
            <p className="text-gray-600">Who we are?</p>
            <p className="text-gray-600">Partner Program</p>
            <p className="text-gray-600">Help & Support</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#0B1120] text-white rounded-xl  flex flex-col md:flex-row gap-2">
          {/* Left Questions */}
          <div className="flex-1 space-y-6 text-center pt-6 md:pt-14 px-2 md:px-0 md:pl-6">
            <p className="bg-orange-400 text-black text-sm font-semibold px-4 py-2 inline-block rounded-full mt-2">
              How does Order.UK work?
            </p>
            <ul className=" space-y-3 md:space-y-8 text-sm md:text-base text-white/80">
              <li>What payment methods are accepted?</li>
              <li>Can I track my order in real-time?</li>
              <li>Are there any special discounts or promotions available?</li>
              <li>Is Order.UK available in my area?</li>
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-orange-300 h-auto"></div>

          {/* Right Cards */}
          <div className="flex-[2] flex flex-col justify-center items-center space-y-6 p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cards.map((card, index) => (
                <AboutusCard
                  key={index}
                  title={card.title}
                  imageSrc={card.image}
                  description={card.description}
                />
              ))}
            </div>
            <p className="text-center p-0 md:px-8 text-sm text-white/80 mt-4">
              Order.UK simplifies the food ordering process. Browse through our diverse menu,
              select your favorite dishes, and proceed to checkout. Your delicious meal will be
              on its way to your doorstep in no time!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
