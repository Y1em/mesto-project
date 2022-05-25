const editButton = document.querySelector(".profile__button-edit");
const closeButtonEditProfile = document.querySelector(".popup__button-close_place_edit-profile");
const closeButtonNewPlace = document.querySelector(".popup__button-close_place_new-place");
const closeButtonPhoto = document.querySelector(".popup__button-close_place_photo");
const confirmButton = document.querySelectorAll(".popup__button-confirm");
const addButton = document.querySelector(".profile__button-add");
const gallery = document.querySelector(".gallery");
const formEditProfile = document.querySelector(".popup__form_place_edit-profile");
const formNewPlace = document.querySelector(".popup__form_place_new-place");

let popupEditProfile = document.querySelector(".popup_place_edit-profile");
let popupNewPlace = document.querySelector(".popup_place_new-place");
let popupPhoto = document.querySelector(".popup_place_photo");
let inputName = document.querySelector(".popup__input_el_name");
let inputAbout = document.querySelector(".popup__input_el_about");
let inputPlace = document.querySelector(".popup__input_el_place");
let inputUrl = document.querySelector(".popup__input_el_url");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
let gallerySubtitle = document.querySelector(".gallery__subtitle");
let galleryPhoto = document.querySelector("gallery__photo");
let popupSubtitle = document.querySelector(".popup__subtitle");
let popupImage = document.querySelector(".popup__image");

let initialCards = [
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

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function placeInputValue() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

// Функция изменения профиля

function formSubmitProfile(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupEditProfile);
}

// Функция добавления стартовых карточек

function addInitialCards(card, gallery) {
  gallery.append(card);
}

// Функция создания стартовых карточек

function createInitialCards(initialCards) {
  for (i = 0; i < initialCards.length; i = i + 1) {
    let cardTemplate = document.querySelector(".gallery__template").content;
    let card = cardTemplate.querySelector(".gallery__card").cloneNode(true);
    let cardPhoto = card.querySelector(".gallery__photo");
    let cardSubtitle = card.querySelector(".gallery__subtitle");

    cardPhoto.setAttribute("src", initialCards[i].link);
    cardPhoto.setAttribute("alt", initialCards[i].name);
    cardSubtitle.textContent = initialCards[i].name;

    card.querySelector(".gallery__like").addEventListener("click", function (event) {
        event.target.classList.toggle("gallery__like_active");
      });

    card.querySelector(".gallery__delete").addEventListener("click", function (event) {
        event.target.closest(".gallery__card").remove();
      });

    cardPhoto.addEventListener("click", function () {
      popupPhoto.classList.add("popup_opened");
      popupSubtitle.textContent = cardSubtitle.textContent;
      popupImage.setAttribute("src", cardPhoto.getAttribute("src"));
      popupImage.setAttribute("alt", cardPhoto.getAttribute("alt"));
    });

    addInitialCards(card, gallery);
  }
}

createInitialCards(initialCards);

// Функция создания карточки

function createCard(inputPlaceValue, inputUrlValue) {
  let cardTemplate = document.querySelector(".gallery__template").content;
  let card = cardTemplate.querySelector(".gallery__card").cloneNode(true);
  let cardPhoto = card.querySelector(".gallery__photo");
  let cardSubtitle = card.querySelector(".gallery__subtitle");

  cardSubtitle.textContent = inputPlaceValue;
  cardPhoto.setAttribute("src", inputUrlValue);
  cardPhoto.setAttribute("alt", inputPlaceValue);

  card.querySelector(".gallery__like").addEventListener("click", function (event) {
      event.target.classList.toggle("gallery__like_active");
    });

  card.querySelector(".gallery__delete").addEventListener("click", function (event) {
      event.target.closest(".gallery__card").remove();
    });

  cardPhoto.addEventListener("click", function () {
    popupPhoto.classList.add("popup_opened");
    popupSubtitle.textContent = cardSubtitle.textContent;
    popupImage.setAttribute("src", cardPhoto.getAttribute("src"));
    popupImage.setAttribute("alt", cardPhoto.getAttribute("alt"));
  });

  return card;
}

// Промежуточная функция добавления карточки

function addCard(card, gallery) {
  gallery.prepend(card);
}

// Функция добавления карточки

function formSubmitPlace(event) {
  event.preventDefault();

  createCard(inputPlace.value, inputUrl.value);

  addCard(createCard(inputPlace.value, inputUrl.value), gallery);

  closePopup(popupNewPlace);

  formNewPlace.reset();
}

// Обработчики

formNewPlace.addEventListener("submit", formSubmitPlace);

addButton.addEventListener("click", function () {
  openPopup(popupNewPlace);
});

closeButtonNewPlace.addEventListener("click", function () {
  closePopup(popupNewPlace);
});

editButton.addEventListener("click", function () {
  placeInputValue();
  openPopup(popupEditProfile);
});

closeButtonEditProfile.addEventListener("click", function () {
  closePopup(popupEditProfile);
});

closeButtonPhoto.addEventListener("click", function () {
  closePopup(popupPhoto);
});

formEditProfile.addEventListener("submit", formSubmitProfile);


