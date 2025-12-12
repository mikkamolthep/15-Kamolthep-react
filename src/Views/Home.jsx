import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-dvh w-screen flex flex-col items-center">
      <h1>Generation Thailand</h1>
      <h1>React - Assesment</h1>
      <div className="flex gap-16">
        <button>
          <Link to="/user">User Home View</Link>
        </button>
        <button>
          <Link to="/admin">Admin Home View</Link>
        </button>
      </div>
    </div>
  );
}
