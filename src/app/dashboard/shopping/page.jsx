
import { ShoppingGrid } from '@/shoppinCar'
import React from 'react'

export default function ShoppingPage() {
    return (
        <div className='bg-[#f4f5f9] h-screen flex flex-col'>

            <div className="p-5 m-5 bg-white shadow-md rounded-lg flex-none">
                <div className="flex justify-center items-center gap-5 ">
                    <strong>Carrito</strong>
                </div>
            </div>

            <div className="mt-5 flex-grow">
                <ShoppingGrid />
            </div>

        </div>
    )
}
