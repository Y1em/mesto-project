import '../styles/index.css';

import { initialCards, popupPhoto, createCards, addCard } from './card.js';
import { openPopup, closePopup, closePopupByDevice } from './utils.js';
import { gallery, formNewPlace, popupNewPlace, popupEditProfile, fillProfileInputs, handlePlaceSubmit, handleProfileSubmit } from './modal.js';
import { validationConfig, hideInputError } from './validation';

const editButton = document.querySelector(".profile__button-edit");
const closeButtonEditProfile = document.querySelector(".popup__button-close_place_edit-profile");
const closeButtonNewPlace = document.querySelector(".popup__button-close_place_new-place");
const closeButtonPhoto = document.querySelector(".popup__button-close_place_photo");
const addButton = document.querySelector(".profile__button-add");
const formEditProfile = document.querySelector(".popup__form_place_edit-profile");

function hideErrorAfterClose () {
  const inputList = Array.from(formEditProfile.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    hideInputError(formEditProfile, inputElement, validationConfig.inputErrorClass);
  });
};

// Добавление стартовых карточек

initialCards.forEach(function(item) {
  addCard(createCards(item), gallery);
})

// Обработчики

formNewPlace.addEventListener("submit", handlePlaceSubmit);

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

closeButtonEditProfile.addEventListener("click", function () {
  closePopup(popupEditProfile);
});

closeButtonPhoto.addEventListener("click", function () {
  closePopup(popupPhoto);
});

formEditProfile.addEventListener("submit", handleProfileSubmit);







