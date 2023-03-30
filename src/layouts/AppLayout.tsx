import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/molecules/Navbar";

const AppLayout = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </Suspense>
  );
};

export default AppLayout;
