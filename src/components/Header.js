import React from 'react';
import Image from 'next/image';

import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Header() {
  const { data: session } = useSession()
  const router = useRouter()
  const items = useSelector(selectItems)


  return (
    <header>
      {/* Top Nav */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 mx-3 flex items-center flex-row sm: flex-grow-0'>
          <Image
            src="https://links.papareact.com/f90"
            alt=''
            width={120}
            height={30}
            object-fit="contain"
            className='cursor-pointer'
            onClick={() => router.push('/')}
          />
        </div>

        {/* Search */}
        <div className='hidden sm:flex bg-yellow-400 hover:bg-yellow-500 h-10 rounded-md flex-grow cursor-pointer'>
          <input
            type='text'
            className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
          />
          <SearchIcon
            className='h-10 p-3'
          />
        </div>

        {/* Right */}
        <div className='text-white flex items-center text-xs space-x-6 mx-4 whitespace-nowrap'>
          <div className='link cursor-pointer' onClick={!session ? signIn : signOut}>
            <p className='hover:underline'>
              {session ? `Hello, ${session.user.name}` : 'Sign in'}
            </p>
            <p className='font-extrabold md:text-small'>Accounts & Lists</p>
          </div>

          <div className=' link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-small'>& Orders</p>
          </div>

          <div className='relative link flex items-center' onClick={() => router.push('/checkout')} >

            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
              {items.length}
            </span>

            <ShoppingCartIcon className='h-9' />
            <p className='hidden md:inline font-extrabold md:text-small mt-2'>Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className='flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
      </div>

    </header>
  )
}

export default Header

