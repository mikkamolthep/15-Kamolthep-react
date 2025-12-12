import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function User() {
  const [data, setData] = useState([]);
  const [error,setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [view,setView] = useState(true)
  
  useEffect(() => {
    const fetchData = async() =>{
      try {
        const response = await fetch(
          "https://67eca027aa794fb3222e43e2.mockapi.io/members"
        );

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch(error) {
        setError(error)
      } finally {
        setLoading(false);
        console.log("finished")
      }
    };

    const handleView = () => {
      setView(!view);
      if (view) {
        console.logz
      }
    }

    fetchData();
  },[]);


  return (
    <div className="min-h-dvh w-screen flex flex-col items-center bg-gray-100">
      <h1>Generation Thailand</h1>
      <h1>Home-User Section</h1>
      <div className="flex gap-16">
        <button className=" bg-white shadow-lg py-2 px-10 rounded-xl my-5 mx-15">
          <Link to="/user">User Home View</Link>
        </button>
        <button className=" bg-white shadow-lg py-2 px-10 rounded-xl my-5 mx-15">
          <Link to="/admin">Admin Home View</Link>
        </button>
      </div>

      <table>
        <thead className="bg-gray-300">
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((m) => (
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
