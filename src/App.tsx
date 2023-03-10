import React, { useEffect, useState } from 'react';

import './App.css';

import NewTodoForm from './components/NewTodoForm';
import { Todo } from './types';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false
    }
    setTodos([newTodo, ...todos]);
  }

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(res => res.json())
  //     .then((data: Todo[]) => {
  //       setTodos(data);
  //     })
  // }, [])

  const toggleTodo = (id: Todo['id']) => {
    setTodos(todos.map((todo) => {
      if(todo.id !== id) return todo;

      return {
        ...todo,
        completed: !todo.completed
      }
    }))
  }

  const removeTodo = (id: Todo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <NewTodoForm
        handleClick={addTodo}
      />
      <TodoList list={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
