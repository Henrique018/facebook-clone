import React from 'react';

import logo from '../../assets/logo.png';
import './Header.styles.css';

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="facebook logo"/>
      <nav>
        <ul>
          <li> Meu Perfil </li>
          <i className="material-icons"> account_circle </i>
        </ul>
      </nav>  
    </header>
  )
}

export default Header;