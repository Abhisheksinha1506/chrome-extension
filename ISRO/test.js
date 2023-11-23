/*const apiUrl = "https://emojihub.yurace.pro/api/all";
const emojiContainer = document.getElementById("emoji-container");
// Make a GET request
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    for (const emoji of data) {
      const emojiItem = document.createElement("div");
      emojiItem.classList.add("emoji-item");

      const emojiNameElement = document.createElement("span");
      emojiNameElement.textContent = emoji.name;
      emojiNameElement.classList.add("emoji-name");
      emojiItem.appendChild(emojiNameElement);

      const emojiIconElement = document.createElement("span");
      emojiIconElement.innerHTML = emoji.htmlCode[0];
      emojiIconElement.classList.add("emoji-icon");
      emojiItem.appendChild(emojiIconElement);

      emojiContainer.appendChild(emojiItem);

      const htmlCodeElement = document.createElement("span");
      htmlCodeElement.textContent = `HTML Code: ${emoji.htmlCode}`;
      emojiItem.appendChild(htmlCodeElement);

      const unicodeElement = document.createElement("span");
      unicodeElement.textContent = `Unicode: ${emoji.unicode}`;
      emojiItem.appendChild(unicodeElement);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
*/
const emojiList = document.getElementById("emoji-list");
const loadingTextElement = document.getElementById("loading-text");
// Fetch emoji data from an API endpoint (replace with your actual API URL)
loadingTextElement.style.display = "block";
fetch("https://isro.vercel.app/api/spacecrafts")
  .then((response) => response.json())
  .then((data) => {
    loadingTextElement.style.display = "none";
    for (i = 0; i < data.spacecrafts.length; i++) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<span class="emoji">${data.spacecrafts[i].name}</span>`;
      emojiList.appendChild(listItem);
    }
  });
