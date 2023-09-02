import React from 'react';
import arrowRightSvg from '../../assets/arrow-right.svg';

export default function SmallButton({ link, content }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='no-decoration'>
      <div className="button button--small semi-bold">
        <span>{content ? content : 'Saiba mais'}</span>
        <img src={arrowRightSvg} alt="arrow-right" />
      </div>
    </a>
  );
}
