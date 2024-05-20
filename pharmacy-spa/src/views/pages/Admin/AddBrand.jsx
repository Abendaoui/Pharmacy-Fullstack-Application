import React, { useState } from 'react'
import FormWrapper from '../../Wrapper/FormWrapper'
import {
  AddButton,
  InputWrapper,
  ImageWrapper,
  TextAreaWrapper,
} from '../../../components/Admin/presentational'
import axiosAdmin from '../../../configs/axiosAdmin'
import { useNavigate } from 'react-router-dom'
const AddBrand = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState(null)
  const [error, setError] = useState('')

  const handleImage = (ev) => {
    setImage(ev.target.files[0])
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('brand_name', name)
    formData.append('brand_desc', desc)
    if (image) {
      formData.append('brand_image', image)
    } else {
      setError('Image is required')
      return false
    }
    try {
      const response = await axiosAdmin.post('/brands', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (response.status === 201) {
        navigate('/brands')
      } else {
        setError('Error creating brand')
      }
    } catch (error) {
      setError('Something Went Wrong Please Try Later!')
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 max-w-7xl mx-auto sm:px-3'
      encType='multipart/form-data'
    >
      <InputWrapper
        className={''}
        label='Brand name'
        id='name'
        type='text'
        placeholder='Enter Brand Name'
        value={name}
        onChange={setName}
      />
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2 capitalize'
          htmlFor='image'
        >
          Upload Image
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-green-300 focus:border-2'
          id='image'
          type='file'
          name='brand_image'
          onChange={handleImage}
        />
      </div>
      <TextAreaWrapper
        label='Brand Description'
        id={'desc'}
        placeHolder={'Enter Brand Description'}
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

export default FormWrapper(AddBrand, 'Add New Brand', '/brands')
