const url = "https://mybakingdesire.flopow.one/wp-json/wp/v2/pages/36";
const homePostContainer = document.querySelector(".home-posts");

async function getHomePosts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    console.log(getResults);
    createHTML(getResults);
  } catch (error) {
    console.log(error);
    //   productContainer.innerHTML = errorMessage("an error found");
  }
}
getHomePosts();

function createHTML(posts) {
  console.log(posts);
  homePostContainer.innerHTML = `<div>
                                  <h2>${posts.title.rendered}</h2>
                                  <div>${posts.content.rendered}</div>
                                </div>`;
}
posts.forEach(function (post) {
  homePostContainer.innerHTML += `<div class=home-posts >
                                    <div>${post.id}</div>

                                    <div>
                                        <img src="${post.jetpack_featured_media_url}" alt= "" class="posts-image">
                                    </div>
                                    <div class="posts-text">
                                        <h2>${post.title.rendered}</h2>
                                        <p>${post.content.rendered}</p>
                                        <p>${post.date}</p>
                                    </div>
                                    <div class="posts-button">
                                      <a href="specific-blog.html?id=${post.id}" class="cta">Read The Post</a>
                                    </div>
                              </div>`;
});

const categoryUrl =
  "https://mybakingdesire.flopow.one/wp-json/wp/v2/posts?categories=5";

const popularPostContainer = document.querySelector(".popular-posts");

async function getPopularPosts() {
  try {
    const response = await fetch(categoryUrl);
    const getData = await response.json();
    console.log(getData);
    // createHTML(getResults);
  } catch (error) {
    console.log(error);
    //   productContainer.innerHTML = errorMessage("an error found");
  }
}

getPopularPosts();

// function createHTML(posts) {
//   console.log(posts);
//   homePostContainer.innerHTML = `<div>
//                                   <h2>${posts.title.rendered}</h2>
//                                   <div>${posts.content.rendered}</div>
//                                 </div>`;
// }
