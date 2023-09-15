import "./Header.css";
import logo from "../../images/logo.png"
import NavItem from "../../Component/NavItems/NavItem";
import Form from "../../Component/Form/Form";
import NavBar from "../../Component/NavBar/NavBar";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark cyborg-navbar">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 cyb-ul">
              <NavItem>
                <a className="active " aria-current="page" href="#Home">
                  Home
                </a>
              </NavItem>
              <NavItem>
                <a className="" href="#Browse">
                  Browse
                </a>
              </NavItem>
              <NavItem>
                <a
                  className=""
                  href="#Details"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >
                  Details
                </a>
              </NavItem>
              <NavItem>
                <a href= "#Streams" className="">
                  Streams
                </a>
                </NavItem>
              <NavItem>
                <a href="#Profile" className="">
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
