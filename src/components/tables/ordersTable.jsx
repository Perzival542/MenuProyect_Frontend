import React, { useEffect } from "react";
import { useOrders } from "../../context/orderContext";

const OrdersTable = () => {
    const { orders, getOrders } = useOrders();

    useEffect(() => {
        getOrders()
        .catch((error) => {
            console.log("Error al recuperar los pedidos: ", error);
        });
    }, [])


    return(
        <table class="table text-center table-dark table-hover table-responsive">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID de Orden</th>
                    <th scope="col">ID del Usuario</th>
                    <th scope="col">ID del menu</th>
                    <th scope="col">Estado de la Orden</th>
                    <th scope="col">Fecha del Pedido </th>
                    <th scope="col">Fecha de Creación</th>
                    <th scope="col">Fecha de Actualización</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{order._id}</td>
                        <td>{order.userId}</td>
                        <td>{order.menuId}</td>
                        <td>{order.order_status}</td>
                        <td>{order.date}</td>
                        <td>{order.createdAt}</td>
                        <td>{order.updatedAt}</td>
                        <td>
                            <button class="btn btn-primary m-1">Modificar</button>
                            <button class="btn btn-danger m-1">Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default OrdersTable;