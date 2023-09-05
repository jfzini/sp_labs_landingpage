import { useState } from 'react';
import { useSelector } from 'react-redux';
import ChatHeader from './ChatHeader';

export default function ChatSection() {
  const { closing, expanded } = useSelector((state) => state.chatReducer);

  return (
    <section
      className={`chat--container ${expanded && 'chat--container--large'} ${
        closing && 'chat--container--closing'
      }`}
    >
      <ChatHeader />
    </section>
  );
}
