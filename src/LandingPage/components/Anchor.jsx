import React from 'react';

export default function Anchor({name}) {
  return (
    <li className='nav__li'>
      <a href={`#${name.toLowerCase()}`} className='nav__anchor no-decoration semi-bold'>{name}</a>
    </li>
  );
}
