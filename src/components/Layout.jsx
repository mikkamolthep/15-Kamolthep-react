import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />  {/* ที่เอาไว้ปล่อยcomponent viewsต่างๆ */}
      </div>
    </div>
  )
}

