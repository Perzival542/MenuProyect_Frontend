import { useEffect } from "react";
import { useOrders } from "../context/orderContext";
import { OrderCard } from "../components/orders/OrdersCard";
import { ImFileEmpty } from "react-icons/im";

export function OrdersPage() {
  const { orders, getOrders } = useOrders();

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      {orders.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No orders yet.
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {orders.map((order) => (
          <OrderCard task={order} key={order._id} />
        ))}
      </div>
    </>
  );
}
