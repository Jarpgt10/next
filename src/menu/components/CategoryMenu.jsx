
import { ItemCategoryMenu } from '..';
import Icon from '@/utilities/Icon';
import { MenuState } from '../context/MenuContext';
import CardGrid from './CardGrid';



export default function CategoryMenu() {
    const options = [
        { id_categoria_menu: 1, name: 'Comida', icon: <Icon.food size={35} color='#6b7280' /> },
        { id_categoria_menu: 2, name: 'Bebida', icon: <Icon.soda size={35} color='#6b7280' /> },
        { id_categoria_menu: 3, name: 'Alcohol', icon: <Icon.beer size={35} color='#6b7280' /> },
    ];


    return (
        <MenuState>
            <div className="p-5 bg-white shadow-md rounded-lg m-5 ">
                <div className="flex justify-center items-center gap-5 ">
                    {options.map((opt) => (
                        <ItemCategoryMenu key={opt.id_categoria_menu} {...opt} />
                    ))}
                </div>
            </div>
            <CardGrid />
        </MenuState>



    )
}



