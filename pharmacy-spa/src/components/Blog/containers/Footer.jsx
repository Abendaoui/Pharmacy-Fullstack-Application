import React from 'react'
import { FooterListLink } from '../presentational'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='p-4 bg-gray-50 md:flex md:items-center md:justify-between md:p-6 mt-4'>
      <span className='text-sm text-gray-500 sm:text-center'>
        © 2024{' '}
        <Link to='/blog' className='hover:underline text-[#163300]'>
          PharmacyBlog
        </Link>
        . All Rights Reserved.
      </span>
      <ul className='flex flex-wrap items-center mt-3 sm:mt-0'>
        <FooterListLink label={'Home'} link={'/blog'} />
        <FooterListLink label={'About'} link={'/blog/about_us'} />
        <FooterListLink label={'Contact Us'} link={'/blog/contact_us'} />
      </ul>
    </footer>
  )
}

export default Footer
