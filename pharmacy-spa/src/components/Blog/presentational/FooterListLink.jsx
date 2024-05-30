import React from 'react'
import { Link } from 'react-router-dom'

const FooterListLink = ({ label, link }) => {
  return (
    <li>
      <Link
        className='mr-4 text-sm text-gray-500 hover:underline md:mr-6'
        to={link}
      >
        {label}
      </Link>
    </li>
  )
}

export default FooterListLink
