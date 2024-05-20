import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { useAuth } from '../../hooks/useAuth'

const PublicLayout = () => {
  const { user, admin } = useAuth()
  if (user) {
    return <Navigate to='/home' />
  }
  if (admin) {
    return <Navigate to='/dashboard' />
  }
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PublicLayout
