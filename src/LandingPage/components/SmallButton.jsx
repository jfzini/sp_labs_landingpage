import PropTypes from 'prop-types';
import arrowRightSvg from '../../assets/arrow-right.svg';

export default function SmallButton({ link, content }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="no-decoration">
      <div className="button button--small semi-bold">
        <span>{content ? content : 'Saiba mais'}</span>
        <img src={arrowRightSvg} alt="arrow-right" />
      </div>
    </a>
  );
}

SmallButton.propTypes = {
  content: PropTypes.string,
  link: PropTypes.string,
};
