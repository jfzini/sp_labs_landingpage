import PropTypes from 'prop-types';
export default function ChatInputField({ register, name, placeholder }) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      {...register(name)}
      className="chat__input"
    />
  );
}

ChatInputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};
