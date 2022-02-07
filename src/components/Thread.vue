<template>
  <li
    class="thread-list-item"
    :class="{ active: active, unread: thread.lastMessage.isRead !== true }"
    @click="switchThread"
  >
    <h5 class="thread-name">{{ thread.name }}</h5>
    <div class="thread-time">
      {{ thread.lastMessage.timestamp | time }}
    </div>
    <div class="thread-last-message">
      {{ thread.lastMessage.text }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'Thread',
  props: {
    thread: Object,
    active: Boolean,
  },
  methods: {
    switchThread() {
      this.$emit('switch-thread', this.thread.id);
    },
  },
};
</script>
