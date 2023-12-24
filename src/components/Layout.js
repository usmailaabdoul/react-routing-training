import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout() {
  return (
    <div className="h-full min-h-screen w-full flex flex-col items-center bg-dark text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
