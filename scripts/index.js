const url = " https://api.worldnewsapi.com/search-news?api-key=772db3c79fcc406f92e72ae7fc66461e&text=technology&number=100";

const wrapper = document.createElement('div');
wrapper.classList.add("wrapper");
document.body.appendChild(wrapper);


async function getPosts() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const posts = data.news.reverse();

        if (posts != null) {
            posts.forEach((post) => {
                const card = document.createElement("div");
                const imagePath = post.image;
                card.classList.add("card");
                card.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagePath})`;
                wrapper.appendChild(card);

                const title = document.createElement("h3");
                title.classList.add("postTitle");
                title.innerHTML = post.title;
                card.appendChild(title);

                card.addEventListener("click", () => {
                    // Pass the data to the detail page using query parameters
                    const queryParams = new URLSearchParams();
                    queryParams.append("title", post.title);
                    queryParams.append("content", post.content);
                    queryParams.append("image", post.urlToImage);
                    queryParams.append("url", post.url);
                    const detailsPageUrl = `details.html?${queryParams.toString()}`;
                    window.location.href = detailsPageUrl;
                });

                const postTime = document.createElement("p")
                postTime.classList.add("postTime");
                const time = post.publish_date;

                postTime.innerHTML = time;
                title.appendChild(postTime)

                const btn = document.createElement("button");
                btn.classList.add('btn')
                btn.innerHTML = "Read more"
                card.appendChild(btn);
            });
        } else {
            console.log("No posts found in the response.");
        }
    } catch (error) {
        console.log(error);
    }
}

getPosts().catch((err) => {
    console.log(err);
});










