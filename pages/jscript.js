const editButton = document.querySelector(".profile__button-edit");
const closeButtonEditProfile = document.querySelector(".popup__button-close_place_edit-profile");
const closeButtonNewPlace = document.querySelector(".popup__button-close_place_new-place");
const closeButtonPhoto = document.querySelector(".popup__button-close_place_photo");
const confirmButton = document.querySelectorAll(".popup__button-confirm");
const addButton = document.querySelector(".profile__button-add");
const gallery = document.querySelector(".gallery");
const formEditProfile = document.querySelector(".popup__form_place_edit-profile");
const formNewPlace = document.querySelector(".popup__form_place_new-place");
const cardTemplate = document.querySelector(".gallery__template").content;
const popupEditProfile = document.querySelector(".popup_place_edit-profile");
const popupNewPlace = document.querySelector(".popup_place_new-place");
const popupPhoto = document.querySelector(".popup_place_photo");
const inputName = document.querySelector(".popup__input_el_name");
const inputAbout = document.querySelector(".popup__input_el_about");
const inputPlace = document.querySelector(".popup__input_el_place");
const inputUrl = document.querySelector(".popup__input_el_url");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const gallerySubtitle = document.querySelector(".gallery__subtitle");
const galleryPhoto = document.querySelector("gallery__photo");
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

// Функция добавления карточки

function addCard(card, gallery) {
  gallery.prepend(card);
}

// Функция создания стартовых карточек

function createCards(obj) {

  obj.forEach(function(item) {

    const card = cardTemplate.querySelector(".gallery__card").cloneNode(true);
    const cardPhoto = card.querySelector(".gallery__photo");
    const cardSubtitle = card.querySelector(".gallery__subtitle");

    cardPhoto.setAttribute("src", item.link);
    cardPhoto.setAttribute("alt", item.name);
    cardSubtitle.textContent = item.name;

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

    addCard(card, gallery);

  })

}

createCards(initialCards);

// Функция добавления карточки

function formSubmitPlace(event) {
  event.preventDefault();

  const arr = [
    {
    name: inputPlace.value,
    link: inputUrl.value,
    },
  ]

  createCards(arr);

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


