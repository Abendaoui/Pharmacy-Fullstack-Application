import React from 'react'
import { Outlet } from 'react-router'
import { Header, Footer } from '../../components/Blog/containers'
const BlogLayout = () => {
  return (
    <main className=''>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default BlogLayout
