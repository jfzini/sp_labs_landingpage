import Header from './Header';
import { RegularButton } from '../components';
import { useDispatch } from 'react-redux';
import { openChat } from '../../../redux/actions';
import '../../../styles/Hero.sass';

export default function HeroSection() {
  const dispatch = useDispatch();
  return (
    <section className="hero--container page-padding">
      <Header />
      <div className="hero--content">
        <h1 className="hero--title">
          Imagine, crie, implemente e <span className="bodoni">evolua</span>
        </h1>
        <p className="paragraph bold">
          Porque não basta resolver apenas os conflitos do mundo do direito.
        </p>
        <RegularButton content="Inicie a sua jornada" onClick={() => dispatch(openChat())} />
      </div>
      <span></span>
    </section>
  );
}
