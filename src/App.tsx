import React, { useState } from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';
import TodoItem from './components/Todoitem';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const addTodo = () => {
    setTodos([text, ...todos]);
    setText('')
  }

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
