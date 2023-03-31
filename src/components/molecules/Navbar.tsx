import { useNavigate } from "react-router-dom";
import NavbarBasket from "../atoms/NavbarBasket";
import SearchInput from "../atoms/SearchInput";
import User from "../atoms/User";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#2A59FE" }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <a
              className="navbar-brand"
              href="javascript:void(0)"
              style={{ paddingRight: "10%" }}
              onClick={() => navigate("/")}
            >
              Reduxration
            </a>
          </div>
        </div>
        <SearchInput />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="flex-center navbar-cards" style={{ color: "white" }}>
            <NavbarBasket />
            <User />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
