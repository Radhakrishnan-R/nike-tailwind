import React from 'react';
import { star } from '../assets/icons';

const PopularProductsCard = ({imgURL, name, price}) => {
  return (
    <div className='cursor-pointer'>
      <img 
        src={imgURL} alt={name}
        className='w-[300px]'
      />
      <div>
        <div className='flex items-center gap-2'><img src={star} className='mt-4'/><span className='text-xl text-slate-gray inline-block mt-4'>(4.5)</span></div>
         <h3 className='text-2xl font-semibold mt-5 font-palanquin'>{name}</h3>
        <p className='text-2xl font-semibold text-coral-red mt-4'>{price}</p>
      </div>
    </div>
  )
}

export default PopularProductsCard;