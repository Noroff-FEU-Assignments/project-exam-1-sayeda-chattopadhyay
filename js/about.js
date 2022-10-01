const aboutPageContainer = document.querySelector(".about-page");
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
    aboutPageContainer.innerHTML = errorMessage("page not found");
  }
}
getAboutPageContent();

function createPageHTML(page) {
  console.log(page);

  aboutPageContainer.innerHTML = `<div class="hero-sec">
                                      <div class="pic-container">     
                                          <img src="${page._embedded["wp:featuredmedia"][0].source_url}" alt="${page._embedded["wp:featuredmedia"][0].alt_text}" class="bogger-pic"/>
                                      </div> 
                                      <div class="about-text-container">
                                          <P class="about-text">${page.content.rendered}</P>
                                          <div> 
                                            <a href="contact.html" class="cta-explore">Contact me</a>
                                        </div> 
                                      </div> 
                                  </div>`;
}
