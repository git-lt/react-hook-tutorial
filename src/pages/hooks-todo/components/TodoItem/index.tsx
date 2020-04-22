import classNames from 'classnames';
import React, {
  SFC,
  useContext,
  ChangeEvent,
  useState,
  KeyboardEvent,
  useRef,
  useEffect,
} from 'react';
import { ENTER_KEY } from '../../types';
import { Context } from '../../components/Provider';

type ITodoItemProps = { completed: boolean; title: string; index: number };

const TodoItem: SFC<ITodoItemProps> = ({ completed, title, index }) => {
  const [editing, changeEditing] = useState<boolean>(false);
  const iptRef = useRef(null);

  const { state, dispatch, actions } = useContext(Context);
  const { editTodo } = state;

  // DOM更新，获取焦点
  useEffect(() => {
    editing && iptRef.current.focus();
  }, [editing]);
  // 双击编辑
  function onDoubleClick() {
    if (editing) return;
    changeEditing(true);
    actions.setEdit({ index });
    // dispatch({
    //   type: ActionType.EDIT_SET,
    //   payload: { index },
    // });
  }
  // 失焦，更新Todo
  function onEditBlur() {
    if (editTodo) {
      actions.update({ title: editTodo, index });
      // dispatch({
      //   type: ActionType.UPDATE,
      //   payload: { title: editTodo, index },
      // });
    }
    changeEditing(false);
  }
  // 回车，更新Todo
  function onEditEnter(e: KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode !== ENTER_KEY) return;
    e.preventDefault();

    if (editTodo) {
      actions.update({ title: editTodo, index });
      // dispatch({
      //   type: ActionType.UPDATE,
      //   payload: { title: editTodo, index },
      // });
    }
  }
  // 更新当前编辑的Todo
  function onEditChange(e: ChangeEvent<HTMLInputElement>) {
    const title = e.target.value.trim();
    actions.updateEditTodo({ title });
    // dispatch({
    //   type: ActionType.UPDATE_EDIT_TODO,
    //   payload: { title },
    // });
  }
  // 切换完成状态
  function onToggleComplete(e: ChangeEvent<HTMLInputElement>) {
    const isCompleted = e.target.checked;
    actions.update({ completed: isCompleted, index });
    // dispatch({
    //   type: ActionType.UPDATE,
    //   payload: {
    //     completed: isCompleted,
    //     index,
    //   },
    // });
  }
  // 删除
  function onDestroy() {
    actions.delete({ index });
    // dispatch({
    //   type: ActionType.DELETE,
    //   payload: { index },
    // });
  }

  return (
    <li
      className={classNames({
        completed: completed,
        editing: editing,
      })}
    >
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={onToggleComplete} />
        <label onDoubleClick={onDoubleClick}>{title}</label>
        <button className="destroy" onClick={onDestroy} />
      </div>
      <input
        ref={iptRef}
        className="edit"
        value={editTodo}
        onBlur={onEditBlur}
        onChange={onEditChange}
        onKeyDown={onEditEnter}
      />
    </li>
  );
};

export default TodoItem;
