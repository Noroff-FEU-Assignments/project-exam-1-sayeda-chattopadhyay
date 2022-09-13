const url = "https://mybakingdesire.flopow.one/wp-json/wp/v2/posts/";
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
}

/* <button class ="cta" data-product="${post.id}">Read More</button> */
