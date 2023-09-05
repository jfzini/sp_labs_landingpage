import rollUpIcon from '../../../assets/roll-up-icon.svg';
import { useSelector } from 'react-redux';

export default function ChatPlaceholder() {
  const { expanded } = useSelector((state) => state.chatReducer);

  return (
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
  );
}
