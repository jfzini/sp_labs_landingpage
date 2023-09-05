import PropTypes from 'prop-types';
import '../../../styles/Button.sass';

export default function RegularButton({ content, aditionalClass, type, onClick }) {
  return (
    <button
      className={`button button--regular semi-bold ${aditionalClass}`}
      type={type ? type : 'button'}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

RegularButton.propTypes = {
  aditionalClass: PropTypes.string,
  content: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
