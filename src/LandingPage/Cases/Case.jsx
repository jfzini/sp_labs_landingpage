import React from 'react';
import RegularButton from '../components/RegularButton';
import SmallButton from '../components/SmallButton';

export default function Case({ title, description, link }) {
  return (
    <article className='article--container'>
      <h3 className='article--title extra-bold'>{title}</h3>
      <p className='paragraph soft-black'>{description}</p>
      <SmallButton link={link} />
    </article>
  );
}
