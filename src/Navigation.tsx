import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./pages/HomePage"));
const Detail = lazy(() => import("./pages/DetailPage"));
const AppLayout = lazy(() => import("./layouts/AppLayout"));

const Navigation = () => {
  return (
    <Routes>
      <Route path="" element={<AppLayout />}>
        <Route path="" element={<Home />} />
        <Route path=":id" element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
