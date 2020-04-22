interface Todo {
  title: string;
  desc: string;
  completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo = {
  title: 'organize desk',
  desc: 'clear clutter',
};

// updateTodo(todo, { title: 'organize desk1'})
// updateTodo(todo, { desc: 'clear clutter1'})

const todo1: Readonly<Todo> = {
  title: 'Delete inactive users',
  desc: 'clear clutter',
  completed: false,
};

// Error: Cannot assign to 'title' because it is a read-only property.
// todo1.title = 'todo something';

interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
  home: { title: 'home' },
  contact: { title: 'contact' },
  about: { title: 'about' },
};

type TodoPreview = Pick<Todo, 'title'>;

const todo2: TodoPreview = {
  title: 'Clean room',
};

export type Lit = string | number | boolean | undefined | null | void | {};
export const tuple = <T extends Lit[]>(...args: T) => args;

const animals = tuple('cat', 'dog', 'rabbit', 'snake');
type Animal = (typeof animals)[number];

type Ani = 'cat' | 'dog' | 'rabbit' | 'snake';
const a: Animal = 'dog';
const b: Ani = 'rabbit';
