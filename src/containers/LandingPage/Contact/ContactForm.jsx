import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import '../../../styles/Form.sass';
import { api } from '../../../services';
import { InputField, RegularButton, TextArea, SelectField, CheckboxField } from '../components';
import { openModal } from '../../../redux/actions';

export default function ContactForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      segment: 'no-segment',
      message: '',
      terms: false,
    },
  });

  const { isSubmitSuccessful, errors } = formState;

  const submitForm = async (data) => {
    await api.submitForm(data);
    const name = getValues('name');
    dispatch(openModal(name));
    reset();
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
        errors={errors}
      />
      <InputField
        name="email"
        type="email"
        placeholder="Ex: email@email.com"
        register={register}
        label="Seu e-mail"
        id="email-input"
        errors={errors}
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
        label="Declaro que conheço a Política de Privacidade e autorizo a utilização das minhas informações pelo SP Labs"
        errors={errors}
        required
      />
      <RegularButton
        content={isSubmitSuccessful ? 'Enviado' : 'Enviar'}
        aditionalClass="w100"
        type="submit"
      />
    </form>
  );
}
