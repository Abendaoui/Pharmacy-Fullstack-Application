import { useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../../configs/axiosAuth'
const Header = ({ isSideOpen, setIsSideOpen }) => {
  const [anchorElUser, setAnchorElUser] = useState(null)
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const handleLogout = async () => {
    try {
      const resp = await axios.post('/logout')
      if (resp.status === 200) {
        localStorage.removeItem('admin')
        window.location.href = '/auth'
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header>
      <nav className='bg-[#9fe870] border-b border-gray-200 fixed z-30 w-full'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start'>
              <button
                id='toggleSidebarMobile'
                aria-expanded='true'
                aria-controls='sidebar'
                className='lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded'
                onClick={() => setIsSideOpen(!isSideOpen)}
              >
                <svg
                  id='toggleSidebarMobileHamburger'
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clipRule='evenodd'
                  />
                </svg>
                <svg
                  id='toggleSidebarMobileClose'
                  className='w-6 h-6 hidden'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <a
                href='#'
                className='text-xl font-bold flex items-center lg:ml-2.5'
              >
                <span className='self-center whitespace-nowrap text-#20265e'>
                  Admin Panel
                </span>
              </a>
              <form
                action='#'
                method='GET'
                className='hidden lg:block lg:pl-32'
              >
                <label htmlFor='topbar-search' className='sr-only'>
                  Search
                </label>
                <div className='mt-1 relative lg:w-96'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <svg
                      className='w-5 h-5 text-gray-500'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <input
                    type='text'
                    id='topbar-search'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5'
                    placeholder='Search'
                  />
                </div>
              </form>
            </div>
            <div className='flex items-center'>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <ExpandCircleDownIcon />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={anchorElUser}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link to='account'>
                      <Typography
                        textAlign='center'
                        className='mono flex items-center gap-2'
                      >
                        <span>
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
                              d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                            />
                          </svg>
                        </span>
                        Account
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button onClick={handleLogout}>
                      <Typography
                        textAlign='center'
                        className='mono flex items-center gap-2'
                      >
                        <span>
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
                              d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15'
                            />
                          </svg>
                        </span>
                        Logout
                      </Typography>
                    </button>
                  </MenuItem>
                </Menu>
              </Box>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
