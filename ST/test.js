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
const emojiList = document.getElementById("quote-list");
const loadingTextElement = document.getElementById("loading-text");
const h1Element = document.querySelector("h1");
// Fetch emoji data from an API endpoint (replace with your actual API URL)
loadingTextElement.style.display = "block";
fetch("https://strangerthings-quotes.vercel.app/api/quotes")
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);
    h1Element.style.fontSize = "20px";
    loadingTextElement.style.display = "none";
    const listItem = document.createElement("li");
    listItem.innerHTML =
      `<span class="emoji">${data[0].quote}</span>` +
      "<br>" +
      "- " +
      `<span class="emoji">${data[0].author}</span>`;
    emojiList.appendChild(listItem);
  });
