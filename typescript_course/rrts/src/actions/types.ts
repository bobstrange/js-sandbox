import { FetchTodosAction, DeleteTodoAction } from './todos'

export enum ActionTypes {
  FetchTodos = 'FETCH_TODOS',
  DeleteTodo = 'DELETE_TODO'
}

export type Action = FetchTodosAction | DeleteTodoAction
