import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 shadow-md bg-gray-300">
      <ul className="flex gap-8 justify-end text-black mr-8">
        <li className="font-bold hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="font-bold hover:underline">
          <Link to="/owner">Owner</Link>
        </li>
      </ul>
    </nav>
  );
}
