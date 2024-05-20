import React, { useState } from 'react'
import axios from '../../../configs/axiosAuth'
import { useAuth } from '../../../hooks/useAuth'
const Register = ({ switchForm }) => {
  const { setUser } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  // register user
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError("Confirm Password Does't Match!")
      return false
    }
    const formData = new FormData()
    formData.append('fullname', name)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('password_confirmation', confirmPassword)
    formData.append('role', 'customer')
    try {
      const resp = await axios.post('/register', formData)
      if (resp.status === 200) {
        setUser(resp.data.user)
        return <Navigate to='/home' />
      }
    } catch (error) {
      if (error) {
        setError('Something Went Wrong Please Try Again Later.')
      }
    }
  }

  return (
    <div className='flex h-screen justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-96'
      >
        <div className='text-center mb-5'>
          <h1 className='text-lg text-green-600 font-bold'>User Register</h1>
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='username'
          >
            Fullname
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Enter Your FullName'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='confirm_password'
          >
            Confirm Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline'
            id='confirm_password'
            type='password'
            placeholder='Re-Enter password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-center'>
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Register
          </button>
        </div>
        <div className='text-center my-3'>
          <span className='text-red-500'>{error && error}</span>
        </div>
        <div className='flex items-center justify-between' onClick={switchForm}>
          <button
            type='button'
            className=' text-green-500 font-base py-2 px-4 hover:underline'
          >
            Already have an account?
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
