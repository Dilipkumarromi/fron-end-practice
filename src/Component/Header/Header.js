import React from 'react'

export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  header header-light head-shadow">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="nav-brand" href="#">
        <img src="assets/img/logo.png" className="logo" alt="" />
    </a>
  
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 nav-menu" style={{transitionProperty:'none'}}>
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Certificate Verification</a> */}
        </li>

          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>  

        <li className="nav-item">
          <a className="nav-link " href="#">Enrollment</a>
        </li>
        
        
      </ul>
      
       
      <ul className="nav-menu nav-menu-social align-to-right" style={{marginTop:'-20px'}}>
								
        <li className="login_click bg-red">
          <a routerLink="/login">Sign in</a>
        </li>
        <li className="login_click">
          <a href="#" data-toggle="modal" data-target="#signup">Sign up</a>
        </li>
      </ul>
    </div>
  </nav>
    </>
  )
}
