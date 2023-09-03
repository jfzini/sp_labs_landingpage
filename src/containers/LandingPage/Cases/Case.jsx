import PropTypes from 'prop-types';
import { SmallButton } from '../components';

export default function Case({ title, description, link }) {
  return (
    <article className="article--container">
      <h3 className="article--title extra-bold">{title}</h3>
      <p className="paragraph soft-black">{description}</p>
      <SmallButton link={link} />
    </article>
  );
}

Case.propTypes = {
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
};
