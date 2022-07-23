import "../styles/index.css";

import {
  gallery,
  formNewPlace,
  popupNewPlace,
  profileName,
  profileAbout,
  profileAvatar,
  popupPhoto,
  addButton,
  editButton,
  editAvatar,
  formEditProfile,
  formEditAvatar,
  profileId,
  validationConfig,
  popupImage,

} from "../utils/constants.js";

import { Popup } from "../components/Popup.js"
import { PopupWithImage } from "../components/PopupWithImage.js"

import {  } from "../utils/utils.js";
import {
  fillProfileInputs,
  handlePlaceSubmit,
  handleProfileSubmit,
  handleAvatarSubmit,
  renderLoading,
} from "../components/modal.js";
import { api } from "../components/Api.js"; // теперь можно доставать методы изнутри api.getCards()
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm";

const userInfo = new UserInfo({profileName, profileAbout, profileAvatar, profileId}); // должен быть в index.js, т.к. обращается к constants.js, а импорты разрешены только здесь
// Я убрал const card = new Card({data, user}, handleDeleteCard, handleChangeLikeStatus); // навешать аргументов
// Добавление стартовых карточек и пользователя

const promises = [api.getProfileInfo(), api.getCards()]; // вытаскиваем промисы отдельно, чтоб избежать длинной строки аргументов

Promise.all(promises)
  .then(([user, cards]) => {
    userInfo.setUserInfo(user); // получаем данные с сервера ОБЪЕКТОМ и вставляем в разметку
    card.renderCardsFromSrv(); // c карточками надо чото с рендером делать
  })
  .catch((err) => console.log(err));

// Попап добававить карточку

const popupAddCard = new PopupWithForm('.popup_place_new-place', api.deleteCardServ);
popupAddCard.setEventListeners();

addButton.addEventListener("click", function () {
  popupAddCard.open();
});

// Попап редактировать профиль

const popupEditProfile = new PopupWithForm(".popup_place_edit-profile", api.editProfile);
popupEditProfile.setEventListeners();

editButton.addEventListener("click", function () {
  //hideErrorAfterClose();
  //fillProfileInputs();
  popupEditProfile.open();
});

// Попап редактировать аватар

const popupEditAvatar = new PopupWithForm(".popup_place_edit-avatar", api.editAvatar);
popupEditAvatar.setEventListeners();

editAvatar.addEventListener("click", function () {
  popupEditAvatar.open()
});

// Попап открыть картинку

export const popupOpenImage = new PopupWithImage(".popup_place_photo");
popupOpenImage.setEventListeners();

//test

/* document.querySelector('.gallery__photo').addEventListener('click', (evt) => {
  popupOpenImage.open({ name: evt.target.alt, link: evt.target.src });
}) */


/* formEditProfile.addEventListener("submit", function (e) {
  e.preventDefault();
  renderLoading(e, true);
  handleProfileSubmit(e);
});

formEditAvatar.addEventListener("submit", function (e) {
  e.preventDefault();
  renderLoading(e, true);
  handleAvatarSubmit(e);
}); */

const profileValidator = new FormValidator(validationConfig, popupEditProfile.forms);
const avatarValidator = new FormValidator(validationConfig, formEditAvatar);
const cardValidator = new FormValidator(validationConfig, formNewPlace);
