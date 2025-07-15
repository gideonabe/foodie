import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdPermContactCalendar } from "react-icons/md";
import { Truck } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="max-w-[95%] mx-auto my-10 px-4 md:px-0 md:py-2">
      <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* Delivery Info */}
        <div className="pl-10 md:pl-15 py-15">
          <div className="flex items-center gap-2 mb-4 text-2xl font-bold text-[#03081F]">
            <Truck className="text-[#03081F]" />
            <h2>Delivery information</h2>
          </div>
          <ul className="text-base text-[#03081F] leading-7 space-y-1">
            <li><strong>Monday:</strong> 12:00 AM-3:00 AM, 8:00 AM-3:00 AM</li>
            <li><strong>Tuesday:</strong> 8:00 AM-3:00 AM</li>
            <li><strong>Wednesday:</strong> 8:00 AM-3:00 AM</li>
            <li><strong>Thursday:</strong> 8:00 AM-3:00 AM</li>
            <li><strong>Friday:</strong> 8:00 AM-3:00 AM</li>
            <li><strong>Saturday:</strong> 8:00 AM-3:00 AM</li>
            <li><strong>Sunday:</strong> 8:00 AM-12:00 AM</li>
            <li className="mt-2"><strong>Estimated time until delivery:</strong> 20 min</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="pl-10 py-15 bg-white border-t md:border-t-0 border-gray-200">
          <div className="flex items-center gap-2 mb-4 text-2xl font-bold text-[#03081F]">
            <MdPermContactCalendar className="text-[#03081F]" />
            <h2>Contact information</h2>
          </div>
          <p className="text-base text-[#03081F] leading-8 mb-4 pr-8">
            If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.
          </p>
          <p className="text-base text-[#03081F]">
            <strong>Phone number</strong><br />
            +934443-43
          </p>
          <p className="text-sm text-[#03081F] mt-4">
            <strong>Website</strong><br />
            <a href="http://mcdonalds.uk/" className="text-[#03081F] text-base hover:underline">
              http://mcdonalds.uk/
            </a>
          </p>
        </div>

        {/* Operational Times */}
        <div className="px-10 py-15 bg-[#03081F] text-white">
          <div className="flex items-center gap-2 mb-4 text-2xl font-bold">
            <FaClock />
            <h2>Operational Times</h2>
          </div>
          <ul className="text-base leading-7 space-y-1">
            <li><strong>Monday:</strong> 8:00 AM-3:00 AM</li>
            <li><strong>Tuesday:</strong> 8:00 AM-3:00 AM</li>
            <li><strong>Wednesday:</strong> 8:00 AM-3:00 AM</li>
            <li><strong>Thursday:</strong> 8:00 AM-3:00 AM</li>
            <li><strong>Friday:</strong> 8:00 AM-3:00 AM</li>
            <li><strong>Saturday:</strong> 8:00 AM-3:00 AM</li>
            <li><strong>Sunday:</strong> 8:00 AM-3:00 AM</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;




// import { FaClock } from "react-icons/fa";
// import { MdPermContactCalendar } from "react-icons/md";
// import { Truck } from "lucide-react";

// const InfoSection = () => {
//   return (
//     <section className="max-w-[95%] mx-auto my-10 px-4">
//       <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-xl rounded-lg overflow-hidden gap-y-10 md:gap-y-0">
        
//         {/* Delivery Info */}
//         <div className="p-6 md:p-8">
//           <div className="flex items-center gap-2 mb-4 text-2xl font-bold text-[#03081F]">
//             <Truck className="text-[#03081F]" />
//             <h2>Delivery information</h2>
//           </div>
//           <ul className="text-base text-[#03081F] leading-7 space-y-1">
//             <li><strong>Monday:</strong> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</li>
//             <li><strong>Tuesday:</strong> 8:00 AM–3:00 AM</li>
//             <li><strong>Wednesday:</strong> 8:00 AM–3:00 AM</li>
//             <li><strong>Thursday:</strong> 8:00 AM–3:00 AM</li>
//             <li><strong>Friday:</strong> 8:00 AM–3:00 AM</li>
//             <li><strong>Saturday:</strong> 8:00 AM–3:00 AM</li>
//             <li><strong>Sunday:</strong> 8:00 AM–12:00 AM</li>
//             <li className="mt-2"><strong>Estimated time until delivery:</strong> 20 min</li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="p-6 md:p-8 bg-white border-t md:border-t-0 border-gray-200">
//           <div className="flex items-center gap-2 mb-4 text-2xl font-bold text-[#03081F]">
//             <MdPermContactCalendar className="text-[#03081F]" />
//             <h2>Contact information</h2>
//           </div>
//           <p className="text-base text-[#03081F] leading-8 mb-4">
//             If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.
//           </p>
//           <p className="text-base text-[#03081F]">
//             <strong>Phone number</strong><br />
//             +934443-43
//           </p>
//           <p className="text-base text-[#03081F] mt-4">
//             <strong>Website</strong><br />
//             <a href="http://mcdonalds.uk/" className="text-blue-600 hover:underline break-words">
//               http://mcdonalds.uk/
//             </a>
//           </p>
//         </div>

//         {/* Operational Times */}
//         <div className="p-6 md:p-8 bg-[#03081F] text-white">
//           <div className="flex items-center gap-2 mb-4 text-2xl font-bold">
//             <FaClock />
//             <h2>Operational Times</h2>
//           </div>
//           <ul className="text-base leading-7 space-y-1">
//             <li><strong>Monday:</strong> 8:00 AM–3:00 AM</li>
//             <li><strong>Tuesday:</strong> 8:00 AM–3:00 AM</li>
//             <li><strong>Wednesday:</strong> 8:00 AM–3:00 AM</li>
//             <li><strong>Thursday:</strong> 8:00 AM–3:00 AM</li>
//             <li><strong>Friday:</strong> 8:00 AM–3:00 AM</li>
//             <li><strong>Saturday:</strong> 8:00 AM–3:00 AM</li>
//             <li><strong>Sunday:</strong> 8:00 AM–3:00 AM</li>
//           </ul>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default InfoSection;
