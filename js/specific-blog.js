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
    detailsContainer.innerHTML = message("error", error);
  }
}

fetchPost();

function createHTML(details) {
  detailsContainer.innerHTML += `<div class="details-card">
                                    <div><img src="${details.jetpack_featured_media_url}" alt= "#"></div>
                                    <div>
                                        <h2>${details.title.rendered}</h2>
                                        <p>${details.id}</p>
                                        <p>${details.date}</p>  
                                        <p>${details.content.rendered}</p> 
                                    </div>    
                                </div>`;
}