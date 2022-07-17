import "../styles/index.css";

import { popupPhoto, createCards, addInitialCards } from "../components/card.js";
import { openPopup, closePopup } from "../utils/utils.js";
import {
  gallery,
  formNewPlace,
  popupEditAvatar,
  popupNewPlace,
  popupEditProfile,
  fillProfileInputs,
  handlePlaceSubmit,
  handleProfileSubmit,
  handleAvatarSubmit,
  renderLoading,
  profileName,
  profileAbout,
  profileAvatar,
} from "../components/modal.js";
import { validationConfig, hideInputError } from "../components/validation";
// import { getCards, getProfileInfo } from "./api";

export let profileId = "";

const editButton = document.querySelector(".profile__button-edit");
const closeButtonEditProfile = document.querySelector(
  ".popup__button-close_place_edit-profile"
);
const closeButtonNewPlace = document.querySelector(
  ".popup__button-close_place_new-place"
);
const closeButtonPhoto = document.querySelector(
  ".popup__button-close_place_photo"
);
const closeButtonEditAvatar = document.querySelector(
  ".popup__button-close_place_edit-avatar"
);
const addButton = document.querySelector(".profile__button-add");
const formEditProfile = document.querySelector(
  ".popup__form_place_edit-profile"
);
const formEditAvatar = document.querySelector(".popup__form_place_edit-avatar");
const editAvatar = document.querySelector(".profile__avatar-overlay");

function hideErrorAfterClose() {
  const inputList = Array.from(
    formEditProfile.querySelectorAll(".popup__input")
  );
  inputList.forEach((inputElement) => {
    hideInputError(
      formEditProfile,
      inputElement,
      validationConfig.inputErrorClass
    );
  });
}

// Добавление стартовых карточек

Promise.all([getProfileInfo(), getCards()]).then(([user, cards]) => {
  getProfileInfo().then((user) => {
    profileName.textContent = user.name;
    profileAbout.textContent = user.about;
    profileAvatar.setAttribute("src", user.avatar);
    profileId = user._id;
  });
  getCards()
    .then((cards) => {
      cards.forEach(function (card) {
        addInitialCards(createCards(card), gallery);
      });
    })
    .catch((err) => console.log(err));
});

// Обработчики

formNewPlace.addEventListener("submit", function (e) {
  e.preventDefault();
  renderLoading(e, true);
  handlePlaceSubmit(e);
});

addButton.addEventListener("click", function () {
  openPopup(popupNewPlace);
});

closeButtonNewPlace.addEventListener("click", function () {
  closePopup(popupNewPlace);
});

editButton.addEventListener("click", function () {
  hideErrorAfterClose();
  fillProfileInputs();
  openPopup(popupEditProfile);
});

editAvatar.addEventListener("click", function () {
  openPopup(popupEditAvatar);
});

/* closeButtonEditProfile.addEventListener("click", function () {
  closePopup(popupEditProfile);
}); */

closeButtonPhoto.addEventListener("click", function () {
  closePopup(popupPhoto);
});

closeButtonEditAvatar.addEventListener("click", function () {
  closePopup(popupEditAvatar);
});

formEditProfile.addEventListener("submit", function (e) {
  e.preventDefault();
  renderLoading(e, true);
  handleProfileSubmit(e);
});

formEditAvatar.addEventListener("submit", function (e) {
  e.preventDefault();
  renderLoading(e, true);
  handleAvatarSubmit(e);
});
