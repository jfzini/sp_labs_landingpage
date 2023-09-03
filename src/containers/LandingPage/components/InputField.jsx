import PropTypes from 'prop-types';
import '../../../styles/Form.sass';

export default function InputField({ name, type, placeholder, register, label, required, id, errors }) {
  return (
    <div className="form__input--container contact__form--field">
      <input
        {...register(name, {
          required: {
            value: required ? true : false,
            message: `${label} é obrigatório`,
          },
        })}
        type={type}
        placeholder={placeholder}
        className="form__input"
        required={required ? true : false}
        id={id}
      />
      <label htmlFor={id} className="form__label">
        {label}
      </label>
      <p className="form__error-message">{errors[name]?.message}</p>
    </div>
  );
}

InputField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
};
