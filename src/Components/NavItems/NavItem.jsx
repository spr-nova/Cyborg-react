import "./NavItems.css"
import {Link} from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className={props.className}>
        {props.children}
    </li>
  )
}

export default NavItem
