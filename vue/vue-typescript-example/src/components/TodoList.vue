<template>
  <div class="todos">
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoItem, { Todo } from './TodoItem.vue'

export type Data = {
  todos: Todo[]
}

export default Vue.extend({
  // Without type assertion

  // data() {
  //   return {
  //     firstName: '',
  //     lastName: '',
  //     doneTodos: null,
  //     todos: []
  //   }
  // }

  // With type assertion

  // data() {
  //   return {
  //     firstName: '',
  //     lastName: '',
  //     doneTodos: null as null | boolean,
  //     todos: [] as {
  //       id: string,
  //       task: string,
  //       done: boolean
  //     }[]
  //   }
  // }

  // With type annotation

  data(): Data {
    return {
      todos: [] // (property) todos: Todo[]
    }
  },
  components: {
    TodoItem
  }
})
</script>
