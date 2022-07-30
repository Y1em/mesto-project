import "../styles/index.css";

import {
  nameSelector,
  aboutSelector,
  avatarSelector,
  gallerySelector,
  formNewPlace,
  formEditProfile,
  formEditAvatar,
  addButton,
  editButton,
  editAvatar,
  validationConfig,
} from "../utils/constants.js";
import { fillProfileInputs } from "../utils/utils.js";

import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section";

const api = new Api();

export const userInfo = new UserInfo({nameSelector, aboutSelector, avatarSelector});

// Добавление стартовых карточек и пользователя

const promises = [api.getProfileInfo(), api.getCards()];

Promise.all(promises)
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    userInfo.getUserInfo(user);
    renderedList.renderItems(cards);
    renderedList.addItem(user);
  })
  .catch((err) => console.log(err));

export const renderCard = (data, user, cardSelector) => {
  const card = new Card({
		data: data,
		user: user,
		handleChangeLikeStatus: (cardId) => {
			if (card.isLiked()) {
				api.removeLike(cardId)
					.then((data) => {
						card.updateLikesState(data)
					})
					.catch(err => console.log(err));
			} else {
				api.addLike(cardId)
					.then((data) => {
						card.updateLikesState(data)
					})
					.catch(err => console.log(err));
			}
		},
		handleDeleteCard: (event, data) => {
			api.deleteCardServ(data)
      .then(() => {
        event.target.closest(".gallery__card").remove();
      })
      .catch(err => console.log(err));
		},
    handleCardClick: (data) => {
      popupOpenImage.open(data);
    }
	}, cardSelector);
	return card;
}

const renderedList = new Section({
  items: {},
  renderer: (item, user) => {
    const card = renderCard(item, user, ".gallery__template");
    const element = card.generateCard();
    renderedList.appendItem(element);
  }
}, gallerySelector);

// Попап добававить карточку

const popupAddCard = new PopupWithForm('.popup_place_new-place', api.addCardServ); //добавить кетч?
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

const popupOpenImage = new PopupWithImage(".popup_place_photo");
popupOpenImage.setEventListeners();

// Валидация

const profileValidator = new FormValidator(validationConfig, formEditProfile);
profileValidator.enableValidation();
const avatarValidator = new FormValidator(validationConfig, formEditAvatar);
avatarValidator.enableValidation();
const cardValidator = new FormValidator(validationConfig, formNewPlace);
cardValidator.enableValidation();


