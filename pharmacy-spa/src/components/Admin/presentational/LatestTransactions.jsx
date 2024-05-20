import React,{useState,useEffect} from 'react'
import TableTitle from './TableTitle'
import TransactionsTable from './TransactionsTable'
import axiosAdmin from '../../../configs/axiosAdmin'

const LatestTransactions = () => {
  return (
    <article className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
      <TableTitle title={'Latest Transactions'} link={'/transactions'} />
      {/* Table Body */}
      <div className='flex flex-col mt-8'>
        <div className='overflow-x-auto rounded-lg'>
          <div className='align-middle inline-block min-w-full'>
            <div className='shadow overflow-hidden sm:rounded-lg'>
              <TransactionsTable />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default LatestTransactions
