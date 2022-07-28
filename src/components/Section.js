export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = data; // items — массив данных от Api
    this._renderer = renderer; // renderer — это функция, которая отвечает за создание и отрисовку данных на странице
    this._container = document.querySelector(containerSelector); // селектор контейнера, в который нужно добавлять созданные элементы.
  }
  addItem(userInfo) {
    this._items.forEach(item => this._renderer(item, userInfo));
  }
  appendItem(item) {
    this._container.append(item);
  }
}