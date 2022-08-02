import { Popup } from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, submitHandler}) {
    super(popupSelector);
    this.submitHandler = submitHandler;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._submitButton = this._popup.querySelector(".popup__button-confirm");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  close() {
    super.close();
  }

  _renderLoading(isLoading, loadingText='Сохранение...') {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  setInputValues(userData) {
    this._inputList.forEach((input) => {
      input.value = userData[input.name];
    });
  }
/*
  // оригинал
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._renderLoading(true);
      this.apiCallback(this._getInputValues())
        .then((data) => {
          this.updateInfo(data);
          this.close();
        })
        .catch((err) => console.log(err))
        .finally(() => {
          this._renderLoading(false);
        });
    });
  }
*/
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._renderLoading(true);
      this.submitHandler(this._getInputValues());
      this._renderLoading(false);
    });
    this.close();
    this._popupForm.reset();
  }
}
