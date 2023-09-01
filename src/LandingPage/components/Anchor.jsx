import React from 'react';

export default function Anchor(name) {
  return (
    <li>
      <a href={`#${name.toLowerCase()}`}>{name}</a>
    </li>
  );
}
