import React from 'react'

export default function TagCounter({ number = 0 }) {
    return (
        <div className='bg-red-700 flex justify-center items-center px-2 py-1  absolute -top-[8px] -right-[5px] rounded-full  text-xs'>
            <p className='text-white'>{number}</p>
        </div>
    )
}
