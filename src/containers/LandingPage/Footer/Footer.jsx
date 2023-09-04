import logoBlack from '../../../assets/sp-labs-black.svg';
import { Anchor } from '../components';
import '../../../styles/Footer.sass';

export default function Footer() {
  const SPAnchorsData = [
    { name: 'Site', link: 'https://www.semprocesso.com.br/' },
    { name: 'Produtos', link: 'https://www.semprocesso.com.br/#produtos' },
    { name: 'Blog', link: 'https://www.semprocesso.com.br/blog/' },
  ];

  return (
    <footer className="page-padding section--container flex-col footer--container">
      <div className="footer--content">
        <img src={logoBlack} alt="SP Labs logo" className="img--logo" />
        <nav className="footer__nav">
          <ul className="footer__ul flex-col">
            <p className="footer__subtitle">SP Labs</p>
            <Anchor
              name="Política de Privacidade"
              link="https://comacordo.com.br/politica-de-privacidade"
              parent="footer"
            />
          </ul>
          <ul className="footer__ul flex-col">
            <p className="footer__subtitle">Sem Processo</p>
            {SPAnchorsData.map(({ name, link }) => (
              <Anchor name={name} link={link} parent="footer" key={name} />
            ))}
          </ul>
        </nav>
      </div>
      <hr className="footer__hr" />
      <p className="footer--cr">SP Labs 2023. Feito por João Felipe Zini Hespanhol</p>
    </footer>
  );
}
