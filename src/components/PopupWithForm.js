import { Popup } from "./Popup.js";
import { renderLoading } from "../utils/utils.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this.callback = callback;
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    const inputUrl = this._popupForm.elements.url;
    const inputPlace = this._popupForm.elements.place;
    const inputName = this._popupForm.elements.name;
    const inputAbout = this._popupForm.elements.about;
    const inputAvatar = this._popupForm.elements.avatar;
  }

  close() {
    super.close();
    if (this._popupForm.classList.contains('popup__form_place_edit-avatar') || this._popupForm.classList.contains('popup__form_place_new-place')) {
      this._popupForm.reset();
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
      renderLoading(evt, true);
    })
  }
}


