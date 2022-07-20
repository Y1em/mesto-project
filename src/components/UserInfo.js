export default class UserInfo {
  constructor({name, about, avatar, id}) { // сюда передаем разметку из userInfo (index.js). И да, тут аватар и id, хотя в брифе не описано
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    this._id = id;
  }
  getUserInfo() { // тогда здесь будет просто вывод текущих значений в полях разметки
    const profileInfo = { // создаем пользователя как объект для удобства обращения
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src,
      _id: this._id
    }
    return profileInfo;
  }
  setUserInfo(data) { // перезапись полей, на входе объект
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;
    this._id = data._id;
  }
}