import { useState } from 'react';
import PropTypes from 'prop-types';
export default function Anchor({ name, link, parent, extraClass }) {
  const [mouseLeft, setMouseLeft] = useState(false);
  const linkTo = link || `#${name.toLowerCase()}`;

  return (
    <li className={`${parent}__li`} onMouseLeave={() => setMouseLeft(true)}>
      <a
        href={linkTo}
        className={`${parent}__anchor no-decoration ${extraClass} ${mouseLeft && `${parent}__anchor__fade`}`}
        target={link ? '_blank' : '_self'} rel="noreferrer"
      >
        {name}
      </a>
    </li>
  );
}

Anchor.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  parent: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
};
