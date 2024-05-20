import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { AdminPageWrapper } from '../../Wrapper'
import axiosAdmin from '../../../configs/axiosAdmin'
import { convertDate } from '../../../utils/convertDate'
const columns = [
  { field: 'id', headerName: 'ID', width: 70, sortable: true },
  { field: 'name', headerName: 'Category', width: 150, sortable: true },
  {
    field: 'description',
    headerName: 'Description',
    width: 600,
    sortable: true,
  },
  {
    field: 'created_at',
    headerName: 'Created At',
    width: 130,
    sortable: true,
    renderCell: (params) => convertDate(params.row.created_at),
  },
  {
    field: 'details',
    headerName: 'Details',
    width: 100,
    sortable: true,
    renderCell: (params) => (
      <Link to={`/category/${params.row.id}`} rel='noopener noreferrer'>
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

const ProductsCategories = () => {
  const [categories, setCategories] = useState([])
  const getCategories = async () => {
    try {
      await axiosAdmin.get('/categories').then(({ data }) => {
        if (data) {
          setCategories(data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCategories()
  }, [])
  return (
    <DataGrid
      className=' cursor-pointer'
      rows={categories}
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

export default AdminPageWrapper(
  ProductsCategories,
  'List Categories',
  true,
  'add_category'
)
