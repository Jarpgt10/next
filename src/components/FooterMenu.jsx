// components/FooterMenu.js
import React from 'react';
import Icon from "@/utilities/Icon";
import FooterMenuItem from './FooterMenuItem';

export default function FooterMenu() {
    const menuOptions = [
        { path: '/dashboard/menu', name: 'Menu', icon: <Icon.food size={30} /> },
        { path: '/dashboard/shopping', name: 'Order', icon: <Icon.ticket size={30} /> },
        { path: '/dashboard/favorites', name: 'Favorito', icon: <Icon.heart size={30} /> },
    ];



    return (
        <div className="fixed bottom-0 w-full bg-white text-gray-900 shadow-lg">
            <div className="max-w-screen-xl mx-auto flex justify-around py-3 px-4 md:px-8">
                {menuOptions.map((opt) => (
                    <FooterMenuItem key={opt.path} {...opt} />
                ))}
            </div>
        </div>
    );
}
