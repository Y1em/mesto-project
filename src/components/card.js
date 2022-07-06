import { addLike, deleteCardServ, removeLike } from "./api.js";
import { openPopup } from "./utils.js";
import { profileId } from "./index.js";

const popupPhoto = document.querySelector(".popup_place_photo");
const cardTemplate = document.querySelector(".gallery__template").content;
const popupSubtitle = document.querySelector(".popup__subtitle");
const popupImage = document.querySelector(".popup__image");

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

export { popupPhoto };
