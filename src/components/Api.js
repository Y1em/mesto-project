export default class Api {
  constructor() {
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
    return fetch(`${this._config.url}/cards`, {
      method: "GET",
      headers: this._config.headers,
    }).then(this.checkResponse);
  }

  addCardServ = (data) => {
    return fetch(`${this._config.url}/cards`, {
      method: "POST",
      headers: this._config.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this.checkResponse);
  }

  deleteCardServ = (cardId) => {
    return fetch(`${this._config.url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._config.headers,
    }).then(this.checkResponse);
  }

  getProfileInfo() {
    return fetch(`${this._config.url}/users/me`, {
      method: "GET",
      headers: this._config.headers,
    }).then(this.checkResponse);
  }

  editProfile = (data) => {
    return fetch(`${this._config.url}/users/me`, {
      method: "PATCH",
      headers: this._config.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this.checkResponse);
  }

  addLike = (cardId) => {
    return fetch(`${this._config.url}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._config.headers,
    }).then(this.checkResponse);
  }

  removeLike = (cardId) => {
    return fetch(`${this._config.url}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._config.headers,
    }).then(this.checkResponse);
  }

  changeLikeStatus = (cardId, isLike) => {
    return fetch(`${this._config.url}/cards/likes/${cardId}`, {
      method: isLike ? "DELETE" : "PUT",
      headers: this._config.headers,
    }).then(this.checkResponse);
  }

  editAvatar = (data) => {
    return fetch(`${this._config.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._config.headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this.checkResponse);
  }
}
