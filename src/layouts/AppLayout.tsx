import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/molecules/Navbar";

const AppLayout = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <Outlet />
          </div>
          <div className="col-2">Basket</div>
        </div>
      </div>
    </Suspense>
  );
};

export default AppLayout;
