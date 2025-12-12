import { createBrowserRouter, RouterProvider } from "react-router-dom"; // กำหนดเส้นทางจาก react-router-dom , component ที่เอาไว้ใช้
import Layout from "./components/Layout";
import Home from "./Views/Home";
import Owner from "./Views/Owner";
import User from "./Views/User";
import Admin from "./Views/Admin";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex flex-col justify-center items-center bg-red-300">
        <h1 className="font-bold">404 - Page Not Found 😭😭</h1>
      </div>
    ),
    children: [
      {path: "/",element: <Home />},
      {path: "owner",element: <Owner />},
      {path: "user",element: <User />},
      {path: "admin",element: <Admin />}
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
