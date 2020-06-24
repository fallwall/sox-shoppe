import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-left">
      <Link to="/men"> Men </Link>
      <Link to="/women"> Women </Link>
      <Link to="/limited"> Limited </Link>
      <Link to="/kids"> Kids </Link>
      <Link to="/sales"> Sales </Link>
      </div>
      <div className="nav-mid">
        Shoppe
      </div>
      <div className="nav-right">
        Search Product
        Cart
      </div>
    </div>
  )
}

export default Nav;