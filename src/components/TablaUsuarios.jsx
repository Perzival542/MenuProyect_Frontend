import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import '../css/Tablas.css';

const TablaUsuarios = () => {
  const [userList, setUserList] = useState([]);

  const fetchData = async () => {
    try {
      // Realizar una solicitud GET a la dirección del servidor para obtener la lista de usuarios
      const token = document.cookie.split('=')[1]; // Obtener el token de la cookie (ajusta esto según tu configuración)
      const response = await axios.get('http://localhost:3000/api/users', {
        headers: {
          Authorization: `Bearer ${token}`, // Incluir el token en el encabezado de autorización
        },
      });

      setUserList(response.data);
    } catch (error) {
      console.error('Error al obtener la lista de usuarios:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (userId) => {
    const updatedUserList = userList.filter((user) => user.id !== userId);
    setUserList(updatedUserList);
  };

  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre y Apellido</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Rol</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nombre_apellido}</td>
                <td>{user.email}</td>
                <td>{user.state}</td>
                <td>{user.rol}</td>
                <td>
                  <Button onClick={() => handleDelete(user.id)}>Borrar</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuarios;
