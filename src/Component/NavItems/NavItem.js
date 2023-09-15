import "./NavItems.css"


const NavItem = (props) => {
  return (
    <li className="nav-item nav-comp">
        {props.children}
    </li>
  )
}

export default NavItem
