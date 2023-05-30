// Get the query parameters from the URL
const queryParams = new URLSearchParams(window.location.search);

// Extract the values based on the parameter names
const title = queryParams.get("title");
const content = queryParams.get("content");
const imageUrl = queryParams.get("image");
const url = queryParams.get("url");

// Use the extracted values as needed
console.log("Title:", title);
console.log("Content:", content);
console.log("Image URL:", imageUrl);
console.log("URL:", url);

const postImage = document.querySelector(".post-img");
const postTitle = document.getElementById("post-title");
const postContent = document.getElementById("content");

postTitle.innerHTML = title;
postContent.innerHTML = content;
postImage.src = imageUrl;
