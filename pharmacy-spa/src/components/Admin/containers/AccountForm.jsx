import React, { useState, useEffect } from 'react'
import axiosAdmin from '../../../configs/axiosAdmin'
const AccountForm = () => {
  const [profile, setProfile] = useState({
    fullname: '',
    email: '',
    first: '',
    last: '',
    phone: '',
    city: '',
    streetAddress: '',
    zipCode: '',
  })

  const getProfile = async () => {
    try {
      await axiosAdmin.get('/profile').then(({ data }) => {
        if (data) {
          setProfile(data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <form>
      <h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
        Admin Information
      </h6>
      <div className='flex flex-wrap'>
        {/* fullname */}
        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              FullName
            </label>
            <input
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2 ease-linear transition-all duration-150'
              value={profile.fullname}
            />
          </div>
        </div>
        {/* Email Address */}
        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='email'
            >
              Email address
            </label>
            <input
              type='email'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2 ease-linear transition-all duration-150'
              value={profile.email}
            />
          </div>
        </div>
        {/* First Name */}
        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              First Name
            </label>
            <input
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2 ease-linear transition-all duration-150'
              value={profile.first}
            />
          </div>
        </div>
        {/* Last Name */}
        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Last Name
            </label>
            <input
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2 ease-linear transition-all duration-150'
              value={profile.last}
            />
          </div>
        </div>
      </div>
      <hr className='mt-4 border-b-1 border-blueGray-300' />
      <h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
        Contact Information
      </h6>
      <div className='flex flex-wrap'>
        {/* Address */}
        <div className='w-full lg:w-12/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Phone
            </label>
            <input
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2 ease-linear transition-all duration-150'
              value={profile.phone}
            />
          </div>
        </div>
        {/* City */}
        <div className='w-full lg:w-4/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              City
            </label>
            <input
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2 ease-linear transition-all duration-150'
              value={profile.city}
            />
          </div>
        </div>
        {/* Street */}
        <div className='w-full lg:w-4/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Street
            </label>
            <input
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2 ease-linear transition-all duration-150'
              value={profile.streetAddress}
            />
          </div>
        </div>
        {/* Postal Code */}
        <div className='w-full lg:w-4/12 px-4'>
          <div className='relative w-full mb-3'>
            <label
              className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Postal Code
            </label>
            <input
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2 ease-linear transition-all duration-150'
              value={profile.zipCode}
            />
          </div>
        </div>
      </div>
      {/* <div className='text-center mt-4'>
        <button
          className='bg-yellow-500 text-white  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear hover:bg-yellow-700 transition-all duration-150
                 w-[90%] lg:w-1/3'
          type='button'
        >
          Edit
        </button>
      </div> */}
    </form>
  )
}

export default AccountForm
