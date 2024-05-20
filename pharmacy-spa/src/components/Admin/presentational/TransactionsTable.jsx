import React, { useState, useEffect } from 'react'
import SingleTransaction from './SingleTransaction'
import axiosAdmin from '../../../configs/axiosAdmin'

const TransactionsTable = () => {
  const [data, setData] = useState([])
  const getLatestTransactions = async () => {
    try {
      await axiosAdmin.get('/latest_transactions').then(({ data }) => {
        if (data) {
          setData(data.data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getLatestTransactions()
  }, [])
  return (
    <table className='min-w-full divide-y divide-gray-200'>
      <thead className='bg-gray-50'>
        <tr>
          <th
            scope='col'
            className='p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Transaction
          </th>
          <th
            scope='col'
            className='p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Date &amp; Time
          </th>
          <th
            scope='col'
            className='p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Amount
          </th>
        </tr>
      </thead>
      <tbody className='bg-white'>
        {data.length > 0 ? (
          data.map((transacrion) => {
            return <SingleTransaction key={transacrion.id} {...transacrion} />
          })
        ) : (
          <tr>
            <td className='text-center' colSpan={3}>No Transactions Found</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default TransactionsTable
