import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({todos}) => {
  return(
    <section>
      <h3>TodoList</h3>
      <ul>
        {todos.map((todo) => <TodoListItem todo={todo}/>)}
      </ul>
    </section>
  );
};

export default TodoList;
