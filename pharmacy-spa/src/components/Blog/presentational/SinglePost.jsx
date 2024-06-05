import React from 'react'
import { Link } from 'react-router-dom'

const SinglePost = ({ title, tags, description, post_image, slug }) => {
  return (
    <article className='p-1 rounded-xl group sm:flex space-x-6 bg-gray-200 bg-opacity-50 shadow-md hover:rounded-2xl '>
      <img
        src={`http://localhost:8000/images/posts/${post_image}`}
        alt='art cover'
        loading='lazy'
        width={1000}
        height={667}
        className='h-56 w-full sm:w-5/12 object-contain object-top rounded-lg transition duration-500 group-hover:rounded-xl'
      />
      <div className='sm:w-7/12 pl-0 p-5'>
        <div className='space-y-2'>
          <div className='space-y-4'>
            <h4 className='text-2xl font-semibold text-cyan-900'>{title}</h4>
            <p className='text-gray-600'>
              {description && description.substr(0, 50)}...
            </p>
            <div className='flex gap-2'>
              {tags &&
                tags.split(',').map((tag) => {
                  return (
                    <article
                      key={tag}
                      className='px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2 rounded cursor-pointer'
                    >
                      {tag}
                    </article>
                  )
                })}
            </div>
          </div>
          <Link to={`/posts/${slug}`} className='block w-max text-cyan-600'>
            Read more
          </Link>
        </div>
      </div>
    </article>
  )
}

export default SinglePost
