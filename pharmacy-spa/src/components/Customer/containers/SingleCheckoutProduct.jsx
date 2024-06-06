import React from 'react'
const SingleCheckoutProduct = ({ medecine_image, name, quantity, price }) => {
  return (
    <article className='w-full flex items-center mb-5 bg-[#f1f5f9] py-3 px-2 rounded-lg shadow-lg'>
      <div className='overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200'>
        <img
          src={`http://localhost:8000/images/medecines/${medecine_image}`}
          alt={name}
          loading='lazy'
          className='h-100 w-100 object-contain'
        />
      </div>
      <div className='flex-grow pl-3'>
        <h6 className='font-semibold uppercase text-gray-600'>{name}</h6>
        <p className='text-gray-400'>x {quantity}</p>
      </div>
      <div>
        <span className='font-semibold text-gray-600 text-xl'>
          {price * quantity.toFixed()}MAD
        </span>
      </div>
    </article>
  )
}

export default SingleCheckoutProduct
