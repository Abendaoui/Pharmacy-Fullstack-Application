import React from 'react'

const SingleMedecineItem = ({ name, medecine_image,quantity, brand }) => {
  return (
    <li className='pt-3 sm:pt-4 pb-0'>
      <div className='flex items-center space-x-4'>
        <div className='flex-shrink-0'>
          <img
            className='h-8 w-8 rounded-full'
            src={`http://localhost:8000/images/medecines/${medecine_image}`}
            alt={name}
          />
        </div>
        <div className='flex-1 min-w-0'>
          <p className='text-sm font-medium text-gray-900 truncate'>{name}</p>
          <p className='text-sm text-gray-500 truncate'>
            <span>{brand}</span>
          </p>
        </div>
        <div className='inline-flex items-center text-base text-[#252b61]'>
          {quantity} Items
        </div>
      </div>
    </li>
  )
}

export default SingleMedecineItem
