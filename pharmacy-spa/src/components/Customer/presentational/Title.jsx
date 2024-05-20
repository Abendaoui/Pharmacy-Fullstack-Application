import React from 'react'

const Title = ({ children, className = '' }) => {
  return (
    <div className='mx-auto w-full text-left p-4'>
      <h2
        className={`text-2xl font-mono font-extrabold lg:text-4xl text-[#252b61] ${className}`}
      >
        {children}
      </h2>
    </div>
  )
}

export default Title
