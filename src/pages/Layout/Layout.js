import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import logo from '../../assets/images/logobase.jpg'; // Tell webpack this JS file uses this image

const Layout = () => {

  const [isActive, setisActive] = React.useState(false);
  return (
    <>
      <div className='border-bottom'>
        <nav className="navbar container-simil-bootstrap" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/" >
              <img src={logo} alt="Logo Dra. Shule" />
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
              <a className="navbar-item" href="/">
                Home
              </a>
              <a className="navbar-item" href="/blog">
                Blog
              </a>
              <a className="navbar-item" href="/contact">
                Contactanos
              </a>
            </div>
          </div>

        </nav>
      </div>


      <Outlet />
    </>
  )
};
export default Layout;