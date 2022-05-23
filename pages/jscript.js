let editButton = document.querySelector('.profile__button-edit');
let closeButton = document.querySelectorAll('.popup__button-close');
let likeButton = document.querySelectorAll('.gallery__like');
let confirmButton = document.querySelectorAll('.popup__button-confirm');
let addButton = document.querySelector('.profile__button-add');
let popup = document.querySelectorAll('.popup');
let formEdit = document.querySelectorAll('.popup__form');
let inputName = document.querySelector('.popup__input_el_name');
let inputAbout = document.querySelector('.popup__input_el_about');
let inputPlace = document.querySelector('.popup__input_el_place');
let inputUrl = document.querySelector('.popup__input_el_url');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let gallerySubtitle = document.querySelector('.gallery__subtitle');
let galleryPhoto = document.querySelector('gallery__photo');
let gallery = document.querySelector('.gallery');
let initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];
  let popupSubtitle = document.querySelector('.popup__subtitle');
  let popupImage = document.querySelector('.popup__image');


editButton.addEventListener('click', function () {
  popup[0].classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});

closeButton[0].addEventListener('click', function () {
  popup[0].classList.remove('popup_opened');
});

addButton.addEventListener('click', function () {
  popup[1].classList.add('popup_opened');

});

closeButton[1].addEventListener('click', function () {
  popup[1].classList.remove('popup_opened');
});

function formSubmitProfile (evt) { // Профиль
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup[0].classList.remove('popup_opened');
};

formEdit[0].addEventListener('submit', formSubmitProfile);

// Описание функции добавления карточки

function addCard (inputPlaceValue, inputUrlValue) {

  let cardTemplate = document.querySelector('.gallery__template').content;
  let card = cardTemplate.querySelector('.gallery__card').cloneNode(true);

  card.querySelector('.gallery__subtitle').textContent = inputPlaceValue;
  card.querySelector('.gallery__photo').setAttribute('src', inputUrlValue);
  card.querySelector('.gallery__photo').setAttribute('alt', inputPlaceValue);
  card.querySelector('.gallery__like').addEventListener ('click', function (event) {

    event.target.classList.toggle('gallery__like_active');

  });

  card.querySelector('.gallery__delete').addEventListener ('click', function (event) {


    event.target.closest('.gallery__card').remove();

  });

  gallery.prepend(card);

  card.querySelector('.gallery__photo').addEventListener ('click', function () {

    popup[2].classList.add('popup_opened');
    popupSubtitle.textContent = card.querySelector('.gallery__subtitle').textContent;
    popupImage.setAttribute('src', card.querySelector('.gallery__photo').getAttribute('src'));
    popupImage.setAttribute('alt', card.querySelector('.gallery__photo').getAttribute('alt'));

  });

};

// Добавление стартовых карточек

for (i = 0; i < initialCards.length; i = i + 1) {

  let card = document.createElement('div');
  let deleteButton = document.createElement('button');
  let photo = document.createElement('img');
  let cardBottom = document.createElement('div');
  let subtitle = document.createElement('h3');
  let likeButton = document.createElement('button');

  card.classList.add('gallery__card');
  deleteButton.classList.add('gallery__delete');
  photo.classList.add('gallery__photo');
  cardBottom.classList.add('gallery__card-bottom');
  subtitle.classList.add('gallery__subtitle');
  likeButton.classList.add('gallery__like');
  photo.setAttribute('src', initialCards[i]?.link);
  photo.setAttribute('alt', initialCards[i]?.name);
  subtitle.textContent = initialCards[i]?.name;

  cardBottom.append(subtitle, likeButton);
  card.append(deleteButton, photo, cardBottom);
  gallery.append(card);

  likeButton.addEventListener ('click', function (event) {

    event.target.classList.toggle('gallery__like_active');

  });

  deleteButton.addEventListener ('click', function (event) {

    event.target.closest('.gallery__card').remove();

  });

  photo.addEventListener ('click', function () {

    popup[2].classList.add('popup_opened');
    popupSubtitle.textContent = subtitle.textContent;
    popupImage.setAttribute('src', photo.getAttribute('src'));
    popupImage.setAttribute('alt', photo.getAttribute('alt'));

  });

  closeButton[2].addEventListener ('click', function () {

    popup[2].classList.remove('popup_opened');

  });

};

// Добавить карточку

function formSubmitPlace (event) {
  event.preventDefault();

  addCard(inputPlace.value, inputUrl.value);
  popup[1].classList.remove('popup_opened');

  inputPlace.value = '';
  inputUrl.value = '';

};

formEdit[1].addEventListener('submit', formSubmitPlace);









