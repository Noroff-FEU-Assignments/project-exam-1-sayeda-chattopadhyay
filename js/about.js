const url = "https://mybakingdesire.flopow.one/wp-json/wp/v2/pages/48?_embed";

async function getAboutPageContent() {
  try {
    const response = await fetch(url);
    const page = await response.json();
    console.log(page);
    // console.log({ url: page._embedded["wp:featuredmedia"][0].source_url });
    createPageHTML(page);
  } catch (error) {
    console.log(error);
    //   productContainer.innerHTML = errorMessage("an error found");
  }
}
getAboutPageContent();

function createPageHTML(page) {
  console.log(page);
  const aboutPageContainer = document.querySelector(".about-page");

  aboutPageContainer.innerHTML = `<div class="hero-sec">
                                        <img src="${page._embedded["wp:featuredmedia"][0].source_url}" alt="${page._embedded["wp:featuredmedia"][0].alt_text}" class="bogger-picture"/>
                                        <P>${page.content.rendered}</P>
                                    </div>`;
}

async function getFavouritePosts() {
  const url =
    "https://mybakingdesire.flopow.one/wp-json/wp/v2/posts?categories=37";
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

getFavouritePosts();

function createPostsHTML(posts) {
  const aboutPostContainer = document.querySelector(".about-post_container");

  posts.forEach(function (post) {
    aboutPostContainer.innerHTML += `
    <a href="specific-blog.html?id=${post.id}" class="posts-card">
                                            <img src="${post.jetpack_featured_media_url}" alt= "${post.title.rendered}" class="posts-image">
                                            <div class="posts-text">
                                              <h2>${post.slug}</h2>   
                                            </div>   
                                        </a>`;
  });
}

// `<div class="hero-sec">
//                                     <div class="hero-image">
//                                         <img src="${page._embedded["wp:featuredmedia"][0].source_url}" alt="${page._embedded["wp:featuredmedia"][0].alt_text}" class="bogger-picture"/>
//                                     </div>
//                                     <div class="hero-text">
//                                         <P><${page.content.rendered}</P>
//                                      </div>
//                                 </div>`
