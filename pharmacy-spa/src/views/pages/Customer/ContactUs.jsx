/* eslint-disable no-unused-vars */
import React from 'react'
import { contactInfo } from '../../../data/data'
import { SingleContactInfo } from '../../../components/Customer/presentational'
const ContactUs = () => {
  document.title = 'Contact Us'
  return (
    <section className='bg-white  mx-auto max-w-7xl'>
      <div className='container px-6 py-12 mx-auto'>
        <div className='text-center'>
          <p className='font-medium text-green-500 dark:text-green-400 text-3xl'>
            Contact Us
          </p>
          <h1 className='text-2xl font-semibold text-gray-800'>Get in touch</h1>
          <p className='mt-3 text-gray-500 '>
            Our friendly team would love to hear from you.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3'>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1'>
            {contactInfo.map((item) => {
              return <SingleContactInfo key={item.id} {...item} />
            })}
          </div>
          <div className='overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26483.50338590978!2d-6.890386049999999!3d33.929863100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1688914370785!5m2!1sen!2sma'
              width='100%'
              height='100%'
              title='map'
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
