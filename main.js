const swiper = new Swiper('.banners', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperCollections = new Swiper('.collections', {
  // Optional parameters
  slidesPerView: 4,
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperCoalborations = new Swiper('.colaborations', {
  // Optional parameters
  slidesPerView: 3,
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

// const headerLinks = document.querySelectorAll('.header-link');

// if (headerLinks && headerLinks.length > 0) {
//   let menu = document.getElementById('menu');

//   for (const link of headerLinks) {
//     link.addEventListener('mouseover', () => {

//       if (menu) {
//          let status = menu.classList.contains('hidden');

//          if (status) {
//             menu.classList.remove('hidden');
//             menu.classList.remove('opacity-0');
//             menu.classList.add('opacity-100');
//          }
//       }
//     })
//     menu.addEventListener('mouseleave', () => {
//       console.log('Por fuera')

//       if (menu) {
//         let status = menu.classList.contains('hidden');

//         if (!status) {
//            menu.classList.add('hidden');
//            menu.classList.add('opacity-0');
//            menu.classList.remove('opacity-100');
//         }
//       }
//     })
//   }
// }
