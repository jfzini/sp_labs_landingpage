import { useForm } from 'react-hook-form';
import { api, lStorage } from '../../../services';
import ChatInputField from '../components/ChatInputField';
import ChatButton from '../components/ChatButton';
import '../../../styles/Chat.sass';

export default function ChatForm() {
  const { register, handleSubmit, reset } = useForm();

  const submitMessage = async (data) => {
    const userMessage = { sender: 'user', question: data.question };
    lStorage.saveToLocalStorage('chatHistory', userMessage);
    const response = await api.submitMessage(data);
    const botMessage = { sender: 'bot', answer: response.data };
    lStorage.saveToLocalStorage('chatHistory', botMessage);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitMessage)} className="chat__form">
      <ChatInputField register={register} name="question" placeholder="Digite sua dúvida" />
      <ChatButton />
    </form>
  );
}
