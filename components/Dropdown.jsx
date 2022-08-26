/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MoonIcon, SunIcon, MenuAlt3Icon } from '@heroicons/react/solid'
import {useTheme} from 'next-themes'
import Link from 'next/link'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  const { theme , setTheme } = useTheme()

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  return (
    <Menu as="div" className="relative  inline-block text-left">
      <div>
        <Menu.Button className="">
          <MenuAlt3Icon className='w-5 '/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-[#0e0e0e] dark:bg-gray ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#services"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 dark:bg-black/5 dark:text-white' : 'dark:text-white/50',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Services
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#about"
                  className={classNames(
                    active ? 'bg-gray-100 dark:bg-black/5' : 'dark:text-white/50',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  About
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="mailto:yhiazedan555@gmail.com"
                  className={classNames(
                    active ? 'bg-gray-100 dark:bg-black/5' : 'dark:text-white/50',
                    'block px-4 py-2 text-sm'
                  )}
                  
                >
                  Contact
                </a>
              )}
            </Menu.Item>
          </div>
          <Menu.Item>
            {({ active }) => (
              <button onClick={handleThemeChange} className={classNames(
                active ? 'bg-gray-100 dark:bg-black/5' : 'dark:text-white/50',
                'block px-4 py-2 w-full mb-2'
              )}>
              {
                theme === 'light' ? (
                    <MoonIcon className='w-4 '/>
                    ) : (
                    <SunIcon className='w-4 '/>
                )
              }
          </button>  
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
