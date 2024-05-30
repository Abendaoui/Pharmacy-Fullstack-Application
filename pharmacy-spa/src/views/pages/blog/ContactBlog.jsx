import React from 'react'
import { MapFrame, ContactForm } from '../../../components/Blog/containers'

const ContactBlog = () => {
  return (
    <section
      className='text-gray-600 body-font relative'
      style={{ height: 660 }}
    >
      {/* Map Article */}
      <article className='absolute inset-0 bg-gray-300'>
        <MapFrame />
      </article>
      <article className='container px-5 py-28 mx-auto flex'>
        <ContactForm />
      </article>
    </section>
  )
}

export default ContactBlog
