/* eslint-disable no-use-before-define */
/* eslint-disable arrow-parens */
/* eslint-disable no-param-reassign */
import Vue from 'vue';

export default {
  receiveAll(state, messages) {
    let latestMessage;
    messages.forEach(message => {
      if (!state.threads[message.threadID]) {
        createThread(state, message.threadID, message.threadName);
      }
      if (!latestMessage || message.timestamp > latestMessage.timestamp) {
        latestMessage = message;
      }
      addMessage(state, message);
    });
    setCurrentThread(state, latestMessage.threadID);
  },

  receiveMessage(state, message) {
    addMessage(state, message);
  },

  switchThread(state, id) {
    setCurrentThread(state, id);
  },
};

function createThread(state, id, name) {
  Vue.set(state.threads, id, {
    id,
    name,
    messages: [],
    lastMessage: null,
  });
}

function addMessage(state, message) {
  message.isRead = message.threadID === state.currentThreadID;
  const thread = state.threads[message.threadID];
  if (!thread.messages.some(id => id === message.id)) {
    thread.messages.push(message.id);
    thread.lastMessage = message;
  }
  Vue.set(state.messages, message.id, message);
}

function setCurrentThread(state, id) {
  state.currentThreadID = id;
  if (!state.threads[id]) {
    debugger;
  }
  state.threads[id].lastMessage.isRead = true;
}
