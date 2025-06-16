document.querySelectorAll(".nav-link[data-section]").forEach((link) => {
  link.addEventListener("click", () => {
    const section = link.getAttribute("data-section");

    if (section === "home") {
      window.location.href = "index.html"; // Navigate to index.html
    } else if (section === "services") {
      window.location.href = "Services.html"; // Navigate to services.html
    } else if (section === "about") {
      window.location.href = "about.html";
    } else if (section === "contact") {
      window.location.href = "contact.html"; // Navigate to contact.html
    }
  });
});


const watchVideo = () => {
  alert("You will be redirected to our officila YouTube handle where you can watch our videos");
  location.href =
    "https://www.youtube.com/watch?v=linlz7-Pnvw&pp=0gcJCd4JAYcqIYzv";
}

// For NewsLetter Val
// Add this code to all pages that has the newsleteter
let formNews = document.getElementById("newsForm");
formNews.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const emailInput = document.getElementById("newsInp");
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let modalSucceshow = document.querySelector(".modalSuccess");
  if (!emailPattern.test(emailValue)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
  } else {
   modalSucceshow.style.display = "block";
   modalSucceshow.scrollIntoView({behavior: "smooth"})
   setTimeout(() => {
      modalSucceshow.style.display = "none"
   }, 5000)
    formNews.reset();
  }
});
