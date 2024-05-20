import React from 'react'
import SelectForm from './SelectForm'

const SelectWrapper = ({ label, id, options, value, onChange }) => {
  return (
    <div className='w-1/2'>
      <label
        htmlFor={label}
        className='block text-gray-700 text-sm font-bold mb-2 capitalize'
      >
        {label}
      </label>
      <SelectForm id={id} options={options} value={value} onChange={onChange} />
    </div>
  )
}

export default SelectWrapper
