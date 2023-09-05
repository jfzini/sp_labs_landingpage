import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { lStorage } from '../../../services';
import rollUpIcon from '../../../assets/roll-up-icon.svg';
import ChatContent from './ChatContent';

export default function ChatViewPort() {
  const [history, setHistory] = useState([]);
  const { current, expanded } = useSelector((state) => state.chatReducer);

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
          <div
            className={`chat__history--placeholder chat__history--placeholder${
              expanded ? '-large' : '-small'
            }`}
          >
            <p>
              <span>Role para cima</span>
              <img src={rollUpIcon} />
              <span>para ver o histórico</span>
            </p>
          </div>
          {current.map((message, index) => (
            <ChatContent key={index} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
}
