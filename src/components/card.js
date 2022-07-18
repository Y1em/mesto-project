import { getCards, getProfileInfo, addLike, deleteCardServ, removeLike } from "./api.js";
import { openPopup, handleDeleteCard, handleChangeLikeStatus } from "../utils/utils.js";

class Card {
  constructor({data, user}, handleDeleteCard, handleChangeLikeStatus) { // data - карточки с сервера, user - данные пользователя с сервера
    this._name = data.name; // то, что берём с сервака
    this._link = data.link;
    this._userId = user._id;
    this._handleChangeLikeStatus = handleChangeLikeStatus;
    this._handleDeleteCard = handleDeleteCard;
  }
  _getCardFromTemplate() {
    const cardTemplate = document.querySelector(".gallery__template").content; // выносим метод клонирования
    const card = cardTemplate.querySelector(".gallery__card").cloneNode(true);
    return card;
  }
  generateCard() {
    this._card = this._getCardTemplate();
    this._cardSubtitle.textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._cardPhoto = this._card.querySelector(".gallery__photo");
    this._deleteButton = this._card.querySelector(".gallery__delete");
    this._likeButton = this._card.querySelector(".gallery__like");
    this._likeCounter = this._card.querySelector(".gallery__like-counter");

    return this._card;
  }
  showDeleteIcon() {
    if (obj.owner._id !== profileId) {
      card
        .querySelector(".gallery__delete")
        .classList.add("gallery__delete_inactive");
    }
  
    obj.likes.forEach((like) => {
      if (like._id === profileId) {
        card
          .querySelector(".gallery__like")
          .classList.add("gallery__like_active");
      }
    });
  }
  _setEventListeners() {
    this._cardPhoto.addEventListener('click', () => openPopup(popupPhoto)); // не забыть переделать

    this._deleteButton.addEventListener('click', () => function (event) { // не забыть взять функцию из своего проекта и воткнуть вызов сюда, при этом саму функцию перенести в utils
      deleteCardServ(obj._id)
        .then(() => {
          event.target.closest(".gallery__card").remove();
        })
        .catch((err) => console.log(err));
    });

    this._likeButton.addEventListener('click', () => function (event) {
      if (event.target.classList.contains("gallery__like_active")) {
        removeLike(obj._id)
          .then((obj) => {
            event.target.classList.remove("gallery__like_active");
            likeCounter.textContent = obj.likes.length;
          })
          .catch((err) => console.log(err));
      } else {
        addLike(obj._id)
          .then((obj) => {
            event.target.classList.add("gallery__like_active");
            likeCounter.textContent = obj.likes.length;
          })
          .catch((err) => console.log(err));
      }
    });
  }
}

// Функция создания карточки

export function createCards(obj) {
  const card = cardTemplate.querySelector(".gallery__card").cloneNode(true);
  const cardPhoto = card.querySelector(".gallery__photo");
  const cardSubtitle = card.querySelector(".gallery__subtitle");
  const likeCounter = card.querySelector(".gallery__like-counter");

  cardPhoto.setAttribute("src", obj.link);
  cardPhoto.setAttribute("alt", obj.name);
  cardSubtitle.textContent = obj.name;
  likeCounter.textContent = obj.likes.length;

  if (obj.owner._id !== profileId) {
    card
      .querySelector(".gallery__delete")
      .classList.add("gallery__delete_inactive");
  }

  obj.likes.forEach((like) => {
    if (like._id === profileId) {
      card
        .querySelector(".gallery__like")
        .classList.add("gallery__like_active");
    }
  });

  card
    .querySelector(".gallery__like")
    .addEventListener("click", function (event) {
      if (event.target.classList.contains("gallery__like_active")) {
        removeLike(obj._id)
          .then((obj) => {
            event.target.classList.remove("gallery__like_active");
            likeCounter.textContent = obj.likes.length;
          })
          .catch((err) => console.log(err));
      } else {
        addLike(obj._id)
          .then((obj) => {
            event.target.classList.add("gallery__like_active");
            likeCounter.textContent = obj.likes.length;
          })
          .catch((err) => console.log(err));
      }
    });

  card
    .querySelector(".gallery__delete")
    .addEventListener("click", function (event) {
      deleteCardServ(obj._id)
        .then(() => {
          event.target.closest(".gallery__card").remove();
        })
        .catch((err) => console.log(err));
    });

  cardPhoto.addEventListener("click", function () {
    openPopup(popupPhoto);
    popupSubtitle.textContent = cardSubtitle.textContent;
    popupImage.setAttribute("src", cardPhoto.getAttribute("src"));
    popupImage.setAttribute("alt", cardPhoto.getAttribute("alt"));
  });

  return card;
}

// Функция добавления карточки

export function addOneCard(card, gallery) {
  gallery.prepend(card);
}

export function addInitialCards(card, gallery) {
  gallery.append(card);
}
