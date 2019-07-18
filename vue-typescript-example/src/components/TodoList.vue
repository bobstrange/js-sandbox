<script lang="ts">
import Vue from 'vue'
export type Todo = {
  id: string,
  task: string,
  done: boolean
}

export type Data = {
  firstName: string,
  lastName: string,
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
      firstName: 'Taro',
      lastName: 'Yamada',
      todos: []
    }
  }
})
</script>
