import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import NavigationBar from "../ui/NavigationBar";
import Sidebar from "../ui/Sidebar";

export default function MainLayout() {
  return (
    <div className="px-3">
      <NavigationBar />
      <Sidebar />

      <Outlet />

      <Footer />
    </div>
  );
}
