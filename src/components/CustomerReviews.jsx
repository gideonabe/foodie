// import React from 'react';
// import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

// const CustomerReviews = () => {
//   const reviews = [
//     {
//       id: 1,
//       name: 'St Glx',
//       location: 'South London',
//       rating: 5,
//       date: '24th September, 2023',
//       comment:
//         "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard - hot and satisfying.",
//       avatar: '/assets/review.png',
//     },
//     {
//       id: 2,
//       name: 'St Glx',
//       location: 'South London',
//       rating: 5,
//       date: '24th September, 2023',
//       comment:
//         "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard - hot and satisfying.",
//       avatar: '/assets/review.png',
//     },
//     {
//       id: 3,
//       name: 'St Glx',
//       location: 'South London',
//       rating: 5,
//       date: '24th September, 2023',
//       comment:
//         "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard - hot and satisfying.",
//       avatar: '/assets/review.png',
//     },
//   ];

//   const StarRating = ({ rating }) => {
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       stars.push(
//         <svg
//           key={i}
//           className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
//         </svg>
//       );
//     }
//     return <div className="flex">{stars}</div>;
//   };

//   return (
//     <div className="relative h-[450px] bg-gray-200 pt-8 pb-0 px-4 md:px-6 lg:px-10">
//       <div className="max-w-[95%] mx-auto">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Customer Reviews</h2>
//           <div className="flex space-x-4">
//             <button className="p-3 rounded-full bg-[#F6A623] shadow-md hover:bg-orange-400">
//               <ChevronLeft />
//             </button>
//             <button className="p-3 rounded-full bg-[#F6A623] shadow-md hover:bg-orange-400">
//               <ChevronRight />
//             </button>
//           </div>
//         </div>

//         {/* Reviews Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-15">
//           {reviews.map((review) => (
//             <div key={review.id} className="flex flex-col bg-white p-4 rounded-lg shadow-md h-full">
//               <div className="flex justify-between items-start gap-4 mb-3">
//                 <div className="flex items-center gap-2">
//                   <img
//                     src={review.avatar}
//                     alt={review.name}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                    <div className="w-[1.8px] h-8 bg-[#F6A623] rounded-sm"></div>
//                   <div>
//                     <h4 className="font-semibold text-base text-gray-900">{review.name}</h4>
//                     <p className="text-xs text-gray-500">{review.location}</p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-end gap-1">
//                   <StarRating rating={review.rating} />
//                   <div className="flex items-center gap-1">
//                     <Clock color="#F6A623" size={16} />
//                     <p className="text-xs text-gray-500">{review.date}</p>
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-700 leading-relaxed text-sm">{review.comment}</p>
//             </div>
//           ))}
//         </div>

//         {/* Overall Rating */}
//         <div className="w-full flex justify-center">
//           <div className="flex flex-col items-center justify-center bg-white rounded-lg p-3 shadow-md w-[120px]">
//             <p className="text-5xl font-semibold text-gray-800 mb-2">3.4</p>
//             <StarRating rating={3} />
//             <p className="text-gray-600 text-sm mt-2">1,360 reviews</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;


'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'St Glx',
      location: 'South London',
      rating: 5,
      date: '24th September, 2023',
      comment:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard - hot and satisfying.",
      avatar: '/assets/review.png',
    },
    {
      id: 2,
      name: 'St Glx',
      location: 'South London',
      rating: 5,
      date: '24th September, 2023',
      comment:
        "Service was top notch! Speedy and warm. Just what you'd expect from a busy city McD's. Will definitely return again.",
      avatar: '/assets/review.png',
    },
    {
      id: 3,
      name: 'St Glx',
      location: 'South London',
      rating: 5,
      date: '24th September, 2023',
      comment:
        "Quick service and friendly team. Food was hot, fresh, and served faster than expected. Perfect for a lunch break stop.",
      avatar: '/assets/review.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      );
    }
    return <div className="flex">{stars}</div>;
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative bg-gray-200 pt-8 pb-10 px-4 md:px-6 lg:px-10">
      <div className="max-w-[95%] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Customer Reviews</h2>
          <div className="flex space-x-4">
            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-[#F6A623] shadow-md hover:bg-orange-400"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-[#F6A623] shadow-md hover:bg-orange-400"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Desktop: show all reviews | Mobile: show one at a time */}
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`flex flex-col bg-white p-4 rounded-lg shadow-md h-full transition-all duration-300 ease-in-out
              ${index === currentIndex ? 'block' : 'hidden'} sm:block lg:block`}
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="w-[1.8px] h-8 bg-[#F6A623] rounded-sm"></div>
                  <div>
                    <h4 className="font-semibold text-base text-gray-900">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.location}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <StarRating rating={review.rating} />
                  <div className="flex items-center gap-1">
                    <Clock color="#F6A623" size={16} />
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="hidden md:flex w-full justify-center">
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-md w-[140px]">
            <p className="text-5xl font-semibold text-gray-800 mb-2">3.4</p>
            <StarRating rating={3} />
            <p className="text-gray-600 text-sm mt-2">1,360 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
