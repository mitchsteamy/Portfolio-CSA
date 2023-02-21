import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice';
import { useSession } from 'next-auth/react';
import CheckoutItem from '../components/CheckoutItem';
import Currency from 'react-currency-formatter';

function Checkout() {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const session = useSession()

  return (
    <div className='bg-gray-100'>
      <Header />

      <main className='max-w-screen-2xl mx-auto lg:flex'>
        {/* Left  */}
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            object-fit="contain"
          />

          <div className='flex flex-col mt-2 p-5 space-y-10 bg-white'>
            <h1 className='text-2xl border-b pb-4'>
              {items.length === 0 ? 'Your Basket is empty' : 'Shopping Basket'}
            </h1>

            {items.map((item, i) => (
              <CheckoutItem
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className='flex flex-col bg-white p-10 w-screen-md shadow-md'>
          {items.length > 0 && (
            <>
              <h2>
                Subtotal ({items.length} items): {' '}
                <span className='font-bold'>
                  {<Currency quantity={total}/>}
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}
              >
                {!session ? 'Sign in to check out' : 'checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Checkout
