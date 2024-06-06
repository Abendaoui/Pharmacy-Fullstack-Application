import React,{Fragment} from 'react'
import {
  Menu,
  Transition,
  MenuButton,
  MenuItems,
  MenuItem,
} from '@headlessui/react'
import {
  ChevronDownIcon,
} from '@heroicons/react/20/solid'
import { sortOptions } from '../../../data/data'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const SortMenu = ({}) => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <MenuButton className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
          Sort
          <ChevronDownIcon
            className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
            aria-hidden='true'
          />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <MenuItems className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {sortOptions.map((option) => (
              <MenuItem key={option.name}>
                {({ active }) => (
                  <button
                    onClick={() => handleSortByOption(option.option)}
                    className={classNames(
                      option.current
                        ? 'font-medium text-gray-900'
                        : 'text-gray-500',
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm w-full'
                    )}
                  >
                    {option.name}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}

export default SortMenu
