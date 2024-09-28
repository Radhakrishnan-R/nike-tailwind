import React from 'react'

const ServiceCard = ({imgURL: imageURL, label, subtext}) => {

    console.log(imageURL);
  return (
    <div className='py-16 max-sm:py-8 px-10 max-sm:px-5 flex-1 shadow-3xl dark:shadow-white dark:shadow-sm rounded-3xl max-xl:min-w-[300px]'>
        <div className='bg-coral-red w-11 h-11 rounded-full flex justify-center items-center'>
            <img 
                src={imageURL} alt="feature-icon"
                className='object-contain'
            />
        </div>
       
        <h3 className='text-3xl dark:text-white  font-palanquin font-bold my-5'>{label}</h3>
        <p className='info-text break-words '>{subtext}</p>
    </div>
  )
}

export default ServiceCard;