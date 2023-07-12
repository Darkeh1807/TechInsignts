// Get the query parameters from the URL
const queryParams = new URLSearchParams(window.location.search);

// Extract the values based on the parameter names
const title = queryParams.get("title");
const content = queryParams.get("content");
const imageUrl = queryParams.get("image");
const url = queryParams.get("url");
const author = queryParams.get("author");

// Use the extracted values as needed
console.log("Title:", title);
console.log("Content:", content);
console.log("Image URL:", imageUrl);
console.log("URL:", url);
console.log("author:", author);

const postImage = document.getElementById("post-img");
const postTitle = document.getElementById("post-title");
const postContent = document.getElementById("content");
const postAuthor = document.getElementById("author");
const postUrl = document.getElementById("url");
postImage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`;
postTitle.innerHTML = title;
postContent.innerHTML = content;
postAuthor.innerHTML = `Author: ${author}`;
postUrl.innerHTML = `Read more at: ${url}`;

postUrl.addEventListener("click", () => {
  window.open(url, "_blank");
});
