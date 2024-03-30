import { useState } from "react";
import { browser } from "wxt/browser";
import type { Todo } from "../types";
import { sendMessage } from "../messaging";

import "./App.css";

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
            // const res = await browser.runtime.sendMessage({ id });
            // setTodo(res);

            const result = await sendMessage("getTodo", parseInt(id, 10));
            setTodo(result);
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
