import { DashboardContext } from "@/context/ContextDashboard";
import Icon from "@/utilities/Icon";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";


export default function CardFood({ url_img, name, precio, id_menu_comida }) {

    const { handleShoppingCar } = useContext(DashboardContext);
    const dataFood = { url_img, name, precio, id_menu_comida };
    return (
        <div>

            <div className='sm:h-auto w-[250px] m-5 p-5 bg-white shadow-md rounded-lg'>
                <Link href={`/dashboard/menu/${id_menu_comida}`}>
                    <Image
                        className='rounded-full -top-16 relative'
                        key={id_menu_comida}
                        alt={`menu ${name} donde panchito`}
                        src={url_img ? url_img : 'http://localhost:8080/Dp/back/img/papas.avif'}
                        width={200}
                        height={200}
                        priority={false} />
                    <div className='flex-center text-center text-[#333041] text-lg font-bold'>{name}</div>
                    <div className='flex-center text-center text-[#9255fd] font-bold'>Q  {precio}</div>
                </Link >
                <div className="flex justify-center mt-3">
                    <button className="bg-gray-100 rounded-md  p-1 hover:shadow-sm hover:shadow-[#00000093]" onClick={() => handleShoppingCar(dataFood)}>
                        <Icon.carShopping2 size={30} />
                    </button>
                </div>
            </div>


        </div>
    )
}
