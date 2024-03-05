import React, { useEffect, useState } from "react";
import { useUsers } from "../../context/userContext";
import { useAuth } from "../../context/authContext";

const UserTable = () => {
    const { users, getUsers, deleteUser, updateUser } = useUsers();
    const { user } = useAuth();
    const [filteredUserList, setFilteredUserList] = useState([]);
    const [ rootUser, setRootUser ] = useState(false);

    useEffect(() => {
        getUsers()
        .catch((error) => {
            console.log("Error al recuperar los usuarios: ", error);
        });
    }, [])

    useEffect(() => {
        if (Array.isArray(users) && users.length > 0) {
            filterUsersByRole();
        }
    }, [users]);

    const filterUsersByRole = () => {
        if (user && user.rol === "root") {
            setRootUser(true);
            const filteredUsers = users.filter(
                u => u.rol === "client" || u.rol === "admin"
            );
            setFilteredUserList(filteredUsers);
        } else if (user && user.rol === "admin") {
            const filteredUsers = users.filter(u => u.rol === "client");
            setFilteredUserList(filteredUsers);
        }
    };

    const handleDelete = (id) => {
        deleteUser(id);
        console.log("Deleting user:", id);
    }

    const handleDisabled = (id) => {
        console.log("User Disabled: ", id);
    }

    return(
        <table className="table text-center table-dark table-hover table-responsive">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Foto de Perfil</th>
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
                {filteredUserList.map((user, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        {/* <td><img src={user.profile_img.url} width={80} height={80}/></td> */}
                        <td>{user.nameSurname}</td>
                        <td>{user.email}</td>
                        <td>{user.state}</td>
                        <td>{user.rol}</td>
                        <td>{user.createdAt}</td>
                        <td>{user.updatedAt}</td>
                        <td>
                            {rootUser ? (
                                <>
                                    <button className="btn btn-warning m-1" onClick={() => handleDisabled(user._id)}>Desabilitar</button>
                                    <button className="btn btn-danger m-1 text-ligth" onClick={() => handleDelete(user._id)}>Eliminar</button>
                                </>
                            ) : (
                                <button className="btn btn-warning m-1 text-ligth" onClick={() => handleDisabled(user._id)}>Desabilitar</button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable;