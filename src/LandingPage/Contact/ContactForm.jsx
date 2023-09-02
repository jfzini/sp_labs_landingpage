import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../../styles/Form.sass';
import InputField from '../components/InputField';

export default function ContactForm() {
  const { register, handleSubmit, formState } = useForm({
    mode: 'all', // selected 'all' in this case since its a simple form, but can change to other modes if performance is an issue
  });

  const { isSubmitting, isSubmitSuccessful } = formState;

  const submitForm = async (data) => {
    // const response = await axios.post('https://sp-labs.vercel.app/api/contact', {
    //   ...data,
    // });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className='contact__form'>
      <InputField
        name="name"
        type="text"
        placeholder="Seu nome"
        register={register}
        label="Nome"
        required
        id="name-input"
      />
      <InputField
        name="email"
        type="email"
        placeholder="Seu email"
        register={register}
        label="E-mail"
        id="email-input"
      />
      <div className="input--container contact__form--field">
        <select {...register('segment')}>
          <option value="no-segment">Seu segmento</option>
          <option value="segment1">Segmento 1</option>
          <option value="segment2">Segmento 2</option>
        </select>
      </div>
      <div className="input--container contact__form--field">
        <textarea
          {...register('message')}
          placeholder="Fale um pouco sobre o seu negócio"
        ></textarea>
      </div>
      <div className="input--container contact__form--field">
        <input
          {...register('terms')}
          type="checkbox"
          id="terms-checkbox"
          className="input"
          required
        />
        <label htmlFor="terms-checkbox" className="">
          Declaro que conheço a Política de Privacidade e autorizo a utilização das minhas
          informações pelo SP Labs
        </label>
      </div>
      <button type="submit" className='button button--regular w100'>
        {isSubmitting ? 'Enviando' : isSubmitSuccessful ? 'Enviado' : 'Enviar'}
      </button>
    </form>
  );
}
