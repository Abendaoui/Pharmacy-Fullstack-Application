import React from 'react'
import { footerLinks, socialMediaLinks } from '../../../data/data'
import { SingleFooterLink, SingleSocialMediaLink } from '../presentational'
const Footer = () => {
  return (
    <footer className='bg-[#163300] p-10 rounded-3xl my-8'>
      <div className='relative bg-white rounded-3xl'>
        <div className='px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
          <div className='grid gap-16 row-gap-10 mb-8 lg:grid-cols-4'>
            {/* Links */}
            <div className='grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4'>
              {footerLinks.map((footer) => {
                return <SingleFooterLink key={footer.id} {...footer} />
              })}
            </div>
            {/* End Links */}
          </div>
          {/* Social Media Icons */}
          <div className='flex flex-col justify-end pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row'>
            <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
              {socialMediaLinks.map((link) => {
                return <SingleSocialMediaLink key={link.id} {...link} />
              })}
            </div>
          </div>
        </div>
      </div>
      <article className='mt-4 ml-2'>
        <p className='text-sm text-[#9cdb6d]'>©2024 Maryem Pharmacy</p>
      </article>
    </footer>
  )
}

export default Footer
