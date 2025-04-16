let documentActions = (e) => {
  const targetElement = e.target;

  if (targetElement.closest(`.menu__button-burger`)) {
    document.documentElement.classList.toggle(`open-menu`);
  }
};

document.addEventListener(`click`, documentActions);
