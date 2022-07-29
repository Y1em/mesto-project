export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handlecloseByOverlay(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  };

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', () => this._handleEscClose(evt));
    document.addEventListener('mousedown', () => this._handlecloseByOverlay(evt));
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('mousedown', this._handlecloseByOverlay);
  }

  setEventListeners() {
    this._popup.querySelector('.popup__button-close').addEventListener('click', () => this.close());
    /*
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup__button-close') ||
          evt.target.classList.contains('popup') ||
          evt.target.classList.contains('popup__container')) {
            this.close();
      }
    });
    */
  }
  returnPopup() {
    return this._popup;
  }
}


