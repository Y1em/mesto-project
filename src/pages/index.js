import "../styles/index.css";

import {
  nameSelector,
  aboutSelector,
  avatarSelector,
  gallerySelector,
  addButton,
  editButton,
  editAvatar,
  validationConfig,
  apiConfig,
} from "../utils/constants.js";

import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section";

const api = new Api(apiConfig);

const userInfo = new UserInfo({ nameSelector, aboutSelector, avatarSelector });

// Добавление стартовых карточек и пользователя

const promises = [api.getProfileInfo(), api.getCards()];

Promise.all(promises)
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    renderedList.setItems(cards);
    renderedList.renderItems(user);
  })
  .catch((err) => console.log(err));



const renderCard = (data, user, cardSelector) => {
  const card = new Card(
    {
      data: data,
      user: user,
      handleChangeLikeStatus: (cardId) => {
        if (card.isLiked()) {
          api
            .removeLike(cardId)
            .then((data) => {
              card.updateLikesState(data);
            })
            .catch((err) => console.log(err));
        } else {
          api
            .addLike(cardId)
            .then((data) => {
              card.updateLikesState(data);
            })
            .catch((err) => console.log(err));
        }
      },
      handleDeleteCard: (event, data) => {
        api
          .deleteCardServ(data)
          .then(() => {
            event.target.closest(".gallery__card").remove();
          })
          .catch((err) => console.log(err));
      },
      handleCardClick: (data) => {
        popupOpenImage.open(data);
      },
    },
    cardSelector
  );
  return card;
};

const renderedList = new Section(
  {
    items: {},
    renderer: (item, user) => {
      const card = renderCard(item, user, ".gallery__template");
      const element = card.generateCard();
      renderedList.appendItem(element);
    },
  },
  gallerySelector
);

// Попап добававить карточку

const popupAddCard = new PopupWithForm({
  popupSelector: ".popup_place_new-place",
  updateInfo: (field) => {
		api.addCardServ({
			name: field.title,
			link: field.link
		})
			.then(data => {
				const card = renderCard(data, userInfo.getUserInfo(), ".gallery__template");
				renderedList.prependItem(card.generateCard());
			})
			.catch(err => console.log(err));
	}
});
popupAddCard.setEventListeners();
addButton.addEventListener("click", function () {
  popupAddCard.open();
});

// Попап редактировать профиль

const popupEditProfile = new PopupWithForm(
  ".popup_place_edit-profile",
  api.editProfile,
  (user) => {
    userInfo.setUserInfo(user);
  }
);
popupEditProfile.setEventListeners();
editButton.addEventListener("click", function () {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  popupEditProfile.open();
});

// Попап редактировать аватар

const popupEditAvatar = new PopupWithForm(
  ".popup_place_edit-avatar",
  api.editAvatar,
  (user) => {
    userInfo.setUserInfo(user);
  }
);
popupEditAvatar.setEventListeners();
editAvatar.addEventListener("click", function () {
  popupEditAvatar.open();
});

// Попап открыть картинку

const popupOpenImage = new PopupWithImage(".popup_place_photo");
popupOpenImage.setEventListeners();

// Валидация

const formValidators = {}
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(validationConfig);
