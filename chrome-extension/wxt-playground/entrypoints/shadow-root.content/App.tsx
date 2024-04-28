import { useState } from "react";
import "./App.module.css";

export default () => {
  const [count, setCount] = useState(1);
  const increment = () => setCount((count) => count + 1);

  return (
    <div>
      <h1>Shadow Root Example</h1>
      <p>This is not affected by the page's style</p>

      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
