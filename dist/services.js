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