import React from 'react'

const SingleContactInfo = ({ icon, title, body, info }) => {
  return (
    <article className='bg-green-100 px-4 py-6 rounded-lg shadow-lg'>
      <span className='inline-block p-3 text-green-500 rounded-full bg-blue-100/80 '>
        {icon}
      </span>
      <h2 className='mt-4 text-base font-medium text-gray-800 '>
        {title}
      </h2>
      <p className='mt-2 text-sm text-gray-500 capitalize'>
        {body}
      </p>
      <p className='mt-2 text-sm text-green-500 dark:text-green-400'>{info}</p>
    </article>
  )
}

export default SingleContactInfo
