import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { useAuth } from '../../hooks/useAuth'
import { Footer, Header } from '../../components/Guest'

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
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PublicLayout
