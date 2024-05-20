import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const FormSearch = ({ addAble = false, linkTo="" }) => {
  return (
    <article className='mb-4 flex justify-between items-center'>
      {/* Form */}
      <div className='flex-1 pr-4'>
        <div className='relative md:w-1/3'>
          <input
            type='search'
            className='w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium'
            placeholder='Search...'
          />
          <div className='absolute top-0 left-0 inline-flex items-center p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-gray-400'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <rect x={0} y={0} width={24} height={24} stroke='none' />
              <circle cx={10} cy={10} r={7} />
              <line x1={21} y1={21} x2={15} y2={15} />
            </svg>
          </div>
        </div>
      </div>
      {/* Link */}
      {addAble && (
        <div>
          <div className='shadow rounded-lg flex'>
            <div className='relative'>
              <Link
                to={linkTo}
                className='rounded-lg inline-flex gap-2 items-center bg-white hover:text-[#163300] focus:outline-none focus:shadow-outline text-gray-500 font-semibold py-2 px-2 md:px-4 hover:bg-[#9fe870] transition-all'
              >
                <span className='hidden md:block'>Add</span>
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
              </Link>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

export default FormSearch
