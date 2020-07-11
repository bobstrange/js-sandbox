/**
 * Readonly<T>
 * Constructs a type with all properties of `T` set to `readonly`, meaning the properties of the constructed type cannot be reassigned
 */

interface ExampleTodo {
  title: string;
}

const todo: Readonly<ExampleTodo> = {
  title: "Learn TypeScript",
};

todo.title = "Test"; // Error: cannot assign to 'title', because it is a readonly property.
