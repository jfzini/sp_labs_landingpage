import ChatSection from './ChatSection/ChatSection';
import ToggleChatButton from './components/ToggleChatButton';
import { useSelector } from 'react-redux';

export default function ChatContainer() {
  const { open } = useSelector((state) => state.chatReducer);

  return (
    <>
      <ToggleChatButton />
      {open && <ChatSection />}
    </>
  );
}
