'use client'

import Image from "next/image";
// import Image from "next/image";
// import { useState } from "react";
// import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md py-2 ">
//       <div className="max-w-7xl  mx-auto flex items-center justify-between">
//         {/* Logo */}

//         <Image 
//           src="/logo.png"
//           alt="Order.uk Logo"
//           width={125}
//           height={45}
//           className="h-10 md:h-12 object-contain"
//         />

//         {/* Hamburger Menu - Mobile */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>

//         {/* Nav Links + Auth - Desktop */}
//         <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
//           <a href="#" className="text-white bg-[#FC8A06] px-4 py-1 rounded-full">
//             Home
//           </a>
//           <a href="#" className="hover:text-white hover:bg-gray-500 rounded-full px-4 py-1 transition">Browse Menu</a>
//           <a href="#" className="hover:text-white hover:bg-gray-500 rounded-full px-4 py-1 transition">Special Offers</a>
//           <a href="#" className="hover:text-white hover:bg-gray-500 rounded-full px-4 py-1 transition">Restaurants</a>
//           <a href="#" className="hover:text-white hover:bg-gray-500 rounded-full px-4 py-1 transition">Track Order</a>

//           <div className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
//             <FaUserCircle className="text-[#FC8A06]" size={18} />
//             Login/Signup
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden mt-4 space-y-4">
//           <a href="#" className="block text-white bg-[#FC8A06] px-4 py-2 rounded-full">
//             Home
//           </a>
//           <a href="#" className="block px-4 py-2 text-gray-700">Browse Menu</a>
//           <a href="#" className="block px-4 py-2 text-gray-700">Special Offers</a>
//           <a href="#" className="block px-4 py-2 text-gray-700">Restaurants</a>
//           <a href="#" className="block px-4 py-2 text-gray-700">Track Order</a>

//           <div className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer w-fit mx-4">
//             <FaUserCircle className="text-[#FC8A06]" size={18} />
//             Login/Signup
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }


import { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow- py-2 px-0">
      <div className="max-w-[95%] mx-auto flex items-center justify-between w-auto h-auto">
        {/* Logo */}
        <Image 
          src="/logo.png"
          alt="Order.uk Logo"
          width={125}
          height={45}
          className=" w-auto h-auto object-contain"
        />

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Nav Links + Auth - Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="text-white bg-[#FC8A06] px-4 py-1 rounded-full">
            Home
          </a>
          <a href="#" className="hover:text-white hover:bg-gray-500 rounded-full px-4 py-1 transition">Browse Menu</a>
          <a href="#" className="hover:text-[#FC8A06] transition">Special Offers</a>
          <a href="#" className="hover:text-[#FC8A06] transition">Restaurants</a>
          <a href="#" className="hover:text-[#FC8A06] transition">Track Order</a>
          <div className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
            <FaUserCircle className="text-[#FC8A06]" size={18} />
            Login/Signup
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="#" className="block text-white bg-[#FC8A06] px-4 py-2 rounded-full">
            Home
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700">Browse Menu</a>
          <a href="#" className="block px-4 py-2 text-gray-700">Special Offers</a>
          <a href="#" className="block px-4 py-2 text-gray-700">Restaurants</a>
          <a href="#" className="block px-4 py-2 text-gray-700">Track Order</a>

          <div className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer w-fit mx-4">
            <FaUserCircle className="text-[#FC8A06]" size={18} />
            Login/Signup
          </div>
        </div>
      )}
    </nav>
  );
}
