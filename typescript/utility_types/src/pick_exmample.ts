/**
 * Pick<T, K>
 * Constructs a type by picking the set of properties `K` from `T`
 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Learn TypeScript",
  completed: false,
};
