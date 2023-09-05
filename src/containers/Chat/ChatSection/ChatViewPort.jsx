import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { lStorage } from '../../../services';
import { ChatContent, ChatPlaceholder } from '../components';

export default function ChatViewPort() {
  const [history, setHistory] = useState([]);
  const { current } = useSelector((state) => state.chatReducer);

  useEffect(() => {
    const messages = lStorage.getFromLocalStorage('chatHistory');
    if (messages) {
      setHistory(messages);
    }
  }, []);

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
