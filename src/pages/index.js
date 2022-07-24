import "../styles/index.css";

import {
  nameSelector,
  aboutSelector,
  avatarSelector,
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
import { PopupWithForm } from "../components/PopupWithForm";
import { fillProfileInputs, updateUserInfo } from "../utils/utils.js";

import { api } from "../components/Api.js"; // теперь можно доставать методы изнутри api.getCards()
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";

export const userInfo = new UserInfo({nameSelector, aboutSelector, avatarSelector}); // должен быть в index.js, т.к. обращается к constants.js, а импорты разрешены только здесь
// const card = new Card({data, user}, handleDeleteCard, handleChangeLikeStatus); // навешать аргументов

// Добавление стартовых карточек и пользователя

const promises = [api.getProfileInfo(), api.getCards()]; // вытаскиваем промисы отдельно, чтоб избежать длинной строки аргументов

Promise.all(promises)
  .then(([user, cards]) => {
    userInfo.setUserInfo(user); // получаем данные с сервера ОБЪЕКТОМ и вставляем в разметку
    card.renderCardsFromSrv(); // c карточками надо чото с рендером делать
  })
  .catch((err) => console.log(err));

// Попап добававить карточку

const popupAddCard = new PopupWithForm('.popup_place_new-place', api.addCardServ);
popupAddCard.setEventListeners();

addButton.addEventListener("click", function () {
  cardValidator.hideErrorAfterClose();
  popupAddCard.open();
});

// Попап редактировать профиль

const popupEditProfile = new PopupWithForm(".popup_place_edit-profile", api.editProfile);
popupEditProfile.setEventListeners();

editButton.addEventListener("click", function () {
  fillProfileInputs(userInfo.getUserInfo());
  popupEditProfile.open();
});

// Попап редактировать аватар

const popupEditAvatar = new PopupWithForm(".popup_place_edit-avatar", api.editAvatar);
popupEditAvatar.setEventListeners();
editAvatar.addEventListener("click", function () {
  avatarValidator.hideErrorAfterClose();
  popupEditAvatar.open();
});

// Попап открыть картинку

export const popupOpenImage = new PopupWithImage(".popup_place_photo");
popupOpenImage.setEventListeners();

// Валидация

const profileValidator = new FormValidator(validationConfig, formEditProfile);
profileValidator.enableValidation();
const avatarValidator = new FormValidator(validationConfig, formEditAvatar);
avatarValidator.enableValidation();
const cardValidator = new FormValidator(validationConfig, formNewPlace);
cardValidator.enableValidation();
