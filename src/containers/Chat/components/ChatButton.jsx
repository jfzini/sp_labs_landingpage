import { useState } from 'react';
import arrowSendIcon from '../../../assets/arrow-send-chat.svg';

export default function ChatButton() {
  const [mouseLeft, setMouseLeft] = useState(false);

  return (
    <button type="submit" className="chat__button" onMouseLeave={() => setMouseLeft(true)}>
      <img
        src={arrowSendIcon}
        alt="enviar mensagem"
        className={`chat__button__img ${mouseLeft ? 'bounce-back' : ''}`}
      />
    </button>
  );
}
