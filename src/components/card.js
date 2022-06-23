import { openPopup } from './utils.js';

const popupPhoto = document.querySelector(".popup_place_photo");
const cardTemplate = document.querySelector(".gallery__template").content;
const popupSubtitle = document.querySelector(".popup__subtitle");
const popupImage = document.querySelector(".popup__image");
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// Функция создания карточки

export function createCards(obj) {

  const card = cardTemplate.querySelector(".gallery__card").cloneNode(true);
  const cardPhoto = card.querySelector(".gallery__photo");
  const cardSubtitle = card.querySelector(".gallery__subtitle");

  cardPhoto.setAttribute("src", obj.link);
  cardPhoto.setAttribute("alt", obj.name);
  cardSubtitle.textContent = obj.name;

  card.querySelector(".gallery__like").addEventListener("click", function (event) {
    event.target.classList.toggle("gallery__like_active");
  });

  card.querySelector(".gallery__delete").addEventListener("click", function (event) {
    event.target.closest(".gallery__card").remove();
  });

  cardPhoto.addEventListener("click", function () {
    openPopup(popupPhoto);
    popupSubtitle.textContent = cardSubtitle.textContent;
    popupImage.setAttribute("src", cardPhoto.getAttribute("src"));
    popupImage.setAttribute("alt", cardPhoto.getAttribute("alt"));
  });

  return card;

};

// Функция добавления карточки

export function addCard(card, gallery) {
  gallery.prepend(card);
}

export { initialCards, popupPhoto }
