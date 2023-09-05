import { useForm } from 'react-hook-form';
import { api, lStorage } from '../../../services';

export default function ChatForm() {
  const { register, handleSubmit, reset } = useForm();

  const submitMessage = async (data) => {
    const userMessage = {sender: 'user', question: data.question};
    lStorage.saveToLocalStorage('chatHistory', userMessage);
    const response = await api.submitMessage(data);
    const botMessage = {sender: 'bot', answer: response.data};
    lStorage.saveToLocalStorage('chatHistory', botMessage);
    reset()
  };

  return (
    <form onSubmit={handleSubmit(submitMessage)}>
      <input
        type="text"
        name="question"
        placeholder='Digite sua dúvida'
        {...register('question')}
      />
      <button type="submit">Enviar</button>
    </form>
  )
}
