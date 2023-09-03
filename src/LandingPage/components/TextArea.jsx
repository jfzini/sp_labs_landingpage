import PropTypes from 'prop-types';
export default function TextArea({ register, placeholder, name, id }) {
  return (
    <div className="form__input--container contact__form--field" id={id}>
      <textarea {...register(name)} placeholder={placeholder} className="form__textarea"></textarea>
    </div>
  );
}

TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
};
