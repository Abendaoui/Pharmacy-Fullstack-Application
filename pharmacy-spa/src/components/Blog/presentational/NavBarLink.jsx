import React from 'react'
import { Link } from 'react-router-dom'

const NavBarLink = ({ lable, link }) => {
  return (
    <Link
      to={link}
      className='text-black text-xs rounded hover:bg-[#9fe870] hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2 duration-500 transition-all'
    >
      {lable}
    </Link>
  )
}

export default NavBarLink
