import React from 'react'

const NewsLetter = () => {
  return (
    <section className='max-w-7xl mx-auto px-4'>
      <div
        className='bg-gray-100 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full
       flex flex-col items-center justify-center relative z-40 rounded-md px-4'
      >
        <h1 className='text-4xl font-semibold leading-9 text-black text-center'>
          Don’t miss out!
        </h1>
        <p className='text-base leading-normal text-center text-black mt-6'>
          Subscribe to your newsletter to stay in the loop. Our newsletter is
          sent once in <br />a week on every friday so subscribe to get latest
          news and updates.
        </p>
        <div className='sm:border flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0 border-gray-400 rounded-lg'>
          <input
            className='text-base w-full font-medium leading-none text-black p-4
             focus:outline-none bg-transparent rounded-md placeholder:text-black border'
            placeholder='Email Address'
          />
          <button className='focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75 text-black rounded-md'>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
