import PropTypes from 'prop-types';
export default function Anchor({ name }) {
  return (
    <li className="nav__li">
      <a href={`#${name.toLowerCase()}`} className="nav__anchor no-decoration semi-bold">
        {name}
      </a>
    </li>
  );
}

Anchor.propTypes = {
  name: PropTypes.string.isRequired,
};
