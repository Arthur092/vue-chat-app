<template>
  <div class="thread-section">
    <div class="thread-count">
      <span v-show="unreadCount"> Unread threads: {{ unreadCount }} </span>
    </div>
    <ul class="thread-list">
      <Thread
        v-for="thread in threads"
        :key="thread.id"
        :thread="thread"
        :active="thread.id === currentThread.id"
        @switch-thread="switchThread"
      >
      </Thread>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Thread from './Thread';

export default {
  name: 'ThreadSection',
  components: { Thread },
  computed: mapGetters(['threads', 'currentThread', 'unreadCount']),
  methods: mapActions(['switchThread']),
};
</script>
