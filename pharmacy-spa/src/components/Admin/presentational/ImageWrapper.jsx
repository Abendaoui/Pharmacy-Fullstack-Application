import React from 'react'
import InputImageForm from './InputImageForm'

const ImageWrapper = ({ label, id,onChange }) => {
  return (
    <div className='mb-4'>
      <label
        className='block text-gray-700 text-sm font-bold mb-2 capitalize'
        htmlFor={id}
      >
        {label}
      </label>
      <InputImageForm id={id} onChange={onChange} />
    </div>
  )
}

export default ImageWrapper
