import React from 'react';
import logoWhite from '../../assets/sp-labs-white.svg';
import Anchor from '../components/Anchor';

export default function Header() {
  const navAnchors = ['Cases', 'Contato'];
  return (
    <header>
      <a href="#">
        <img src={logoWhite} alt="SP Labs Logo" />
      </a>
      <nav>
        <ul>
          {navAnchors.map((anchor) => (Anchor(anchor)))}
        </ul>
      </nav>
    </header>
  );
}
