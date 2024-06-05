import React from 'react'
import { Link } from 'react-router-dom'

const SingleBrand = ({ brand_name, brand_image }) => {
  return (
    <article
      className='flex-shrink-0 w-28 h-28 mr-8 rounded-full shadow-md'
      data-aos='slide-up'
    >
      <Link
        to={`/brands/${brand_name}`}
        className=' flex items-center justify-center rounded-full'
      >
        <img
          src={`http://localhost:8000/images/brands/${brand_image}`}
          className='rounded-full w-28 h-28'
          loading='lazy'
        />
      </Link>
    </article>
  )
}

export default SingleBrand
