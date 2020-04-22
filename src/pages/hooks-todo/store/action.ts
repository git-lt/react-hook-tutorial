import todoStore from './store';
import {
  IAPPState,
  ActionType,
  ITodo,
  IRemoveTodo,
  IEditTodo,
  ISetEdit,
  IChangeShowType,
  IUpdateEditTodo,
  IToggleAll,
} from '../types';

const actions = {
  [ActionType.CREATE]: (state: IAPPState, data: ITodo): IAPPState => {
    const todos = state.todos.slice();
    todos.push(data);

    todoStore.list = todos;
    return { ...state, todos };
  },
  [ActionType.DELETE]: (state: IAPPState, data: IRemoveTodo): IAPPState => {
    const todos = state.todos.slice();
    const { index } = data;
    todos.splice(index, 1);

    todoStore.list = todos;
    return { ...state, todos };
  },
  [ActionType.UPDATE]: (state: IAPPState, data: IEditTodo): IAPPState => {
    const { index, title, completed } = data;
    const todos = state.todos.slice();
    const currTodo = state.todos[index];
    let isChange = false;
    if (typeof title === 'string' && title !== currTodo.title) {
      currTodo.title = title;
      isChange = true;
    }
    if (typeof completed === 'boolean') {
      currTodo.completed = completed;
      isChange = true;
    }
    if (!isChange) return state;
    todos.splice(index, 1, currTodo);
    todoStore.list = todos;

    todoStore.list = todos;
    return { ...state, todos };
  },
  [ActionType.REMOVE_COMPLETED]: (state: IAPPState): IAPPState => {
    const todos = state.todos.filter(v => !v.completed);

    todoStore.list = todos;
    return { ...state, todos };
  },
  [ActionType.EDIT_SET]: (state: IAPPState, data: ISetEdit): IAPPState => {
    const { index } = data;
    const editTodo = state.todos[index].title;
    return { ...state, editTodo };
  },
  [ActionType.CHANGE_SHOW_TYPE]: (state: IAPPState, data: IChangeShowType): IAPPState => {
    return { ...state, visibility: data.type };
  },
  [ActionType.UPDATE_EDIT_TODO]: (state: IAPPState, data: IUpdateEditTodo): IAPPState => {
    return { ...state, editTodo: data.title };
  },
  [ActionType.TOGGLE_ALL]: (state: IAPPState, data: IToggleAll): IAPPState => {
    const completed = data.completed;
    const todos = state.todos.map(v => {
      v.completed = completed;
      return v;
    });

    todoStore.list = todos;
    return { ...state, todos };
  },
};

export default actions;
