'use client'

import { useContext } from "react"
import { CardFood, NotFoods } from ".."
import { DashboardContext } from "@/context/ContextDashboard"

export default function ShoppingGrid() {
    const { shoppinCar, totalShopping } = useContext(DashboardContext);
    return (
        <>

            {
                shoppinCar.length > 0 ?
                    (
                        <>
                            <div className="h-[375px] overflow-y-auto">
                                {
                                    shoppinCar.map((opt) => (
                                        <div className="mt-3 " key={opt.id_menu_comida}>
                                            <CardFood
                                                name={opt.name}
                                                price={opt.precio}
                                                quantity={opt.cantidad}
                                                url_img={opt.url_img}
                                                key={opt.id_menu_comida}
                                                id={opt.id_menu_comida} />
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                Total :{totalShopping}
                            </div>
                        </>
                    )
                    : (<NotFoods />)
            }

        </>
    )
}
