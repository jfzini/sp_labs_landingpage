const OPEN_CHAT = 'OPEN_CHAT';
const CLOSE_CHAT = 'CLOSE_CHAT';
const CLOSING_CHAT = 'CLOSING_CHAT';

export const openChat = () => ({
  type: OPEN_CHAT,
});

export const closingChat = () => ({
  type: CLOSING_CHAT,
});

export const closeChat = () => ({
  type: CLOSE_CHAT,
});
