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
