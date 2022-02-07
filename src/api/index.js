/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const data = require('./mock-data');

const LATENCY = 16;

export function getAllMessages(cb) {
  setTimeout(() => {
    cb(data);
  }, LATENCY);
}

export function createMessage({ text, thread }, cb) {
  const timestamp = Date.now();
  const id = `m_${timestamp}`;
  const message = {
    id,
    text,
    timestamp,
    threadID: thread.id,
    threadName: thread.name,
    authorName: 'Arthur',
  };
  setTimeout(function() {
    cb(message);
  }, LATENCY);
}
