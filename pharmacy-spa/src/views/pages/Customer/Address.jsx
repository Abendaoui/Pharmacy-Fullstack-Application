import React, { useState, useEffect } from 'react'
import { Title } from '../../../components/Customer/presentational'
import axiosClient from '../../../configs/axiosClient'
import Dialog from '@mui/material/Dialog'
import AddLocationIcon from '@mui/icons-material/AddLocation'
const Address = () => {
  document.title = 'Address'
  const [address, setAddress] = useState({
    state: '',
    city: '',
    street: '',
    zipCode: '',
  })
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [data, setData] = useState([])
  const getMyAddresses = async () => {
    try {
      await axiosClient.get(`/addresses`).then(({ data }) => {
        if (data) {
          setData(data.data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  const addAddress = async (ev) => {
    ev.preventDefault()
    const formData = new FormData()
    formData.append('state', address.state)
    formData.append('city', address.city)
    formData.append('street_address', address.street)
    formData.append('zip_code', address.zipCode)
    try {
      const response = await axiosClient.post('/addresses', formData)
      if (response.status === 201) {
        getMyAddresses()
        setOpen(false)
        setAddress({
          state: '',
          city: '',
          street: '',
          zipCode: '',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMyAddresses()
  }, [])
  return (
    <>
      <section className='mx-auto max-w-7xl py-5'>
        <article>
          <Title children={'Your Addresses'} className='text-center' />
        </article>
        <article className='flex'>
          <div className='m-auto'>
            <div>
              {/* Create Button */}
              <button
                onClick={handleClickOpen}
                type='button'
                className='relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  enableBackground='new 0 0 24 24'
                  height='24px'
                  viewBox='0 0 24 24'
                  width='24px'
                  fill='#FFFFFF'
                >
                  <g>
                    <rect fill='none' height={24} width={24} />
                  </g>
                  <g>
                    <g>
                      <path d='M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z' />
                    </g>
                  </g>
                </svg>
                <span className='pl-2 mx-1'>Create new shipping label</span>
              </button>
              {/* End Create Button */}
              {/* List Addresses */}
              <div className=''>
                {data.length > 0 ? (
                  data.map((item) => {
                    return (
                      <article
                        key={item.id}
                        className='mt-5 bg-white p-2 shadow-lg cursor-pointer rounded-xl border-black border-2 border-dashed'
                      >
                        <div className='flex-1 py-5 pl-1 overflow-hidden'>
                          <ul>
                            <li className='text-xs text-gray-600 uppercase'>
                              {item.state}
                            </li>
                            <li>{item.city}</li>
                            <li>{item.street_address}</li>
                            <li>{item.zip_code}</li>
                          </ul>
                        </div>
                      </article>
                    )
                  })
                ) : (
                  <div className='mt-3 text-center text-lg'>
                    <h1>No Address To Display</h1>
                  </div>
                )}
              </div>
              {/* End List Addresses */}
            </div>
          </div>
        </article>
      </section>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <form onSubmit={addAddress} className='mt-5 bg-white rounded-lg shadow'>
          <div className='flex'>
            <div className='flex-1 py-5 pl-5 overflow-hidden items-center'>
              <span>
                <AddLocationIcon className='mb-3' />
              </span>
              <h1 className='inline text-2xl font-semibold leading-none'>
                Address
              </h1>
            </div>
          </div>
          <div className='px-5 pb-5'>
            <input
              placeholder='State'
              type='text'
              className=' text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400'
              value={address.state}
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
            />
            <input
              placeholder='City'
              type='text'
              className=' text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400'
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
            <div className='flex'>
              <div className='flex-grow w-1/4 pr-2'>
                <input
                  placeholder='Street'
                  type='text'
                  className=' text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400'
                  value={address.street}
                  onChange={(e) =>
                    setAddress({ ...address, street: e.target.value })
                  }
                />
              </div>
              <div className='flex-grow'>
                <input
                  placeholder='Zip Code'
                  type='text'
                  className=' text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400'
                  value={address.zipCode}
                  onChange={(e) =>
                    setAddress({ ...address, zipCode: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <hr className='mt-4' />
          <div className='flex flex-row-reverse p-3'>
            {/* Save Button */}
            <div className='flex-initial pl-3'>
              <button
                type='submit'
                className='flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 0 24 24'
                  width='24px'
                  fill='#FFFFFF'
                >
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path
                    d='M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z'
                    opacity='.3'
                  />
                  <path d='M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z' />
                </svg>
                <span className='pl-2 mx-1'>Save</span>
              </button>
            </div>
            {/* Close Button */}
            <div className='flex-initial'>
              <button
                onClick={handleClose}
                type='button'
                className='flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:fill-current hover:bg-gray-800 hover:text-white  focus:outline-none  transition-all duration-300 transform active:scale-95 ease-in-out'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 0 24 24'
                  width='24px'
                >
                  <path d='M0 0h24v24H0V0z' fill='none' />
                  <path d='M8 9h8v10H8z' opacity='.3' />
                  <path d='M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z' />
                </svg>
                <span className='pl-2 mx-1'>Close</span>
              </button>
            </div>
          </div>
        </form>
      </Dialog>
    </>
  )
}

export default Address
