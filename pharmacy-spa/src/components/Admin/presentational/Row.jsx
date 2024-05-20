import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { convertDate } from '../../../utils/convertDate'

function Row({ row }) {
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <TableRow
        sx={{
          '& > *': { borderBottom: 'unset', fontFamily: 'monospace!important' },
        }}
      >
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.fullname}
        </TableCell>
        <TableCell align='right'>{row.email}</TableCell>
        <TableCell align='right'>{row.phone}</TableCell>
        <TableCell align='right'>{convertDate(row.created_at)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            fontWeight: 'bold',
            fontFamily: 'monospace!important',
          }}
          colSpan={5}
        >
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1, fontFamily: 'monospace!important' }}>
              <Typography
                variant='h6'
                gutterBottom
                component='div'
                className='text-[#1d235b] text-center font-mono font-bold mono'
              >
                Order History
              </Typography>
              <Table
                size='small'
                aria-label='orders'
                className='bg-[#f1f5f9] rounded-md'
              >
                <TableHead>
                  <TableRow>
                    <TableCell className='mono'>Date</TableCell>
                    <TableCell className='mono'>Order ID</TableCell>
                    <TableCell className='mono'>Status</TableCell>
                    <TableCell className='mono' align='right'>
                      Total Price ($)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell component='th' scope='row' className='mono'>
                        {convertDate(order.order_date)}
                      </TableCell>
                      <TableCell className='mono'>{order.id}</TableCell>
                      <TableCell className='mono'>
                        {order.order_status}
                      </TableCell>
                      <TableCell className='mono' align='right'>
                        {order.total_price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

Row.propTypes = {
  row: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    orders: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        order_date: PropTypes.string.isRequired,
        order_status: PropTypes.string.isRequired,
        total_price: PropTypes.number.isRequired,
      })
    ).isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
}

export default Row
