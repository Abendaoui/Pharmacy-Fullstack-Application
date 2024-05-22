import React, { Fragment } from 'react'
import {
  Popover,
  Transition,
  PopoverGroup,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { navigation } from '../../../data/data'
import { Link } from 'react-router-dom'
import maSvg from '../../../assets/images/ma.svg'
import AuthMenuLink from './AuthMenuLink'
import axios from '../../../configs/axiosAuth'
import { useCart } from '../../../hooks/useCart'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const DesktopView = ({ open, setOpen, handleOpen, auth }) => {
  const { cartCount } = useCart()
  const handleLogout = async () => {
    try {
      const resp = await axios.post('/logout')
      if (resp.status === 200) {
        localStorage.removeItem('user')
        window.location.href = '/auth'
      }
    } catch (error) {
      console.log(error)
    }
  }
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
                <Link to='/home'>
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
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className='flex'>
                      {({ open }) => (
                        <>
                          <div className='relative flex'>
                            <PopoverButton
                              className={classNames(
                                open
                                  ? 'border-teal-600 text-teal-600'
                                  : 'text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center  pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </PopoverButton>
                          </div>

                          <Transition
                            as={Fragment}
                            enter='transition ease-out duration-200'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='transition ease-in duration-150'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                          >
                            <PopoverPanel
                              className='absolute inset-x-0 top-full text-sm text-gray-500'
                              style={{ zIndex: '1000' }}
                            >
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className='absolute inset-0 top-1/2 bg-white shadow'
                                aria-hidden='true'
                              />

                              <div className='relative bg-white'>
                                <div className='mx-auto max-w-7xl px-8'>
                                  <div className='grid grid-cols-2 gap-x-8 gap-y-10 py-16'>
                                    <div className='col-start-2 grid grid-cols-2 gap-x-8'>
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className='group relative text-base sm:text-sm'
                                        >
                                          <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className='object-cover object-center'
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className='mt-6 block font-medium text-gray-900'
                                          >
                                            <span
                                              className='absolute inset-0 z-10'
                                              aria-hidden='true'
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden='true'
                                            className='mt-1'
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className='row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm'>
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className='font-medium text-gray-900'
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role='list'
                                            aria-labelledby={`${section.name}-heading`}
                                            className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className='flex'
                                              >
                                                <a
                                                  href={item.href}
                                                  className='hover:text-gray-800'
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
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
                    linkTo={'/profile'}
                    title={'Profile'}
                    icon={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                        />
                      </svg>
                    }
                  />
                  <span
                    className='h-6 w-px bg-gray-200'
                    aria-hidden='true'
                  ></span>
                  <button
                    onClick={handleLogout}
                    className='group -m-2 flex items-center p-2 text-gray-700 hover:text-gray-800'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75'
                      />
                    </svg>

                    <span className=''>Logout</span>
                  </button>
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

                {/* Cart Icon */}
                <div className='ml-4 flow-root lg:ml-6'>
                  <Link
                    to='/card'
                    className='group -m-2 flex items-center p-2 text-[#ff660f]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                      />
                    </svg>

                    <span
                      className='text-xs font-medium bg-red-500 text-white px-1 rounded-full
                     flex justify-center items-center duration-300 mb-4'
                    >
                      {cartCount}
                    </span>
                  </Link>
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
