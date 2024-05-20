import React from 'react'
import SingleListItem from './SingleListItem'
import SingleMedecineItem from './SingleMedecineItem'
const List = ({ data, withImage }) => {
  return (
    <ul role='list' className='divide-y divide-gray-200'>
      {data.map((item) => {
        if (!withImage) {
          return <SingleListItem key={item.id} {...item} />
        }
        return <SingleMedecineItem key={item.id} {...item} />
      })}
    </ul>
  )
}

export default List
