import React from "react";
import {Todo} from '../types';

interface TodoItemProps extends Todo {
    style?: React.CSSProperties,
    toggleTodo: (id: Todo['id']) => void,
    removeTodo: (id: Todo['id']) => void
}

const TodoItem = ({ id, title, completed, toggleTodo, removeTodo, style = {}}: TodoItemProps) => {
    return (
        <li style={{
                color: 'black',
                backgroundColor: 'white',
                listStyleType: 'none',
                ...style}}>
            <input 
                type='checkbox'
                checked={completed}
                onChange={() => toggleTodo(id)} />
            <span>{title}</span>
            <span onClick={() => removeTodo(id)}>&times;</span>
        </li>
    );
}

export default TodoItem;