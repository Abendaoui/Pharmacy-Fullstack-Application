import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { AdminPageWrapper } from '../../Wrapper'
import { Link } from 'react-router-dom'
import axiosAdmin from '../../../configs/axiosAdmin'

const columns = [
  {
    field: 'medecine_image',
    headerName: 'Product',
    width: 380,
    sortable: true,
    renderCell: (params) => (
      <div className='flex items-center'>
        <div className='relative inline-block shrink-0 rounded-2xl me-3'>
          <img
            src={`http://localhost:8000/images/medecines/${params.row.medecine_image}`}
            className='w-[50px] h-[50px] inline-block shrink-0 rounded-2xl'
            alt={params.row.name}
          />
        </div>
        <div className='flex flex-col justify-start'>
          <a
            href='javascript:void(0)'
            className='mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary'
          >
            {params.row.name}
          </a>
        </div>
      </div>
    ),
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
    renderCell: (params) => `${params.row.price}MAD`,
  },
  { field: 'brand', headerName: 'Brand', width: 150, sortable: true },
  { field: 'category', headerName: 'Category', width: 150, sortable: true },
  { field: 'quantity', headerName: 'Quantity', width: 100, sortable: true },
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

const Medecine = () => {
    const [medecines, setMedecines] = useState([])
    const getBrands = async () => {
      try {
        await axiosAdmin.get('/medecines').then(({ data }) => {
          if (data) {
            setMedecines(data.data)
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      getBrands()
    }, [])
  return (
    <DataGrid
      className='cursor-pointer'
      rows={medecines}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 15 },
        },
      }}
      pageSizeOptions={[5, 10, 15]}
      checkboxSelection
    />
  )
}

export default AdminPageWrapper(
  Medecine,
  'List Medecines',
  true,
  'add_medecine'
)
