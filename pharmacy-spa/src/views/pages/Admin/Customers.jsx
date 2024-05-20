import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Row } from '../../../components/Admin/presentational'
import { createData } from '../../../utils/createData'
import { AdminPageWrapper } from '../../Wrapper'
import axiosAdmin from '../../../configs/axiosAdmin'
const customers = [
  createData('John Doe', 'johndoe@example.com', '123-456-7890', '123 Main St', [
    {
      id: 'ORD-123',
      date: '2022-01-01',
      totalPrice: 100.99,
      status: 'complete',
    },
    {
      id: 'ORD-456',
      date: '2022-01-15',
      totalPrice: 50.99,
      status: 'complete',
    },
  ]),
  createData(
    'John Look',
    'johnlooke@example.com',
    '987-654-3210',
    '456 Elm St',
    [
      {
        id: 'ORD-789',
        date: '2022-02-01',
        totalPrice: 200.99,
        status: 'complete',
      },
      {
        id: 'ORD-0102',
        date: '2022-03-01',
        totalPrice: 150.99,
        status: 'complete',
      },
    ]
  ),
  createData(
    'Jack Dock',
    'jackdock@example.com',
    '987-654-3210',
    '456 Elm St',
    [
      {
        id: 'ORD-52',
        date: '2022-02-01',
        totalPrice: 100.99,
        status: 'complete',
      },
      {
        id: 'ORD-065',
        date: '2022-03-01',
        totalPrice: 50.99,
        status: 'complete',
      },
    ]
  ),
  createData(
    'Kit Harson',
    'harsonkit@example.com',
    '987-654-3210',
    '456 Elm St',
    [
      {
        id: 'ORD-011',
        date: '2022-02-01',
        totalPrice: 400.99,
        status: 'complete',
      },
      {
        id: 'ORD-012',
        date: '2022-03-01',
        totalPrice: 1050.99,
        status: 'complete',
      },
    ]
  ),
  createData(
    'Adil Bendaoui',
    'johndoe@example.com',
    '123-456-7890',
    '123 Main St',
    [
      {
        id: 'ORD-123',
        date: '2022-01-01',
        totalPrice: 100.99,
        status: 'complete',
      },
      {
        id: 'ORD-456',
        date: '2022-01-15',
        totalPrice: 50.99,
        status: 'complete',
      },
    ]
  ),
  createData(
    'Outman Outmani',
    'johnlooke@example.com',
    '987-654-3210',
    '456 Elm St',
    [
      {
        id: 'ORD-789',
        date: '2022-02-01',
        totalPrice: 200.99,
        status: 'complete',
      },
      {
        id: 'ORD-0102',
        date: '2022-03-01',
        totalPrice: 150.99,
        status: 'complete',
      },
    ]
  ),
  createData(
    'Yassine Omri',
    'jackdock@example.com',
    '987-654-3210',
    '456 Elm St',
    [
      {
        id: 'ORD-52',
        date: '2022-02-01',
        totalPrice: 100.99,
        status: 'complete',
      },
      {
        id: 'ORD-065',
        date: '2022-03-01',
        totalPrice: 50.99,
        status: 'complete',
      },
    ]
  ),
  createData(
    'Younness Taf Taf',
    'harsonkit@example.com',
    '987-654-3210',
    '456 Elm St',
    [
      {
        id: 'ORD-011',
        date: '2022-02-01',
        totalPrice: 400.99,
        status: 'complete',
      },
      {
        id: 'ORD-012',
        date: '2022-03-01',
        totalPrice: 1050.99,
        status: 'complete',
      },
    ]
  ),
]

const Customers = () => {
  const [data, setData] = useState([])
  const getCustomersRows = async () => {
    try {
      await axiosAdmin.get('/customers').then(({ data }) => {
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
