import { NavLink } from 'react-router-dom';
import React from 'react';

const Header = ():JSX.Element => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">People</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/starships">StarShips</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/planets">Planets</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
