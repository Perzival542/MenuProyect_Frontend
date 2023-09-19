import { useEffect } from "react";
import { useMenus } from "../context/menuContext";
import { MenuCard } from "../components/menus/MenuCard";
import { ImFileEmpty } from "react-icons/im";

export function MenusPage() {
  const { menus, getMenus } = useMenus();

  useEffect(() => {
    getMenus();
  }, []);

  return (
    <>
      {menus.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No menus yet, please add a new menu
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {menus.map((menu) => (
          <MenuCard task={menu} key={menu._id} />
        ))}
      </div>
    </>
  );
}
