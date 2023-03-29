import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/molecules/Navbar";

const AppLayout = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Navbar />
      <Outlet />
    </Suspense>
  );
};

export default AppLayout;
