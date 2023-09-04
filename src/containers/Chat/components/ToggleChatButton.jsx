import { useDispatch, useSelector } from 'react-redux';
import { openChat, closeChat, closingChat } from '../../../redux/actions';
import '../../../styles/Chat.sass';
import OpenChatIcon from './OpenChatIcon';
import CloseChatIcon from './CloseChatIcon';

export default function ToggleChatButton() {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.chatReducer);

  const toggleChat = async () => {
    if (open) {
      dispatch(closingChat())
      await setTimeout(() => {
        dispatch(closeChat());
      }, 300);
      return
    }
    return dispatch(openChat());
  };

  return (
    <button className="chat__button--toggle" type="button" onClick={() => toggleChat()}>
      {open ? <OpenChatIcon /> : <CloseChatIcon />}
    </button>
  );
}
