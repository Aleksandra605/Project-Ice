(() => {
  const productBtnRef1 = document.querySelector('[data-product-btn1]');
  const productBtnRef2 = document.querySelector('[data-product-btn2]');
  const productBtnRef3 = document.querySelector('[data-product-btn3]');

  const productCardRef1 = document.querySelector('[data-product-card1]');
  const productCardRef2 = document.querySelector('[data-product-card2]');
  const productCardRef3 = document.querySelector('[data-product-card3]');

  productBtnRef1.addEventListener('click', () => {
    productCardRef1.classList.toggle('is-flipped');
  });

  productBtnRef2.addEventListener('click', () => {
    productCardRef2.classList.toggle('is-flipped');
  });

  productBtnRef3.addEventListener('click', () => {
    productCardRef3.classList.toggle('is-flipped');
  });
})();
