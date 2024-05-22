import { Fragment, useEffect, useState } from 'react'
import {
  Dialog,
  Disclosure,
  Menu,
  Transition,
  TransitionChild,
  DialogPanel,
  DisclosureButton,
  DisclosurePanel,
  MenuButton,
  MenuItems,
  MenuItem,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid'
import { ListProducts } from '../../../components/Customer/containers'
import { sortOptions, subCategories, filters } from '../../../data/data'
import { Link } from 'react-router-dom'
import axiosClient from '../../../configs/axiosClient'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Products = () => {
  document.title = 'Products'
  const [grid, setGrid] = useState(true)
  const [data, setData] = useState([])
  const getMedecines = async () => {
    try {
      await axiosClient.get('/all_medecines').then(({ data }) => {
        if (data) {
          setData(data.data)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMedecines()
  }, [])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  return (
    <section className='bg-white w-full'>
      <div>
        {/* Mobile filter dialog */}
        <Transition show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-40 lg:hidden'
            onClose={setMobileFiltersOpen}
          >
            <TransitionChild
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-25' />
            </TransitionChild>

            <div className='fixed inset-0 z-40 flex'>
              <TransitionChild
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <DialogPanel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
                  <div className='flex items-center justify-between px-4'>
                    <h2 className='text-lg font-medium text-gray-900'>
                      Filters
                    </h2>
                    <button
                      type='button'
                      className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className='mt-4 border-t border-gray-200'>
                    <h3 className='sr-only'>Categories</h3>
                    {filters.map((section) => (
                      <Disclosure
                        as='div'
                        key={section.id}
                        className='border-t border-gray-200 px-4 py-6'
                      >
                        {({ open }) => (
                          <>
                            <h3 className='-mx-2 -my-3 flow-root'>
                              <DisclosureButton className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'>
                                <span className='font-medium text-gray-900'>
                                  {section.name}
                                </span>
                                <span className='ml-6 flex items-center'>
                                  {open ? (
                                    <MinusIcon
                                      className='h-5 w-5'
                                      aria-hidden='true'
                                    />
                                  ) : (
                                    <PlusIcon
                                      className='h-5 w-5'
                                      aria-hidden='true'
                                    />
                                  )}
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel className='pt-6'>
                              <div className='space-y-6'>
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className='flex items-center'
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`flavor`}
                                      defaultValue={option.value}
                                      type='radio'
                                      defaultChecked={option.checked}
                                      className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 checked:bg-green-400'
                                      style={{ backgroundColor: 'green' }}
                                      onChange={() => setFloavor(option.value)}
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className='ml-3 min-w-0 flex-1 text-gray-500'
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
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
              Our Products
            </h1>

            <div className='flex items-center'>
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

              <button
                type='button'
                className='-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7'
                onClick={() => setGrid(!grid)}
              >
                <span className='sr-only'>View grid</span>
                {grid ? (
                  <Squares2X2Icon className='h-5 w-5' aria-hidden='true' />
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5'
                    />
                  </svg>
                )}
              </button>
              <button
                type='button'
                className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className='sr-only'>Filters</span>
                <FunnelIcon className='h-5 w-5' aria-hidden='true' />
              </button>
            </div>
          </div>

          <section aria-labelledby='products-heading' className='pb-24 pt-6'>
            <h2 id='products-heading' className='sr-only'>
              Products
            </h2>

            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
              {/* Filters */}
              <form className='hidden lg:block'>
                <h3 className='sr-only'>Categories</h3>
                <ul
                  role='list'
                  className='space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900'
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <Link to={category.href}>{category.name}</Link>
                    </li>
                  ))}
                </ul>

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
                                <MinusIcon
                                  className='h-5 w-5'
                                  aria-hidden='true'
                                />
                              ) : (
                                <PlusIcon
                                  className='h-5 w-5'
                                  aria-hidden='true'
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className='pt-6'>
                          <div className='space-y-4'>
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className='flex items-center'
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`flavor`}
                                  defaultValue={option.value}
                                  type='radio'
                                  defaultChecked={option.checked}
                                  className='h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 checked:bg-green-400'
                                  style={{ backgroundColor: 'green' }}
                                  onChange={() => setFloavor(option.value)}
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

              {/* Product grid */}
              <div className='lg:col-span-3'>
                <ListProducts data={data} grid={grid} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  )
}

export default Products
