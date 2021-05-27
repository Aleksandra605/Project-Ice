const menuBtnRef = document.querySelector('.menu-button');
const menuLinkRefs = document.querySelectorAll('[data-menu-link]');
const mobileMenuRef = document.querySelector('[data-menu]');

menuBtnRef.addEventListener('click', () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
  return;
});

menuLinkRefs.forEach(function (menuLinkRef) {
  menuLinkRef.addEventListener('click', () => {
    menuBtnRef.classList.remove('is-open');
    menuBtnRef.setAttribute('aria-expanded', false);

    mobileMenuRef.classList.remove('is-open');
  });
});
