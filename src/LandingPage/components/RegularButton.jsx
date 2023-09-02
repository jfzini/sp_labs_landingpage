import React from 'react';
import '../../styles/Button.sass';

export default function RegularButton({ content }) {
  return <button className="button button--regular semi-bold">{content}</button>;
}
