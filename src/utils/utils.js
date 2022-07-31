import { inputName, inputAbout, gallerySelector } from "./constants.js";
import { renderCard } from "../pages/index.js";
import { api } from "../pages/index.js";
import Section from "../components/Section.js";

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

export function handlePlaceSubmit(data) {
  api.getProfileInfo()
    .then((user) => {
      renderedList.addItem(user);
    })

  const renderedList = new Section({
    items: [data],
    renderer: (item, user) => {
      const card = renderCard(item, user, ".gallery__template");
      const element = card.generateCard();
      renderedList.prependItem(element);
    }
  }, gallerySelector);
}
