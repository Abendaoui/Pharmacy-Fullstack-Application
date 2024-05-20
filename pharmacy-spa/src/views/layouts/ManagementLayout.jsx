/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { BreadCrumb, Header, SideBar } from '../../components/Admin/containers'
import { useAuth } from '../../hooks/useAuth'
import axios from '../../configs/axiosAuth'

const AdminLayout = () => {
  const { admin, setAdmin } = useAuth()

  useEffect(() => {
    ;(async () => {
      try {
        const resp = await axios.get('/user')
        if (resp.status === 200) {
          if (resp.data.data.role === 'admin') {
            setAdmin(resp.data.data)
          }
        }
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem('admin')
          window.location.href = '/auth'
        }
      }
    })()
  }, [])

  if (!admin) {
    return <Navigate to='/auth' />
  }

  const [isSideOpen, setIsSideOpen] = useState(false)
  return (
    <div className='mb-5'>
      <Header isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
      <div className='flex overflow-hidden bg-white pt-16'>
        <SideBar isSideOpen={isSideOpen} />
        <div
          className='bg-gray-900 opacity-50 hidden fixed inset-0 z-10'
          id='sidebarBackdrop'
        ></div>
        <div
          id='main-content'
          className='h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64'
        >
          <div className='mt-5 ml-5'>
            <BreadCrumb />
          </div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
