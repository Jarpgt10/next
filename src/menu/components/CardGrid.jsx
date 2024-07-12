'use client'
import React, { useContext, useEffect } from 'react'
import { CardFood } from '..'
import { MenuContext } from '../context/MenuContext'
import Icon from '@/utilities/Icon'

export default function CardGrid() {
    const { MenuSelected, selectedCategory } = useContext(MenuContext)

    useEffect(() => {

    }, [])



    return (
        <>
            <div >
                {selectedCategory > 0
                    ?
                    (
                        <div className='min-h-[500px] flex justify-start items-center sm:w-screen overflow-y-auto' >
                            {
                                MenuSelected.map((opt) => (
                                    <CardFood
                                        key={opt.id_menu_comida}
                                        name={opt.nombre_menu}

                                        url_img={opt.url_img ? opt.url_img : 'http://localhost:8080/Dp/back/img/papas.avif'}
                                        precio={opt.precio}
                                        id_menu_comida={opt.id_menu_comida} />
                                ))
                            }
                        </div>
                    )
                    :
                    (

                        <div className='text-center w-full text-[#6b7280] mt-10'>
                            <span className='flex justify-center items-center' ><Icon.food2 size={55} color='#6b7280' /></span>
                            <strong> Selecciona alguna opcion</strong>
                        </div>
                    )
                }
            </div>

        </>
    )
}
