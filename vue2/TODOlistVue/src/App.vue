<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap');

body {
  margin: 0;
  padding: 0;
  background-color: azure;
}
</style>
