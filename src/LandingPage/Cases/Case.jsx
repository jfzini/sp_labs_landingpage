import React from 'react';
import RegularButton from '../components/RegularButton';

export default function Case({ title, description, link }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <RegularButton content={'Saiba mais'} link={link} />
    </article>
  );
}
