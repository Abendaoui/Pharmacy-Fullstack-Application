import React from 'react'
import { PopoverGroup } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { guestNavigation } from '../../data/data'
import { Link } from 'react-router-dom'
import maSvg from '../../assets/images/ma.svg'
import AuthMenuLink from './AuthMenuLink'

const DesktopView = ({ setOpen, handleOpen }) => {
  return (
    <>
      <header className='relative bg-[#f6f7f8] rounded-xl '>
        <nav
          aria-label='Top'
          className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
        >
          <div className='border-b border-gray-200'>
            <div className='flex h-16 items-center'>
              <button
                type='button'
                className='rounded-md bg-[#f6f7f8] p-2 text-gray-400 lg:hidden'
                onClick={() => setOpen(true)}
              >
                <span className='sr-only'>Open menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </button>

              {/* Logo */}
              <div className='ml-4 flex lg:ml-0 items-center justify-center'>
                <Link to='/guest/home'>
                  <div className='block h-8 w-auto rounded-xl logo'>
                    <h1 className='text-xl font-extrabold text-[#163300ab]'>
                      PharmacyMaryam
                    </h1>
                  </div>
                </Link>
              </div>
              {/* DropDown menus */}
              <PopoverGroup
                className='hidden lg:ml-8 lg:block lg:self-stretch '
                style={{ outline: 'none !important' }}
              >
                <div className='flex h-full space-x-8'>
                  {guestNavigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className='flex items-center text-sm font-medium text-gray-700 hover:text-teal-400 duration-300'
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>
              {/* Link Icon */}
              <div className='ml-auto flex items-center'>
                {/* Link Auth Desktop */}
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                  <AuthMenuLink
                    linkTo={'/auth'}
                    title={'Login'}
                    icon={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                        />
                      </svg>
                    }
                  />
                  <span
                    className='h-6 w-px bg-gray-200'
                    aria-hidden='true'
                  ></span>
                  <AuthMenuLink
                    linkTo={'/auth'}
                    title={'Register'}
                    icon={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z'
                        />
                      </svg>
                    }
                  />
                </div>

                {/* Currency */}
                <div className='hidden lg:ml-8 lg:flex'>
                  <button
                    href='/home'
                    className='flex items-center text-gray-700 hover:text-gray-800'
                  >
                    <img
                      src={maSvg}
                      alt=''
                      className='block h-auto w-5 flex-shrink-0 rounded'
                      loading='lazy'
                    />
                    <span className='ml-3 block text-sm font-medium'>MAD</span>
                  </button>
                </div>

                {/* Search Icon */}
                <div className='flex lg:ml-6'>
                  <button
                    onClick={handleOpen}
                    className='p-4 text-gray-400 hover:text-teal-400 duration-300'
                  >
                    <span className=''>
                      <MagnifyingGlassIcon
                        className='h-6 w-6 flex justify-center items-center text-[#193504]'
                        aria-hidden='true'
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default DesktopView
