import React from 'react';
import logoWhite from '../../assets/sp-labs-white.svg';
import Anchor from '../components/Anchor';

export default function Header() {
  const navAnchors = ['Cases', 'Contato'];
  return (
    <header className='header__container'>
      <a href="#">
        <img src={logoWhite} alt="SP Labs Logo" className="header__img--logo" />
      </a>
      <nav>
        <ul className='nav__ul'>{navAnchors.map((anchor) => Anchor(anchor))}</ul>
      </nav>
    </header>
  );
}
