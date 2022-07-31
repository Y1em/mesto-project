import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, apiCallback, updateInfo) {
    super(popupSelector);
    this.apiCallback = apiCallback;
    this.updateInfo = updateInfo;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._submitButton = this._popup.querySelector(".popup__button-confirm");
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  _renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Сохранение...";
    } else {
      this._submitButton.textContent = "Сохранить";
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._renderLoading(true);
      this.apiCallback(this._getInputValues())
        .then((data) => {
          this.updateInfo(data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this._renderLoading(false);
        });
      this.close();
    });
  }
}
