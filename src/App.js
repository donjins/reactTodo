import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [value, setToDo] = useState('');

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕</h2>
      </div>

      {/* Input Section */}
      <div className="input">
        <input
          value={value}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            if(value){
              setToDos([...toDos, { id: Date.now(), text: value, status: false }]);
              setToDo(''); // Clear input field
            }else{
              alert('enter any task');
            }
           
            
          }}
          className="fas fa-plus"
        ></i>
      </div>

      {/* ToDo Items */}
      <div className="todos">
        {toDos.map((item) => (
          <div className="todo" key={item.id}>
            <div className="left">
              <input
                type="checkbox"
                checked={item.status}
                onChange={() => {
                  setToDos(
                    toDos.map((todo) =>
                      todo.id === item.id ? { ...todo, status: !todo.status } : todo
                    )
                  );
                }}
              />
              <p style={{ textDecoration: item.status ? 'line-through' : 'none' }}>
                {item.text}
              </p>
            </div>
            <div className="right">
              <i
                className="fas fa-times"
                onClick={() => setToDos(toDos.filter((todo) => todo.id !== item.id))}
              ></i>
            </div>
          </div>
        ))}
      </div>

      {/* Completed Tasks Display */}
      <div className="completed">
        {toDos
          .filter((item) => item.status)
          .map((item) => (
            <h3 key={item.id}>{item.text}</h3>
          ))}
      </div>
    </div>
  );
}

export default App;

