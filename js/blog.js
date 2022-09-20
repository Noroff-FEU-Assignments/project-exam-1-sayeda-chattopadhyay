const url =
  "https://mybakingdesire.flopow.one/wp-json/wp/v2/posts?categories=38";
const postsContainer = document.querySelector(".posts");

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
                                          <img src="${post.jetpack_featured_media_url}" alt= "" class="image-post" id ="myImg">
                                      </div>  
                                      <div class="modal-image" id="myModal">
                                            <span class="close">&times;</span>
                                            <img src="${post.jetpack_featured_media_url}" alt= "" class="" id="img01">
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
}

const postAllImages = document.querySelectorAll(".image-post");
console.log(postAllImages);

const modal = document.querySelector(".modal-image");

const modalImg = document.querySelector("#img01");

postAllImages.forEach((image) => {
  image.onclick = function () {
    modal.style.display = "block";
    modalImg.src = image.getAttribute("scr");
  };
});

const span = document.querySelector(".close");

span.onclick = function () {
  modal.style.display = "none";
};

// postAllImages.addEventListener("click", function () {
//   modal.style.display = "block";
//   modalImg.scr = this.src;
// });

// const postsAllImagesContainer = document.querySelectorAll(
//   "posts-image-Container"
// );
// const postAllImages = document.querySelectorAll("posts-image");
// console.log(postAllImages);

// postAllImages.forEach((image) => {
//   image.onclck = () => {
//     postsAllImagesContainer.style.display = "block";
//     postAllImages.src = image.getAttribute("src");
//   };
// });

// document.querySelector(".modal-image span").onclick = () => {
//   document.querySelector(".modal-image").style.display = "none";
// };
// postAllImages.addEventListener("click", function () {
//   modalImage.src = this.src;
// });
// const viewMoreBtn = document.querySelector(".view-more");

// viewMoreBtn.onclick = () =>{
// const cardContainer= postsContainer.innerHTML ;

// }

/* <button class ="cta" data-product="${post.id}">Read More</button> 
 document.querySelector(".modal-image").style.display = "block";*/
