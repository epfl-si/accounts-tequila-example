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
              <Link className="dropdown-item" to="/doc/README.md">Readme</Link>
              <Link className="dropdown-item" to="/doc/TEQUILA_ATTRIBUTES.md">Tequila attributes</Link>
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