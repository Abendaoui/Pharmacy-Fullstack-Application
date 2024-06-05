import React, { useState,useContext } from 'react'
import { WeeklyPostsTitle } from '../../../components/Blog/presentational'
import axiosClient from '../../../configs/axiosClient'
import { useNavigate } from 'react-router-dom'
import { NotificationContext } from '../../../contexts/NotificationContext'
const CreatePost = () => {
  const { showNotification } = useContext(NotificationContext)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [post, setPost] = useState({
    title: '',
    description: '',
    tags: '',
  })
  const [image, setImage] = useState(null)
  const handleImage = (ev) => {
    setImage(ev.target.files[0])
  }
  const addPost = async (ev) => {
    ev.preventDefault()
    if (!image) {
      setError('Image is required')
      return false
    }
    const data = { ...post, post_image: image }
    try {
      const response = await axiosClient.post('/posts', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if (response.status === 201) {
        showNotification('success', 'All Items Deleted')
        setTimeout(navigate('/blog'), 1500)
      } else {
        setError('Error creating post')
      }
    } catch (error) {
      setError('Something Went Wrong Please Try Later!')
    }
  }
  return (
    <section className='mt-10 max-w-7xl mx-auto px-4'>
      <WeeklyPostsTitle tag={'Post'} title={'Add Post'} />
      <form
        onSubmit={addPost}
        encType='multipart/form-data'
        className='bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md lg:w-3/4 mx-auto'
      >
        <div className='relative mb-4'>
          <label htmlFor='title' className='leading-7 text-sm text-gray-600'>
            Post Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            placeholder='Post Title'
            className='w-full bg-white rounded border border-gray-300 focus:border-[#9fe870]  focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out focus:border-2'
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </div>
        <div className='relative mb-4'>
          <label htmlFor='desc' className='leading-7 text-sm text-gray-600'>
            Post Description
          </label>
          <textarea
            id='desc'
            name='desc'
            placeholder='Post Description'
            className='w-full bg-white rounded border border-gray-300 focus:border-[#9fe870]  focus:ring-indigo-200 h-32 text-sm outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out focus:border-2'
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
          />
        </div>
        <div className='relative mb-4'>
          <label htmlFor='image' className='leading-7 text-sm text-gray-600'>
            Post Image
          </label>
          <input
            type='file'
            id='image'
            name='image'
            onChange={handleImage}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline focus:border-[#9fe870] focus:border-2'
          />
        </div>
        <div className='relative mb-4'>
          <label htmlFor='tags' className='leading-7 text-sm text-gray-600'>
            Post Tags
          </label>
          <input
            type='text'
            id='tags'
            name='tags'
            placeholder='tag,tag,...'
            className='w-full bg-white rounded border border-gray-300 focus:border-[#9fe870]  focus:ring-indigo-200 text-sm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out focus:border-2'
            value={post.tags}
            onChange={(e) => setPost({ ...post, tags: e.target.value })}
          />
        </div>
        <button
          type='submit'
          className='text-white bg-[#9fe870] border-0 py-2 px-6 focus:outline-none rounded text-lg'
        >
          Add Post
        </button>
        <div className='text-center my-3'>
          <span className='text-red-500'>{error && error}</span>
        </div>
      </form>
    </section>
  )
}

export default CreatePost
