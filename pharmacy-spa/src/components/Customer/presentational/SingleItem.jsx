import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
const SingleItem = ({ name, slug, brand, medecine_image, price }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    })
  }, [])
  return (
    <article
      data-aos='fade-up'
      className='group relative hover:scale-105 duration-500'
    >
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80 shadow-lg border-black border border-dashed'>
        <img
          src={`http://localhost:8000/images/medecines/${medecine_image}`}
          alt={name}
          className='h-48 w-full object-contain object-center lg:h-full lg:w-full'
          loading='lazy'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700 capitalize'>
            <Link to={`/products/${slug}`}>
              <span
                aria-hidden='true'
                className='absolute inset-0 capitalize'
              />
              {name}
            </Link>
          </h3>
          <p className='mt-1 text-sm text-gray-500 capitalize'>{brand}</p>
        </div>
        <p className='text-sm font-medium text-gray-900'>{price}MAD</p>
      </div>
    </article>
  )
}

export default SingleItem
