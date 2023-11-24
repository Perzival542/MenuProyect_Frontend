import React, { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import NavBar from "../components/Navbar";
import Tables from "../components/Tables";
import { useMenus } from "../context/menuContext";
import { useUsers } from "../context/userContext";

const AdminPage = () => {
    const { menus, getMenus } = useMenus();
    const { users, getUsers } = useUsers();
    //const { orders, getOrders } = useOrders;

    useEffect(() => {
        getUsers();
        getMenus();
    }, []);

    console.log(menus);

    return(
        <div className="adminPage">
            <NavBar/>
            <div className="container">
                <Tabs defaultActive="profile" id="uncontrolled-tab-example" className="mt-3 mb-3 d-flex justify-content-center bg-dark pt-3">
                    <Tab eventKey="Usuarios" title="Usuarios">
                        <div className="table-container">
                            <Tables headers={["Nombre y Apellido", "Email", "Estado", "Rol", "Fecha de Creación", "Fecha de Actualización"]} data={users}/>
                        </div>
                    </Tab>
                    <Tab eventKey="Menus" title="Menus">
                        <div className="table-container">
                            <Tables headers={["Nombre del Menu", "Estado del Menu", "Precio", "Detalle", "Categoria", "Fecha de Creación", "Fecha de Actualización"]} data={menus}/>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default AdminPage;