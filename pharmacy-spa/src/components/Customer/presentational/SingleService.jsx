import React from 'react'

const SingleService = ({ src, alt, title }) => {
  return (
    <div className='w-48 mx-auto relative rounded-lg cursor-pointer'>
      <img
        src={src}
        alt={alt}
        className='w-full h-64 object-cover rounded-lg'
        loading='lazy'
      />
      <h3 className='text-center text-base font-bold text-[#252b61] capitalize'>
        {title}
      </h3>
    </div>
  )
}

export default SingleService
