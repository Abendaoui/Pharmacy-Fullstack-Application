import React from 'react'

const AddButton = () => {
  return (
    <button
      className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none
       focus:shadow-outline flex gap-2 items-center'
      type='submit'
    >
      Add
      <span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
      </span>
    </button>
  )
}

export default AddButton
