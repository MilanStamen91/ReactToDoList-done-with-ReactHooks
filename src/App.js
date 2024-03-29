import React, {useState} from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo}) {
  return <div 
  style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} 
  className="todo">
  { todo.text }
  <div>
    <button onClick={() => completeTodo(index)}>Complete</button>
    <button onClick={() => removeTodo(index)}>x</button>
  </div>
  </div>;
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      className="input" 
      value={value}
      placeholder="Add Todo.."
      onChange={e => setValue(e.target.value)}
      />
      <button className="button" onChange={e => setValue(e.target.value)}>Add Task</button>
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
    text: 'Learn about React',
    isCompleted: false
    },
    {
    text: 'Meet friends for lunch',
    isCompleted: false
    },
    {
    text: 'Build cool todo app',
    isCompleted: false
    }
  ]);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const addTodo = text => {
    const NewTodos = [...todos, {text}];
    setTodos(NewTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return(
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo 
          key={index} 
          index={index} 
          todo={todo} 
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App;
