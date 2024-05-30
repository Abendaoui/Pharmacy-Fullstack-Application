import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <article className='flex bg-white' style={{ height: 660 }}>
      <div className='flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2'>
        <div>
          <h2 className='text-3xl font-semibold text-gray-800 md:text-4xl'>
            Discover the Latest in{' '}
            <span className='text-[#9fe870]'>Pharmacy Innovations</span>
          </h2>
          <p className='mt-2 text-sm text-gray-500 md:text-base'>
            Stay informed with the newest advancements in the pharmaceutical
            industry. Our blog provides insights, health tips, and the latest
            news to help you make well-informed decisions about your health and
            wellness.
          </p>
          <div className='flex justify-center lg:justify-start mt-6 gap-4'>
            <Link
              className='px-4 py-3 bg-[#9fe870] text-white text-[13px] font-semibold rounded-md shadow-md'
              to='/create_post'
            >
              Make Post
            </Link>
            <Link
              className='px-4 py-3 bg-[#9fe870] text-white text-[13px] font-semibold rounded-md shadow-md'
              to='/create_post'
            >
              More
            </Link>
          </div>
        </div>
      </div>
      <div
        className='hidden lg:block lg:w-1/2'
        style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
        <div
          className='h-full object-cover'
          style={{
            backgroundImage:
              'url(https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/6/shutterstock_1928863685.jpg)',
          }}
        >
          <div className='h-full bg-black opacity-25' />
        </div>
      </div>
    </article>
  )
}

export default Hero
