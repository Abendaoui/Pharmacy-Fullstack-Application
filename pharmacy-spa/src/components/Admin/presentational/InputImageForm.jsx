import React from 'react'

const InputImageForm = ({ id, onChange }) => {
  return (
    <input
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2'
      id={id}
      type='file'
      onChange={onChange}
    />
  )
}

export default InputImageForm
