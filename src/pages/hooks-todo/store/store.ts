import { STORAGE_KEY } from '../types';

// DB操作
class Store {
  get list() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  }
  set list(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
}

export default new Store();
