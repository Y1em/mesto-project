// from index.js

export let profileId = "";

export const editButton = document.querySelector(".profile__button-edit");
export const closeButtonEditProfile = document.querySelector(
  ".popup__button-close_place_edit-profile"
);
export const closeButtonNewPlace = document.querySelector(
  ".popup__button-close_place_new-place"
);
export const closeButtonPhoto = document.querySelector(
  ".popup__button-close_place_photo"
);
export const closeButtonEditAvatar = document.querySelector(
  ".popup__button-close_place_edit-avatar"
);
export const addButton = document.querySelector(".profile__button-add");
export const formEditProfile = document.querySelector(
  ".popup__form_place_edit-profile"
);
export const formEditAvatar = document.querySelector(".popup__form_place_edit-avatar");
export const editAvatar = document.querySelector(".profile__avatar-overlay");

// from utils.js

export const popupList = Array.from(document.querySelectorAll(".popup"));

// from modal.js

export const inputName = document.querySelector(".popup__input_el_name");
export const inputAbout = document.querySelector(".popup__input_el_about");
export const inputAvatar = document.querySelector(".popup__input_el_avatar");
export const profileName = document.querySelector(".profile__name");
export const profileAbout = document.querySelector(".profile__about");
export const profileAvatar = document.querySelector(".profile__image");
export const popupNewPlace = document.querySelector(".popup_place_new-place");
export const popupEditAvatar = document.querySelector(".popup_place_edit-avatar");
export const inputPlace = document.querySelector(".popup__input_el_place");
export const inputUrl = document.querySelector(".popup__input_el_url");
export const formNewPlace = document.querySelector(".popup__form_place_new-place");
export const gallery = document.querySelector(".gallery");
export const buttonConfirmPlace = formNewPlace.querySelector(".popup__button-confirm");
export const buttonConfirmAvatar = popupEditAvatar.querySelector(
  ".popup__button-confirm"
);
export const buttonConfirmProfile = document.querySelector(
  ".popup__button-confirm"
);

// from card.js

export const popupPhoto = document.querySelector(".popup_place_photo");
export const cardTemplate = document.querySelector(".gallery__template").content;
export const popupSubtitle = document.querySelector(".popup__subtitle");
export const popupImage = document.querySelector(".popup__image");

// from validation.js

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-confirm",
  inactiveButtonClass: "popup__button-confirm_inactive",
  inputErrorClass: "popup__input_type_error",
};
