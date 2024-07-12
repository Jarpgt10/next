import Icon from '@/utilities/Icon'
import React from 'react'

export default function NotFoods() {
    return (
        <div>
            <div className='flex justify-center items-center mt-16'>
                <Icon.carShopping2 size={65} color='#9a9b9e' />
            </div>

            <div className='text-[#9a9b9e] text-center'>
                <strong className=''>Aun sin agregar</strong>
            </div>
        </div>
    )
}
