// contentScript.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "executeScript") {
    var script = new Script(message.script);
    document.head.appendChild(script);
  }
});
chrome.runtime.sendMessage({
  type: "printToConsole",
  message: "Hello from the content script!",
});

/*chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "getActiveTabRequest") {
    const activeTab = message.activeTab;
    console.log("Active tab URL:", activeTab.url);
  }
});
*/

chrome.runtime.sendMessage({ type: "getActiveTabRequest" }, (response) => {
  console.log(response);
});
