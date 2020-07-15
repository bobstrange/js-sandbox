/**
 * Partial<T>
 * Constructs a type with all properties of `T` set to optional.
 */
interface SampleTodo {
  title: string;
  description: string;
}

function updateTodo(todo: SampleTodo, fieldsToUpdate: Partial<SampleTodo>) {
  /**
   * Partial<Todo> returns a type which fields are optional
   * { title?: string | undefined, description?: string | undefined}
   */
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "Learn TypeScript",
  description: "Read Utility Types chapter",
};

const todo2 = updateTodo(todo1, {
  description: "Read Advanced Types chapter",
});

/**
 * Required<T>
 * Constructs a type consisting of all properties of `T` set to required
 */

const todo3: Required<Partial<SampleTodo>> = {
  title: "Test JavaScript",
  description: "Write jest test",
};
