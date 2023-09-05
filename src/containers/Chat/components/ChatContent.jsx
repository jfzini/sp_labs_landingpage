import PropTypes from 'prop-types';
import chatAvatarSmall from '../../../assets/chat-avatar-small.svg';

export default function ChatContent({ message }) {
  if (message.sender === 'user') {
    return <p className="chat__message--user">{message.question}</p>;
  }
  if (message.sender === 'bot') {
    return (
      <div className="chat__message--bot">
        <img src={chatAvatarSmall} alt="avatar sp labs" />
        <p>{message.answer}</p>
      </div>
    );
  }
  return <p className="chat__message--date">{message}</p>;
}

ChatContent.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      answer: PropTypes.string,
      question: PropTypes.string,
      sender: PropTypes.string,
    }),
  ]),
};
