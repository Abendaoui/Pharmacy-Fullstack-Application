import React from 'react'

const InputForm = ({ id, type, placeholder, value, onChange }) => {
  return (
    <input
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2'
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoComplete='true'
    />
  )
}

export default InputForm
