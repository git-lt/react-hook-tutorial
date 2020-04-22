import React, { SFC, useState, useContext, ChangeEvent, KeyboardEvent } from 'react';
import { ENTER_KEY } from '../../types';
import { Context } from '../../components/Provider';
import * as utils from '../../utils';

const Input: SFC<any> = () => {
  const { state, dispatch, actions } = useContext(Context);
  const [title, changeTitle] = useState<string>('');

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();
    changeTitle(value);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    // e.preventDefault();
    if (e.keyCode !== ENTER_KEY || !title) return;

    actions.create({ id: utils.uuid(), title, completed: false });
    // 新增
    // dispatch({
    //   type: ActionType.CREATE,
    //   payload: {
    //     id: utils.uuid(),
    //     title,
    //     completed: false,
    //   },
    // });
    // 清空
    changeTitle('');
  }

  return (
    <input
      className="new-todo"
      autoFocus
      autoComplete="off"
      placeholder="What needs to be done?"
      value={title}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
