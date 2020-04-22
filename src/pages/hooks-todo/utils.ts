import { ITodo, ShowType } from './types';

function uuid(): string {
  let i, random;
  let uuid = '';

  for (i = 0; i < 32; i++) {
    random = (Math.random() * 16) | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
  }

  return uuid;
}

function pluralize(count: number, word: string) {
  return count === 1 ? word : word + 's';
}

function filterTodos(todos: ITodo[], type: ShowType): ITodo[] {
  if (type === ShowType.ALL) return todos;
  if (type === ShowType.ACTIVE) return todos.filter(v => !v.completed);
  if (type === ShowType.COMPLETED) return todos.filter(v => v.completed);
}

export { uuid, pluralize, filterTodos };
