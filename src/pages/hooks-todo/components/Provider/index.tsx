import React, { useReducer, SFC } from 'react';
import todoStore from '../../store/store';
import { IAPPState, ShowType, ActionType, IAction, IActions } from '../../types';
import reducer from '../../store/reducer';

const initialState: IAPPState = {
  todos: todoStore.list,
  newTodo: '',
  editTodo: '',
  visibility: ShowType.ALL,
};

const Context = React.createContext({
  state: initialState,
  dispatch: (() => 0) as React.Dispatch<IAction>,
  actions: {} as IActions,
});

const Provider: SFC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 生成 Actions
  let actions: IActions = Object();
  for (let i in ActionType) {
    // @ts-ignore
    const actionName = ActionType[i];
    actions[actionName as ActionType] = (data: any) => {
      // 先执行 Actions 异步处理数据流(ajax请求等)
      // 再进行 dispatch 同步处理 state
      dispatch({ type: actionName, payload: data });
    };
  }

  // Context 挂载 state、dispatch、actions
  return <Context.Provider value={{ state, dispatch, actions }}>{children}</Context.Provider>;
};

export { Provider, Context };
