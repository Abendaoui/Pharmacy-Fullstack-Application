import React, { useState, useEffect } from 'react'
import { SinglePost, WeeklyPostsTitle } from '../presentational'
import axiosClient from '../../../configs/axiosClient'

const ListPosts = () => {
  const [posts, setPosts] = useState([])
  const getAllPosts = async () => {
    try {
      await axiosClient.get('/posts').then(({ data }) => {
        if (data) {
          setPosts(data.data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllPosts()
  }, [])
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <section className='py-16 bg-white max-w-[85rem] mx-auto'>
      <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
        <WeeklyPostsTitle tag={'Blog'} title={'Sharing is Caring'} />
        <div className='grid gap-12 lg:grid-cols-2'>
          {posts.map((post) => {
            return <SinglePost key={post.id} {...post} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ListPosts
