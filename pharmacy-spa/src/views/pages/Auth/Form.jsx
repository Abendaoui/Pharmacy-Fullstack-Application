import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import {
  FaLock,
  FaUserPlus,
  FaCapsules,
  FaMedkit,
  FaUserNurse,
  FaPrescriptionBottleAlt,
} from 'react-icons/fa'

const Form = () => {
  const [currentForm, setCurrentForm] = useState('login')

  const switchForm = () => {
    const newForm = currentForm === 'login' ? 'register' : 'login'
    setCurrentForm(newForm)
  }

  return (
    <div className='flex flex-col h-screen justify-center bg-[#9fe870] items-center form-switcher-container'>
      <FaLock className='absolute top-72 left-72 text-green-900 text-lg' />
      <FaUserPlus className='absolute bottom-72 right-72 text-green-900 text-lg' />
      <FaCapsules className='absolute top-44 right-44 text-green-900 text-lg' />

      <FaMedkit className='absolute top-44 left-44 text-green-900 text-lg' />
      <FaUserNurse className='absolute bottom-96 right-96 text-green-900 text-lg' />
      <FaPrescriptionBottleAlt className='absolute bottom-96 left-96 text-green-900 text-lg' />
      <div
        className={`form-container ${currentForm === 'login' ? 'active' : ''}`}
      >
        <Login switchForm={switchForm} />
      </div>
      <div
        className={`form-container ${
          currentForm === 'register' ? 'active' : ''
        }`}
      >
        <Register switchForm={switchForm} />
      </div>
    </div>
  )
}

export default Form
