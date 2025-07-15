import React from 'react';
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
        'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard - hot and satisfying.',
      avatar: '/assets/review.png', // Replace with actual path to image
    },
    {
      id: 2,
      name: 'St Glx',
      location: 'South London',
      rating: 5,
      date: '24th September, 2023',
      comment:
        'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard - hot and satisfying.',
      avatar: '/assets/review.png', // Replace with actual path to image
    },
    {
      id: 3,
      name: 'St Glx',
      location: 'South London',
      rating: 5,
      date: '24th September, 2023',
      comment:
        'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard - hot and satisfying.',
      avatar: '/assets/review.png', // Replace with actual path to image
    },
  ];

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

  return (
    <div className="relative h-[470px] bg-gray-300 py-16 px-2 md:px-2 lg:px-2">
      <div className=" max-w-[95%] mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Customer Reviews</h2>
          <div className="flex space-x-4">
            <button className="p-3 rounded-full bg-[#F6A623] shadow-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <ChevronLeft />
            </button>
            <button className="p-3 rounded-full bg-[#F6A623] shadow-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300">
              <ChevronRight color='black'/>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col bg-white p-4 rounded-lg shadow-md">
              <div className='flex flex-row justify-between items-center'>
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className='bg-[#F6A623] h-full w-2'></div>
                  <div>
                    <h4 className="font-semibold text-base text-gray-900">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.location}</p>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <div className="flex ml-auto">
                    <StarRating rating={review.rating} />
                  </div>
                  <div className='flex flex-row gap-2'>
                    <div><Clock color='#F6A623' size={20}/></div>
                    <p className="text-xs text-gray-500 mt-auto">{review.date}</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm mb-4">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='absolute left-[45%] -bottom-15'>
        <div className=" flex flex-col items-center justify-center bg-white rounded-lg p-2">
          <p className="text-6xl font-semibold text-gray-800 mb-2">3.4</p>
          <StarRating rating={3} /> {/* Assuming 3 stars for 3.4 for visual representation */}
          <p className="text-gray-600 text-lg mt-2">1,360 reviews</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;