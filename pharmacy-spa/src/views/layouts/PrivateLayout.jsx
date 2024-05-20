import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router'
import { Header, Footer } from '../../components/Customer/containers'
import { useAuth } from '../../hooks/useAuth'
import axios from '../../configs/axiosAuth'
const PrivateLayout = () => {
  const { user, setUser } = useAuth()

  useEffect(() => {
    ;(async () => {
      try {
        const resp = await axios.get('/user')
        if (resp.status === 200) {
          if (resp.data.data.role === 'customer') {
            setUser(resp.data.data)
          }
        }
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem('user')
          window.location.href = '/auth'
        }
      }
    })()
  }, [])

  if (!user) {
    return <Navigate to='/auth' />
  }
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default PrivateLayout
