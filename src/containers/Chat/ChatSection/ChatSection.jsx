import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ChatSection() {
  const [expanded, setExpanded] = useState(false);

  const { closing } = useSelector((state) => state.chatReducer);

  return (
    <section
      className={`chat--container ${
        expanded ? 'chat--container--large' : 'chat--container--small'
      } ${closing && 'chat--container--closing'}`}
    ></section>
  );
}
