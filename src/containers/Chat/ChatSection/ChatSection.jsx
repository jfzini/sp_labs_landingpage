import { useSelector } from 'react-redux';
import ChatHeader from './ChatHeader';
import ChatForm from './ChatForm';
import ChatViewPort from './ChatViewPort';

export default function ChatSection() {
  const { closing, expanded } = useSelector((state) => state.chatReducer);

  return (
    <section
      className={`chat--container ${expanded && 'chat--container--large'} ${
        closing && 'chat--container--closing'
      }`}
    >
      <ChatHeader />
      <ChatViewPort />
      <ChatForm />
    </section>
  );
}
