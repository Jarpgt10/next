import Icon from '@/utilities/Icon'
import React from 'react'

export default function FavoritesPage() {
    return (
        <>
            <div className='flex justify-center items-center mt-16'>
                <Icon.heart size={65} color='#9a9b9e' />
            </div>
            <div className='text-[#9a9b9e] text-center'>
                <strong className=''>Sin favoritos</strong>
            </div>
        </>

    )
}
