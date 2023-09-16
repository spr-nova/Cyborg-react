import "./NavBar.css"

const NavBar = (props) => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {props.children}
    </div>
  )
}

export default NavBar
