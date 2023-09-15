import "./NavItems.css"


const NavItem = (props) => {
  return (
    <li className="nav-item ">
        {props.children}
    </li>
  )
}

export default NavItem
