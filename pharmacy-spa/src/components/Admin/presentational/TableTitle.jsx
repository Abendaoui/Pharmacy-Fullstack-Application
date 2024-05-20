import React from 'react'
import { Link } from 'react-router-dom'

const TableTitle = ({ title, link }) => {
  return (
    <div className='flex items-center justify-between mb-4'>
      <h3 className='text-xl font-bold leading-none text-gray-900'>{title}</h3>
      <Link
        to={link}
        className='text-sm font-medium text-cyan-600 hover:text-[#163300] hover:bg-[#9fe870] rounded-lg inline-flex items-center p-2 transition-all'
      >
        View all
      </Link>
    </div>
  )
}

export default TableTitle
