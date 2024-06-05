import React from 'react'

const AboutBlog = () => {
  return (
    <section className='mt-10 max-w-7xl mx-auto py-20'>
      <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
        <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
          <div className='md:5/12 lg:w-5/12'>
            <img
              src='https://tailus.io/sources/blocks/left-image/preview/images/startup.png'
              alt='image'
              loading='lazy'
              width=''
              height=''
            />
          </div>
          <div className='md:7/12 lg:w-6/12'>
            <h2 className='text-2xl text-cyan-500 font-bold md:text-4xl text-center'>
              About PharmacyBlog
            </h2>
            <p className='mt-6 text-gray-600 text-sm leading-6'>
              Welcome to MeryemPharmacy, your trusted online pharmacy dedicated
              to providing high-quality medications and healthcare products
              directly to your doorstep. At MeryemPharmacy, we prioritize your
              health and well-being by offering a wide range of prescription and
              over-the-counter medications, supplements, and wellness products.
            </p>
            <p className='mt-6 text-gray-600 text-sm leading-6'>
              {' '}
              Our mission is to make healthcare accessible and convenient for
              everyone. With a user-friendly online platform, expert pharmacists
              ready to assist you, and a commitment to exceptional customer
              service, MeryemPharmacy is here to meet all your healthcare needs.
            </p>
            <p className='mt-4 text-gray-600 text-sm leading-6'>
              {' '}
              Discover the MeryemPharmacy difference today and experience a new
              level of care and convenience in managing your health.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBlog
