'use client'
import { httpGetCategoryMenu, httpGetMenu } from "@/app/api/menu";
import { createContext, useEffect, useState } from "react";

export const MenuContext = createContext();

export const MenuState = (props) => {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [MenuSelected, setMenuSelected] = useState([]);
    const [menu, setMenu] = useState([]);
    const [categoryMenu, setCategoryMenu] = useState([]);


    const getAll = () => {
        httpGetMenu().then((res) => setMenu(res));
        httpGetCategoryMenu().then((res) => setCategoryMenu(res));

    }

    useEffect(() => {
        getAll();
    }, []);



    const FilterByIdCategory = (id) => {
        const filtered = menu.filter((opt) =>
            parseInt(opt.id_categoria_menu) === id
        );
        setSelectedCategory(id)
        setMenuSelected(filtered)
    }


    return (
        <MenuContext.Provider
            value={{
                selectedCategory,
                setSelectedCategory,
                menu,
                categoryMenu,
                FilterByIdCategory,
                MenuSelected
            }}
        >
            {props.children}
        </MenuContext.Provider>
    );
};