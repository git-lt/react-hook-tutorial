import React from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { Provider } from './components/Provider';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

function TodoAPP() {
  return (
    <Provider>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Input />
        </header>
        <TodoList />
        <Footer />
      </section>
    </Provider>
  );
}

export default TodoAPP;
