import React from 'react';
import '../../styles/Button.sass';

export default function Button({ content }) {
  return <button className="regular-button">{content}</button>;
}
