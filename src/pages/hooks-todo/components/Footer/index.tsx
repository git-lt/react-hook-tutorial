import React, { SFC, MouseEvent, useContext, useMemo } from 'react';
import { ShowType } from '../../types';
import { Context } from '../../components/Provider';
import * as utils from '../../utils';
import classNames from 'classnames';

const Footer: SFC<any> = () => {
  const { state, dispatch, actions } = useContext(Context);
  const { todos, visibility } = state;

  // 计算属性：正在进行中的数量、已完成的数量、提示文字
  const { activedNum, completedNum, activeTodoWord } = useMemo(() => {
    const activedNum = utils.filterTodos(todos, ShowType.ACTIVE).length;
    const completedNum = todos.length - activedNum;
    const activeTodoWord = utils.pluralize(activedNum, 'item');
    return {
      activedNum,
      completedNum,
      activeTodoWord,
    };
  }, [todos]);

  // 改变显示类型
  function onChangeShowType(type: ShowType) {
    return function(e: MouseEvent<HTMLAnchorElement>) {
      e.preventDefault();
      actions.changeShowType({ type });
      // dispatch({
      //   type: ActionType.CHANGE_SHOW_TYPE,
      //   payload: { type },
      // });
    };
  }

  // 清空已完成的Todo
  function onClearCompleted() {
    actions.removeCompleted();
    // dispatch({ type: ActionType.REMOVE_COMPLETED });
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activedNum}</strong> {activeTodoWord} left
      </span>
      <ul className="filters">
        <li>
          <a
            onClick={onChangeShowType(ShowType.ALL)}
            className={classNames({ selected: visibility === ShowType.ALL })}
          >
            All
          </a>
        </li>{' '}
        <li>
          <a
            onClick={onChangeShowType(ShowType.ACTIVE)}
            className={classNames({ selected: visibility === ShowType.ACTIVE })}
          >
            Active
          </a>
        </li>{' '}
        <li>
          <a
            onClick={onChangeShowType(ShowType.COMPLETED)}
            className={classNames({ selected: visibility === ShowType.COMPLETED })}
          >
            Completed
          </a>
        </li>
      </ul>
      {completedNum > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
