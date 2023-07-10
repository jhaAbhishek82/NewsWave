import React from 'react'

import {Link} from  "react-router-dom";

 const NavBar = ()=> {
 

  
    return (
      <div>
        <nav className="navbar fixed-top  navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NawsWave</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-Link mx-3" aria-current="page" style={{ color: '#FFF' }} to="/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <aclassName="nav-a" to="/about">About</aclassName=>
        </li> */}
        <li className="nav-item">
          <Link className="nav-Link mx-3" style={{ color: '#FFF' }} to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link mx-3" style={{ color: '#FFF' }} to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link mx-3" style={{ color: '#FFF' }} to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link mx-3" style={{ color: '#FFF' }} to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link mx-3" style={{ color: '#FFF' }} to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link mx-3" style={{ color: '#FFF' }} to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link mx-3" style={{ color: '#FFF' }} to="/technology">Technology</Link>
        </li>
       
      </ul>
      
      
    </div>
  </div>
</nav>
      </div>
    )
  
}

export default NavBar
