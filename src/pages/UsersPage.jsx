import { useEffect } from "react";
import { useUsers } from "../context/usersContext";
import { UserCard } from "../components/users/UsersCard";
import { ImFileEmpty } from "react-icons/im";

export function UsersPage() {
  const { users, getUsers } = useUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No users yet.
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {users.map((user) => (
          <UserCard task={user} key={user._id} />
        ))}
      </div>
    </>
  );
}
