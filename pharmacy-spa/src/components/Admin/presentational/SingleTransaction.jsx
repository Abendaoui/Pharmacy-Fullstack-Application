import React from 'react'
import { convertDate } from '../../../utils/convertDate'
const SingleTransaction = ({ fullname, created_at, total_price }) => {
  return (
    <tr>
      <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-900'>
        <span className='font-semibold'>{fullname}</span>
      </td>
      <td className='p-4 whitespace-nowrap text-sm font-normal text-gray-500'>
        {convertDate(created_at)}
      </td>
      <td className='p-4 whitespace-nowrap text-sm font-semibold text-gray-900'>
        {total_price}MAD
      </td>
    </tr>
  )
}

export default SingleTransaction
