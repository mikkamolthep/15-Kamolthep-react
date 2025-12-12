import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Admin() {
  const membersAPI = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(membersAPI);

        const result = await response.json();
        setMembers(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addMember = async (e) => {
    e.preventDefault();

    const newMember = { name, lastname, position };

    const res = await fetch(membersAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMember),
    });

    const create = await res.json();
    setMembers([...members, create]);

    setName("");
    setLastname("");
    setPosition("");
  };

  const deleteMember = async () => {
    try {
      const response = await fetch(membersAPI, { method: "DELETE" });

      if (!response.ok) {
        throw new Error("Fail");
      }
    } catch (error) {
      console.error("comfirm?", error);
    }
  };

  return (
    <div className="min-h-dvh w-screen flex flex-col items-center bg-gray-100">
      <h1>Generation Thailand</h1>
      <h1>Home-Admin Section</h1>
      <div className="flex gap-16">
        <button className="bg-white shadow-lg py-2 px-10 rounded-xl my-5 mx-15">
          <Link to="/user">User Home View</Link>
        </button>
        <button className="bg-white shadow-lg py-2 px-10 rounded-xl my-5 mx-15">
          <Link to="/admin">Admin Home View</Link>
        </button>
      </div>

      <form onSubmit={addMember} className="my-10">
        <label className="font-bold">Create User Here</label>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="bg-white mr-5 py-1.5 pl-2 rounded-[5px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-white mr-5 py-1.5 pl-2 rounded-[5px]"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Position"
            className="bg-white mr-5 py-1.5 pl-2 rounded-[5px]"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <button
            type="submit"
            className="py-1 px-3 rounded-[5px] text-white bg-violet-600"
          >
            Save
          </button>
        </div>
      </form>

      <table>
        <thead className="bg-gray-300">
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Aciton</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {members.map((m) => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.lastname}</td>
              <td>{m.position}</td>
              <td>
                <button
                  onClick={() => deleteMember(m.id)}
                  className="text-red-500 hover:underline cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
