import { popupOpenImage } from "../pages/index.js";

export default class Card {
  constructor({data, user}, handleDeleteCard, handleChangeLikeStatus, handleCardClick) {
    this._data = data; // Надо передать карточку с сервера
    this._user = user; // Передать юзера как целый объект
    this._name = data.name;
    this._link = data.link;
    this._handleDeleteCard = handleDeleteCard;
    this._handleChangeLikeStatus = handleChangeLikeStatus;
    this.handleCardClick = handleCardClick;
  }
  _getCardFromTemplate() {
    const cardTemplate = document.querySelector(".gallery__template").content;
    const card = cardTemplate.querySelector(".gallery__card").cloneNode(true);
    return card;
  }
  generateCard() {
    this._card = this._getCardTemplate();
    this._cardSubtitle.textContent = this._name;
    this._cardPhoto = this._card.querySelector(".gallery__photo");
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._deleteButton = this._card.querySelector(".gallery__delete");
    this._likeButton = this._card.querySelector(".gallery__like");
    this._likeCounter = this._card.querySelector(".gallery__like-counter");
    return this._card;
  }
  _showDeleteIcon() {
    if (this._card.owner._id !== this._userId) {
      card
        .querySelector(".gallery__delete")
        .classList.add("gallery__delete_inactive");
    }
  }
  // лайки ковырять надо
  isLiked() { // НЕ приватный, т.к. передаётся в Api.changeLikeStatus
    return Boolean(likesArray.find((likeObj) => {
      return likeObj._id === this._userId;
    }))
  }
  _updateLikesState() {
    this._likeCounter.textContent = this._card.likes.length;
    if (this.isLiked()) {
      this._likeButton.classList.add('gallery__like_active');
    } else {
      this._likeButton.classList.remove('gallery__like_active');
    }
  }
  // потом убрать из этого файла !! Не убирай)
  handleCardClick(data) {
    popupOpenImage.open(data);
  }
  _setEventListeners() {
    this._cardPhoto.addEventListener('click', (evt) => {
      handleCardClick({ name: evt.target.alt, link: evt.target.src })
    });
    this._deleteButton.addEventListener('click', () => handleDeleteCard());
    this._likeButton.addEventListener('click', () => handleChangeLikeStatus());
  }
}

// Функция добавления карточки

export function addOneCard(card, gallery) {
  gallery.prepend(card);
}

export function addInitialCards(card, gallery) {
  gallery.append(card);
}
