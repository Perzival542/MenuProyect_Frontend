import { useOrders } from "../../context/orderContext";
import { Button, ButtonLink, Card } from "../ui";

export function OrderCard({ order }) {
    const { deleteOrder } = useOrders();

    return (
        <Card>
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{order._id}</h1>
                <div className="flex gap-x-2 items-center">
                    <Button onClick={() => deleteMenu(order._id)}>Delete</Button>
                    <ButtonLink to={`/orders/${order._id}`}>Edit</ButtonLink>
                </div>
            </header>
            <p className="text-slate-300">{order._detail}</p>
            <p className="text-slate-300">{order.menuId}</p>
            <p className="text-slate-300">{order.order_status}</p>
            {/* <img src={menu.menu_img.img} alt={menu.menu_img.title}/> */}
            {/* format date */}
            <p>
                {order.date &&
                new Date(order.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>
        </Card>
    );
}