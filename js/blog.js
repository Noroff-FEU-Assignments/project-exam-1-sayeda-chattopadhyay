const postsContainer = document.querySelector(".posts-conatiner");
const loadMoreButton = document.querySelector("#load-more");

let page = 0;

async function getPosts() {
  page = page + 1;

  if (page === 1) {
    postsContainer.innerHTML = "";
  }
  const url =
    "https://mybakingdesire.flopow.one/wp-json/wp/v2/posts?categories=38&page=" +
    page;
  try {
    const response = await fetch(url);

    const totalPages = response.headers.get("x-wp-totalpages");

    const getResults = await response.json();

    createHTML(getResults);

    if (page === parseInt(totalPages)) {
      loadMoreButton.style.visibility = "hidden";
    }
  } catch (error) {
    postsContainer.innerHTML = errorMessage("There are no post found");
  }
}

getPosts();

function createHTML(posts) {
  console.log(posts);
  posts.forEach(function (post) {
    postsContainer.innerHTML += `<div class="posts-card">
                                      <div class= "posts-image">
                                          <img src="${post.jetpack_featured_media_url}" alt= "${post.title.rendered}" class="image-post">
                                      </div>  
                                      <div class="posts-text"> 
                                          <h2>${post.title.rendered}</h2>
                                          <p>${post.excerpt.rendered}</p>
                                          <p>${post.date}</p>
                                      </div>
                                      <div class="posts-button"> 
                                        <a href="specific-blog.html?id=${post.id}" class="cta-card">Read more</a>
                                      </div>    
                                </div>`;
  });

  addModalFunction();
}

loadMoreButton.onclick = function () {
  getPosts();
};

/* To Create image modal*/

function addModalFunction() {
  const postAllImages = document.querySelectorAll(".image-post");
  console.log(postAllImages);

  const modal = document.querySelector("#imageModal");
  const modalImg = document.querySelector("#imageModal img");

  postAllImages.forEach((image) => {
    image.onclick = function () {
      modal.style.display = "flex";
      modalImg.src = image.getAttribute("src");
    };
  });

  modal.onclick = function () {
    this.style.display = "none";
  };
}
