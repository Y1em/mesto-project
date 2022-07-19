export default class UserInfo { // вытаскиваем пользователя как отдельный класс для взаимодействия
  constructor({name, job, avatar, id}) {
    this.name = name;
    this.job = job;
    this.avatar = avatar;
    this.id = id;
  }
}