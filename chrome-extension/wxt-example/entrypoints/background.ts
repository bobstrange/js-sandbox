import { browser } from "wxt/browser";

export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });

  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Received message", message);

    // const { id } = message;

    // if (!id) {
    //   console.error("No id provided");
    //   return true;
    // }

    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => sendResponse());

    sendResponse(`Thank you for ${message}`);

    return true;
  });
});
