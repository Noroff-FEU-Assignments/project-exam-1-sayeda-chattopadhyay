const detailsContainer = document.querySelector(".post-details");

const querryString = document.location.search;

const params = new URLSearchParams(querryString);

const id = params.get("id");

console.log(id);

const url = "https://mybakingdesire.flopow.one/wp-json/wp/v2/posts/" + id;

async function fetchPost() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);
    detailsContainer.innerHTML = "";

    createHTML(details);
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = errorMessage("Something goes wrong");
  }
}

fetchPost();

function createHTML(details) {
  detailsContainer.innerHTML += ` <div class="details-card">
                                    <div class="details-card-image"><img src="${details.jetpack_featured_media_url}" alt= "${details.title.rendered}" class="specific-image"></div>
                                    <div class= "details-card-text">
                                        <h1>${details.title.rendered}</h1>
                                        <p class="blog-date">Published: ${details.date}</p>  
                                        <p>${details.content.rendered}</p> 
                                    </div>    
                                  </div>`;
}

/* To Create image modal*/

function addModalFunction() {
  const specificImage = document.querySelector(".specific-image");
  console.log(specificImage);

  const modal = document.querySelector("#imageModal");
  const modalImg = document.querySelector("#imageModal img");

  specificImage.onclick = function () {
    modal.style.display = "flex";
    modalImg.src = specificImage.getAttribute("src");
  };

  modal.onclick = function () {
    this.style.display = "none";
  };
}

addModalFunction();
