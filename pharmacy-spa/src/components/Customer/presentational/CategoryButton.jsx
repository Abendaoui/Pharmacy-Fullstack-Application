import React from 'react'

const CategoryButton = ({ activeCategory, category, handleCategoryChange }) => {
  return (
    <button
      className={`px-5 py-2 rounded-2xl text-base capitalize ${
        activeCategory === category
          ? 'bg-green-900 text-green-200'
          : 'bg-gray-100 text-black'
      }`}
      onClick={() => handleCategoryChange(category)}
    >
      {category}
    </button>
  )
}

export default CategoryButton
