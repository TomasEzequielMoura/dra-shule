import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import '../General.css';
import '../General.css';
import logo from '../../assets/images/logobase.jpg'; // Tell webpack this JS file uses this image

const Layout = () => {

  const [isActive, setisActive] = React.useState(false);
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io" >
            <img src={logo} />
          </a>
          <a role="button" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => {
            setisActive(!isActive);
          }} className={`navbar-burger burger ${isActive ? "is-active" : ""}`}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-start">
            <Link to="/">
              <a className="navbar-item">
                Home
              </a>
            </Link>
            <Link to="/Blog">
              <a className="navbar-item">
                Blog
              </a>
            </Link>
            <Link to="/Contact">
              <a className="navbar-item">
                Contactanos
              </a>
            </Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};
export default Layout;