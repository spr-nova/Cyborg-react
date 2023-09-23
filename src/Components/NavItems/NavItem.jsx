import "./NavItems.css"


const NavItem = (props) => {
  return (
    <li className={props.className}>
        {props.children}
    </li>
  )
}

export default NavItem
