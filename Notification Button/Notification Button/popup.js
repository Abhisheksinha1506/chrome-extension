const countTabsButton = document.getElementById("countTabs");
countTabsButton.addEventListener("click", () => {
  chrome.tabs.query({}, (tabs) => {
    const numTabs = tabs.length;
    const notificationId = `openTabsNotification-${Date.now()}`;
    if (chrome.notifications.create) {
      // Check if notifications are supported
      chrome.notifications.create(notificationId, {
        type: "basic",
        title: "Open Tabs Counter",
        message: `You have ${numTabs} open tabs.`,
        iconUrl: "16x16-icon-45590.png",
      });
    } else {
      alert(`You have ${numTabs} open tabs.`);
    }
  });
});
