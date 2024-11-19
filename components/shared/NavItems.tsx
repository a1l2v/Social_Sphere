'use client';

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useUser } from "@clerk/nextjs"
import { LockIcon } from 'lucide-react'

const NavItems = () => {
  const pathname = usePathname();
  const { isLoaded, isSignedIn, user } = useUser();

  const isAdmin = isLoaded && isSignedIn && user?.id === 'user_2p1jbuQ1wPDsXEWwjjAxUnuDRuw';

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
            {link.label === 'Create Event' && !isAdmin && (
              <LockIcon className="inline-block ml-1 h-4 w-4 text-gray-400" />
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems