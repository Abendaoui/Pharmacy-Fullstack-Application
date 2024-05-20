import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { AdminPageWrapper } from '../../Wrapper'
import axiosAdmin from '../../../configs/axiosAdmin'
import { convertDate } from '../../../utils/convertDate'
const columns = [
  { field: 'id', headerName: 'ID', width: 70, sortable: true, type: 'string' },
  { field: 'fullname', headerName: 'Fullname', width: 180, sortable: true },
  { field: 'email', headerName: 'Email', width: 200, sortable: true },
  { field: 'phone', headerName: 'Phone', width: 130, sortable: true },
  {
    field: 'created_at',
    headerName: 'Created At',
    width: 130,
    sortable: true,
    renderCell: (params) => convertDate(params.row.created_at),
  },
]

const Users = () => {
  const [data, setData] = useState([])
  const getUsersRows = async () => {
    try {
      await axiosAdmin.get('/users').then(({ data }) => {
        if (data) {
          setData(data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUsersRows()
  }, [])
  return (
    <DataGrid
      className=' cursor-pointer'
      rows={data && data}
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

export default AdminPageWrapper(Users, 'List Users', false, '')
