import "./Header.css";
import logo from "../../images/logo.png";
import NavItem from "../../Components/NavItems/NavItem";
import NavBar from "../../Components/NavBar/NavBar";
import {Link} from "react-router-dom";
import { useState } from "react";

const Header = () => {
  
  
  
  let nav = ["Home","Most Popular","Details","Streams","Profil",]
  let navLi = ["/","/Most-Popular","/Details","/Streams","/Profil",]
  
  
  
  const [appState, setAppState] = useState({
    activeObject: 1,
    objects: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5},]
  });

  function toggleActiveStyle (index){
    
    if(appState.activeObject === appState.objects[index] ){
      return "a-head active"
    }else {
      return "a-head inactive"
    }
  }
  function toggleActive (index){
    setAppState({...appState, activeObject: appState.objects[index]})
  }









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
              { appState.objects.map((elements, index) =>(
                  console.log(elements,index),
                <NavItem key={index} className="nav-item nav-comp">
                  <Link to={navLi[index]}>
                    <span onClick={() => {toggleActive(index)}} className={toggleActiveStyle(index)}>{nav[index]}</span>
                  </Link>
                </NavItem>
              ))}
    
            </ul>
          </NavBar>
        </div>
      </nav>
    </>
  );
};
export  {Header};
