import { Link } from "react-router-dom";
import { members } from "../components/MembersData";

export default function User() {
  return (
    <div className="min-h-dvh w-screen flex flex-col items-center">
      <h1>Generation Thailand</h1>
      <h1>Home-User Section</h1>
      <div className="flex gap-16">
        <button className="">
          <Link to="/user">User Home View</Link>
        </button>
        <button>
          <Link to="/admin">Admin Home View</Link>
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.lastname}</td>
              <td>{m.position}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
