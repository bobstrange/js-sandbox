import { useState } from "react";
import { browser } from "wxt/browser";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState<string | undefined>();

  return (
    <>
      <div>
        <label htmlFor="message">Message: </label>
        <input
          type="text"
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={async () => {
            const res = await browser.runtime.sendMessage(message);
            setResponse(res);
          }}
        >
          send message
        </button>
        <div>
          <h2>Response</h2>
          <p>{response ?? "N/A"}</p>
        </div>
      </div>
    </>
  );
}

export default App;
