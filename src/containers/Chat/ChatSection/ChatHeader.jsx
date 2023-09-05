import chatAvatarLarge from '../../../assets/chat-avatar-large.svg';
import expandChatIcon from '../../../assets/expand-chat.svg';
import collapseChatIcon from '../../../assets/collapse-chat.svg';
import { useSelector, useDispatch } from 'react-redux';
import { collapseChat, expandChat } from '../../../redux/actions';
import '../../../styles/Chat.sass';

export default function ChatHeader() {
  const { expanded } = useSelector((state) => state.chatReducer);
  const dispatch = useDispatch();

  const handleExpand = () => {
    if (expanded) {
      return dispatch(collapseChat());
    }
    return dispatch(expandChat());
  };

  return (
    <header className="chat__header">
      <div className="chat__header--toggle">
        <div className="chat__avatar--large">
          <img src={chatAvatarLarge} alt="avatar chat SP Labs" />
        </div>
        <button
          type="button"
          onClick={() => handleExpand()}
          className="chat__header--toggle__button"
        >
          <span>{expanded ? 'Recolher' : 'Expandir'}</span>
          <img
            src={expanded ? collapseChatIcon : expandChatIcon}
            alt={`${expanded ? 'recolher' : 'expandir'} chat`}
          />
        </button>
      </div>
      <p className='chat__header--salutation'>🖖 Como posso ajudar?</p>
    </header>
  );
}
