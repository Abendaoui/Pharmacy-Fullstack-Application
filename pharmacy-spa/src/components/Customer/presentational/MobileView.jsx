import React from 'react'
import { Fragment } from 'react'
import {
  Dialog,
  Tab,
  TransitionChild,
  Transition,
  DialogPanel,
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { navigation } from '../../../data/data'
import { Link } from 'react-router-dom'
import maSvg from '../../../assets/images/ma.svg'
import AuthMenuLink from './AuthMenuLink'
import axios from '../../../configs/axiosAuth'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const MobileView = ({ open, setOpen }) => {
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
      <Transition show={open} as={Fragment}>
        <Dialog as='div' className='relative z-40 lg:hidden' onClose={setOpen}>
          <TransitionChild
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </TransitionChild>

          <div className='fixed inset-0 z-40 flex'>
            <TransitionChild
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <DialogPanel className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
                <div className='flex px-4 pb-2 pt-5'>
                  <button
                    type='button'
                    className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                {/* Pages Links */}
                <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                  {navigation.pages.map((page) => (
                    <div key={page.name} className='flow-root'>
                      <a
                        href={page.href}
                        className='-m-2 block p-2 font-medium text-gray-900'
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>
                {/* Auth Links Mobile */}
                <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
                  <div className='flow-root'>
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
                  </div>
                  <div className='flow-root'>
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
                </div>
                {/* Currency */}
                <div className='border-t border-gray-200 px-4 py-6'>
                  <button className='-m-2 flex items-center p-2'>
                    <img
                      src={maSvg}
                      alt=''
                      className='block h-auto w-5 flex-shrink-0 rounded'
                    />
                    <span className='ml-3 block text-base font-medium text-gray-900'>
                      MAD
                    </span>
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileView
