const popupList = Array.from(document.querySelectorAll(".popup"));

const closeX = document.querySelector(".popup__button-close_place_edit-profile");

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function closeByOverlay(evt) {
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__container")
  ) {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
  document.addEventListener("mousedown", closeByOverlay);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
  document.removeEventListener("mousedown", closeByOverlay);
}

export function closePopupByDevice() {
  popupList.forEach(closePopup);
}

class Popup {
  constructor(selector) {
    this.selector = selector;
  }

  open() {
    document
    .querySelector(this.selector)
    .classList.add("popup_opened");
  }

  close() {
    document
    .querySelector(this.selector)
    .classList.remove("popup_opened");
  }

  getPopupEl() {
    const popupEl = document.querySelector(this.selector);
    return popupEl;
  }

  setEventListeners() {
    closeX.addEventListener('click', () => {
      console.log("123")
      this.close();
    });
  }

}

const newPopup = new Popup(".popup_place_edit-profile");

newPopup.open();


