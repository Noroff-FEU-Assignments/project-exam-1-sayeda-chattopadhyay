// Hero Section

const homePostContainer = document.querySelector(".home-posts");
const popularPostContainer = document.querySelector(".popular-posts");
const slider = document.querySelector(".slider");

async function getHomeContent() {
  const url = "https://mybakingdesire.flopow.one/wp-json/wp/v2/pages/36?_embed";
  try {
    const response = await fetch(url);
    const page = await response.json();
    console.log(page);
    createPageHTML(page);
  } catch (error) {
    console.log("There is an error");
    homePostContainer.innerHTML = errorMessage(
      "error message: this is wrong url"
    );
  }
}
getHomeContent();

function createPageHTML(page) {
  homePostContainer.innerHTML = `<div class="hero-section" >
                                    <div class="hero-image"style="background-image:url(${page._embedded["wp:featuredmedia"][0].source_url});"></div>          
                                    <div class="hero-text"> 
                                        <div class="hero-para">${page.content.rendered}</div>
                                        <div> 
                                            <a href="blog.html" class="cta-explore">Explore</a>
                                        </div>  
                                    </div> 
                                </div>`;
}

// Popular Indian Desserts

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
    popularPostContainer.innerHTML = errorMessage("Popular posts not coming");
  }
}

getPopularPosts();

function createPostsHTML(posts) {
  posts.forEach(function (post) {
    popularPostContainer.innerHTML += `<a href="specific-blog.html?id=${post.id}" class="posts-card">
                                          <img src="${post.jetpack_featured_media_url}" alt= "${post.title.rendered}" class="posts-image">
                                          <div class="posts-text">
                                            <h2>${post.slug}</h2>   
                                          </div>   
                                      </a>`;
  });
}

// Fetching Latest Posts in the Slider

async function getLatestPosts() {
  const url =
    "https://mybakingdesire.flopow.one/wp-json/wp/v2/posts?categories=35&per_page=20";
  try {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);
    createSliderPosts(posts);
  } catch (error) {
    console.log(error);
    slider.innerHTML = errorMessage("latest posts not found");
  }
}

getLatestPosts();

function createSliderPosts(posts) {
  posts.forEach(function (post) {
    slider.innerHTML += `<div class="latest-post-card">
                                        <a href="specific-blog.html?id=${post.id}" class="posts-card">
                                            <img src="${post.jetpack_featured_media_url}" alt= "${post.title.rendered}" class="posts-image">
                                            <div class="posts-text">
                                                <h2>${post.slug}</h2>   
                                            </div>
                                        </a>
                                </div>`;
  });
}

// Latest Posts Carousel

const latestPostCard = document.querySelectorAll(".posts-card");

const prevButton = document.getElementById("arrow-prev");

const nextButton = document.getElementById("arrow-next");

nextButton.addEventListener("click", (event) => {
  const latestPostCardWidth =
    document.querySelector(".latest-post-card").clientWidth;
  // const latestPostCardWidth = latestPostCard.clientWidth;
  slider.scrollLeft += latestPostCardWidth;
});

prevButton.addEventListener("click", () => {
  const latestPostCardWidth =
    document.querySelector(".latest-post-card").clientWidth;
  // const latestPostCardWidth = latestPostCard.clientWidth;
  slider.scrollLeft -= latestPostCardWidth;
});
