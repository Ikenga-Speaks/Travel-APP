// document.querySelectorAll('.nav-link[data-section]').forEach(link => {
//     link.addEventListener('click', () => {
//       const section = link.getAttribute('data-section');
//       window.location.href = `${section}.html`; 
//     });
//   });

document.querySelectorAll('.nav-link[data-section]').forEach(link => {
  link.addEventListener('click', () => {
    const section = link.getAttribute('data-section');

    if (section === 'home') {
      window.location.href = 'index.html'; // Navigate to index.html
    } else {
      window.location.href = section + '.html'; // Navigate to section.html
    }
  });
});


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