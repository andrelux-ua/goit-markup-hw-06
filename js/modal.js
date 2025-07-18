(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),

    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-close]'),

    // Додати атрибут data-modal на бекдроп модалки
    modalOverlay: document.querySelector('[data-modal]'),
    modal: document.querySelector('.modal'),
  };

  // Відкриття модалки
  if (refs.openModalBtn) {
    refs.openModalBtn.addEventListener('click', toggleModal);
  }

  // Закриття модалки
  if (refs.closeModalBtn) {
    refs.closeModalBtn.addEventListener('click', toggleModal);
  }

  // Закриття при кліку поза модалкою
  if (refs.modalOverlay) {
    refs.modalOverlay.addEventListener('click', event => {
      if (event.target === refs.modalOverlay) {
        toggleModal();
      }
    });
  }

  // Закриття по клавіші ESC
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && refs.modal.classList.contains('is-open')) {
      toggleModal();
    }
  });

  // Функція для зміни стану модалки
  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    refs.modalOverlay.classList.toggle('is-open');
  }
})();

// ====== // ===== // ===== // =====

// (() => {
//   const refs = {
//     // Додати атрибут data-modal-open на кнопку відкриття
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     // Додати атрибут data-modal-close на кнопку закриття
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     // Додати атрибут data-modal на бекдроп модалки
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//     refs.modal.classList.toggle('is-open');
//   }
// })();

// ====== // ===== // ===== // =====
