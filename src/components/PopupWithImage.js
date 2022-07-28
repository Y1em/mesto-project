import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = super.returnPopup();
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupSubtitle = this._popup.querySelector('.popup__subtitle');
  }

  open(subtitle, link) {
    this._popupImage.src = link;
    this._popupImage.alt = subtitle;
    this._popupSubtitle.textContent = subtitle;
    super.open();
  }
}
