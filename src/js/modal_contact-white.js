(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-cont-white]'),
    closeModalBtn: document.querySelector('[data-modal-close-cont-white]'),
    modal: document.querySelector('[data-modal-contact-white]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
