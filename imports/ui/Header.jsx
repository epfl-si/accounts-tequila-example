import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <Link className="navbar-brand" to="/">Home</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto"> 
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Doc
            </a>
            <div className="dropdown-menu" >
              <NavLink className="dropdown-item" to="/doc">Readme</NavLink>                                
              <NavLink className="dropdown-item" to="/TEQUILA_ATTRIBUTES.md">Tequila attributes</NavLink>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/private">Private</a>
          </li>
        </ul>                                  
      </div>
    </header>
  )
}