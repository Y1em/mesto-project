import { closePopup } from "./utils.js";
import { addOneCard, createCards } from "./card.js";
import { disableButton, validationConfig } from "./validation.js";
import { addCardServ, editProfile, editAvatar } from "./api.js";

const inputName = document.querySelector(".popup__input_el_name");
const inputAbout = document.querySelector(".popup__input_el_about");
const inputAvatar = document.querySelector(".popup__input_el_avatar");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const profileAvatar = document.querySelector(".profile__image");
const popupEditProfile = document.querySelector(".popup_place_edit-profile");
const popupNewPlace = document.querySelector(".popup_place_new-place");
const popupEditAvatar = document.querySelector(".popup_place_edit-avatar");
const inputPlace = document.querySelector(".popup__input_el_place");
const inputUrl = document.querySelector(".popup__input_el_url");
const formNewPlace = document.querySelector(".popup__form_place_new-place");
const formEditAvatar = document.querySelector(".popup__form_place_edit-avatar");
const gallery = document.querySelector(".gallery");
const buttonConfirmPlace = formNewPlace.querySelector(".popup__button-confirm");
const buttonConfirmAvatar = popupEditAvatar.querySelector(
  ".popup__button-confirm"
);
const buttonConfirmProfile = popupEditProfile.querySelector(
  ".popup__button-confirm"
);

export function fillProfileInputs() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

// Функция изменения профиля

export function handleProfileSubmit(e) {
  const user = {
    name: inputName.value,
    about: inputAbout.value,
  };

  editProfile(user)
    .then(() => {
      profileName.textContent = user.name;
      profileAbout.textContent = user.about;
      closePopup(popupEditProfile);
      disableButton(buttonConfirmProfile, validationConfig.inactiveButtonClass);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(e, false);
    });
}

// Функция добавления карточки

export function handlePlaceSubmit(e) {
  const obj = {
    name: inputPlace.value,
    link: inputUrl.value,
  };

  addCardServ(obj)
    .then((card) => {
      addOneCard(createCards(card), gallery);
      closePopup(popupNewPlace);
      disableButton(buttonConfirmPlace, validationConfig.inactiveButtonClass);
      formNewPlace.reset();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(e, false);
    });
}

// Функция изменения аватара

export function handleAvatarSubmit(e) {
  const user = {
    avatar: inputAvatar.value,
  };

  editAvatar(user)
    .then(() => {
      profileAvatar.setAttribute("src", user.avatar);
      closePopup(popupEditAvatar);
      disableButton(buttonConfirmAvatar, validationConfig.inactiveButtonClass);
      formEditAvatar.reset();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(e, false);
    });
}

export function renderLoading(event, isLoading) {
  const buttonsList = document.querySelectorAll(".popup__button-confirm");
  if (isLoading) {
    event.target.closest(".popup").classList.add("popup_opened");
    buttonsList.forEach((button) => {
      button.textContent = "Сохранение...";
    });
  } else {
    event.target.closest(".popup").classList.remove("popup_opened");
    buttonsList.forEach((button) => {
      button.textContent = "Сохранить";
    });
  }
}

export {
  formNewPlace,
  popupNewPlace,
  popupEditProfile,
  popupEditAvatar,
  gallery,
  profileName,
  profileAbout,
  profileAvatar,
};
