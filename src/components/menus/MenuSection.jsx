import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import MenuCard from "./MenuCard";
import { useMenus } from "../../context/menuContext";
import Loader from "../ui/Loader";

const MenuSection = () => {
    const { menus, getMenus } = useMenus();

    useEffect(() => {
        getMenus()
        .catch(error => {
            console.log("Error al cargar los menús:", error);
        });
    }, []);

    const entradas = menus.filter((menu) => menu.menu_category === 'entrada');
    console.log(entradas);
    const principal = menus.filter((menu) => menu.menu_category === 'principal')
    console.log(principal);
    const postres = menus.filter((menu) => menu.menu_category === 'postre');
    console.log(postres);
    const bebidas = menus.filter((menu) => menu.menu_category === 'bebida');
    console.log(bebidas);

    return (
            <>
            <Tabs defaultActive="profile" id="uncontrolled-tab-example" className="mt-3 mb-3 d-flex justify-content-center bg-dark pt-3">
                <Tab eventKey="Entradas" title="Entradas">
                  <div className="row d-flex mx-auto w-100">
                    {
                         entradas.length !== 0 ? (
                            entradas.map((menu) => (
                                <div className="col d-flex justify-content-center p-4">
                                    <MenuCard
                                        key={menu._id}
                                        menu={menu}
                                    />
                                </div>
                            ))
                        ) : (
                            <Loader/>
                        )
                    }
                  </div>
                </Tab>
                <Tab eventKey="Platos Principales" title="Platos Principales">
                    <div className="row d-flex mx-auto w-100">
                    {
                        principal.length !== 0 ? (
                            principal.map((menu) => (
                                <div className="col d-flex justify-content-center p-4">
                                    <MenuCard
                                    key={menu._id}
                                    menu={menu}
                                />
                                </div>
                            ))
                        ) : (
                            <Loader/>
                        )
                    }
                    </div>
                </Tab>
                <Tab eventKey="Postres" title="Postres">
                    <div className="row d-flex mx-auto w-100">
                    {
                         postres.length !== 0 ? (
                            postres.map((menu) => (
                                <div className="col d-flex justify-content-center p-4">
                                    <MenuCard
                                    key={menu._id}
                                    menu={menu}
                                    />
                                </div>
                            ))
                        ) : (
                            <Loader/>
                        )
                    }
                    </div>
                </Tab>
                <Tab eventKey="Bebidas" title="Bebidas">
                    <div className="row d-flex mx-auto w-100">
                    {
                         bebidas.length !== 0 ? (
                            bebidas.map((menu) => (
                                <div className="col d-flex justify-content-center p-4">
                                    <MenuCard
                                    key={menu._id}
                                    menu={menu}
                                    />
                                </div>
                            ))
                        ) : (
                            <Loader/>
                        )
                    }
                    </div>
                </Tab>
            </Tabs>
        </>
    );
}

export default MenuSection;