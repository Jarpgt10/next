'use client'

import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../context/MenuContext'






export default function ItemCategoryMenu({ id_categoria_menu, name, icon }) {
    const { selectedCategory, FilterByIdCategory, menu, categoryMenu } = useContext(MenuContext);


    return (
        <div key={id_categoria_menu} className={`p-2 cursor-pointer transition duration-300 ease-in-out transform 
             ${selectedCategory === id_categoria_menu ? 'border-b-2 border-purple-600 -translate-y-1 text-purple-600' : 'text-gray-900'}`}
            onClick={() => FilterByIdCategory(id_categoria_menu)}>
            <span className='text-black'>{icon}</span>
            <span className="block text-center mt-1" key={id_categoria_menu}>{name}</span>
        </div>
    )
}
