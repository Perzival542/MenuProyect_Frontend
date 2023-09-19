import { useUsers } from "../../context/usersContext";
import { Button, ButtonLink, Card } from "../ui";

export function UserCard({ user }) {
  const { deleteUser } = useUsers();

  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteTask(user._id)}>Delete</Button>
          <ButtonLink to={`/users/${user._id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300">{user.nameSurname}</p>
      <p className="text-slate-300">{user.email}</p>
      <p className="text-slate-300">{user.nameSurname}</p>
      <p className="text-slate-300">{user.password}</p>
      <p className="text-slate-300">{user.state}</p>
      <p className="text-slate-300">{user.rol}</p>
      <p className="text-slate-300">{user.createdAt}</p>
      <p className="text-slate-300">{user.updatedAt}</p>
      {/* format date */}
      {/* <p>
        {task.date &&
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
