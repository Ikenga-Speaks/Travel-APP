document.querySelectorAll(".nav-link[data-section]").forEach((link) => {
  link.addEventListener("click", () => {
    const section = link.getAttribute("data-section");

    if (section === "home") {
      window.location.href = "index.html"; // Navigate to index.html
    } else if (section === "services") {
      window.location.href = "Services.html"; // Navigate to services.html
    }else if (section === "about") {
        window.location.href = "about.html"
    } else if (section === "contact") {
      window.location.href = "contact.html"; // Navigate to contact.html
    }
  });
});
