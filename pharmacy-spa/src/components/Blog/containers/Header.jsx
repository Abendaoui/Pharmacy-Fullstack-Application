import React, { useState } from 'react'
import { NavBarLink, SearchForm } from '../presentational'
import { Link } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false)

  const changeOpen = () => {
    setOpen(!open)
  }
  return (
    <nav className='bg-gray-50 shadow-lg'>
      <div className='md:flex items-center justify-between py-4 px-8 md:px-12'>
        <article className='flex justify-between items-center'>
          <div className='text-2xl font-bold text-[#163300] md:text-2xl'>
            <Link to='/blog' className='text-[#163300]'>
              PharmacyBlog
            </Link>
          </div>
          <div className='md:hidden'>
            <button
              type='button'
              className='block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none 
              border border-gray-300 rounded-md'
              onClick={changeOpen}
            >
              {!open ? (
                <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                  <path
                    className='hidden'
                    d='M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z'
                  />
                  <path d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 duration-500 transition-all'
                >
                  <path
                    className=''
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </article>
        <article
          className={`flex flex-col md:flex-row  md:block -mx-1 mt-2 ${
            open ? '' : 'hidden'
          }`}
        >
          <NavBarLink link={'/blog'} lable={'Home'} />
          <NavBarLink link={'/blog/about_us'} lable={'About'} />
          <NavBarLink link={'/blog/contact_us'} lable={'Contact Us'} />
        </article>
        <SearchForm />
      </div>
    </nav>
  )
}

export default Header
