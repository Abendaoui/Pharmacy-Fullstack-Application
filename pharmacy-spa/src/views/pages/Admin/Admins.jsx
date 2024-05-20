import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { AdminPageWrapper } from '../../Wrapper'
import axiosAdmin from '../../../configs/axiosAdmin'
import { convertDate } from '../../../utils/convertDate'
import { FormSearch } from '../../../components/Admin/presentational'
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

const Admins = () => {
  const [data, setData] = useState([])
  const getAdminRows = async () => {
    try {
      await axiosAdmin.get('/admins').then(({ data }) => {
        if (data) {
          setData(data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAdminRows()
  }, [])
  return (
    <>
      {/* <FormSearch addAble={true} linkTo='/add_admins' /> */}
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
    </>
  )
}
export default AdminPageWrapper(Admins, 'List Admins', true, 'add_admin')
