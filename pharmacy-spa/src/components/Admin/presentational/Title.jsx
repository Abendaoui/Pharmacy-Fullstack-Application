import React from 'react'

const Title = ({ children }) => {
  return (
    <div className='text-center py-4'>
      <h1 className='text-2xl font-mono font-extrabold lg:text-4xl text-[#252b61]'>
        {children}
      </h1>
    </div>
  )
}

export default Title
