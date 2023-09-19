import { createContext, useContext, useState } from "react";
import {
  createMenuRequest,
  deleteMenuRequest,
  getMenusRequest,
  getMenuRequest,
  updateMenuRequest,
} from "../api/menus";

const MenuContext = createContext();

export const useMenus = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

export function MenuProvider({ children }) {
  const [menus, setMenus] = useState([]);

  const getMenus = async () => {
    const res = await getMenusRequest();
    setMenus(res.data);
  };

  const deleteMenu = async (id) => {
    try {
      const res = await deleteMenuRequest(id);
      if (res.status === 204) setMenus(menus.filter((menu) => menu._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createMenu = async (menu) => {
    try {
      const res = await createMenuRequest(menu);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMenu = async (id) => {
    try {
      const res = await getMenuRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateMenu = async (id, menu) => {
    try {
      await updateMenuRequest(id, menu);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MenuContext.Provider
      value={{
        menus,
        getMenus,
        deleteMenu,
        createMenu,
        getMenu,
        updateMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
