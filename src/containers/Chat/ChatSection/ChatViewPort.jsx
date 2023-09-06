import { useSelector } from 'react-redux';
import { ChatContent, ChatPlaceholder } from '../components';

export default function ChatViewPort() {
  const { current, history } = useSelector((state) => state.chatReducer);

  return (
    <div className="chat__viewport--container">
      <div>
        <div className="chat__viewport">
          {history.map((message, index) => (
            <ChatContent key={index} message={message} />
          ))}
          {history.length > 0 && <ChatPlaceholder />}
          {current.map((message, index) => (
            <ChatContent key={index} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
}
