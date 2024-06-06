import React from 'react'

const PaginateButton = ({ handlePageChange, icon, disabled }) => {
  return (
    <button
      className='bg-gray-200 hover:bg-green-300 transition-all text-gray-800 font-bold py-2 px-4 rounded'
      onClick={handlePageChange}
      disabled={disabled}
    >
      {icon}
    </button>
  )
}

export default PaginateButton
