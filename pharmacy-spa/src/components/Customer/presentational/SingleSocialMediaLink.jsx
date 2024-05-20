import React from 'react'
import { Link } from 'react-router-dom'
const SingleSocialMediaLink = ({ link, icon }) => {
  return (
    <Link
      to={link}
      className='transition-colors duration-300 bg-[#f1f5f9] rounded-full p-2 flex items-center'
    >
      {icon}
    </Link>
  )
}

export default SingleSocialMediaLink
