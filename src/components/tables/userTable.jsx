import React, { useEffect } from "react";
import { useUsers } from "../../context/userContext";

const UserTable = () => {
    const { users, getUsers} = useUsers();

    useEffect(() => {
        getUsers()
        .catch((error) => {
            console.log("Error al recuperar los usuarios: ", error);
        });
    }, [])


    return(
        <table class="table text-center table-dark table-hover table-responsive">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre y Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Fecha de Creación</th>
                    <th scope="col">Fecha de Actualización</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.nameSurname}</td>
                        <td>{user.email}</td>
                        <td>{user.state}</td>
                        <td>{user.rol}</td>
                        <td>{user.createdAt}</td>
                        <td>{user.updatedAt}</td>
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

export default UserTable;