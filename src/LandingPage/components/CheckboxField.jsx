import PropTypes from 'prop-types';
export default function CheckboxField({ register, name, id, required, label }) {
  return (
    <div className="form__input--container contact__form--field">
      <input
        {...register(name)}
        type="checkbox"
        id={id}
        className="form__checkbox"
        required={required ? true : false}
      />
      <p className="form__checkbox--declaration">
        <label htmlFor="terms-checkbox">{label}</label>
      </p>
    </div>
  );
}

CheckboxField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
