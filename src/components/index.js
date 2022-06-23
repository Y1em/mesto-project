import '../styles/index.css';

import { initialCards, popupPhoto, createCards, addCard } from './card.js';
import { openPopup, closePopup, closePopupByDevice } from './utils.js';
import { gallery, formNewPlace, popupNewPlace, popupEditProfile, placeInputValue, formSubmitProfile, formSubmitPlace } from './modal.js';
import { hideInputError } from './validation';

const editButton = document.querySelector(".profile__button-edit");
const closeButtonEditProfile = document.querySelector(".popup__button-close_place_edit-profile");
const closeButtonNewPlace = document.querySelector(".popup__button-close_place_new-place");
const closeButtonPhoto = document.querySelector(".popup__button-close_place_photo");
const addButton = document.querySelector(".profile__button-add");
const formEditProfile = document.querySelector(".popup__form_place_edit-profile");

function hideErrorAfterClose () {
  const inputList = Array.from(formEditProfile.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    hideInputError(formEditProfile, inputElement);
  });
};

// Добавление стартовых карточек

initialCards.forEach(function(item) {
  addCard(createCards(item), gallery);
})

// Обработчики

formNewPlace.addEventListener("submit", formSubmitPlace);

addButton.addEventListener("click", function () {
  openPopup(popupNewPlace);
});

closeButtonNewPlace.addEventListener("click", function () {
  closePopup(popupNewPlace);

});

editButton.addEventListener("click", function () {
  placeInputValue();
  openPopup(popupEditProfile);
});

closeButtonEditProfile.addEventListener("click", function () {
  hideErrorAfterClose();
  closePopup(popupEditProfile);
});

closeButtonPhoto.addEventListener("click", function () {
  closePopup(popupPhoto);
});

formEditProfile.addEventListener("submit", formSubmitProfile);

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closePopupByDevice();
    hideErrorAfterClose();
  }
});

document.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__container')) {
    closePopupByDevice();
    hideErrorAfterClose();
  }
});







