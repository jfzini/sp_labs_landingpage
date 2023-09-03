import PropTypes from 'prop-types';
import chevronDown from '../../../assets/chevron-down.svg';

export default function SelectField({ register, options, name }) {
  return (
    <div className="form__input--container contact__form--field">
      <select {...register(name)} className="form__select">
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <img src={chevronDown} className="form__select--arrow"></img>
    </div>
  );
}

SelectField.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  register: PropTypes.func,
};
