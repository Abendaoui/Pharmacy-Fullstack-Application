import React from 'react'
import TextAreaForm from './TextAreaForm'

const TextAreaWrapper = ({ label, id, placeHolder, value, onChange }) => {
  return (
    <div className='mb-4'>
      <label
        className='block text-gray-700 text-sm font-bold mb-2 capitalize'
        htmlFor={id}
      >
        {label}
      </label>
      <TextAreaForm label={label} id={id} placeHolder={placeHolder} value={value} onChange={onChange} />
    </div>
  )
}

export default TextAreaWrapper
