import React, { createContext, useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))
const NotificationContext = createContext()

const NotificationProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('') // 'success' or 'error'
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false)
      }, 3000) // close notification after 1 second
    }
  }, [open])

  const showNotification = (type, message) => {
    setType(type)
    setMessage(message)
    setOpen(true)
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {open && (
        <BootstrapDialog
          onClose={() => setOpen(false)}
          aria-labelledby='customized-dialog-title'
          open={open}
          TransitionComponent={Transition}
        >
          <DialogContent
            dividers
            className='flex gap-4 font-mono items-center h-80 w-96 flex-col justify-evenly rounded-lg'
          >
            {type === 'success' ? (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='text-green-500 w-20 h-20 font-bold'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z'
                  />
                </svg>
                <h1 className='text-2xl font-thin text-green-500'>Success!!</h1>
                <p className='text-gray-400 text-lg'>{message}</p>
              </>
            ) : (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='text-red-500 w-20 h-20 font-bold'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
                <h1 className='text-2xl font-thin text-red-500'>Error!!</h1>
                <p className='text-gray-400 text-lg'>{message}</p>
              </>
            )}
          </DialogContent>
        </BootstrapDialog>
      )}
    </NotificationContext.Provider>
  )
}

export { NotificationProvider, NotificationContext }
