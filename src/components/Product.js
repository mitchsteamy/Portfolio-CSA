import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter'

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
    const [rating, setRating] = useState(null);
    const [hasPrime, setHasPrime] = useState(null)

    useEffect(() => {
        setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
        setHasPrime(Math.floor(Math.random() < 0.5));
    },[]);

    return (
        <div className='relative items-center flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400 my-3'>{category}</p>

            <Image src={image} alt='' height={200} width={200} object-fit='contain' />

            <h4 className='my-3'>{title}</h4>

            <div className='flex'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon key={i} className='h-5 text-yellow-500' />
                    ))}
            </div>

            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <Currency quantity={price} />
            </div>

            {hasPrime ? (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img src='https://links.papareact.com/fdw' alt='' className='w-12'/>
                    <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                </div>
            ) : ('')}

            <button className='mt-auto button'>Add to Basket</button>
        </div>
    )
}

export default Product
