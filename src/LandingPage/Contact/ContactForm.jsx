import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../../styles/Form.sass';
import InputField from '../components/InputField';
import RegularButton from '../components/RegularButton';
import chevronDown from '../../assets/chevron-down.svg';
import TextArea from '../components/TextArea';
import SelectField from '../components/SelectField';
import CheckboxField from '../components/CheckboxField';

export default function ContactForm() {
  const { register, handleSubmit, reset, formState } = useForm({
    mode: 'all', // selected 'all' in this case since its a simple form, but can change to other modes if performance is an issue
    defaultValues: {
      name: '',
      email: '',
      segment: 'no-segment',
      message: '',
      terms: false,
    },
  });

  const { isSubmitting, isSubmitSuccessful } = formState;

  const submitForm = async (data) => {
    const response = await axios.post('https://sp-labs.vercel.app/api/contact', {
      ...data,
    });
    reset();
    console.log(response);
  };

  const options = [
    {
      value: 'no-segment',
      label: 'Seu segmento',
    },
    {
      value: 'segment1',
      label: 'Segmento 1',
    },
    {
      value: 'segment2',
      label: 'Segmento 2',
    },
  ];

  return (
    <form onSubmit={handleSubmit(submitForm)} className="contact__form">
      <InputField
        name="name"
        type="text"
        placeholder="Insira seu nome"
        register={register}
        label="Seu nome"
        required
        id="name-input"
      />
      <InputField
        name="email"
        type="email"
        placeholder="Ex: email@email.com"
        register={register}
        label="Seu e-mail"
        id="email-input"
      />
      <SelectField register={register} options={options} name="segment" />
      <TextArea
        register={register}
        placeholder="Fale um pouco sobre o seu negócio"
        name="message"
        id="message-textarea"
      />
      <CheckboxField
        register={register}
        name="terms"
        id="terms-checkbox"
        required
        label="Declaro que conheço a Política de Privacidade e autorizo a utilização das minhas informações pelo SP Labs"
      />
      <RegularButton
        content={isSubmitting ? 'Enviando' : isSubmitSuccessful ? 'Enviado' : 'Enviar'}
        aditionalClass="w100"
        type="submit"
      />
    </form>
  );
}
