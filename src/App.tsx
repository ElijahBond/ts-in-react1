import React, { useEffect, useState } from 'react';
import { Todo } from './types';

import './App.css';

import NewTodoForm from './components/NewTodoForm';
import TodoItem from './components/Todoitem';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const addTodo = () => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false
    }
    setTodos([newTodo, ...todos]);
    setText('')
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data: Todo[]) => {
        setTodos(data);
      })
  }, [])

  return (
    <div className="App">
      <NewTodoForm
        value={text}
        onChange={handleInput}
        handleClick={addTodo}
      />
      <TodoItem 
        id='111' 
        completed={false} 
        title='first todo' 
        style={{border: '1px solid yellow'}} />
    </div>
  );
}

export default App;
