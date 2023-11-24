import React, { useEffect, useS } from "react";
import { useUsers } from "../context/userContext"


const Tables = ({headers, data}) => {
    


    const renderTableHeaders = () => {
        if(!headers || headers.length === 0) {
            return null;
        }

        return (
            <tr>
                <th scope="col">#</th>
            {headers.map(header => (
                <th key={header} scope="col">{header}</th>
            ))}
            </tr>
        );
    };



console.log(data);

    return(
        <table class="table">
            <thead class="thead-dark">
                {renderTableHeaders()}
            </thead>
            <tbody>
                {data.map((user, index) => (
                    <tr key={user._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.nameSurname}</td>
                        <td>{user.email}</td>
                        <td>{user.state}</td>
                        <td>{user.rol}</td>
                        <td>{user.createdAt}</td>
                        <td>{user.updatedAt}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tables;