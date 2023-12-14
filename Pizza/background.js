// background.js

const storage = chrome.storage.sync;

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
            if (tab.url !== "https://http.dog/204.jpg") {
              chrome.tabs.update({ url: "https://http.dog/204.jpg" });
            }
          } else if (result[0].result.status === 200) {
            console.log(tab.url);
          } else if (result[0].result.status === 401) {
            if (tab.url !== "https://http.dog/401.jpg") {
              chrome.tabs.update({ url: "https://http.dog/401.jpg" });
            }
          } else if (result[0].result.status === 404) {
            if (tab.url !== "https://http.dog/404.jpg") {
              chrome.tabs.update({ url: "https://http.dog/404.jpg" });
            }
          } else if (result[0].result.status === 521) {
            if (tab.url !== "https://http.dog/521.jpg") {
              chrome.tabs.update({ url: "https://http.dog/521.jpg" });
            }
          } else if (result[0].result.status === 401) {
            if (tab.url !== "https://http.dog/401.jpg") {
              chrome.tabs.update({ url: "https://http.dog/401.jpg" });
            }
          } else if (result[0].result.status === 500) {
            if (tab.url !== "https://http.dog/500.jpg") {
              chrome.tabs.update({ url: "https://http.dog/500.jpg" });
            }
          } else if (result[0].result.status === 429) {
            if (tab.url !== "https://http.dog/429.jpg") {
              chrome.tabs.update({ url: "https://http.dog/429.jpg" });
            }
          } else if (result[0].result.status === 401) {
            if (tab.url !== "https://http.dog/401.jpg") {
              chrome.tabs.update({ url: "https://http.dog/401.jpg" });
            }
          } else if (result[0].result.status === 403) {
            if (tab.url !== "https://http.dog/403.jpg") {
              chrome.tabs.update({ url: "https://http.dog/403.jpg" });
            }
          } else if (result[0].result.status === 400) {
            if (tab.url !== "https://http.dog/400.jpg") {
              chrome.tabs.update({ url: "https://http.dog/400.jpg" });
            }
          } else if (result[0].result.status === 502) {
            if (tab.url !== "https://http.dog/502.jpg") {
              chrome.tabs.update({ url: "https://http.dog/502.jpg" });
            }
          } else if (result[0].result.status === 521) {
            if (tab.url !== "https://http.dog/521.jpg") {
              chrome.tabs.update({ url: "https://http.dog/521.jpg" });
            }
          } else if (result[0].result.status === 526) {
            if (tab.url !== "https://http.dog/526.jpg") {
              chrome.tabs.update({ url: "https://http.dog/526.jpg" });
            }
          } else if (result[0].result.status === 525) {
            if (tab.url !== "https://http.dog/525.jpg") {
              chrome.tabs.update({ url: "https://http.dog/525.jpg" });
            }
          } else if (result[0].result.status === 999) {
            if (tab.url !== "https://http.dog/999.jpg") {
              chrome.tabs.update({ url: "https://http.dog/999.jpg" });
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
