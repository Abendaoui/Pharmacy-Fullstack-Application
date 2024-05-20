import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { sideBarUrl } from '../../../data/data'
const Sidebar = ({ isSideOpen }) => {
  const location = useLocation()
  const routeName = location.pathname
  let route = routeName.slice(routeName.lastIndexOf('/') + 1).replace('_',' ')
  return (
    <aside
      id='sidebar'
      className={`fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 ${
        isSideOpen ? '' : 'hidden shadow-inner'
      }`}
      aria-label='Sidebar'
    >
      <div className='relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-[#163300] pt-0 '>
        <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
          <div className='flex-1 px-3 bg-[#9fe870] divide-y space-y-1'>
            <ul className='space-y-2 pb-2'>
              <li>
                <form
                  action='#'
                  method='GET'
                  className='lg:hidden mt-5 lg-mt-0'
                >
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-5 h-5 text-gray-500'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                        />
                      </svg>
                    </div>
                    <input
                      type='text'
                      id='mobile-search'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600  block w-full pl-10 p-2.5'
                      placeholder='Search'
                    />
                  </div>
                </form>
              </li>
              {sideBarUrl.map((link) => {
                const { id, label, icon, url } = link
                const isActive = label === route
                return (
                  <li key={id}>
                    <Link
                      to={url}
                      className={`text-base text-[#163300] font-normal rounded-lg flex items-center p-2 hover:bg-[#e8eef0] group transition-all ${
                        isActive ? 'bg-[#e8eef0]' : ''
                      }`}
                    >
                      <span className='w-6 h-6 group-hover:text-gray-900 transition duration-75'>
                        {icon}
                      </span>
                      <span className='ml-3 capitalize'>{label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
