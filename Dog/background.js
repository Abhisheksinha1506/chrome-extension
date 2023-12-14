// background.js

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "executeScript") {
    var script = new Script(message.script);
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      func: script,
    });
  }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === "sendData") {
    const data = message.data;
    console.log("Received data from content script:", data);
    // Process the data here
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    if (tabs.length === 0) {
      return; // No active tab, so bail out
    }

    const tab = tabs[0];
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        func: () => {
          return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("HEAD", document.URL);
            xhr.onload = () => {
              resolve({ status: xhr.status });
            };
            xhr.onerror = () => {
              reject(new Error("Error fetching status code"));
            };
            xhr.send();
          });
        },
      },
      (result) => {
        if (result[0].result.status) {
          console.log(result[0].result.status);
          if (result[0].result.status === 204) {
            if (tab.url !== "https://status.pizza/204") {
              chrome.tabs.update({ url: "https://status.pizza/204" });
            }
          } else if (result[0].result.status === 200) {
            console.log(tab.url);
          } else if (result[0].result.status === 404) {
            if (tab.url !== "https://status.pizza/404") {
              chrome.tabs.update({ url: "https://status.pizza/404" });
            }
          } else if (result[0].result.status === 521) {
            if (tab.url !== "https://status.pizza/521") {
              chrome.tabs.update({ url: "https://status.pizza/521" });
            }
          } else if (result[0].result.status === 500) {
            if (tab.url !== "https://status.pizza/500") {
              chrome.tabs.update({ url: "https://status.pizza/500" });
            }
          } else if (result[0].result.status === 429) {
            if (tab.url !== "https://status.pizza/429") {
              chrome.tabs.update({ url: "https://status.pizza/429" });
            }
          } else if (result[0].result.status === 401) {
            if (tab.url !== "https://status.pizza/401") {
              chrome.tabs.update({ url: "https://status.pizza/401" });
            }
          } else if (result[0].result.status === 403) {
            if (tab.url !== "https://status.pizza/403") {
              chrome.tabs.update({ url: "https://status.pizza/403" });
            }
          } else if (result[0].result.status === 400) {
            if (tab.url !== "https://status.pizza/400") {
              chrome.tabs.update({ url: "https://status.pizza/400" });
            }
          } else if (result[0].result.status === 521) {
            if (tab.url !== "https://status.pizza/521") {
              chrome.tabs.update({ url: "https://status.pizza/521" });
            }
          } else {
            chrome.runtime.sendMessage({ status: result[0].result.status });
          }
        } else {
          chrome.runtime.sendMessage({ status: null });
        }
      }
    );
  });
});
