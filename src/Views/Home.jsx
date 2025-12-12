import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-dvh w-screen flex flex-col items-center bg-gray-100">
      <h1>Generation Thailand</h1>
      <h1>React - Assesment</h1>
      <div className="flex gap-16">
        <button className=" bg-white  shadow-lg py-2 px-10 rounded-xl my-5 mx-15">
          <Link to="/user">User Home View</Link>
        </button>
        <button className=" bg-white  shadow-lg py-2 px-10 rounded-xl my-5 mx-15">
          <Link to="/admin">Admin Home View</Link>
        </button>
      </div>
    </div>
  );
}
