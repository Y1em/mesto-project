export function getCards() {
  return fetch("https://nomoreparties.co/v1/plus-cohort-13/cards", {
    method: "GET",
    headers: {
      authorization: "dc40e991-7393-4c7a-83ae-1391b0c1505f",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Ошибка: ${res.status}`);
    }
  });
}

export function addCardServ(data) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-13/cards", {
    method: "POST",
    headers: {
      authorization: "dc40e991-7393-4c7a-83ae-1391b0c1505f",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      link: data.link,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Ошибка: ${res.status}`);
    }
  });
}

export function deleteCardServ(cardId) {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-13/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: "dc40e991-7393-4c7a-83ae-1391b0c1505f",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Ошибка: ${res.status}`);
    }
  });
}

export function getProfileInfo() {
  return fetch("https://nomoreparties.co/v1/plus-cohort-13/users/me", {
    method: "GET",
    headers: {
      authorization: "dc40e991-7393-4c7a-83ae-1391b0c1505f",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Ошибка: ${res.status}`);
    }
  });
}

export function editProfile(data) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-13/users/me", {
    method: "PATCH",
    headers: {
      authorization: "dc40e991-7393-4c7a-83ae-1391b0c1505f",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      about: data.about,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Ошибка: ${res.status}`);
    }
  });
}

export function addLike(cardId) {
  return fetch(
    `https://nomoreparties.co/v1/plus-cohort-13/cards/likes/${cardId}`,
    {
      method: "PUT",
      headers: {
        authorization: "dc40e991-7393-4c7a-83ae-1391b0c1505f",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Ошибка: ${res.status}`);
    }
  });
}

export function removeLike(cardId) {
  return fetch(
    `https://nomoreparties.co/v1/plus-cohort-13/cards/likes/${cardId}`,
    {
      method: "DELETE",
      headers: {
        authorization: "dc40e991-7393-4c7a-83ae-1391b0c1505f",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Ошибка: ${res.status}`);
    }
  });
}

export function editAvatar(data) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-13/users/me/avatar", {
    method: "PATCH",
    headers: {
      authorization: "dc40e991-7393-4c7a-83ae-1391b0c1505f",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      avatar: data.avatar,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Ошибка: ${res.status}`);
    }
  });
}
