export function openPopup(popup) {
  popup.classList.add("popup_opened");
};

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
};

export function closePopupByDevice () {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popup) => {
    closePopup(popup);
  })
};
