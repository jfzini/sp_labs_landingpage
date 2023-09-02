import React from 'react';
import '../../styles/Form.sass';

export default function InputField({ name, type, placeholder, register, label, required, id }) {
  return (
    <div className="input--container contact__form--field">
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="input"
        required={required ? true : false}
        id={id}
      />
      <label htmlFor={id} className="label">
        {label}
      </label>
    </div>
  );
}
