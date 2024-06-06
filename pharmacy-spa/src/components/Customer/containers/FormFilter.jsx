import React from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { filters } from '../../../data/data'
const FormFilter = ({ handleCategoryChange }) => {
  return (
    <form className='hidden lg:block'>
      {filters.map((section) => (
        <Disclosure
          as='div'
          key={section.id}
          className='border-b border-gray-200 py-6'
        >
          {({ open }) => (
            <>
              <h3 className='-my-3 flow-root'>
                <DisclosureButton className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>
                    {section.name}
                  </span>
                  <span className='ml-6 flex items-center'>
                    {open ? (
                      <MinusIcon className='h-5 w-5' aria-hidden='true' />
                    ) : (
                      <PlusIcon className='h-5 w-5' aria-hidden='true' />
                    )}
                  </span>
                </DisclosureButton>
              </h3>
              <DisclosurePanel className='pt-6'>
                <div className='space-y-4'>
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className='flex items-center'>
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`category`}
                        defaultValue={option.value}
                        type='radio'
                        defaultChecked={option.checked}
                        className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 checked:bg-green-400'
                        style={{ backgroundColor: 'green' }}
                        onChange={() => handleCategoryChange(option.value)}
                      />
                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                        className='ml-3 text-sm text-gray-600'
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </form>
  )
}

export default FormFilter
