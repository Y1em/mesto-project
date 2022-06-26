import { closePopup } from './utils.js';
import { addCard, createCards } from './card.js';
import { disableButton } from './validation.js';

const inputName = document.querySelector(".popup__input_el_name");
const inputAbout = document.querySelector(".popup__input_el_about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const popupEditProfile = document.querySelector(".popup_place_edit-profile");
const popupNewPlace = document.querySelector(".popup_place_new-place");
const inputPlace = document.querySelector(".popup__input_el_place");
const inputUrl = document.querySelector(".popup__input_el_url");
const formNewPlace = document.querySelector(".popup__form_place_new-place");
const gallery = document.querySelector(".gallery");
const buttonConfirmPlace = formNewPlace.querySelector(".popup__button-confirm");
const buttonConfirmProfile = popupEditProfile.querySelector(".popup__button-confirm");

export function fillProfileInputs() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

// Функция изменения профиля

export function handleProfileSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupEditProfile);
  disableButton(buttonConfirmProfile);
}

// Функция добавления карточки

export function handlePlaceSubmit(event) {
  event.preventDefault();

  const obj = {
    name: inputPlace.value,
    link: inputUrl.value,
    };

  addCard(createCards(obj), gallery);

  closePopup(popupNewPlace);

  formNewPlace.reset();

  disableButton(buttonConfirmPlace);
}

export { formNewPlace, popupNewPlace, popupEditProfile, gallery };
