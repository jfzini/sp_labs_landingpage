import React from 'react';
import Button from '../components/Button';
import Header from './Header';

export default function Hero() {
  return (
    <section className='hero__container'>
      <Header />
      <h1>
        Imagine, crie, implemente e <span>evolua</span>
      </h1>
      <p>Porque não basta resolver apenas os conflitos do mundo do direito.</p>
      <Button content="Inicie a sua jornada" />
    </section>
  );
}
