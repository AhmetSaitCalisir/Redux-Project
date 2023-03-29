import Basket from "../atoms/Basket";
import SearchInput from "../atoms/SearchInput";
import User from "../atoms/User";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#2A59FE" }}
    >
      <div className="container">
        <a
          className="navbar-brand"
          href="javascript:void(0)"
          style={{ paddingRight: "10%" }}
        >
          Eteration
        </a>
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
            <Basket />
            <User />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
