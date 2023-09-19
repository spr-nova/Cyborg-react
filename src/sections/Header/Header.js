import "./Header.css";
import logo from "../../images/logo.png";
import NavItem from "../../Components/NavItems/NavItem";
import NavBar from "../../Components/NavBar/NavBar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container head-container">
          <Link to={"/Home"}>
            <img src={logo} alt="LOGO" />
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 cyb-ul">
              <NavItem>
                <Link className="a-head active" to={"/"}>
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="a-head" to={"/Browse"}>
                  Browse
                </Link>
              </NavItem>
              <NavItem>
                <Link className="a-head" to={"/Details"}>
                  Details
                </Link>
              </NavItem>
              <NavItem>
                <Link className="a-head" to={"/Streams"}>
                  Streams
                </Link>
              </NavItem>
              <NavItem>
                <Link className="a-head" to={"/Profile"}>
                  Profile
                </Link>
              </NavItem>
            </ul>
          </NavBar>
        </div>
      </nav>
    </>
  );
};
export default Header;
