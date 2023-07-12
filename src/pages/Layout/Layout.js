import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import logo from '../../assets/images/logobase.jpg'; // Tell webpack this JS file uses this image
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram)

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

            <div className="navbar-end">
              <a className="navbar-item" href="/">
                Inicio
              </a>
              <a className="navbar-item" href="/blog">
                Blog
              </a>
              <a className="navbar-item" href="/contact">
                Contactanos
              </a>
            </div>
            <div className="effect aeneas">
              <div className="buttons">
                <a href="https://instagram.com/align.arg?igshid=NjIwNzIyMDk2Mg==" target="_blank" className="insta" title="Join us on Instagram"><FontAwesomeIcon icon={faInstagram} style={{ color: "white", }} size='lg' /></a>
              </div>
            </div>
          </div>

        </nav>
      </div>


      <Outlet />
    </>
  )
};
export default Layout;