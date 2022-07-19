class Api {
  constructor(options) {
    // тело конструктора
  }

  checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getCards() {
    return fetch(`${config.baseUrl}/cards`, {
      method: "GET",
      headers: config.headers,
    }).then(checkResponse);
  }

  addCardServ(data) {
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(checkResponse);
  }

  deleteCardServ(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then(checkResponse);
  }

  getProfileInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "GET",
      headers: config.headers,
    }).then(checkResponse);
  }

  editProfile(data) {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(checkResponse);
  }

  addLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: config.headers,
    }).then(checkResponse);
  }

  removeLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then(checkResponse);
  }

  changeLikeStatus(cardId, isLike) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: isLike ? "DELETE" : "PUT",
      headers: config.headers,
    }).then(checkResponse);
  }

  editAvatar(data) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(checkResponse);
  }
}

export const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-13',
  headers: {
    authorization: 'dc40e991-7393-4c7a-83ae-1391b0c1505f',
    'Content-Type': 'application/json'
  }
});