import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Row } from '../../../components/Admin/presentational'
import { AdminPageWrapper } from '../../Wrapper'
import axiosAdmin from '../../../configs/axiosAdmin'

const Customers = () => {
  const [data, setData] = useState([])
  const getCustomersRows = async () => {
    try {
      await axiosAdmin.get('/get_customers').then(({ data }) => {
        if (data) {
          setData(data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCustomersRows()
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead className='bg-gray-200'>
          <TableRow>
            <TableCell />
            <TableCell className='mono font-bold text-black text-lg'>
              Fullname
            </TableCell>
            <TableCell
              className='mono font-bold text-black text-lg'
              align='right'
            >
              Email
            </TableCell>
            <TableCell
              className='mono font-bold text-black text-lg'
              align='right'
            >
              Phone
            </TableCell>
            <TableCell
              className='mono font-bold text-black text-lg'
              align='right'
            >
              Created At
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data.map((item) => <Row key={item.id} row={item} />)
          ) : (
            <tr className='text-center'>
              <td colSpan={5} className='text-black text-lg'>
                No Customers Found
              </td>
            </tr>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdminPageWrapper(Customers, 'List Customers', false, '')
