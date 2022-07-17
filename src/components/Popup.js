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

  /* setEventListeners() {
    closeX.addEventListener('click', () => {
      console.log("123")
      this.close();
    });
  } */

}

export const newPopup = new Popup(".popup_place_edit-profile");
