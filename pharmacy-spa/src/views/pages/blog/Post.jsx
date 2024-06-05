import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosClient from '../../../configs/axiosClient'
const Post = () => {
  const { slug } = useParams()
  const [post, setPost] = useState({
    title: '',
    description: '',
    tags: '',
    post_image: '',
  })
  const getPost = async () => {
    try {
      await axiosClient.get(`/posts/${slug}`).then(({ data }) => {
        if (data) {
          setPost(data.data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getPost()
  }, [])
  return (
    <main className='mt-10 bg-white'>
      <div
        className='mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative'
        style={{ height: '24em' }}
      >
        <div className='absolute left-0 bottom-0 w-full h-full z-10' />
        <img
          src={`http://localhost:8000/images/posts/${post.post_image}`}
          className='absolute left-0 top-0 w-full h-full z-0 object-contain'
        />
        <div className='p-4 absolute bottom-0 left-0 z-20 flex gap-2'>
          {post.tags.split(',').map((tag) => {
            return (
              <article
                key={tag}
                className='px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2 rounded cursor-pointer'
              >
                {tag}
              </article>
            )
          })}
        </div>
      </div>
      <div className='px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed'>
        <h4 className='text-2xl font-semibold text-cyan-900 capitalize text-center mb-10'>{post.title}</h4>
        <p className='pb-6'>{post.description}</p>
      </div>
    </main>
  )
}

export default Post
