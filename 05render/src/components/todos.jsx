
import React , { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to gym",
      description: "Go to gym today"
    },
    {
      id: 2,
      title: "Good diet",
      description: "Take good diet"
    },
    {
      id: 3,
      title: "Evening walk",
      description: "Evening walk after good diet"
    }
  ]);

  function addToDo() {
    const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
    setTodos([
      ...todos,
      {
        id: newId,
        title: `Random Title ${Math.random()}`,
        description: `Random Description ${Math.random()}`
      }
    ]);
  }

  return (
    <>
      <button className='bg-green-400 rounded-lg'
      onClick={addToDo}>Add ToDo</button>
      {todos.map((todo) => (
        <Todo 
          key={todo.id} 
          title={todo.title} 
          description={todo.description} 
        />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
