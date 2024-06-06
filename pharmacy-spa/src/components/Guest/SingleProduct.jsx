import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
const SingleProduct = ({ slug, medecine_image, price, name, quantity }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    })
  }, [])

  return (
    <article
      data-aos='fade-up'
      className='relative flex flex-col overflow-hidden rounded-lg border shadow-md duration-500
     hover:scale-100 hover:shadow-xl transition-all'
    >
      <Link to={`/guest/products/${slug}`} className='aspect-square overflow-hidden'>
        <img
          className='h-full w-full object-contain transition-all duration-300 group-hover:scale-125'
          src={`http://localhost:8000/images/medecines/${medecine_image}`}
          alt={name}
          loading='lazy'
        />
      </Link>
      <div className='absolute top-0 m-2 rounded-full bg-white'>
        {quantity > 0 ? (
          <p className='rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3'>
            Available
          </p>
        ) : (
          <p className='rounded-full bg-red-400 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3'>
            Soon
          </p>
        )}
      </div>
      <div className='my-4 mx-auto flex w-10/12 flex-col items-start justify-between'>
        <div className='mb-2 flex'>
          <p className='mr-3 text-sm font-semibold'>{price}MAD</p>
          <del className='text-xs text-gray-400'>
            {' '}
            {price * (1.5).toFixed(2)} MAD
          </del>
        </div>
        <h3 className='mb-2 text-base text-gray-400 capitalize'>{name}</h3>
      </div>
    </article>
  )
}

export default SingleProduct
