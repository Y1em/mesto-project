export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems(userInfo) {
    this._items.forEach((item) => this._renderer(item, userInfo));
  }
  appendItem(item) {
    this._container.append(item);
  }
  setItems(data) {
    this._items = data;
  }
  prependItem(item) {
    this._container.prepend(item);
  }
}
