import { Fragment, useState } from 'react'
import {
  Dialog,
  Popover,
  Tab,
  TransitionChild,
  Transition,
  DialogPanel,
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
  PopoverGroup,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { navigation } from '../../../data/data'
import { Link, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import maSvg from '../../../assets/images/ma.svg'
import { DesktopView, MobileView } from '../presentational'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  p: 4,
}
export default function Header() {
  const auth = true
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const handleOpen = () => setOpen2(true)
  const handleClose = () => setOpen2(false)
  const [error, setError] = useState('')
  const [field, setField] = useState('')
  const navigate = useNavigate()
  function handleSubmit(ev) {
    ev.preventDefault()
    if (field.length < 3) {
      setError('Search By At least 3 Characters')
      setTimeout(() => {
        setError('')
      }, 2000)
    } else {
      navigate(`/search/${field}`)
      handleClose()
      setError('')
    }
  }
  return (
    <>
      <header className='bg-[#f6f7f8] lg:max-w-[83rem] max-w-[80rem] mx-auto z-50 my-4 rounded-xl  '>
        {/* Mobile menu */}
        <MobileView open={open} setOpen={setOpen} auth={auth} />
        {/* Desktop Menu */}
        <DesktopView
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          auth={auth}
        />
      </header>
      {/* Serach Model */}
      <section className=''>
        <Modal
          open={open2}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box
            sx={style}
            className='rounded-lg bg-[#f6f7f8] w-[400px] lg:w-[800px]'
          >
            <form onSubmit={handleSubmit}>
              <label
                htmlFor='default-search'
                className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
              >
                Search
              </label>
              <div className='relative'>
                <input
                  type='search'
                  id='default-search'
                  className='block w-full p-2 pl-2 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:outline-none'
                  placeholder='Medecine & Healthcare items'
                  required
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                />
                <button
                  type='submit'
                  className='absolute right-1 bottom-[2px] bg-[#9fe870]  focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm px-4 py-2 dark:focus:ring-green-800 rounded-lg
                   '
                >
                  <svg
                    className='w-4 h-4 text-[#14230f] dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </button>
              </div>
              <div className='text-center'>
                {error && (
                  <small className='text-red-600 mt-8 ml-5 bg-red-300 rounded py-2 px-3'>
                    {error && error}
                  </small>
                )}
              </div>
            </form>
          </Box>
        </Modal>
      </section>
    </>
  )
}
