window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hero-content").style.opacity = 1;
});


// menu toggle navbar

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});



// product card image click

  const productCards = document.querySelectorAll('.card');

  productCards.forEach((card) => {
    card.addEventListener('click', () => {
      const productData = {
        img: card.querySelector('img').src,
        title: card.querySelector('h3').innerText,
        originalPrice: card.querySelector('.original')?.innerText || '',
        offerPrice: card.querySelector('.offer')?.innerText || '',
        sizes: Array.from(card.querySelectorAll('.sizes span')).map(s => s.innerText),

        // Add extra detail if you want to show on product-detail.html
        description: "Stylish, comfortable & crafted for every little fashionista — perfect for all-day fun & flair.",
        fabric: "Cotton Blend",
        brand: "MiniStar",
        care: "Hand wash, Do not bleach",
        delivery: "Delivery within 4-6 working days"
      };

      localStorage.setItem('selectedProduct', JSON.stringify(productData));
      window.location.href = 'product-detail.html';
    });
  });



  // lookbook js

  const lookbookCards = document.querySelectorAll('.lookbook-card');

lookbookCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('.lookbook-caption').innerText;
    const img = card.querySelector('img').getAttribute('src');

    const productData = {
      img: img,
      title: title,
      originalPrice: '₹1299',
      offerPrice: '₹799',
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'Premium outfit from our Lookbook collection.',
      fabric: 'Cotton Blend',
      brand: 'TechBro24 Kidswear',
      care: 'Machine wash cold',
      delivery: 'Delivered within 5-7 days'
    };

    localStorage.setItem('selectedProduct', JSON.stringify(productData));
    window.location.href = 'product-detail.html';
  });
});


// featured piece 
const featuredCards = document.querySelectorAll('.product-cards');

featuredCards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3').innerText;
    const price = card.querySelector('p').innerText;
    const img = card.querySelector('img').getAttribute('src');

    const productData = {
      img: img,
      title: title,
      originalPrice: `₹${parseInt(price.replace('₹','')) + 400}`,
      offerPrice: price,
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A premium pick from our featured collection.',
      fabric: '100% Cotton',
      brand: 'TechBro24 Kidswear',
      care: 'Gentle wash recommended',
      delivery: 'Delivered within 4-6 days'
    };

    localStorage.setItem('selectedProduct', JSON.stringify(productData));
    window.location.href = 'product-detail.html';
  });
});
