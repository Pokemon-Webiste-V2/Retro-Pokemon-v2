import React from 'react';
import '../Footer/Footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-first-div">
        <p>Other Links</p>
        <a href="https://www.serebii.net/">Serebii</a>
        <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page">
          Bulbapedia
        </a>
      </div>
      <div className="footer-second-div">
        <p>Other Links</p>
        <a href="https://pokemonshowdown.com/">Pokemon ShowDown</a>
        <a href="https://pokemondb.net/">Pokemon DB</a>
      </div>
      <div className="footer-third-div">
        <div className="footer-third-content">
          <p>Pokemon is of ©The Pokemon Company</p>
        </div>
      </div>
    </div>
  );
}
