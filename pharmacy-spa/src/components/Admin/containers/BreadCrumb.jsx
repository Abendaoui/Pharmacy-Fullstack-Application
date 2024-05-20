import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useLocation, useNavigate } from 'react-router-dom'

export default function BreadCrumb() {
  const navigate = useNavigate()
  const location = useLocation()
  const routeName = location.pathname

  const goToLink = () => {
    navigate('/dashboard')
  }
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
      >
        <button
          underline='hover'
          key='2'
          color='inherit'
          className='cursor-pointer'
          onClick={goToLink}
        >
          Dashboard
        </button>
        <Typography key='3' className='capitalize text-[#252b61] mono'>
          {routeName.slice(routeName.lastIndexOf('/') + 1).replace('_', ' ')}
        </Typography>
      </Breadcrumbs>
    </Stack>
  )
}
