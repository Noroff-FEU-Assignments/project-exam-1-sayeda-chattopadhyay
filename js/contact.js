const contactForm = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");

const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

function validateForm() {
  event.preventDefault();

  if (checkLength(name.value, 6) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}

contactForm.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

// hero section

async function getContactPageContent() {
  const url =
    "https://mybakingdesire.flopow.one/wp-json/wp/v2/pages/350?_embed";
  try {
    const response = await fetch(url);
    const page = await response.json();
    console.log({ url: page._embedded["wp:featuredmedia"][0].source_url });
    createPageHTML(page);
  } catch (error) {
    console.log(error);
    //   productContainer.innerHTML = errorMessage("an error found");
  }
}
getContactPageContent();

function createPageHTML(page) {
  console.log(page);
  const contactPageContainer = document.querySelector(".contact-page");

  contactPageContainer.innerHTML = `<div>
  <h2>${page.title.rendered}</h2>
                                <div>
                                <img src="${page._embedded["wp:featuredmedia"][0].source_url}" alt="${page._embedded["wp:featuredmedia"][0].alt_text}" class="bogger-picture"/>
                                  
                                  <div>${page.content.rendered}</div>
                                </div>
  
  </div>
                                  `;
}
