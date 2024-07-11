import { httpGetMenuById } from '@/app/api/menu'
import Animate1 from '@/components/Animate1';
import Icon from '@/utilities/Icon';
import Image from 'next/image';
import React from 'react'

const getMenu = async (id) => {
    const Menu = await httpGetMenuById(id);
    return Menu.map((opt) => ({
        nombre_menu: opt.nombre_menu,
        precio: opt.precio,
        detalle: opt.detalle,
    }));
}


export default async function DetalleMenu({ params }) {
    const menu = await getMenu(params.id_menu_comida);


    return (
        <Animate1>
            <div className='p-5 bg-[#f4f5f9] h-screen'>
                {menu.map((item, index) => (
                    <div key={index}>
                        <div className=' flex justify-end'>
                            <Icon.heart color='red' size={28} />
                        </div>
                        <div className='flex justify-center items-center mt-10'>
                            <Image
                                className='rounded-full shadow-lg shadow-[#0000004b]'
                                key={item.id_menu_comida}
                                alt={`menu ${item.nombre_menu} donde panchito`}
                                src={'https://cdn.pixabay.com/photo/2022/08/29/17/45/burger-7419428_640.jpg'}
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className='mt-5 flex flex-col justify-center text-[#191629] text-center'>
                            <strong className='text-xl'>{item.nombre_menu}</strong>
                        </div>

                        <div>
                            <strong className='bg-gray-200 rounded-md p-1 justify-center flex mx-[70px]'>Q  {item.precio}</strong>
                        </div>

                        <div className='mt-5' >
                            <strong >Descripcion</strong>
                        </div>
                        <div className='flex flex-col justify-start items-center mt-5'>
                            <p className='text-justify'>{item.detalle}</p>
                        </div>

                    </div>
                ))}
            </div>
        </Animate1>
    );
}