import React, { useState, useEffect } from 'react'
import FormWrapper from '../../Wrapper/FormWrapper'
import {
  AddButton,
  InputWrapper,
  SelectWrapper,
  TextAreaWrapper,
  ImageWrapper,
} from '../../../components/Admin/presentational'
import axiosAdmin from '../../../configs/axiosAdmin'
import { useNavigate } from 'react-router-dom'
const AddMedecine = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)
  const [quantity, setQuantity] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [error, setError] = useState('')
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])

  const handleSelectBrand = (e) => {
    setSelectedBrand(e.target.value)
  }
  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.value)
  }
  const handleImage = (ev) => {
    setImage(ev.target.files[0])
  }
  const getBrands = async (e) => {
    try {
      await axiosAdmin.get('/get_brands').then(({ data }) => {
        if (data) {
          setBrands(data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  const getCategories = async (e) => {
    try {
      await axiosAdmin.get('/get_categories').then(({ data }) => {
        if (data) {
          setCategories(data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getBrands()
    getCategories()
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', desc)
    formData.append('price', price)
    if (image) {
      formData.append('medecine_image', image)
    } else {
      setError('Image is required')
      return false
    }
    formData.append('quantity', quantity)
    formData.append('brand_id', selectedBrand)
    formData.append('category_id', selectedCategory)
    try {
      const response = await axiosAdmin.post('/medecines', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (response.status === 201) {
        navigate('/medecines')
      } else {
        setError('Error creating Medecine')
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
        label='Medecine Title'
        id='title'
        type='text'
        placeholder='Enter Medecine Title'
        value={name}
        onChange={setName}
      />
      <div className='mb-4 flex flex-row w-full justify-between items-center gap-4'>
        <SelectWrapper
          label={'Select Brand'}
          id='brand'
          options={brands}
          value={selectedBrand}
          onChange={handleSelectBrand}
        />
        <SelectWrapper
          label={'Select Category'}
          id='category'
          options={categories}
          value={selectedCategory}
          onChange={handleSelectCategory}
        />
      </div>
      <div className='mb-4 flex flex-row w-full justify-between items-center gap-4'>
        <InputWrapper
          className='w-1/2'
          label={'Price'}
          id='price'
          type='number'
          placeholder='Enter Medecine Price'
          value={price}
          onChange={setPrice}
        />
        <InputWrapper
          className='w-1/2'
          label={'Quantity'}
          id='quantity'
          type='number'
          placeholder='Enter Medecine Quantity'
          value={quantity}
          onChange={setQuantity}
        />
      </div>
      <ImageWrapper
        label={'Medecine Image'}
        id={'image'}
        onChange={handleImage}
      />
      <TextAreaWrapper
        label='Medecine Description'
        id={'desc'}
        placeHolder={'Enter Medecine Description'}
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

export default FormWrapper(AddMedecine, 'Add New Medecine', '/medecines')
