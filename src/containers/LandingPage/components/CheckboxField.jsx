import PropTypes from 'prop-types';
export default function CheckboxField({ register, name, id, required, label, errors }) {
  return (
    <div className="form__input--container contact__form--field">
      <input
        {...register(name, {
          required: {
            value: required ? true : false,
            message: 'Para prosseguir, é necessário aceitar os termos',
          }
        })}
        type="checkbox"
        id={id}
        className="form__checkbox"
      />
      <p className="form__checkbox--declaration">
        <label htmlFor="terms-checkbox">{label}</label>
      </p>
      <p className="form__error-message">{errors[name]?.message}</p>
    </div>
  );
}

CheckboxField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.object.isRequired,
};
