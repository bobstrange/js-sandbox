/**
 * Pick<T, K>
 * Constructs a type by picking the set of properties `K` from `T`
 */

/***
 * Omit<T, K>
 * Constructs a type by picking all properties from `T` and then removing `K`
 */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreviewPick = Pick<Todo, "title" | "completed">;

const todoPick: TodoPreviewPick = {
  title: "Learn TypeScript",
  completed: false,
};

type TodoPreviewOmit = Omit<Todo, "description">;

const todoOmit: TodoPreviewOmit = {
  title: "Learn TypeScript",
  completed: false,
};
