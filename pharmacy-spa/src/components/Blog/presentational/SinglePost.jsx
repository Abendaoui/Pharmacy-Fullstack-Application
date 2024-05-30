import React from 'react'
import { Link } from 'react-router-dom'

const SinglePost = () => {
  return (
    <Link
      to={'/posts/slug'}
      className='p-1 rounded-xl group sm:flex space-x-6 bg-gray-200 bg-opacity-50 shadow-md hover:rounded-2xl '
    >
      <img
        src='https://www.refinery29.com/images/10660133.png?format=webp&width=720&height=864&quality=85&crop=5%3A6'
        alt='art cover'
        loading='lazy'
        width={1000}
        height={667}
        className='h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl'
      />
      <div className='sm:w-7/12 pl-0 p-5'>
        <div className='space-y-2'>
          <div className='space-y-4'>
            <h4 className='text-2xl font-semibold text-cyan-900'>
              Does Cereve Products Really That Good?
            </h4>
            <p className='text-gray-600'>
              Laborum saepe laudantium in, voluptates ex placeat quo harum
              aliquam totam, doloribus eum impedit atque! Temporibus...
            </p>
          </div>
          <a href='https://tailus.io' className='block w-max text-cyan-600'>
            Read more
          </a>
        </div>
      </div>
    </Link>
  )
}

export default SinglePost
