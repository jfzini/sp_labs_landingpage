import logoWhite from '../../../assets/sp-labs-white.svg';
import { Anchor } from '../components';

export default function Header() {
  const navAnchors = ['Cases', 'Contato'];
  return (
    <header className="header--container">
      <a href="#">
        <img src={logoWhite} alt="SP Labs Logo" className="img--logo" />
      </a>
      <nav>
        <ul className="header__ul">
          {navAnchors.map((anchor) => (
            <Anchor key={anchor} name={anchor} parent='header' extraClass='semi-bold'/>
          ))}
        </ul>
      </nav>
    </header>
  );
}
