import React, { useState } from 'react'
import FormWrapper from '../../Wrapper/FormWrapper'
import {
  AddButton,
  InputWrapper,
  TextAreaWrapper,
} from '../../../components/Admin/presentational'
import axiosAdmin from '../../../configs/axiosAdmin'
import { useNavigate } from 'react-router-dom'
const AddCategory = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', desc)
    try {
      const response = await axiosAdmin.post('/categories', formData)
      if (response.status === 201) {
        navigate('/products_categories')
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
        label='Category name'
        id='name'
        type='text'
        placeholder='Enter Category Name'
        value={name}
        onChange={setName}
      />
      <TextAreaWrapper
        label='Category Description'
        id={'desc'}
        placeHolder={'Enter Category Description'}
        value={desc}
        onChange={setDesc}
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

export default FormWrapper(
  AddCategory,
  'Add New Category',
  '/products_categories'
)
