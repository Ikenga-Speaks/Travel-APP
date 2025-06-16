// // document.addEventListener('DOMContentLoaded', () => {
// //     const navItems = document.querySelectorAll('.nav-link');
// //     const sections = document.querySelectorAll('.section, .sectionabout, .sectionservices, .sectionteam, .newslettersection');
// //     const navbarToggler = document.querySelector('.navbar-toggler');
// //     const navbarCollapse = document.querySelector('#navbarNav');

//     // Highlight active section in nav
//     window.addEventListener('scroll', () => {
//         let current = '';
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;
//             if (pageYOffset >= sectionTop - 100) {
//                 current = section.id || section.classList[0].replace('section', '');
//             }
//         });

//         navItems.forEach(item => {
//             item.classList.remove('active');
//             if (item.getAttribute('data-section') === current) {
//                 item.classList.add('active');
//             }
//         });
//     });
// });
// document.querySelectorAll('.nav-link[data-section]').forEach(link => {
//   link.addEventListener('click', () => {
//     const section = link.getAttribute('data-section');
//     window.location.href = `${section}.html`;
//   });
// });

// document.querySelectorAll('.nav-link[data-section]').forEach(link => {
//     link.addEventListener('click', () => {
//         // const section = link.getAttribute('data-section');
//         const routes = {
//             home: 'index.html',
//             about: 'about.html',
//             services: 'services.html',
//             contact: 'contact.html'
//         };

//         const section = link.getAttribute('data-section');
//         window.location.href = routes[section];

//     });
// });

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
      link.style.color = "rgba(92, 32, 32, 1)";
      window.location.href = "contact.html"; // Navigate to contact.html
    }
  });
});

