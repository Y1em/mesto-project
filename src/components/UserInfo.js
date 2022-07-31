export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector, id }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
    this._id = id;
  }
  getUserInfo() {
    const profileInfo = {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src,
      _id: this._id,
    };
    return profileInfo;
  }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.src = data.avatar;
    this._id = data._id;
  }
}
