import React, { useState } from 'react'
import FormWrapper from '../../Wrapper/FormWrapper'
import {
  AddButton,
  InputWrapper,
} from '../../../components/Admin/presentational'
import axiosAdmin from '../../../configs/axiosAdmin'
import { useNavigate } from 'react-router-dom'
const AddAdmin = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('fullname', username)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('password', password)
    formData.append('role', 'admin')
    try {
      const response = await axiosAdmin.post('/admins', formData)
      if (response.status === 201) {
        navigate('/admins')
      } else {
        setError('Error creating user')
      }
    } catch (error) {
      setError('Something Went Wrong Please Try Later!')
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 max-w-7xl mx-auto sm:px-3'
    >
      <InputWrapper
        className={''}
        label='Fullname'
        id='username'
        type='text'
        placeholder='Enter Fullname'
        value={username}
        onChange={setUsername}
      />
      <InputWrapper
        className={''}
        label='Password'
        id='password'
        type='password'
        placeholder='Enter Password'
        value={password}
        onChange={setPassword}
      />
      <InputWrapper
        className={''}
        label='Email'
        id='email'
        type='email'
        placeholder='Enter Email'
        value={email}
        onChange={setEmail}
      />
      <InputWrapper
        className={''}
        label='Phone'
        id='phone'
        type='tel'
        placeholder='Enter Phone'
        value={phone}
        onChange={setPhone}
      />
      <div className='flex items-center justify-center mt-2'>
        <AddButton />
      </div>
      <div className='text-center my-3'>
        <span className='text-red-500'>{error && error}</span>
      </div>
    </form>
  )
}

export default FormWrapper(AddAdmin, 'Add New Admin', '/admins')
