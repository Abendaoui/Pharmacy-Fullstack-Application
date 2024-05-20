import React from 'react'

const SelectForm = ({ id, options, value, onChange }) => {
  return (
    <select
      id='id'
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2'
      value={value}
      onChange={onChange}
    >
      <option selected value=''>
        Choose {id}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default SelectForm
