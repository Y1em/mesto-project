// to index.js
export const nameSelector = ".profile__name";
export const aboutSelector = ".profile__about";
export const avatarSelector = ".profile__image";
export const gallerySelector = ".gallery";
export const addButton = document.querySelector(".profile__button-add");
export const editAvatar = document.querySelector(".profile__avatar-overlay");
export const editButton = document.querySelector(".profile__button-edit");
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-confirm",
  inactiveButtonClass: "popup__button-confirm_inactive",
  inputErrorClass: "popup__input_type_error",
};
export const apiConfig = {
  url: "https://mesto.nomoreparties.co/v1/plus-cohort-13",
  headers: {
    authorization: "eeb10f4c-568d-4124-bc82-28113d2b839d",
    "Content-Type": "application/json",
  }
}
