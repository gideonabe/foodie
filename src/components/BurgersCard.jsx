// import React from 'react';
// import { Plus } from 'lucide-react';
// import { FaCirclePlus } from "react-icons/fa6";

// const BurgerCard = ({ title, items, price, imageUrl }) => {
//   return (
//     <div className="w-full h-full rounded-xl shadow-[0px_5px_15px_rgba(0,0,0,0.3)] overflow-hidden flex p-4 flex-row transition-transform hover:scale-[1.02] cursor-pointer">
//       <div className="flex-[60%] flex flex-col justify-between p-4">
//         <div>
//           <h3 className="text-base font-semibold text-gray-800">{title}</h3>
//           <p className="text-xs text-gray-600 mt-2 leading-relaxed">
//             {items}
//           </p>
//           <p className="mt-2 font-semibold text-gray-900">GBP {price}</p>
//         </div>
//       </div>
//       <div className="flex-[40%] relative h-full w-full">
//         <img
//           src={imageUrl}
//           alt={title}
//           className="object-cover w-full h-full rounded-lg"
//         />
//         <div className="absolute bottom-0 right-0 bg-white/80 rounded-tl-4xl p-3 items-center shadow-lg">
//           {/* <Plus className="w-5 h-5 text-black" /> */}
//           <FaCirclePlus size={30} color="#03081F"/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BurgerCard;

import React from 'react';
import { FaCirclePlus } from "react-icons/fa6";

const BurgerCard = ({ title, items, price, imageUrl }) => {
  return (
    <div className="w-full max-w-full box-border rounded-xl shadow-xl md:shadow-[0px_5px_15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row p-3 md:p-4 transition-transform hover:scale-[1.02] cursor-pointer">
      
      {/* Text Section */}
      <div className="md:flex-[60%] flex-1 flex flex-col justify-between pr-0 md:pr-4">
        <div>
          <h3 className="text-sm md:text-base font-semibold text-gray-800">{title}</h3>
          <p className="text-xs text-gray-600 mt-1 md:mt-2 leading-relaxed line-clamp-3">
            {items}
          </p>
          <p className="mt-2 font-semibold text-gray-900 text-sm md:text-base">GBP {price}</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:flex-[40%] flex-1 relative w-full h-36 md:h-auto mt-0 md:mt-0">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute bottom-0 right-0 bg-white/80 rounded-tl-2xl p-3 shadow-md">
          <FaCirclePlus size={24} color="#03081F" />
        </div>
      </div>
    </div>
  );
};

export default BurgerCard;
