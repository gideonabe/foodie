import React from "react";

const Totals = () => {
  return (
    <section id="Totals" className="mt-8 mb-8">
      <div className="max-w-[95%] mx-auto">
        <div className="flex flex-col md:flex-row bg-orange-400 text-white rounded-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center p-6 w-full md:w-1/4">
            <p className="text-3xl md:text-4xl leading-tight">546+</p>
            <p className="text-sm md:text-base">Registered Riders</p>
          </div>

          <div className="h-px md:h-auto md:w-px bg-white mx-6 md:my-6" />

          <div className="flex flex-col items-center justify-center p-6 w-full md:w-1/4">
            <p className="text-3xl md:text-4xl leading-tight">789,900+</p>
            <p className="text-sm md:text-base">Orders Delivered</p>
          </div>

          <div className="h-px md:h-auto md:w-px bg-white mx-6 md:my-6" />

          <div className="flex flex-col items-center justify-center p-6 w-full md:w-1/4">
            <p className="text-3xl md:text-4xl leading-tight">690+</p>
            <p className="text-sm md:text-base">Restaurants Partnered</p>
          </div>

          <div className="h-px md:h-auto md:w-px bg-white mx-6 md:my-6" />

          <div className="flex flex-col items-center justify-center p-6 w-full md:w-1/4">
            <p className="text-3xl md:text-4xl leading-tight">17,457+</p>
            <p className="text-sm md:text-base">Food items</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Totals;
