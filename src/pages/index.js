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

import { openPopup, closePopup } from "../utils/utils.js";
import {
  fillProfileInputs,
  handlePlaceSubmit,
  handleProfileSubmit,
  handleAvatarSubmit,
  renderLoading,
} from "../components/modal.js";
import { api } from "../components/Api.js"; // теперь можно доставать методы изнутри api.getCards()
import { card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";

// Тест открыть-закрыть попап

newPopup.open();

setTimeout(() => {
  newPopup.close();
}, 3000);

const userInfo = new UserInfo({profileName, profileAbout, profileAvatar, profileId}); // должен быть в index.js, т.к. обращается к constants.js, а импорты разрешены только здесь
const card = new Card({data, user}, handleDeleteCard, handleChangeLikeStatus); // навешать аргументов
// Добавление стартовых карточек и пользователя
const promises = [api.getProfileInfo(), api.getCards()]; // вытаскиваем промисы отдельно, чтоб избежать длинной строки аргументов
Promise.all(promises)
  .then(([user, cards]) => {
    userInfo.setUserInfo(user); // получаем данные с сервера ОБЪЕКТОМ и вставляем в разметку
    card.renderCardsFromSrv(); // c карточками надо чото с рендером делать
  })
  .catch((err) => console.log(err));

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

const profileValidator = new FormValidator(validationConfig, formEditProfile);
const profileValidator = new FormValidator(validationConfig, formEditAvatar);
const cardValidator = new FormValidator(validationConfig, formNewPlace);