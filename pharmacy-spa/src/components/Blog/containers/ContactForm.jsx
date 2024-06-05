import React, { useState } from 'react'

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    email: '',
    message: '',
  })
  const sendMessage = (e) => {
    e.preventDefault()
    console.log(contactInfo)
  }
  return (
    <form
      onSubmit={sendMessage}
      className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md'
    >
      <h2 className='text-gray-900 text-xl mb-3 font-medium text-center'>
        Get In Touch
      </h2>
      <div className='relative mb-4'>
        <label htmlFor='email' className='leading-7 text-sm text-gray-600'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='w-full bg-white rounded border border-gray-300 focus:border-[#9fe870] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          value={contactInfo.email}
          onChange={(e) =>
            setContactInfo({ ...contactInfo, email: e.target.value })
          }
        />
      </div>
      <div className='relative mb-4'>
        <label htmlFor='message' className='leading-7 text-sm text-gray-600'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          className='w-full bg-white rounded border border-gray-300 focus:border-[#9fe870] focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
          value={contactInfo.message}
          onChange={(e) =>
            setContactInfo({ ...contactInfo, message: e.target.value })
          }
        />
      </div>
      <button
        type='submit'
        className='text-white bg-[#9fe870] border-0 py-2 px-6 focus:outline-none rounded text-lg'
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
