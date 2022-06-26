const popupList = Array.from(document.querySelectorAll('.popup'));

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

function closeByOverlay(evt) {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__container')) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEscape);
  document.addEventListener('mousedown', closeByOverlay);
};

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEscape);
  document.addEventListener('mousedown', closeByOverlay);
};

export function closePopupByDevice() {
    popupList.forEach(closePopup)
};
