'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function CardFood({ url_img, price, quantity, name, id }) {
    const [Count, setCount] = useState(1);


    return (
        <div className='mx-5 rounded-md bg-white p-2 h-auto flex '>
            <div className='flex-col items-center justify-center flex mx-2'>
                <Image
                    className='rounded-full '
                    key={id}
                    alt={`menu ${name} donde panchito`}
                    width={50}
                    height={50}
                    priority={false}
                    src={url_img}
                />
            </div>
            <div className='flex-col w-full justify-start items-start'>
                <div>
                    <div className='text-[191629]'>{name}</div>
                    <div className='text-[#191629] rounded-md bg-gray-200 py-1 px-2 w-auto inline-block'>Q {price}</div>
                </div>
                <div className='flex justify-end '>
                    <div className='w-auto inline-block bg-[#9255fd] rounded-md text-white px-2'>
                        <div className='flex justify-between gap-5'>
                            <button onClick={() => setCount(Count - 1)}>-</button>
                            <div className='bg-white px-1 w-auto inline-block text-[#191629] text-sm'>{Count}</div>
                            <button onClick={() => setCount(Count + 1)}>+</button>
                        </div>


                    </div>
                </div>

            </div>
            {/* <div className='grid grid-cols-4'>
                <div className='col-span-1'>
                    <Image
                        className='rounded-full object-cover '
                        key={id}
                        alt={`menu ${name} donde panchito`}
                        width={150}
                        height={150}
                        priority={false}
                        src={url_img}
                    />


                </div>
                <div className='bg-slate-600 col-span-3'>
                    a
                </div> */}
            {/* </div> */}

        </div >
    )
}
