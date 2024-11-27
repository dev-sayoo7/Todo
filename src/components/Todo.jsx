import React, { useState, useEffect } from 'react'
import './todo.css'


function Todo() {


    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
  
    // Load todos from localStorage when the app starts
    useEffect(() => {
      const savedTodos = JSON.parse(localStorage.getItem('todos'));
      if (savedTodos) {
        setTodos(savedTodos);
      }
    }, []);
  
    // Save todos to localStorage whenever they change
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  
    // Add new todo
    const addTodo = () => {
      if (input.trim()) {
        const newTodo = { id: Date.now(), text: input, completed: false };
        setTodos([...todos, newTodo]);
        setInput('');
      }
    };
  
    // Toggle todo completion
    const toggleTodo = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
  
    // Delete todo
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  return (
    <> <br />
    
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="input-container">
        <input className='txtss'
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    
    
    
    
    </>
  )
}

export default Todo