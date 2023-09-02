import React from 'react';
import '../../styles/Button.sass';
import { useNavigate } from 'react-router-dom';

export default function RegularButton({ content, link }) {
  const navigate = useNavigate();

  // although there isn't any real link, its a scalable solution
  const handleNavigate = (link) => {
    if (link) {
      return navigate(link);
    }
    // Redux dispatch
  };

  return (
    <button 
      className={link ? 'button--small' : 'button'}
      onClick={() => handleNavigate(link)}
    >
      {content}
    </button>
  );
}
