import React from 'react'

const TextAreaForm = ({ id, label, placeHolder, value, onChange }) => {
  return (
    <textarea
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2 resize-none'
      name={label}
      id={id}
      cols='15'
      rows='10'
      placeholder={placeHolder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  )
}

export default TextAreaForm
