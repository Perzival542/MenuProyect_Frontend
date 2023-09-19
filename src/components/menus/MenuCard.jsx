import { useMenus } from "../../context/menuContext";
import { Button, ButtonLink, Card } from "../ui";

export function MenuCard({ menu }) {
    const { deleteMenu } = useMenus();

    return (
        <Card>
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{menu.menu_name}</h1>
                <div className="flex gap-x-2 items-center">
                    <Button onClick={() => deleteMenu(menu._id)}>Delete</Button>
                    <ButtonLink to={`/tasks/${menu._id}`}>Edit</ButtonLink>
                </div>
            </header>
            <p className="text-slate-300">{menu.menu_detail}</p>
            <p className="text-slate-300">{menu.state}</p>
            <p className="text-slate-300">{menu.menu_price}</p>
            <p className="text-slate-300">{menu.menu_category}</p>
            <img src={menu.menu_img.img} alt={menu.menu_img.title}/>
            {/* format date */}
            {/* <p>
                {menu.date &&
                new Date(task.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p> */}
        </Card>
    );
}