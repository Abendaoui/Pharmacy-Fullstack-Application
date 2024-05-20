import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ backTo }) => {
  return (
    <article className='mb-4 flex justify-between items-center'>
      <div>
        <div className='shadow rounded-lg flex'>
          <div className='relative'>
            <Link
              to={backTo}
              className='rounded-lg inline-flex gap-2 items-center bg-white hover:text-[#163300] focus:outline-none focus:shadow-outline text-gray-500 font-semibold py-2 px-2 md:px-4 hover:bg-[#9fe870] transition-all'
            >
              <span className='hidden md:block'>Back</span>
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
                  d='M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BackButton
