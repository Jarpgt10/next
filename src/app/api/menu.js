import { request } from '../../utilities/request'
const path = 'api/controllers/menu.php?'

export const httpGetMenu = async (ActiveOnly = true) => {
    const result = await request(`${path}get-menu=true&activeOnly=${ActiveOnly}`)
    return JSON.parse(result)
}

export const httpGetCategoryMenu = async (ActiveOnly = true) => {
    const result = await request(`${path}get-category-menu=true&activeOnly=${ActiveOnly}`)
    return JSON.parse(result)
}

export const httpGetMenuById = async (id) => {
    const result = await request(`${path}get-menu-by-id=true&id_menu_comida=${id}`)
    return JSON.parse(result)
}
