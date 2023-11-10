'use client'
import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MenuSquare } from 'lucide-react'
import { Category } from '@/types'
import { usePathname } from 'next/navigation'

interface MobileNavProps {
  data: Category[]
}

const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' }
]
const MobileNav: React.FC<MobileNavProps> = ({ data }) => {
  const pathname = usePathname()

  const routes = data.map(route => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }))
  return (
    <Menu as='div' className='md:hidden relative inline-block text-left'>
      <Menu.Button className='ps-3'>
        <MenuSquare size={30} />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items
          className={
            'flex flex-col absolute right-0 mt-2 w-56 origin-top-right  divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10'
          }
        >
          {routes.map(link => (
            /* Use the `active` state to conditionally style the active item. */
            <Menu.Item key={link.href} as='div' className='px-1 py-1 '>
              {({ active }) => (
                <a
                  href={link.href}
                  className={`${
                    active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                  }  flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {link.label}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MobileNav
