import React from 'react'

const SingleCard = ({ medecine_image, name, brand, quantity, price }) => {
  return (
    <article className='justify-between mb-6 rounded-lg bg-[#f1f5f9] p-6 shadow-md sm:flex sm:justify-start'>
      <img
        src={`http://localhost:8000/images/medecines/${medecine_image}`}
        alt='product-image'
        className='w-full rounded-lg sm:w-40'
      />
      <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
        <div className='mt-5 sm:mt-0'>
          <h2 className='text-lg font-bold text-gray-900 capitalize'>{name}</h2>
          <p className='mt-1 text-xs text-gray-700'>{brand}</p>
        </div>
        <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
          <div className='flex items-center border-gray-100'>
            <input
              className='h-8 w-8 border bg-white text-center text-xs outline-none'
              type='number'
              value={quantity}
              readOnly
            />
          </div>
          <div className='flex items-center space-x-4'>
            <p className='text-sm'>{+price * quantity.toFixed(0)}MAD</p>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SingleCard
