import { browser } from "wxt/browser";

export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });

  browser.runtime.onInstalled.addListener(async ({ reason }) => {
    if (reason !== "install") return;

    await browser.tabs.create({
      url: browser.runtime.getURL("/welcome.html"),
      active: true,
    });
  });

  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);

    if (message === "ping") {
      setTimeout(() => {
        sendResponse("pong");
      }, 1000);
    }
    return true;
  });
});
