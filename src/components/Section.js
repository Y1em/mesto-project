export default class Section {
/*
Содержит публичный метод, который отвечает за отрисовку всех элементов. Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.
Содержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.
У класса Section нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер.
*/
  constructor({items, renderer}, containerSelector) {
    this._items = items; // items — массив данных от Api
    this._renderer = renderer; // renderer — это функция, которая отвечает за создание и отрисовку данных на странице
    this._container = document.querySelector(containerSelector); // селектор контейнера, в который нужно добавлять созданные элементы.
  }
  addItem(userInfo) {
    this._items.forEach(item => this._renderer(item, userInfo));
  }
  appendItem(item) {
    this._container.append(item);
  }
  renderItems(data) {
    this._items = data;
  }
}