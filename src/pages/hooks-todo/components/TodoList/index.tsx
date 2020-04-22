import React, { SFC, useContext, ChangeEvent, useMemo } from 'react';
import { ShowType } from '../../types';
import { Context } from '../../components/Provider';
import * as utils from '../../utils';
import TodoItem from '../TodoItem';

const TodoList: SFC<any> = () => {
  const { state, dispatch, actions } = useContext(Context);
  const { todos, visibility } = state;

  const activedNum = useMemo(() => utils.filterTodos(todos, ShowType.ACTIVE).length, [todos]);
  const todoList = useMemo(() => utils.filterTodos(todos, visibility), [todos, visibility]);

  function onToggleAll(e: ChangeEvent<HTMLInputElement>) {
    const completed = e.target.checked;
    actions.toggleAll({ completed });
    // dispatch({
    //   type: ActionType.TOGGLE_ALL,
    //   payload: { completed },
    // });
  }

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={onToggleAll}
        checked={activedNum === 0}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todoList.map((v, i) => {
          return <TodoItem key={v.id} completed={v.completed} title={v.title} index={i} />;
        })}
      </ul>
    </section>
  );
};

export default TodoList;
