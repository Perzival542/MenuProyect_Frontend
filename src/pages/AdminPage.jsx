import React, { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import NavBar from "../components/Navbar";
import UserTable from "../components/tables/userTable";
import MenuTable from "../components/tables/menuTable";
import OrdersTable from "../components/tables/ordersTable";


const AdminPage = () => {

    return(
        <div className="adminPage ">
            <NavBar/>
            <div className="tables-container m-4 h-auto">
                <Tabs defaultactive="profile" id="uncontrolled-tab-example" className="mt-3 mb-3 d-flex justify-content-center bg-dark pt-3">
                    <Tab eventKey="Usuarios" title="Usuarios">
                        <div className="table-container">
                            <UserTable/>
                        </div>
                    </Tab>
                    <Tab eventKey="Menus" title="Menus">
                        <div className="table-container">
                            <MenuTable/>
                        </div>
                    </Tab>
                    <Tab eventKey="Orders" title="Orders">
                        <div className="table-container">
                            <OrdersTable/>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default AdminPage;