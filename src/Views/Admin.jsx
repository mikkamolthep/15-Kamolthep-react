import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Admin() {
  // const [data,setData] = useState([]);
  // const [name,setname] = useState("");
  // const [lastname,setLastname] = useState("");
  // const [Position,setPosition] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://67eca027aa794fb3222e43e2.mockapi.io/members"
  //       );

  //       if(!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //     }
  //   }
  // })

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

      <form className="my-10">
        <label className="font-bold">Create User Here</label>
        <div>
          <input type="text" placeholder="Name" className="bg-white mr-5 py-1.5 pl-2 rounded-[5px]" required/>
          <input
            type="text"
            placeholder="Last Name"
            className="bg-white mr-5 py-1.5 pl-2 rounded-[5px]" required
          />
          <input type="text" placeholder="Position" className="bg-white mr-5 py-1.5 pl-2 rounded-[5px]" required/>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
