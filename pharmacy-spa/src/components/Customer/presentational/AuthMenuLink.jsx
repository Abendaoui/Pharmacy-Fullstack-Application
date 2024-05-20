import React from 'react'
import { Link } from 'react-router-dom'
const AuthMenuLink = ({ linkTo,icon, title }) => {
  return (
    <Link
      to={linkTo}
      className='text-sm font-medium text-gray-700  hover:text-teal-400 duration-300 flex items-center gap-2'
    >
      <span>{icon}</span>
      {title}
    </Link>
  )
}

export default AuthMenuLink
