import React from 'react'
import { convertDate } from '../../../utils/convertDate'

const SingleListItem = ({ fullname, email, created_at }) => {
  return (
    <li className='py-3 sm:py-4 border-b border-gray-100'>
      <div className='flex items-center space-x-4'>
        <div className='flex-1 min-w-0'>
          <p className='text-sm font-medium text-gray-900 truncate'>
            {fullname}
          </p>
          <p className='text-sm text-gray-500 truncate'>
            <span>{email}</span>
          </p>
        </div>
        <div className='inline-flex items-center text-base text-[#252b61]'>
          {convertDate(created_at)}
        </div>
      </div>
    </li>
  )
}

export default SingleListItem
