const contactForm = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");

const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const successMessage = document.querySelector("#success-message");

function validateForm(event) {
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
  // Check if all criterias are met //
  if (
    checkLength(name.value, 6) &&
    checkLength(subject.value, 15) &&
    checkLength(message.value, 25) &&
    validateEmail(email.value) === true
  ) {
    successMessage.innerHTML =
      '<div class="success-info">Your message has been submitted successfully.</div>';
    contactForm.reset();
  } else {
    message.innerHTML = "";
  }
}

// To Make sure whitespace doesn't count as letters //

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

const url = "https://mybakingdesire.flopow.one/wp-json/wp/v2/pages/350?_embed";

const contactPageContainer = document.querySelector(".contact-page");

async function getContactPageContent() {
  try {
    const response = await fetch(url);
    const page = await response.json();
    console.log({ url: page._embedded["wp:featuredmedia"][0].source_url });
    createPageHTML(page);
  } catch (error) {
    contactPageContainer.innerHTML = errorMessage("Something goes wrong");
  }
}
getContactPageContent();

function createPageHTML(page) {
  console.log(page);

  contactPageContainer.innerHTML = `<div class="contact-hero-sec">
                                        <div class="hero-contact-image"style="background-image:url(${page._embedded["wp:featuredmedia"][0].source_url});"></div> 
                                        <div class="contact-text">
                                            <p class="contact-para">${page.content.rendered}</p>
                                        </div>  
                                  </div> `;
}

//<img src="${page._embedded["wp:featuredmedia"][0].source_url}" alt="${page._embedded["wp:featuredmedia"][0].alt_text}" class="bogger-picture"/>
//<h2>${page.title.rendered}</h2>
