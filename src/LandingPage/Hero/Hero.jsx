import React from 'react';
import Button from '../components/Button';
import Header from './Header';

export default function Hero() {
  return (
    <section className='hero__container'>
      <Header />
      <div className='hero--content'>
        <h1 className='hero--title'>
          Imagine, crie, implemente e <span className='bodoni'>evolua</span>
        </h1>
        <p className='hero__p'>Porque não basta resolver apenas os conflitos do mundo do direito.</p>
        <Button content="Inicie a sua jornada" />
      </div>
      <span></span>
    </section>
  );
}
