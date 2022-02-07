<style src="./css/chat.css"></style>

<template>
  <div id="app" class="chatapp">
    <ThreadSection />
    <MessageSection />
  </div>
</template>

<script>
import store from './store';
import ThreadSection from './components/ThreadSection';
import MessageSection from './components/MessageSection';

export default {
  name: 'App',
  store,
  components: {
    ThreadSection,
    MessageSection,
  },
  created() {
    this.$store.dispatch('getAllMessages');
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
