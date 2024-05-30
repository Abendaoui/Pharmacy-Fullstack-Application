import React from 'react'
import {
  Hero,
  WeeklyPosts,
  ListPosts,
  NewsLetter,
} from '../../../components/Blog/containers'
const Blog = () => {
  return (
    <section>
      <Hero />
      <WeeklyPosts />
      <ListPosts />
      <NewsLetter />
    </section>
  )
}

export default Blog
