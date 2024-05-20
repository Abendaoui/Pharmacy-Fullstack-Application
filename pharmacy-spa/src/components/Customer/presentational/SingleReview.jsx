import React from 'react'
import StartIcon from './StartIcon'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
const SingleReview = ({ title, content, stars, reviewer }) => {
  return (
    <article className='flex max-w-xl flex-col items-start justify-between border border-gray-100 bg-[#f1f5f9] rounded-2xl p-2 text-[#1b215a] h-80'>
      <div className='group relative px-3'>
        <h3 className='mt-3 text-lg font-semibold leading-6 text-[#252b61]'>
          <span className='absolute inset-0'></span>
          {title}
        </h3>
        <p className='mt-3 text-sm leading-6 text-[#252b61]'>
          <FormatQuoteIcon />
          {content}
          <FormatQuoteIcon />
        </p>
      </div>
      <div className='relative mt-5 flex flex-col gap-1 items-center'>
        {/* Render stars using StarIcon */}
        <div className='flex items-center gap-x-1'>
          {Array.from({ length: stars }).map((_, index) => (
            <StartIcon key={index} />
          ))}
        </div>
        {/* Name below stars */}
        <div className='text-sm leading-6'>
          <p className='font-semibold text-[#252b61] ml-3'>
            <span className='absolute inset-0'></span>
            {reviewer}
          </p>
        </div>
      </div>
    </article>
  )
}

export default SingleReview
