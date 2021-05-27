(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-cont-pink]'),
    closeModalBtn: document.querySelector('[data-modal-close-cont-pink]'),
    modal: document.querySelector('[data-modal-contact-pink]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
