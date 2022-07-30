import { inputName, inputAbout, gallery } from "./constants.js";
import { userInfo, renderCard } from "../pages/index.js";

export function renderLoading(event, isLoading) {
  const buttonsList = document.querySelectorAll(".popup__button-confirm");
  if (isLoading) {
    event.target.closest(".popup").classList.add("popup_opened");
    buttonsList.forEach((button) => {
      button.textContent = "Сохранение...";
    });
  } else {
    event.target.closest(".popup").classList.remove("popup_opened");
    buttonsList.forEach((button) => {
      button.textContent = "Сохранить";
    });
  }
}

export function fillProfileInputs(dataUser) {
  inputName.value = dataUser.name;
  inputAbout.value = dataUser.about;
}

function addDomCard(container, card) {
  container.prepend(card);
}

export function handlePlaceSubmit(data) {
  const card = renderCard(data, userInfo.getUserInfo, ".gallery__template");
  addDomCard(gallery, card.generateCard());
}
