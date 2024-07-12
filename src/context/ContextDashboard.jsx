'use client'
import { createContext, useEffect, useState } from "react";

export const DashboardContext = createContext();

export const DashboardState = (props) => {



    const [shoppinCar, setShoppinCar] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [totalShopping, setTotalShopping] = useState(0);




    useEffect(() => {

    }, []);


    const handleShoppingCar = (food) => {
        const exist = shoppinCar.some(item => parseInt(item.id_menu_comida) === parseInt(food.id_menu_comida))

        if (exist) {

        } else {
            const dataTemp = { ...food, cantidad: 1, }
            const data = [...shoppinCar, dataTemp]
            const total = data.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
            setShoppinCar(data);
            setTotalShopping(total)

        }

    }






    return (
        <DashboardContext.Provider
            value={{
                shoppinCar,
                handleShoppingCar,
                favorites,
                totalShopping,
            }}
        >
            {props.children}
        </DashboardContext.Provider>
    );
};