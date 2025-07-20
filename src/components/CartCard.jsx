import React from 'react';

const CartCard = ({
  title,
  description,
  spiceImage,
  mainImage,
  sizes = [],
}) => {
  return (
    <div className='flex flex-col gap-1 my-2 mx-4 p-4 bg-white rounded-lg shadow-xl'>
      {/* Top Section */}
      <div className='flex justify-center gap-2 w-full'>
        <div className='flex flex-[60%] flex-col justify-center gap-4'>
          <div className='flex flex-col justify-start items-start'>
            <h1 className='font-bold text-xl'>{title}</h1>
            {spiceImage && (
              <img src={spiceImage} alt={title} className='' />
            )}
          </div>
          <p className='text-sm'>{description}</p>
        </div>
        <div className='relative flex flex-col flex-[40%] justify-start items-end w-30 h-40'>
          {mainImage && (
            <img
              src={mainImage}
              alt={title}
              className='object-contain h-full'
            />
          )}
          <img src='/assets/veganicon.png' className='absolute top-0 left-5'/>
        </div>
      </div>

      {/* Sizes */}
      <div className='my-4 grid grid-cols-2 md:grid-cols-3 gap-2'>
        {sizes.map((size, index) => (
          <div
            key={index}
            className={`items-center justify-center relative border rounded-sm text-sm font-medium px-2 py-3 ${
              size.active ? 'bg-[#03081F] text-white' : 'hover:bg-[#03081F] hover:text-white'
            } ${size.fullWidth ? 'md:w-62' : ''}`}
          >
            <p className='text-xs md:text-base'>{size.label}</p>
            <span className='absolute bg-green-700 hover:bg-green-800 py-1 px-2 right-3 rounded-sm top-1/2 transform -translate-y-1/2 text-white cursor-pointer'>
              ${size.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartCard;
