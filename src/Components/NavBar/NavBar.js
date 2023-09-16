import "./NavBar.css"

const NavBar = (props) => {
  return (
    <div className="collapse navbar-collapse flex-grow-0 head-navbar" id="navbarSupportedContent">
      {props.children}
    </div>
  )
}

export default NavBar
