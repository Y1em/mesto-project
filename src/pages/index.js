import "../styles/index.css";

import {
  gallery,
  formNewPlace,
  popupEditAvatar,
  popupNewPlace,
  popupEditProfile,
  profileName,
  profileAbout,
  profileAvatar,
  popupPhoto,
  addButton,
  closeButtonEditProfile,
  closeButtonNewPlace,
  editButton,
  editAvatar,
  closeButtonPhoto,
  closeButtonEditAvatar,
  formEditProfile,
  formEditAvatar,

} from "../utils/constants.js";
import {
  newPopup
} from "../components/Popup.js"

import { createCards, addInitialCards } from "../components/card.js";
import { openPopup, closePopup } from "../utils/utils.js";
import {
  fillProfileInputs,
  handlePlaceSubmit,
  handleProfileSubmit,
  handleAvatarSubmit,
  renderLoading,
} from "../components/modal.js";
import { validationConfig, hideInputError } from "../components/validation";
// import { getCards, getProfileInfo } from "./api";

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

// Тест открыть-закрыть попап

newPopup.open();

setTimeout(() => {
  newPopup.close();
}, 3000);


// Добавление стартовых карточек

/* Promise.all([getProfileInfo(), getCards()]).then(([user, cards]) => {
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
}); */

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


