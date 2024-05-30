import React from 'react'
import { SinglePost, WeeklyPostsTitle } from '../presentational'

const ListPosts = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <section className='py-16 bg-white max-w-[85rem] mx-auto'>
      <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
        <WeeklyPostsTitle tag={'Blog'} title={'Sharing is Caring'} />
        <div className='grid gap-12 lg:grid-cols-2'>
          {count.map((item) => {
            return <SinglePost key={item} />
          })}
        </div>
      </div>
    </section>
  )
}

export default ListPosts
