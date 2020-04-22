export const ENTER_KEY = 13;
export const STORAGE_KEY = 'todos/reactjs';
export const enum ShowType {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed',
}
export enum ActionType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  REMOVE_COMPLETED = 'removeCompleted',
  EDIT_SET = 'setEdit',
  CHANGE_SHOW_TYPE = 'changeShowType',
  UPDATE_EDIT_TODO = 'updateEditTodo',
  TOGGLE_ALL = 'toggleAll',
}

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface IAPPState {
  todos: ITodo[];
  newTodo: string;
  editTodo: string;
  visibility: ShowType;
}

export type IEditTodo = { index: number } & Pick<Partial<ITodo>, 'title' | 'completed'>;
export type IRemoveTodo = { index: number };
export type ISetEdit = { index: number };
export type IChangeShowType = { type: ShowType };
export type IUpdateEditTodo = { title: string };
export type IToggleAll = { completed: boolean };
export type IAction = { type: ActionType; payload?: any };
export type IActions = { [name in ActionType]: (data?: Record<string, any>) => void };
