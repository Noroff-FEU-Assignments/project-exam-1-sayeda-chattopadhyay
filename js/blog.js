const url =
  "https://mybakingdesire.flopow.one/wp-json/wp/v2/posts?categories=38";
const postsContainer = document.querySelector(".posts");
const moreResultsButton = document.querySelector("#more");

async function getPosts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    console.log(getResults);
    postsContainer.innerHTML = "";
    createHTML(getResults);
  } catch (error) {
    console.log(error);
  }
}

getPosts();

function createHTML(posts) {
  console.log(posts);
  posts.forEach(function (post) {
    postsContainer.innerHTML += `<div class="posts-card">
                                      <div>${post.id}</div>
                                      <div class= "posts-image">
                                          <img src="${post.jetpack_featured_media_url}" alt= "" class="image-post">
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

  addModalFunction();
}

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

// Show more results
moreResultsButton.addEventListener("click", function () {
  getPosts(url);
});

// const viewMoreBtn = document.querySelector(".view-more");

// viewMoreBtn.onclick = () =>{
// const cardContainer= postsContainer.innerHTML ;

// }

/* <button class ="cta" data-product="${post.id}">Read More</button> 
 document.querySelector(".modal-image").style.display = "block";*/
