class Api {
  constructor(options) {
    this._config = {
      url: 'https://mesto.nomoreparties.co/v1/plus-cohort-13',
      headers: {
        authorization: 'eeb10f4c-568d-4124-bc82-28113d2b839d',
        'Content-Type': 'application/json',
      },
    };
  }
  
  checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getCards() {
    return fetch(`${this._config.baseUrl}/cards`, {
      method: "GET",
      headers: this._config.headers,
    }).then(checkResponse);
  }

  addCardServ(data) {
    return fetch(`${this._config.baseUrl}/cards`, {
      method: "POST",
      headers: this._config.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(checkResponse);
  }

  deleteCardServ(cardId) {
    return fetch(`${this._config.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._config.headers,
    }).then(checkResponse);
  }

  getProfileInfo() {
    return fetch(`${this._config.baseUrl}/users/me`, {
      method: "GET",
      headers: this._config.headers,
    }).then(checkResponse);
  }

  editProfile(data) {
    return fetch(`${this._config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._config.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(checkResponse);
  }

  addLike(cardId) {
    return fetch(`${this._config.baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._config.headers,
    }).then(checkResponse);
  }

  removeLike(cardId) {
    return fetch(`${this._config.baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._config.headers,
    }).then(checkResponse);
  }

  changeLikeStatus(cardId, isLike) {
    return fetch(`${this._config.baseUrl}/cards/likes/${cardId}`, {
      method: isLike ? "DELETE" : "PUT",
      headers: this._config.headers,
    }).then(checkResponse);
  }

  editAvatar(data) {
    return fetch(`${this._config.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._config.headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(checkResponse);
  }
}

export const api = new Api();