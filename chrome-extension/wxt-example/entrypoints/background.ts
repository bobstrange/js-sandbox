import { browser } from "wxt/browser";
import { onMessage } from "./messaging";

onMessage("getTodo", async (id) => {
  if (!id) {
    console.error("No id provided");
    return;
  }

  const todo = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  ).then((response) => response.json());
  return todo;
});

export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });

  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const { id } = message;

    if (!id) {
      console.error("No id provided");
      return true;
    }

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => sendResponse(json));

    return true;
  });
});
