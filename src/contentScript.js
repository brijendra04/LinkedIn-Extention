import { connectWithDelay } from "./components/utils/connectorLogic";


chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "connectWithAll") {
    connectWithDelay();
  }
});
