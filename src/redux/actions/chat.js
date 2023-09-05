const OPEN_CHAT = 'OPEN_CHAT';
const CLOSE_CHAT = 'CLOSE_CHAT';
const CLOSING_CHAT = 'CLOSING_CHAT';
const EXPAND_CHAT = 'EXPAND_CHAT';
const COLLAPSE_CHAT = 'COLLAPSE_CHAT';

export const openChat = () => ({
  type: OPEN_CHAT,
});

export const closingChat = () => ({
  type: CLOSING_CHAT,
});

export const closeChat = () => ({
  type: CLOSE_CHAT,
});

export const expandChat = () => ({
  type: EXPAND_CHAT,
});

export const collapseChat = () => ({
  type: COLLAPSE_CHAT,
});
