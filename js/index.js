// edited code

async function getHomeContent() {
  const url = "https://mybakingdesire.flopow.one/wp-json/wp/v2/pages/36?_embed";
  try {
    const response = await fetch(url);
    const page = await response.json();
    console.log(page);
    createPageHTML(page);
  } catch (error) {
    console.log(error);
    //   productContainer.innerHTML = errorMessage("an error found");
  }
}
getHomeContent();

function createPageHTML(page) {
  console.log(page);
  const homePostContainer = document.querySelector(".home-posts");

  homePostContainer.innerHTML = `<div>
  <img src="${page._embedded["wp:featuredmedia"][0].source_url}" alt="${page._embedded["wp:featuredmedia"][0].alt_text} class="profile-pic" width="300">
                                  <div>${page.content.rendered}</div>
                                  <div>${page.excerpt.rendered}</div>
                                </div>`;
}

async function getPopularPosts() {
  const url =
    "https://mybakingdesire.flopow.one/wp-json/wp/v2/posts?categories=5";
  try {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);
    createPostsHTML(posts);
  } catch (error) {
    console.log(error);
    //   productContainer.innerHTML = errorMessage("an error found");
  }
}

getPopularPosts();

function createPostsHTML(posts) {
  const popularPostContainer = document.querySelector(".popular-posts");

  posts.forEach(function (post) {
    popularPostContainer.innerHTML += `<a href="specific-blog.html?id=${post.id}" class="posts-card">
                                          <img src="${post.jetpack_featured_media_url}" alt= "${post.title.rendered}" class="posts-image">
                                          <div class="posts-text">
                                            <h2>${post.slug}</h2>   
                                          </div>   
                                      </a>`;
  });
}
