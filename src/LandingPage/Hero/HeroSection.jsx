import React from 'react';
import RegularButton from '../components/RegularButton';
import Header from './Header';
import '../../styles/Hero.sass';

export default function HeroSection() {
  return (
    <section className="hero__container">
      <Header />
      <div className="hero--content">
        <h1 className="hero--title">
          Imagine, crie, implemente e <span className="bodoni">evolua</span>
        </h1>
        <p className="hero__p">
          Porque não basta resolver apenas os conflitos do mundo do direito.
        </p>
        <RegularButton content="Inicie a sua jornada" />
      </div>
      <span></span>
    </section>
  );
}
