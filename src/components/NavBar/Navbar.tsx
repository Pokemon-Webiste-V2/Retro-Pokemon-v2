import React, { useState } from 'react';
import '../NavBar/Navbar.css';
import data from '../NavBar/data.json'
import { images } from '../../assets/images/general/index'
//import '../assets/fonts/font-Pkmn.css';
import { Link } from 'react-router-dom';

interface LinkItem {
  text: string;
  direction: string;
}

export default function Navbar() {
  const [links] = useState<LinkItem[]>(data.pages);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  function handleLogin() {
    
  }

  return (
    <div className='navbar-body'>
      <div className='navbar-logo'>
        <img src={images.Logo} alt="Logo" />
      </div>
      <div className='navbar-divider'>
        <ul className='navbar-list' >
          {links.map((item, index) => 
          <li key={index}>
            <Link to={item.direction}>{item.text}</Link>
          </li>
        )}
      </ul>
      </div>
      <div className='navbar-login'>
        {isLogin ? 
        <div className='navbar-login-button'>
          <button onClick={handleLogin}>
            <Link to="/profile">Profile</Link>
          </button>
        </div> : 
        <div className='navbar-login-button'>
          <button onClick={handleLogin}>
            <Link to="/login">Login</Link>
          </button>
        </div>}
      </div>
    </div>
  );
}
