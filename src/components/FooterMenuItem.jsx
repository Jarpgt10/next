'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


export default function FooterMenuItem({ path, name, icon }) {
    const currentPath = usePathname();

    return (
        <Link
            href={path}
            className={`flex flex-col items-center space-y-1 transition duration-300 ease-in-out transform sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-18 xl:w-18 focus:outline-none
                 ${currentPath === path ? 'text-purple-600 scale-105' : ''}`}
        >
            <div className={`flex items-center justify-center rounded-full p-2 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16   ${currentPath === path ? 'bg-purple-200' : 'bg-gray-200'}`}>
                {icon}
            </div>
        </Link>
    )
}
