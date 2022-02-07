/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable arrow-parens */
/* eslint-disable no-confusing-arrow */
export const threads = state => state.threads;

export const currentThread = state =>
  state.currentThreadID ? state.threads[state.currentThreadID] : {};

export const currentMessages = state => {
  const thread = currentThread(state);
  return thread.messages ? thread.messages.map(id => state.messages[id]) : [];
};

export const unreadCount = ({ threads }) => {
  if (!threads) {
    return 0;
  }
  return Object.keys(threads).reduce((count, id) => {
    return threads[id].lastMessage.isRead ? count : count + 1;
  }, 0);
};

export const sortedMessages = (state, getters) => {
  const messages = getters.currentMessages;
  return messages.slice().sort((a, b) => a.timestamp - b.timestamp);
};
