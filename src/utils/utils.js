/* function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function closeByOverlay(evt) {
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__container")
  ) {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
  document.addEventListener("mousedown", closeByOverlay);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
  document.removeEventListener("mousedown", closeByOverlay);
}

export function closePopupByDevice() {
  popupList.forEach(closePopup);
} */

export const handleDeleteCard = (event) => {
  deleteCardServ(obj._id)
    .then(() => {
      event.target.closest(".gallery__card").remove();
    })
    .catch(err => console.log(err));
}

export const handleChangeLikeStatus = (event) => {
  if (event.target.classList.contains("gallery__like_active")) {
    changeLikeStatus(cardId)
      .then((cardId) => {
        event.target.classList.remove("gallery__like_active");
        likeCounter.textContent = obj.likes.length;
      })
      .catch(err => console.log(err));
  } else {
    addLike(cardId)
      .then((cardId) => {
        event.target.classList.add("gallery__like_active");
        likeCounter.textContent = obj.likes.length;
      })
      .catch(err => console.log(err));
  }
}

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
