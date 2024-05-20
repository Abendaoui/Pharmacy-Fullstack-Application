import React from 'react'
import InputForm from './InputForm'

const InputWrapper = ({
  label,
  className,
  id,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label
        className='block text-gray-700 text-sm font-bold mb-2 capitalize'
        htmlFor={id}
      >
        {label}
      </label>
      <InputForm
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputWrapper
