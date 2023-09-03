import logoWhite from '../../../assets/sp-labs-white.svg';
import { Anchor } from '../components';

export default function Header() {
  const navAnchors = ['Cases', 'Contato'];
  return (
    <header className="header--container">
      <a href="#">
        <img src={logoWhite} alt="SP Labs Logo" className="header__img--logo" />
      </a>
      <nav>
        <ul className="nav__ul">
          {navAnchors.map((anchor) => (
            <Anchor key={anchor} name={anchor} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
