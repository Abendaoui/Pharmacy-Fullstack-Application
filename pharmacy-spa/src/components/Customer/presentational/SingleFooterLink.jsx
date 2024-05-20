import React from 'react'
import { Link } from 'react-router-dom'
const SingleFooterLink = ({ section, links }) => {
  return (
    <article className='text-[#10130e]'>
      <p className='font-semibold tracking-wide  text-lg'>{section}</p>
      <ul className='mt-2 space-y-2'>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link
                to={link.href}
                className='transition-colors duration-300 text-sm font-thin capitalize'
              >
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default SingleFooterLink
