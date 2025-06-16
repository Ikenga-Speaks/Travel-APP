// document.querySelectorAll('.nav-link[data-section]').forEach(link => {
//     link.addEventListener('click', () => {
//       const section = link.getAttribute('data-section');
//       window.location.href = `${section}.html`; 
//     });
//   });

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

// This function is to validate the search feature on the Home Page
let searchInput = document.getElementById("search-term");
const getSearchTerm = () => {
  if (searchInput.value === "") {
    alert("Please Enter a location")
  }else{
    alert(`Sorry, there are no results matching '${searchInput.value}' right now`)
  };
  searchInput.value = ""
};
// Search when user hits the enter key
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    getSearchTerm();
  }
});


// I am adding the function executor to the butto in the index.html


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

const closeModal = () => {
  let modalSucceshow = document.querySelector(".modalSuccess");
  modalSucceshow.style.display = "none"
}
const BookNowBtn = document.querySelectorAll(".btn-primary");
            let formC = document.querySelector(".formC");
            formC.style.display = "none";
            let houseNameF = document.getElementById("houseName");
            let houseLocationF = document.getElementById("houseLocation");
            let housePriceF = document.getElementById("housePrice")
            BookNowBtn.forEach((btn) => {
                btn.addEventListener("click", () => {
                  const card = btn.closest(".card");
                  const houseName = card.querySelector(".card-title").textContent;
                  const houseLocation = card.querySelector(".card-text").textContent
                  const housePrice = card.querySelector(".card-amount").textContent;
                   
                    document.getElementById("houseLocate").textContent = houseName;
                    houseNameF.value = houseName;
                    houseLocationF.value = houseLocation;
                    housePriceF.value = housePrice;
                    formC.style.display = "block";
                    // This script makes it possible for scrolling to where the container is
                    formC.scrollIntoView({behavior: "smooth"});

                    document.getElementById("formEl").addEventListener("submit", (event) => {
                        event.preventDefault();
                        // Change this alert to something else - like a modal success
                        alert("Thanks for your booking confirmation - An agent will get back to you shortly");
                        formC.style.display = "none";
                    })
                })
            })