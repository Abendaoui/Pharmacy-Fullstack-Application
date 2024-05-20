import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../../../utils/orderStatus'
import { convertDate } from '../../../utils/convertDate'
import { AdminPageWrapper } from '../../Wrapper'
import axiosAdmin from '../../../configs/axiosAdmin'
const columns = [
  { field: 'id', headerName: 'ID', width: 70, sortable: true },
  {
    field: 'fullname',
    headerName: 'Fullname',
    width: 150,
    sortable: true,
    renderCell: (params) => `${params.row.fullname}`,
  },
  {
    field: 'total_price',
    headerName: 'Total Price',
    width: 100,
    sortable: true,
    renderCell: (params) => `${params.row.total_price}MAD`,
  },
  {
    field: 'discount',
    headerName: 'Discount',
    width: 100,
    sortable: true,
    renderCell: (params) => `0%`,
  },
  {
    field: 'order_status',
    headerName: 'Status',
    width: 100,
    sortable: true,
    renderCell: (params) => getOrderStatus(params.row.order_status),
  },
  {
    field: 'order_date',
    headerName: 'Date',
    width: 200,
    sortable: true,
    renderCell: (params) => convertDate(params.row.order_date),
  },

  { field: 'address', headerName: 'Address', width: 200, sortable: true },
  {
    field: 'details',
    headerName: 'Details',
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <Link to={`/brand/${params.row.id}`} rel='noopener noreferrer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 mt-2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
          />
        </svg>
      </Link>
    ),
  },
]

const Transactions = () => {
  const [transactions, setTransactions] = useState([])
  const getTransactions = async () => {
    try {
      await axiosAdmin.get('/transactions').then(({ data }) => {
        if (data) {
          setTransactions(data.data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getTransactions()
  }, [])
  return (
    <DataGrid
      className='cursor-pointer'
      rows={transactions}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[5, 10, 15]}
      checkboxSelection
    />
  )
}

export default AdminPageWrapper(Transactions, 'List Transactions', false, '')
