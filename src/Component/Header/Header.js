import "./Header.css";
import logo from "../../images/logo.png"
import NavItem from "../NavItems/NavItem";
import Form from "../Form/Form";
import NavBar from "../NavBar/NavBar";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="LOGO" />
          </a>
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
          <NavBar>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem>
                <a className="nav-link text-light active" aria-current="page" href="#Home">
                  Home
                </a>
              </NavItem>
              <NavItem>
                <a className="nav-link text-light" href="#Browse">
                  Browse
                </a>
              </NavItem>
              <NavItem>
                <a
                  className="nav-link text-light"
                  href="#Details"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >
                  Details
                </a>
              </NavItem>
              <NavItem>
                <a href= "#Streams" className="nav-link text-light" aria-disabled="true">
                  Streams
                </a>
                </NavItem>
              <NavItem>
                <a href="#Profile" className="nav-link text-light" aria-disabled="true">
                  Profile
                </a>
              </NavItem>
            </ul>
            <Form/>
          </NavBar>
        </div>
      </nav>
    </>
  );
};
export default Header;
