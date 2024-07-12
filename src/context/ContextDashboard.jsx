'use client'
import { createContext, useEffect, useState } from "react";

export const DashboardContext = createContext();

export const DashboardState = (props) => {

    const initialValues = {}

    const [shoppinCar, setShoppinCar] = useState([]);
    const [favorites, setFavorites] = useState([]);




    useEffect(() => {

    }, []);


    const handleShoppingCar = (data) => {
        const exist = shoppinCar.some(item => parseInt(item.id_menu_comida) === parseInt(data.id_menu_comida))

        if (exist) {

        } else {
            setShoppinCar([...shoppinCar, data]);

        }

    }






    return (
        <DashboardContext.Provider
            value={{
                shoppinCar,
                handleShoppingCar,
                favorites,
            }}
        >
            {props.children}
        </DashboardContext.Provider>
    );
};