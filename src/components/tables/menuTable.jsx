import React, { useEffect } from "react";
import { useMenus } from "../../context/menuContext";

const MenuTable = () => {
    const { menus, getMenus } = useMenus();

    useEffect(() => {
        getMenus()
        .catch((error) => {
            console.log("Error al recuperar los menus: ", error);
        });
    }, [])


    return(
        <table class="table text-center table-dark table-hover table-responsive">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre del Menu</th>
                    <th scope="col">Estado del Menu</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Detalle</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Fecha de Creación</th>
                    <th scope="col">Fecha de Actualización</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {menus.map((menu, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td><img src={menu.menu_img.url} width={80} height={80}/></td>
                        <td>{menu.menu_name}</td>
                        <td>{menu.menu_state}</td>
                        <td>${menu.menu_price}</td>
                        <td>{menu.menu_detail}</td>
                        <td>{menu.menu_category}</td>
                        <td>{menu.createdAt}</td>
                        <td>{menu.updatedAt}</td>
                        <td>
                            <button class="btn btn-primary m-1">Modificar</button>
                            <button class="btn btn-danger m-1">Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default MenuTable;