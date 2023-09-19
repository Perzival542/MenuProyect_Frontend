import { createContext, useContext, useState } from "react";
import {
  deleteUserRequest,
  getUsersRequest,
  getUserRequest,
  updateUserRequest,
} from "../api/users";

const UserContext = createContext();

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await getUsersRequest();
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    try {
      const res = await deleteUserRequest(id);
      if (res.status === 204) setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

//   const createMenu = async (menu) => {
//     try {
//       const res = await createMenuRequest(menu);
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

  const getUser = async (id) => {
    try {
      const res = await getUserRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (id, menu) => {
    try {
      await updateUserRequest(id, menu);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        getUsers,
        deleteUser,
        getUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
