const postsContainer = document.querySelector(".posts-conatiner");
const loadMoreButon = document.querySelector("#load-more");

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

    // console.log(getResults);

    createHTML(getResults);

    if (page === parseInt(totalPages)) {
      loadMoreButon.style.visibility = "hidden";
    }
  } catch (error) {
    console.log("An error found");
    postsContainer.innerHTML = errorMessage("There are no post found");
    // postsContainer.innerHTML = "There are no post found";
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
                                        <a href="specific-blog.html?id=${post.id}" class="cta-card">Read The Post</a>
                                      </div>    
                                </div>`;
  });

  addModalFunction();
}

loadMoreButon.onclick = function () {
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

// Load more-1

// const PostCardsAll = document.querySelectorAll(".post-card");

// console.log(PostCardsAll);

// loadMoreButon.onclick = loadMore;

// let currentItems = 0;

// function loadMore() {
//   console.log("button is working");

//   let maxResult = 2;

//   for (let i = 0; i < maxResult; i++) {
//     if (currentItems > PostCardsAll.length) {
//       loadMoreButon.classList.remove("show-more-results");
//     }
//     postsContainer.innerHTML += PostCardsAll[i + currentItems];
//   }

//   currentItems += maxResult;
// }

// let cuurentItems = 8;

// loadMoreButon.addEventListener("click", (post) => {
//  for(let i = cuurentItems ; i <cuurentItems.length; i++){

//  }

// })

// loadMoreButon.onclick = loadMore();

// const currentPosts = 0;

// function loadMore() {
//   // console.log("button is working");

//   const addPosts = 2;

//   for (let i = 0; i < addPosts.length; i++) {
//     PostCardsAll[i + currentPosts];
//   }
//   currentPosts += addPosts;
// }

// // Load more -2

// const currentItem =10;

// moreResultsButton.addEventListener("click", function () {
// for(var i = currentItem ; i >currentItem+10 i++){

// }

// });

// const viewMoreBtn = document.querySelector(".view-more");

// viewMoreBtn.onclick = () =>{
// const cardContainer= postsContainer.innerHTML ;

// }

/* <button class ="cta" data-product="${post.id}">Read More</button> 
 document.querySelector(".modal-image").style.display = "block";*/
