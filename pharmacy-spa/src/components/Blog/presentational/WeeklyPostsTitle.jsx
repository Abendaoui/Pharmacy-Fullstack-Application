import React from 'react'

const WeeklyPostsTitle = ({ tag, title }) => {
  return (
    <div className='mb-12 space-y-2 text-center'>
      <span className='block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600'>
        {tag}
      </span>
      <h2 className='text-2xl text-cyan-900 font-bold md:text-4xl'>{title}</h2>
    </div>
  )
}

export default WeeklyPostsTitle
