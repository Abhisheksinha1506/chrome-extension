// Background script to handle clicks on the extension icon

chrome.action.onClicked.addListener(() => {
  // Open the popup window
  chrome.windows.create({
    url: chrome.runtime.getURL("popup.html"),
    type: "popup",
  });
});
