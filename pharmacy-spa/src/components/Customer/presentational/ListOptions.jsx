import React from 'react'

const ListOptions = ({title}) => {
  return (
    <li
      className='border-b last:border-none py-4 border-dashed border-[#39a9a9] flex items-center gap-5'
    >
      <span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-4 h-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5'
          />
        </svg>
      </span>
      <span className='font-bold text-md'>{title}</span>
    </li>
  )
}

export default ListOptions
