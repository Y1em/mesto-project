import { Popup } from "./Popup.js";
import { renderLoading } from "../utils/utils.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this.callback = callback;
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    if (this._popupForm.classList.contains('popup__form_place_new-place')) {
      const inputPlaceData = {
        name: this._popupForm.elements.place.value,
        link: this._popupForm.elements.url.value,
      }
      return inputPlaceData
    } else
    if (this._popupForm.classList.contains('popup__form_place_edit-avatar')) {
      const inputAvatarData = {
        avatar: this._popupForm.elements.avatar.value,
      }
      return inputAvatarData
    } else
    if (this._popupForm.classList.contains('popup__form_place_edit-profile')) {
      const inputUserData = {
        name: this._popupForm.elements.name.value,
        about: this._popupForm.elements.about.value,
      }
      return inputUserData
    }
  }

  close() {
    super.close();
    if (
      this._popupForm.classList.contains('popup__form_place_edit-avatar') ||
      this._popupForm.classList.contains('popup__form_place_new-place')) {
        this._popupForm.reset();
    }
  }

  setEventListeners () {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      renderLoading(evt, true);
      this.callback(this._getInputValues())
      })
  }
}


