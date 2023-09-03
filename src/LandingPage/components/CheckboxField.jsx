import React from 'react';

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
