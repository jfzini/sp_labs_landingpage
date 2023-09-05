import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { saveChat } from '../../../redux/actions';
import { api, lStorage } from '../../../services';
import ChatInputField from '../components/ChatInputField';
import ChatButton from '../components/ChatButton';
import '../../../styles/Chat.sass';

export default function ChatForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const submitMessage = async (data) => {
    reset();
    const userMessage = { sender: 'user', question: data.question };
    lStorage.saveToLocalStorage('chatHistory', userMessage);
    dispatch(saveChat([userMessage]));
    const response = await api.submitMessage(data);
    const botMessage = { sender: 'bot', answer: response.data };
    dispatch(saveChat([botMessage]));
    lStorage.saveToLocalStorage('chatHistory', botMessage);
  };

  return (
    <form onSubmit={handleSubmit(submitMessage)} className="chat__form">
      <ChatInputField register={register} name="question" placeholder="Digite sua dúvida" />
      <ChatButton />
    </form>
  );
}
