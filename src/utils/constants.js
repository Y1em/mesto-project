// to index.js

export const nameSelector = ".profile__name";
export const aboutSelector = ".profile__about";
export const avatarSelector = ".profile__image";
export const gallerySelector = ".gallery";
export const formEditAvatar = document.querySelector(
  ".popup__form_place_edit-avatar"
);
export const formEditProfile = document.querySelector(
  ".popup__form_place_edit-profile"
);
export const formNewPlace = document.querySelector(
  ".popup__form_place_new-place"
);
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

// to utils.js

export const inputName = document.querySelector(".popup__input_el_name");
export const inputAbout = document.querySelector(".popup__input_el_about");
