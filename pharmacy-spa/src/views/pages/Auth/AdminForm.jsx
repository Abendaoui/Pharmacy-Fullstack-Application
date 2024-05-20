import React, { useState } from 'react'
import axios from '../../../configs/axiosAuth'
import { useAuth } from '../../../hooks/useAuth'
import { Navigate } from 'react-router'
const AdminForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { setAdmin, csrfToken } = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    await csrfToken()
    try {
      const resp = await axios.post('/login', formData)
      if (resp.status === 200) {
        if (resp.data.user.role === 'admin') {
          setAdmin(resp.data.user)
          return <Navigate to='/dashboard' />
        } else {
          setError('Invalid Credentiels!')
        }
      }
    } catch (error) {
      if (error) {
        setError('Invalid Credentiels!')
      }
    }
  }
  return (
    <div className='flex h-screen justify-center items-center bg-green-600'>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 w-96'
      >
        <div className='text-center mb-5'>
          <h1 className='text-lg text-green-600 font-bold'>Admin Login</h1>
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-center'>
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Login
          </button>
        </div>
        <div className='text-center my-3'>
          <span className='text-red-500'>{error && error}</span>
        </div>
      </form>
    </div>
  )
}

export default AdminForm
