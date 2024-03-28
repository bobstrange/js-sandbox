import { useState } from "react";
import { browser } from "wxt/browser";
import "./App.css";

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

function App() {
  const [id, setId] = useState("");
  const [todo, setTodo] = useState<Todo | undefined>();

  return (
    <>
      <div>
        <div className="todo-id-input">
          <label htmlFor="message">Todo ID</label>
          <input
            type="text"
            name="message"
            id="message"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="1"
          />
        </div>

        <button
          onClick={async () => {
            const res = await browser.runtime.sendMessage({ id });
            setTodo(res);
          }}
        >
          Get Todo
        </button>
        <div>{todo?.id ?? "N/A"}</div>
      </div>
    </>
  );
}

export default App;
